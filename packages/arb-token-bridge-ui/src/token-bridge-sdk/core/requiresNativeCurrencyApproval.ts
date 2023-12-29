import { EthBridger } from '@arbitrum/sdk'
import { Provider } from '@ethersproject/providers'
import { fetchErc20Allowance } from '../../util/TokenUtils'
import { fetchNativeCurrency } from '../../hooks/useNativeCurrency'
import {
  getProviderFromSigner,
  getAddressFromSigner,
  getChainIdFromProvider
} from '../utils'
import { isNetwork } from '../../util/networks'
import { RequiresTokenApprovalProps } from '../BridgeTransferStarter'

export async function requiresNativeCurrencyApproval({
  amount,
  signer,
  destinationChainProvider
}: RequiresTokenApprovalProps & { destinationChainProvider: Provider }) {
  const sourceChainProvider = await getProviderFromSigner(signer)
  const sourceChainId = await getChainIdFromProvider(sourceChainProvider)

  // first get to know if the transaction is deposit, to determine which provider to choose for nativeCurrency
  const destinationChainId = await getChainIdFromProvider(
    destinationChainProvider
  )
  const isBaseChainEthereum =
    isNetwork(sourceChainId).isEthereumMainnetOrTestnet
  const isBaseChainArbitrum = isNetwork(sourceChainId).isArbitrum
  const isDestinationChainOrbit = isNetwork(destinationChainId).isOrbitChain

  const isDeposit =
    isBaseChainEthereum || (isBaseChainArbitrum && isDestinationChainOrbit)

  // always derive native-currency from the child-chain (l2provider)
  const nativeCurrency = await fetchNativeCurrency({
    provider: isDeposit ? destinationChainProvider : sourceChainProvider
  })
  if (!nativeCurrency.isCustom) return false

  // once we have native currency, fetch the allowance
  const address = await getAddressFromSigner(signer)

  const ethBridger = await EthBridger.fromProvider(destinationChainProvider)
  const { l2Network } = ethBridger

  if (typeof l2Network.nativeToken === 'undefined') {
    return false
  }

  const customFeeTokenAllowanceForInbox = await fetchErc20Allowance({
    address: l2Network.nativeToken,
    provider: sourceChainProvider,
    owner: address,
    spender: l2Network.ethBridge.inbox
  })

  // we want to bridge a certain amount of the custom fee token, so we have to check if the allowance is enough.
  return amount.gte(customFeeTokenAllowanceForInbox)
}