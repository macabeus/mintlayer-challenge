import { createContext } from 'react'

type ActiveTickerContext = {
  symbol: string | null
  selectSymbol: (symbol: string) => void
}

const activeTickerContext = createContext<ActiveTickerContext>({
  symbol: null,
  selectSymbol: () => undefined,
})

export default activeTickerContext
