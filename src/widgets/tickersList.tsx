import React, { useContext } from 'react'
import useResource from '../hooks/useResource'
import ActiveTickerContext from '../contexts/activeTickerContext'

const TickersList = () => {
  const tickets = useResource({ resource: 'tickers', args: { symbols: [] } })
  const { selectSymbol } = useContext(ActiveTickerContext)

  const onClickHistory = (symbol: string) => () => {
    selectSymbol(symbol)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Type</th>
          <th>Bid</th>
          <th>Ask</th>
          <th>Daily Change</th>
          <th>Volume</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {
          tickets.map((ticket) => (
            <tr key={ticket.symbol}>
              <td>{ticket.symbol}</td>
              <td>{ticket.type}</td>
              <td>{ticket.bid}</td>
              <td>{ticket.ask}</td>
              <td>{ticket.dailyChange}</td>
              <td>{ticket.volume}</td>
              <td><button onClick={onClickHistory(ticket.symbol)}>History</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TickersList
