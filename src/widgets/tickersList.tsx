import React from 'react'
import useResource from '../hooks/useResource'

const TickersList = () => {
  const tickets = useResource({ resource: 'tickers', args: { symbols: [] } })

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
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TickersList
