import React from 'react'
import { useState, useEffect } from 'react'
import { getClient } from '../../util/client'
import { gql } from '@apollo/client'
import Link from 'next/link'
 

const validatorQuery = gql`
  query Now {
    validators {
      clusterId
      id
      rollup
      status
    }
  }
`

const nodeQuery = gql`
  query Now2 {
    nodeOperators {
      id
      ip
      name
      pubkey
    }
  }
`

const clusterQuery = gql`
  query MyQuery {
    clusters {
      id
      operatorIds
    }
  }
`;

interface NodeOperator {
  id: string
  ip: string
  name: string
  pubkey: string
  clusterId?: string;
}
interface Cluster {
  id: string;
  operatorIds: string[];
}
interface Validator {
  clusterId: string
  id: string
  rollup: string
  status: string
}

interface ClusterData {
  clusters: Cluster[];
}
interface NodeData {
  nodeOperators: NodeOperator[]
}

interface ValidatorData {
  validators: Validator[]
}

export function ValidatorsData() {
  const [data, setData] = useState<ValidatorData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getClient.query({ query: validatorQuery })
        setData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className='text-white'>Loading...</div>
  }

  if (!data) {
    return <div className='text-white'>No data available</div>
  }
  if (data) {
    console.log('data', data.validators.length)
  }
  return (
    <div className="    ">
       {data.validators.length ? (
    <table className=" mt-4  w-full  text-left  text-white table-fixed">
      <tbody className="w-full">
        <tr className=''>
    <th className="w-[20%] px-2">Public Key</th>
        <th className="w-[5%]  py-2 px-4">clusterId</th>
    <th className="w-[20%] px-4">rollup</th>
    <th className="w-[10%]">status</th>
        </tr>

       
        
            {data.validators.map((validator, index) => (
      <tr key={index} className="  border-t-2  border-[#005792] py-4">
      <td className="w-1/4 p-3 max-w-[5rem] overflow-hidden  text-ellipsis whitespace-nowrap" title={validator.id}>{validator.id}</td>
      <td className="w-1/4 text-center"  >{validator.clusterId}</td>
      <td className="w-1/4 px-4 max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap">{validator.rollup}</td>
      <td className="w-1/4">{validator.status}</td>
              </tr>
            ))}
         
       
      </tbody>
    </table>
 ) 
: (
  <>
  <h1 className='text-white'>No Validator Data found</h1>
  </>
     )}
  </div>
  )
}

export function NodeOperatorData() {
  const [data, setData] = useState<NodeData | null>(null)
  const [loading, setLoading] = useState(true)

  if (data) {
    console.log('data', data.nodeOperators)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: nodeData }, { data: clusterData }] = await Promise.all([
          getClient.query({ query: nodeQuery }),
          getClient.query({ query: clusterQuery }),
        ]);

        const { nodeOperators } = nodeData;
        const { clusters } = clusterData;

        const operatorWithClusterId = nodeOperators.map((operator: NodeOperator) => {
          const cluster = clusters.find((cluster: Cluster) =>
            cluster.operatorIds.includes(operator.id)
          );
          return { ...operator, clusterId: cluster ? cluster.id : 'N/A' };
        });

        setData({ nodeOperators: operatorWithClusterId });
         setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className='text-white'>Loading...</div>
  }

  if (!data) {
    return <div className='text-white'>No data available</div> }

  return (
    <div className="  ">
      <table className=" mt-4  w-full  text-left   text-white table-fixed">
        <tbody className="w-full">
          <tr className=''>
          <th className="w-[5%] p-2 px-4">Id</th>
      <th className="w-[40%]">Public Key</th>
      <th className="w-[20%] px-4">Ip</th>
      <th className="w-[7%]">Name</th>
      <th className="w-[10%] px-4 ">Cluster Id</th>
          </tr>

          {data && (
            <>
              {data.nodeOperators.map((operator, index) => (
        <tr key={index} className="  border-t-2 border-[#005792] py-4">
        <td className="w-1/4 p-3 ">
          <Link href={`https://holesky.explorer.ssv.network/operators/${operator.id}`} target='_blank' className='hover:border-b-2 border-b-2 hover:border-black  border-transparent duration-300 hover:transition-all  hover:font-medium  ease-in-out'>
          
          {operator.id}
          </Link>
          </td>
        <td className="  max-w-[15rem] overflow-hidden  text-ellipsis whitespace-nowrap"  title={operator.pubkey}>{operator.pubkey}</td>
        <td className="  px-4">{operator.ip}</td>
        <td className=" ">{operator.name}</td>
        <td className=" text-center ">{operator.clusterId}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
  
    </div>
  )
}
