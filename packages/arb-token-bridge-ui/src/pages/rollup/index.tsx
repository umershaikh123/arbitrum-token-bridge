import { AssetTable } from '../../components/common/Assets'
import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'
import { BigNumber, ethers  } from 'ethers'
import { GetContractTypeFromFactory } from '@arbitrum/sdk/dist/lib/abi/common'
import { useState , useEffect} from 'react'
import   NexusAbiJson  from '../../NexusLibrary.json'
 import { getNexusReward  } from '../../util/Contract'
import { getClient } from '../../util/client'
import { gql } from '@apollo/client'
import { ValidatorData } from '../../types'
import { Console } from 'console'
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

export default function Index() {
  const [rewardEth, setRewardEth] = useState<string>("");
 
  const [transactionCount, setTransactionCount] = useState<number>(0)
  const [stakedAmount, setStakedAmount] = useState<number>(0)
  
  useEffect(() => {
    async function fetchReward() {
      const reward:string | undefined = await getNexusReward();
      console.log("reward" , reward);
      
      if (typeof reward === 'string') {
        const trimmedReward = parseFloat(reward).toFixed(5);
        setRewardEth(trimmedReward);
      }
    }
    async function fetchData() {
      try {
        const { data } = await getClient.query({ query: validatorQuery })
         const stakedAmount = data.validators.length * 32
         setStakedAmount(stakedAmount)

      } catch (error) {
        console.error('Error fetching data:', error)
      
      }
    }

    async function fetchTransactionData() {
      try {
        const response = await fetch('https://testnet.explorer.nexusnetwork.live/api/v2/stats/charts/transactions');
        if (response.ok) {
          const data = await response.json();
          // Sum up the tx_count values from each object in the chart_data array
          const totalCount = data.chart_data.reduce((acc:any, curr:any) => acc + curr.tx_count, 0);
       
          setTransactionCount(totalCount);
        } else {
          console.error('Failed to fetch transaction data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    }
    fetchTransactionData()
    fetchData()
    fetchReward();
  }, []);

  return (
    <div id="backgroundImage" className="">
      <ResponsiveAppBar wallet={false} marginBelow={'mb-12'} />
      <div className="    flex    h-full w-full  flex-col     py-2 backdrop-blur-2xl  sm:px-16">
        <>
          <div className="mb-4 mt-4 flex w-full items-center justify-center space-x-8 text-[#CDEBFF]">
            <div className=" flex h-full  w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">ETH bridged</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl"> {stakedAmount !== null ? `${stakedAmount} ETH` : 'Loading amount...'}</h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className="lg:text-xl xl:text-2xl ">Rewards earned</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl">  {rewardEth !== null ? `${rewardEth} ETH` : 'Loading rewards...'}</h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center  justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">
                Total transactions  
              </h1>
              <h1 className="font-light lg:text-lg xl:text-xl"> {transactionCount !== null ? (
        <p>{transactionCount}</p>
      ) : (
        <p>Loading...</p>
      )}</h1>
            </div>
          </div>

          <div className="  flex  flex-row items-center justify-around ">
            <CenteredTabs />
          </div>
        </>
      </div>
    </div>
  )
}
