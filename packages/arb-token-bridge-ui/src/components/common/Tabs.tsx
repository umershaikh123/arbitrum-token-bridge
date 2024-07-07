import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { ValidatorsData, NodeOperatorData } from './DashboardData'
import { useState, useEffect } from 'react'
import {
  NodeData,
  NodeOperator,
  Cluster,
  TabPanelProps,
  CenteredTabsProps
} from '../../types'
import { Loader } from './atoms/Loader'

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, width: '100%' }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

const CenteredTabs: React.FC<CenteredTabsProps> = ({ data }) => {
  const [value, setValue] = React.useState(0)
  const [heightVariable, setHeight] = useState(700)
  const [isLoading, setIsLoading] = useState(true)
  const [nodeClusterData, setNodeData] = useState<NodeData | null>(null)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const { validatorData, nodeData, clusterData } = data

  async function fetchData() {
    try {
      if (nodeData && clusterData) {
        const operatorWithClusterId = nodeData.nodeOperators.map(
          (operator: NodeOperator) => {
            const cluster = clusterData.clusters.find((cluster: Cluster) =>
              cluster.operatorIds.includes(operator.id)
            )
            return { ...operator, clusterId: cluster ? cluster.id : 'N/A' }
          }
        )

        setNodeData({ nodeOperators: operatorWithClusterId })
        console.log('nodeClusterData', nodeClusterData)
      }

      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    const updateHeight = () => {
      const heightValue = window.innerHeight
      setHeight(heightValue)
    }
    fetchData()
    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [data])

  if (isLoading) {
    return (
      <div>
        <Loader color="white" size="large" />
      </div>
    )
  }

  return (
    <div
      className={`  mt-2 flex items-center justify-center  `}
      style={{ height: heightVariable > 800 ? 'calc(100vh - 30vh)' : 'auto' }}
    >
      <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ width: '100%' }}
        >
          <Tab label="Validators" sx={{ color: 'white' }} />
          <Tab label="Node Operators" sx={{ color: 'white' }} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <>
            <ValidatorsData data={validatorData} />
          </>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <>
            <NodeOperatorData data={nodeClusterData} />
          </>
        </CustomTabPanel>
      </Box>
    </div>
  )
}
export default CenteredTabs
