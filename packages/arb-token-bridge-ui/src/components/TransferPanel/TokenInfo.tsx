import { useMemo } from 'react'

import { ERC20BridgeToken } from '../../hooks/arbTokenBridge.types'
import { ExternalLink } from '../common/ExternalLink'
import { getExplorerUrl } from '../../util/networks'
import { useNetworks } from '../../hooks/useNetworks'
import { shortenAddress } from '../../util/CommonUtils'
import { useTokensFromLists, useTokensFromUser } from './TokenSearchUtils'
import {
  ARB_ONE_NATIVE_USDC_TOKEN,
  ARB_SEPOLIA_NATIVE_USDC_TOKEN
} from './TokenSearch'
import {
  isTokenArbitrumOneNativeUSDC,
  isTokenArbitrumSepoliaNativeUSDC
} from '../../util/TokenUtils'
import { SafeImage } from '../common/SafeImage'

function TokenLogoFallback() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-gray-dark text-sm font-medium">
      ?
    </div>
  )
}

export const TokenInfo = ({
  token,
  showFullAddress
}: {
  token: ERC20BridgeToken | null | undefined
  showFullAddress?: boolean
}) => {
  const [networks] = useNetworks()
  const tokensFromUser = useTokensFromUser()
  const tokensFromLists = useTokensFromLists()
  const tokenAddressLowercased = token?.address.toLocaleLowerCase()

  const tokenLogo = useMemo(() => {
    const tokenAddress = token?.address

    if (!tokenAddress) {
      return undefined
    }

    if (isTokenArbitrumOneNativeUSDC(tokenAddress)) {
      ARB_ONE_NATIVE_USDC_TOKEN.logoURI
    }

    if (isTokenArbitrumSepoliaNativeUSDC(tokenAddress)) {
      return ARB_SEPOLIA_NATIVE_USDC_TOKEN.logoURI
    }

    return (
      tokensFromLists[token.address]?.logoURI ||
      tokensFromUser[token.address]?.logoURI
    )
  }, [token, tokensFromLists, tokensFromUser])

  return (
    <div className="flex flex-row items-center space-x-3">
      <SafeImage
        src={tokenLogo}
        alt="Token logo"
        className="h-6 w-6 grow-0"
        fallback={<TokenLogoFallback />}
      />
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-base">{token?.symbol}</span>
          <span className="text-xs text-white/70">{token?.name}</span>
        </div>
        {tokenAddressLowercased && (
          <ExternalLink
            href={`${getExplorerUrl(
              networks.sourceChain.id
            )}/token/${tokenAddressLowercased}`}
            className="arb-hover text-xs underline"
          >
            {showFullAddress
              ? tokenAddressLowercased
              : shortenAddress(tokenAddressLowercased)}
          </ExternalLink>
        )}
      </div>
    </div>
  )
}