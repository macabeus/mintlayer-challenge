import React, { FunctionComponent, useState } from 'react'
import ActiveTickerContext from '../contexts/activeTickerContext'

const ActiveTickerProvider: FunctionComponent = ({ children }) => {
  const [symbol, setSymbol] = useState<string | null>(null)

  return (
    <ActiveTickerContext.Provider
      value={{
        symbol,
        selectSymbol: setSymbol,
      }}
    >
      {children}
    </ActiveTickerContext.Provider>
  )
}

export default ActiveTickerProvider
