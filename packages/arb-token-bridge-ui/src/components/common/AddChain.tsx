import React from 'react'
import { addHoleskyChain, addNexusChain } from '../../util/metamask'
import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { isNetwork } from '../../util/networks'
import { ChainButton } from './Button'

export const AddChainButton = () => {
  const [networks] = useNetworks()
  const { parentChain } = useNetworksRelationship(networks)

  const {
    isArbitrum: isConnectedToArbitrum,
    isOrbitChain: isConnectedToOrbitChain
  } = isNetwork(networks.sourceChain.id)
  const isParentChainEthereum = isNetwork(
    parentChain.id
  ).isEthereumMainnetOrTestnet

  return (
    <div>
      {(isParentChainEthereum && isConnectedToArbitrum) ||
      isConnectedToOrbitChain ? (
        <>
          <ChainButton
            title="add testnet holesky chain to your metamask"
            name="Holesky"
            addChainMethod={addHoleskyChain}
          />
        </>
      ) : (
        <>
          <ChainButton
            title="add testnet nexus chain to your metamask"
            name="Nexus"
            addChainMethod={addNexusChain}
          />
        </>
      )}
    </div>
  )
}
