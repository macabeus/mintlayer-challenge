import { API_URL } from '../constants'

type GetTicketsParams = { symbols: string[] }

type TradingPair = {
  type: 'tradingPair'
  symbol: string
  bid: number
  bidSize: number
  ask: number
  askSize: number
  dailyChange: number
  dailyChangeRelative: number
  lastPrice: number
  volume: number
  high: number
  low: number
}

type FundingCurrency = {
  type: 'fundingCurrency'
  symbol: string
  frr: number
  bid: number
  bidPeriod: number
  bidSize: number
  ask: number
  askPeriod: number
  askSize: number
  dailyChange: number
  dailyChangeRelative: number
  lastPrice: number
  volume: number
  high: number
  low: number
  frrAmountAvailable: number
}

const getTickers = async ({ symbols }: GetTicketsParams) => {
  const queryString = symbols.length === 0
    ? 'ALL'
    : symbols.join(',')

  const result = await fetch(`${API_URL}/tickers?symbols=${queryString}`)
  const rawPayload = await result.json() as any[]

  const formattedPayload = rawPayload.flatMap((rawTicker: any): TradingPair | FundingCurrency | [] => {
    if (rawTicker.length === 11) {
      return {
        type: 'tradingPair',
        symbol: rawTicker[0],
        bid: rawTicker[1],
        bidSize: rawTicker[2],
        ask: rawTicker[3],
        askSize: rawTicker[4],
        dailyChange: rawTicker[5],
        dailyChangeRelative: rawTicker[6],
        lastPrice: rawTicker[7],
        volume: rawTicker[8],
        high: rawTicker[9],
        low: rawTicker[10],
      }
    }

    if (rawTicker.length === 17) {
      return {
        type: 'fundingCurrency',
        symbol: rawTicker[0],
        frr: rawTicker[1],
        bid: rawTicker[2],
        bidPeriod: rawTicker[3],
        bidSize: rawTicker[4],
        ask: rawTicker[5],
        askPeriod: rawTicker[6],
        askSize: rawTicker[7],
        dailyChange: rawTicker[8],
        dailyChangeRelative: rawTicker[9],
        lastPrice: rawTicker[10],
        volume: rawTicker[11],
        high: rawTicker[13],
        low: rawTicker[14],
        frrAmountAvailable: rawTicker[15],
      }
    }

    console.warn(`Unknown ticker type: ${rawTicker}`)
    return []
  })

  return formattedPayload
}

export { getTickers }
