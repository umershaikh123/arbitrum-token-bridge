import React from 'react'
import { useState, useEffect } from 'react'
import { getClient } from '../../util/client'
import { gql } from '@apollo/client'
import Link from 'next/link'
import { ValidatorData, NodeOperator, NodeData, Cluster } from '../../types'
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Pagination
} from '@mui/material'

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
`

export function ValidatorsData() {
  const [data, setData] = useState<ValidatorData | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const rowsPerPage = 5
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
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage)
  }

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  if (!data || !data.validators) {
    return <div className="text-white">No data available</div>
  }

  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const paginatedValidators = data.validators.slice(startIndex, endIndex)

  return (
    <div className="overflow-x-auto text-gray-200">
      <table className="mt-4 w-full min-w-full table-fixed border-collapse text-left text-gray-200">
        <thead>
          <tr className="bg-[#00233C]">
            <td className="w-16 p-2 text-center">S.No</td>
            <td className="w-[40%]  text-center lg:w-[60%] xl:w-[80%]">
              Validator Public Key
            </td>
            <td className="w-[30%] text-center">Status</td>
          </tr>
        </thead>
        <tbody>
          {paginatedValidators.map((validator, index) => (
            <tr
              key={startIndex + index}
              className="border-2 border-[#003F69] py-4"
            >
              <td className="text-center">{startIndex + index + 1}</td>
              <td className="overflow-hidden text-ellipsis whitespace-nowrap p-3 text-center">
                <Link
                  href={`https://holesky.beaconcha.in/validator/${validator.id}`}
                  target="_blank"
                  className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all"
                >
                  {validator.id}
                </Link>
              </td>
              <td className="text-center  ">{validator.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className=" flex   w-full items-center justify-center">
        <Pagination
          className="mt-4 "
          count={Math.ceil(data.validators.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white'
            },
            '& .Mui-selected': {
              color: 'white',
              background: '#003F69'
            }
          }}
        />
      </div>
    </div>
  )
}

export function NodeOperatorData() {
  const [data, setData] = useState<NodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  if (data) {
    console.log('data', data.nodeOperators)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: nodeData }, { data: clusterData }] = await Promise.all([
          getClient.query({ query: nodeQuery }),
          getClient.query({ query: clusterQuery })
        ])

        const { nodeOperators } = nodeData
        const { clusters } = clusterData

        const operatorWithClusterId = nodeOperators.map(
          (operator: NodeOperator) => {
            const cluster = clusters.find((cluster: Cluster) =>
              cluster.operatorIds.includes(operator.id)
            )
            return { ...operator, clusterId: cluster ? cluster.id : 'N/A' }
          }
        )

        setData({ nodeOperators: operatorWithClusterId })
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="text-white">Loading...</div>
  }

  if (!data) {
    return <div className="text-white">No data available</div>
  }

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedOperators = data.nodeOperators.slice(startIndex, endIndex);
  return (
    <div className="overflow-x-auto">
      <table className="mt-4 w-full table-fixed text-left text-white">
        <thead>
          <tr className="bg-[#00233C]">
            <th className="p-2 text-center">SSV operator ID</th>
            <th className="text-center">SSV operator name</th>
            <th className="text-center">SSV cluster ID</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOperators.length > 0 ? (
            paginatedOperators.map((operator, index) => (
              <tr key={startIndex + index} className="border-2 border-[#003F69] py-4">
                <td className="p-3 text-center">
                  <Link
                    href={`https://holesky.explorer.ssv.network/operators/${operator.id}`}
                    target="_blank"
                    className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all"
                  >
                    {operator.id}
                  </Link>
                </td>
                <td className="text-center">{operator.name}</td>
                <td className="text-center">{operator.clusterId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center">
                No operators found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex w-full items-center justify-center">
        <Pagination
          className="mt-4"
          count={Math.ceil(data.nodeOperators.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              color: 'white',
              background: '#003F69',
            },
          }}
        />
      </div>
    </div>
  );
}