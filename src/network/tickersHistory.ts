import { API_URL } from '../constants'

type GetTicketsParams = { symbols: string[] }

type TickerHistory = {
  type: 'tickerHistory'
  symbol: string
  bid: number
  ask: number
  mts: number
}

const getTickersHistory = async ({ symbols }: GetTicketsParams) => {
  const queryString = symbols.length === 0
    ? 'ALL'
    : symbols.join(',')

  const result = await fetch(`${API_URL}/tickers/hist?symbols=${queryString}`)
  const rawPayload = await result.json() as any[]

  const formattedPayload = rawPayload.flatMap((rawTickerHistory: any): TickerHistory | [] => {
    if (rawTickerHistory.length === 13) {
      return {
        type: 'tickerHistory',
        symbol: rawTickerHistory[0],
        bid: rawTickerHistory[1],
        ask: rawTickerHistory[3],
        mts: rawTickerHistory[12],
      }
    }

    console.warn(`Unknown ticker history type: ${rawTickerHistory}`)
    return []
  })

  return formattedPayload
}

export { getTickersHistory }
