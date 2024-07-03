import { useEffect, useMemo } from 'react'
import { useAccount } from 'wagmi'
import { useLocalStorage } from '@uidotdev/usehooks'

import { TransferPanel } from '../TransferPanel/TransferPanel'
import { SidePanel } from '../common/SidePanel'
import { useAppContextActions, useAppContextState } from '../App/AppContext'
import { ArbitrumStats, statsLocalStorageKey } from './ArbitrumStats'
import { SettingsDialog } from '../common/SettingsDialog'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import { useTransactionHistory } from '../../hooks/useTransactionHistory'
import { isTxPending } from '../TransactionHistory/helpers'
import { TransactionStatusInfo } from '../TransactionHistory/TransactionStatusInfo'
import { Footer } from '../common/Footer'
function TransactionHistorySidePanel() {
  const { closeTransactionHistoryPanel } = useAppContextActions()
  const {
    layout: { isTransactionHistoryPanelVisible }
  } = useAppContextState()
  const { address } = useAccount()

  const transactionHistoryProps = useTransactionHistory(address, {
    runFetcher: true
  })

  console.log("transactionHistoryProps" , transactionHistoryProps);
  

  const { transactions, updatePendingTransaction } = transactionHistoryProps

  const pendingTransactions = useMemo(() => {
    return transactions.filter(isTxPending)
  }, [transactions])

  useEffect(() => {
    const interval = setInterval(() => {
      pendingTransactions.forEach(updatePendingTransaction)
    }, 10_000)

    return () => clearInterval(interval)
  }, [pendingTransactions, updatePendingTransaction])

  return (
    <SidePanel
      isOpen={isTransactionHistoryPanelVisible}
      onClose={closeTransactionHistoryPanel}
      scrollable={false}
      panelClassNameOverrides="pb-8"
    >
      <TransactionHistory props={{ ...transactionHistoryProps, address }} />
    </SidePanel>
  )
}

export function MainContent() {
  const [isArbitrumStatsVisible] =
    useLocalStorage<boolean>(statsLocalStorageKey)

  return (
    <>
    <div className='w-full   h-full  min-h-[78vh] flex flex-col justify-center  items-center ' >

      <div className="   mx-auto   flex w-full flex-col  sm:max-w-[600px]  z-10  sm:pt-6">
        {/* <TransactionStatusInfo /> */}

        <TransferPanel />
      </div>
      <Footer />
    </div>

      <TransactionHistorySidePanel />

      {/* Settings panel */}
      <SettingsDialog />

      {/* Toggle-able Stats for nerds */}
      {isArbitrumStatsVisible && <ArbitrumStats />}
    </>
  )
}
