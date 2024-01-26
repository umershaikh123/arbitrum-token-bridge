import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { twMerge } from 'tailwind-merge'
import { AutoSizer, Column, Table } from 'react-virtualized'
import {
  ArrowDownOnSquareIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import dayjs from 'dayjs'

import { MergedTransaction } from '../../state/app/state'
import {
  getStandardizedDate,
  getStandardizedTime,
  isTokenDeposit
} from '../../state/app/utils'
import { ExternalLink } from '../common/ExternalLink'
import { GET_HELP_LINK } from '../../constants'
import { ChainPair } from '../../hooks/useTransactionHistory'
import { Tooltip } from '../common/Tooltip'
import { getNetworkName } from '../../util/networks'
import { isTxPending } from './helpers'
import { PendingDepositWarning } from './PendingDepositWarning'
import { TransactionsTableRow } from './TransactionsTableRow'

const ContentWrapper = ({
  children,
  className = ''
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={twMerge(
        'w-full flex-col items-center rounded bg-[#191919] p-4 text-center text-xs text-white',
        className
      )}
    >
      {children}
    </div>
  )
}

export const TransactionDateTime = ({
  standardizedDate
}: {
  standardizedDate: number | null
}) => {
  // Standardized formatted date-time component used across transaction rows

  if (!standardizedDate) return <span className="whitespace-nowrap">n/a</span>
  return (
    <div className="flex flex-nowrap gap-1">
      <span className="whitespace-nowrap">
        {getStandardizedDate(standardizedDate)}
      </span>
      <span className="whitespace-nowrap opacity-60">
        {getStandardizedTime(standardizedDate)}
      </span>
    </div>
  )
}

const TableHeader = ({
  children,
  className
}: PropsWithChildren<{ className?: string }>) => (
  <div
    className={twMerge(
      'h-full w-full py-4 text-left text-sm font-normal',
      className
    )}
  >
    {children}
  </div>
)

export const TransactionHistoryTable = ({
  transactions,
  loading,
  completed,
  error,
  failedChainPairs,
  resume,
  selectedTabIndex,
  oldestTxTimeAgoString
}: {
  transactions: MergedTransaction[]
  loading: boolean
  completed: boolean
  error: unknown
  failedChainPairs: ChainPair[]
  resume: () => void
  selectedTabIndex: number
  oldestTxTimeAgoString: string
}) => {
  const contentAboveTable = useRef<HTMLDivElement>(null)

  const isTxHistoryEmpty = transactions.length === 0
  const isPendingTab = selectedTabIndex === 0

  const paused = !loading && !completed

  const [tableHeight, setTableHeight] = useState(0)

  const pendingTokenDepositsCount = useMemo(() => {
    return transactions.filter(tx => isTokenDeposit(tx) && isTxPending(tx))
      .length
  }, [transactions])

  // TODO: look into https://www.npmjs.com/package/react-intersection-observer that could simplify this
  useEffect(() => {
    // Calculate table height to be passed to the React Virtualized Table
    const currentRef = contentAboveTable.current
    const SIDE_PANEL_HEADER_HEIGHT = 125

    // Adjust the table size whenever the content above it is resized
    const observer = new ResizeObserver(entries => {
      if (entries[0]) {
        const aboveHeight = entries[0].contentRect.height
        const viewportHeight = window.innerHeight
        const newTableHeight = Math.max(
          viewportHeight - aboveHeight - SIDE_PANEL_HEADER_HEIGHT,
          0
        )
        setTableHeight(newTableHeight)
      }
    })

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [transactions.length])

  const FailedChainPairsTooltip = useCallback(() => {
    if (failedChainPairs.length === 0) {
      return null
    }
    return (
      <Tooltip
        content={
          <div className="flex flex-col space-y-1 text-xs">
            <span>
              We were unable to fetch data for the following chain pairs:
            </span>
            <ul className="flex list-disc flex-col pl-4">
              {failedChainPairs.map(pair => (
                <li key={`${pair.parentChain}-${pair.chain}`}>
                  <b>{getNetworkName(pair.parentChain)}</b>
                  {' <> '}
                  <b>{getNetworkName(pair.chain)}</b>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <ExclamationCircleIcon height={20} className="text-error" />
      </Tooltip>
    )
  }, [failedChainPairs])

  const LoadMoreButton = useCallback(() => {
    return (
      <button onClick={resume} className="arb-hover text-xs">
        <div className="flex space-x-1 rounded border border-white px-2 py-1">
          <span>Load more</span>
          <ArrowDownOnSquareIcon width={16} />
        </div>
      </button>
    )
  }, [resume])

  if (isTxHistoryEmpty) {
    if (loading) {
      return (
        <ContentWrapper>
          <span className="animate-pulse">Loading transactions...</span>
        </ContentWrapper>
      )
    }
    if (error) {
      return (
        <ContentWrapper>
          <p>
            We seem to be having a difficult time loading your data, we&apos;re
            working hard to solve it.
          </p>
          <p>Please give it a moment and then try refreshing the page.</p>
          <p className="mt-4">
            If the problem persists please file a ticket{' '}
            <ExternalLink className="arb-hover underline" href={GET_HELP_LINK}>
              here
            </ExternalLink>
            .
          </p>
        </ContentWrapper>
      )
    }
    if (paused) {
      return (
        <ContentWrapper className="space-y-4">
          <p>
            There are no recent {isPendingTab ? 'pending' : 'settled'}{' '}
            transactions.
          </p>
          <LoadMoreButton />
        </ContentWrapper>
      )
    }
    return <ContentWrapper>Looks like no transactions here yet.</ContentWrapper>
  }

  return (
    <ContentWrapper className="h-full overflow-x-auto p-0 text-left">
      <div
        className={twMerge(
          'w-[960px] rounded-tr-lg px-4 pt-4',
          isPendingTab ? '' : 'rounded-tl-lg'
        )}
        ref={contentAboveTable}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <FailedChainPairsTooltip />
            <span className="animate-pulse text-xs">
              Loading transactions...
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start space-x-1">
              <FailedChainPairsTooltip />
              <span className="text-xs">
                Showing {transactions.length}{' '}
                {isPendingTab ? 'pending' : 'settled'} transactions made in{' '}
                {oldestTxTimeAgoString}.
              </span>
            </div>

            {!completed && <LoadMoreButton />}
          </div>
        )}
        <div>{pendingTokenDepositsCount > 0 && <PendingDepositWarning />}</div>
      </div>
      <AutoSizer disableHeight>
        {() => (
          <Table
            width={960}
            height={tableHeight}
            rowHeight={60}
            rowCount={transactions.length}
            headerHeight={52}
            headerRowRenderer={props => (
              <div className="mx-4 flex w-[928px] border-b border-white/30 text-white">
                {props.columns}
              </div>
            )}
            className="table-auto last:border-b-0"
            rowGetter={({ index }) => transactions[index]}
            rowRenderer={({ index, style }) => {
              const tx = transactions[index]

              if (!tx) {
                return null
              }

              const isLastRow = index + 1 === transactions.length
              const key = `${tx.parentChainId}-${tx.childChainId}-${tx.txId}`
              const secondsPassed = dayjs().diff(dayjs(tx.createdAt), 'second')

              // only blink the topmost tx, in case many txs are queued in a short amount of time
              const isTopmostPendingTx =
                transactions.filter(isTxPending)[0]?.txId === tx.txId

              return (
                <div key={key} style={style}>
                  <TransactionsTableRow
                    tx={tx}
                    className={twMerge(
                      isLastRow && 'border-b-0',
                      isTopmostPendingTx &&
                        secondsPassed <= 30 &&
                        'animate-blink bg-highlight'
                    )}
                  />
                </div>
              )
            }}
          >
            <Column
              label="time"
              dataKey="time"
              width={139}
              headerRenderer={() => <TableHeader>TIME</TableHeader>}
            />
            <Column
              label="token"
              dataKey="token"
              width={141}
              headerRenderer={() => <TableHeader>TOKEN</TableHeader>}
            />
            <Column
              label="from"
              dataKey="from"
              width={142}
              headerRenderer={() => <TableHeader>FROM</TableHeader>}
            />
            <Column
              label="to"
              dataKey="to"
              width={137}
              headerRenderer={() => <TableHeader>TO</TableHeader>}
            />
            <Column
              label="status"
              dataKey="status"
              width={100}
              headerRenderer={() => <TableHeader>STATUS</TableHeader>}
            />
          </Table>
        )}
      </AutoSizer>
    </ContentWrapper>
  )
}
