import { Popover } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import dayjs from 'dayjs'
import { useEffect, useMemo } from 'react'
import { useChainId } from 'wagmi'
import { GET_HELP_LINK } from '../../../constants'
import { useClaimWithdrawal } from '../../../hooks/useClaimWithdrawal'
import { useNetworksAndSigners } from '../../../hooks/useNetworksAndSigners'
import { MergedTransaction } from '../../../state/app/state'
import {
  useCctpState,
  useClaimCctp,
  useRemainingTime
} from '../../../state/cctpState'
import { shouldTrackAnalytics, trackEvent } from '../../../util/AnalyticsUtils'
import { getNetworkName, isNetwork } from '../../../util/networks'
import { Button } from '../../common/Button'
import { Tooltip } from '../../common/Tooltip'

const GetHelpButton = ({
  variant,
  onClick
}: {
  variant: 'primary' | 'secondary'
  onClick: () => void
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={variant === 'secondary' ? 'bg-white px-4 py-3' : ''}
    >
      Get Help
    </Button>
  )
}

export function TransactionsTableRowAction({
  tx,
  isError,
  type
}: {
  tx: MergedTransaction
  isError: boolean
  type: 'deposits' | 'withdrawals'
}) {
  const {
    l1: { network: l1Network },
    l2: { network: l2Network }
  } = useNetworksAndSigners()
  const l1NetworkName = getNetworkName(l1Network.id)
  const l2NetworkName = getNetworkName(l2Network.id)
  const networkName = type === 'deposits' ? l1NetworkName : l2NetworkName
  const { updateTransfer } = useCctpState()

  const chainId = useChainId()
  const { claim, isClaiming } = useClaimWithdrawal()
  const { claim: claimCctp, isClaiming: isClaimingCctp } = useClaimCctp(tx)
  const { isConfirmed } = useRemainingTime(tx)

  useEffect(() => {
    if (isConfirmed && tx.status === 'Unconfirmed') {
      updateTransfer({
        ...tx,
        status: 'Confirmed'
      })
    }
  }, [isConfirmed, tx, updateTransfer])

  const { isMainnet, isGoerli, isArbitrumOne, isArbitrumGoerli } =
    isNetwork(chainId)
  const currentChainIsValid =
    (type === 'deposits' && (isArbitrumOne || isArbitrumGoerli)) ||
    (type === 'withdrawals' && (isMainnet || isGoerli))

  const isClaimButtonDisabled = useMemo(() => {
    return isClaiming || isClaimingCctp || !currentChainIsValid
  }, [isClaiming, isClaimingCctp, currentChainIsValid])

  const getHelpOnError = () => {
    window.open(GET_HELP_LINK, '_blank')

    // track the button click
    if (shouldTrackAnalytics(networkName)) {
      trackEvent('Tx Error: Get Help Click', { network: networkName })
    }
  }

  if (tx.status === 'Unconfirmed') {
    return (
      <Tooltip
        wrapperClassName=""
        content={<span>Funds aren&apos;t ready to claim yet</span>}
      >
        <Button variant="primary" disabled>
          Claim
        </Button>
      </Tooltip>
    )
  }

  if (tx.status === 'Confirmed') {
    if (tx.isCctp && tx.resolvedAt) {
      return null
    }

    return (
      <Tooltip
        show={isClaimButtonDisabled}
        wrapperClassName=""
        content={
          <span>
            {`Please connect to the ${
              type === 'deposits' ? 'L2' : 'L1'
            } network to claim your withdrawal.`}
          </span>
        }
      >
        <Button
          variant="primary"
          loading={isClaiming || isClaimingCctp}
          disabled={isClaimButtonDisabled}
          onClick={() => {
            if (tx.isCctp) {
              claimCctp()
            } else {
              claim(tx)
            }
          }}
        >
          Claim
        </Button>
      </Tooltip>
    )
  }

  if (isError) {
    const isTxOlderThan7Days = dayjs().diff(dayjs(tx.createdAt), 'days') > 7

    return (
      <>
        {isTxOlderThan7Days ? (
          // show a dropdown menu with the button
          <Popover>
            <Popover.Button>
              <EllipsisVerticalIcon className="h-6 w-6 cursor-pointer p-1 text-dark" />
            </Popover.Button>
            <Popover.Panel
              className={'absolute top-4 z-50 rounded-md bg-white shadow-lg'}
            >
              <GetHelpButton variant="secondary" onClick={getHelpOnError} />
            </Popover.Panel>
          </Popover>
        ) : (
          // show a normal button outside
          <GetHelpButton variant="primary" onClick={getHelpOnError} />
        )}
      </>
    )
  }

  return null
}