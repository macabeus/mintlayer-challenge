import React, { FunctionComponent, Suspense, useContext } from 'react'
import useResource from '../hooks/useResource'
import ActiveTickerContext from '../contexts/activeTickerContext'

type TickerHistoryTableProps = { symbol: string }
const TickerHistoryTable: FunctionComponent<TickerHistoryTableProps> = ({ symbol }) => {
  const tickersHistory = useResource({ resource: 'tickersHistory', args: { symbols: [symbol] } })

  return (
    <div>
      <h3>
        {symbol}
      </h3>

      <table>
        <thead>
          <tr>
            <th>Ask</th>
            <th>Bid</th>
            <th>MTS</th>
          </tr>
        </thead>
        <tbody>
          {
            tickersHistory.map((row) => (
              <tr key={row.mts}>
                <td>{row.ask}</td>
                <td>{row.bid}</td>
                <td>{row.mts}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const TickerHistory = () => {
  const { symbol } = useContext(ActiveTickerContext)

  if (symbol) {
    return (
      <Suspense fallback={<p>Loading history for {symbol}...</p>}>
        <TickerHistoryTable symbol={symbol} />
      </Suspense>
    )
  }

  return (
    <div>
      <p>Select a ticket to see its history</p>
    </div>
  )
}

export default TickerHistory
