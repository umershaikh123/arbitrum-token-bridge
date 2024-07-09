export interface NodeOperator {
  id: string
  ip: string
  name: string
  pubkey: string
  clusterId?: string
}
export interface Cluster {
  id: string
  operatorIds: string[]
}
export interface Validator {
  clusterId: string
  id: string
  rollup: string
  status: string
}

export interface ClusterData {
  clusters: Cluster[]
}
export interface NodeData {
  nodeOperators: NodeOperator[]
}

export interface ValidatorData {
  validators: Validator[]
}

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export interface CenteredTabsProps {
  data: {
    validatorData: ValidatorData
    nodeData: NodeData
    clusterData: ClusterData
  }
}

export interface TabsProps {
  validatorData: ValidatorData
  nodeData: NodeData
  clusterData: ClusterData
}

export interface StatCardProps {
  title: string
  value: string
  className?: string
}

export interface chainButtonProps {
  addChainMethod: () => Promise<void>
  title: string
  name: string
  color?: string
  css?: string
}
