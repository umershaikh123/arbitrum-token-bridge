import { useNativeCurrency } from '../../hooks/useNativeCurrency'
import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { useAppState } from '../../state'
import { isNetwork } from '../../util/networks'
import { useETHPrice } from '../../hooks/useETHPrice'
import { formatUSD } from '../../util/NumberUtils'

export function useIsBridgingEth() {
  const [networks] = useNetworks()
  const { childChainProvider } = useNetworksRelationship(networks)
  const {
    app: { selectedToken }
  } = useAppState()
  const childChainNativeCurrency = useNativeCurrency({
    provider: childChainProvider
  })
  const isBridgingEth =
    selectedToken === null && !childChainNativeCurrency.isCustom
  return isBridgingEth
}

export function NativeCurrencyPrice({
  amount,
  showBrackets = false
}: {
  amount: number
  showBrackets?: boolean
}) {
  const [networks] = useNetworks()
  const { childChain } = useNetworksRelationship(networks)
  const { isTestnet } = isNetwork(childChain.id)

  // currently only ETH price is supported
  const { ethToUSD } = useETHPrice()

  if (isTestnet) {
    return null
  }

  return (
    <span className="tabular-nums">
      {showBrackets && '('}
      {formatUSD(ethToUSD(amount))}
      {showBrackets && ')'}
    </span>
  )
}