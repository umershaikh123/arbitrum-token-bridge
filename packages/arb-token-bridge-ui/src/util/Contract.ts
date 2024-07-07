import { ethers } from 'ethers'
import NexusAbiJson from '../NexusLibrary.json'

interface NexusContractData {
  rewardEth: string
  balanceEth: string
}

export async function getNexusContractParams(): Promise<NexusContractData> {
  const { abi: nexusABI } = NexusAbiJson

  const holesky_rpc = `${process.env.NEXT_PUBLIC_HOLESKY_RPC_URL}`
  const provider = new ethers.providers.JsonRpcProvider(holesky_rpc)
  const contractAddress = '0x85deaBEa8c6b45ff1f21C128b1f6Ed971bC122b3'
  const NexusLibrary = new ethers.Contract(
    contractAddress,
    nexusABI as any,
    provider
  )
  const library = await NexusLibrary.attach(contractAddress)

  const balance = await library.balance()
  const balanceEth = ethers.utils.formatEther(balance)
  const rewardsBigNumber = await library.getRewards()
  const rewardEth = ethers.utils.formatEther(rewardsBigNumber)

  return { rewardEth, balanceEth }
}
