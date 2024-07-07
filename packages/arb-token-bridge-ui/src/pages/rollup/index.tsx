import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'
import { useState, useEffect } from 'react'
import Fade from '@mui/material/Fade'
import useSWR from 'swr'
import { TabsProps } from '../../types'
import { Loader } from '../../components/common/atoms/Loader'
import StatCard from '../../components/common/StatCard'

type FetcherArgs = [string, RequestInit?] // Two arguments: url (string) and optional init object

const fetcher = (...args: FetcherArgs) => {
  const [url, init = {}] = args // Destructure based on tuple type
  return fetch(url, init).then(res => res.json())
}

export default function RollupDashboard() {
  const { data: validatorData, error: validatorError } = useSWR(
    '/api/dashboard/validator-data',
    fetcher
  )
  const { data: nodeData, error: nodeError } = useSWR(
    '/api/dashboard/node-data',
    fetcher
  )
  const { data: clusterData, error: clusterError } = useSWR(
    '/api/dashboard/cluster-data',
    fetcher
  )
  const { data: nexusParams, error: nexusError } = useSWR(
    '/api/dashboard/nexus-params',
    fetcher
  )

  const [windowHeight, setWindowHeight] = useState<number>(700)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight)
    handleResize()
    setWindowHeight(window.innerHeight)

    setFadeIn(true)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // loading state
  if (!validatorData || !nodeData || !clusterData || !nexusParams)
    return (
      <>
        <div className="h-12 w-full lg:h-16" />
        <div className="fixed inset-0 m-auto h-[44px] w-[44px]">
          <Loader size="large" color="white" />
        </div>
      </>
    )

  // Error State
  if (validatorError || nexusError || nodeError || clusterError)
    return <div>Failed to load</div>

  const stakedAmount = (validatorData?.validators?.length * 32 || 0).toString()
  const ethBridged = parseFloat(nexusParams?.balanceEth || '0').toFixed(3)
  const rewardsEarned = parseFloat(nexusParams?.rewardEth || '0').toFixed(3)

  const tabData: TabsProps = {
    validatorData,
    nodeData,
    clusterData
  }

  return (
    <Fade in={fadeIn} timeout={1000}>
      <div id="backgroundImage" className="">
        <ResponsiveAppBar wallet={false} marginBelow={'mb-12'} />
        <div
          className=" flex  w-full flex-col  py-2   backdrop-blur-2xl   sm:px-16"
          style={{ height: windowHeight > 900 ? windowHeight : '100%' }}
        >
          <>
            <div className="mb-4 mt-4 flex w-full items-center justify-center space-x-8 text-[#CDEBFF]">
              <StatCard title="ETH Bridged" value={ethBridged} />
              <StatCard title="ETH Staked" value={stakedAmount} />
              <StatCard title="Rewards Earned" value={rewardsEarned} />
            </div>
            <div className="  flex    items-center justify-center ">
              <CenteredTabs data={tabData} />
            </div>
          </>
        </div>
      </div>
    </Fade>
  )
}
