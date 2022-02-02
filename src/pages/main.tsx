import React from 'react'
import TickersList from '../widgets/tickersList'
import TickerHistory from '../widgets/tickerHistory'

const Main = () => (
  <div style={{
    display: 'flex',
  }}>
    <div>
      <TickersList />
    </div>

    <div>
      <TickerHistory />
    </div>
  </div>
)

export default Main
