import useSWR from 'swr'
import { getTickers } from '../network/tickers'
import { getTickersHistory } from '../network/tickersHistory'

type Resources =
  | { resource: 'tickers', args: Parameters<typeof getTickers>[0] }
  | { resource: 'tickersHistory', args: Parameters<typeof getTickersHistory>[0] }

const mapResourceToApi: { [key in Resources['resource']]: (args: Resources['args']) => any } = {
  tickers: getTickers,
  tickersHistory: getTickersHistory,
}

type MapResourceReturn = {
  tickers: Awaited<ReturnType<typeof getTickers>>
  tickersHistory: Awaited<ReturnType<typeof getTickersHistory>>
}

type UseResource = <T extends Resources>({ resource, args }: T) => MapResourceReturn[T['resource']]
const useResource: UseResource = ({ resource, args }) => {
  const key = [resource, Object.values(args)]
  const api = mapResourceToApi[resource]
  const { data } = useSWR(key, () => api(args), { suspense: true })

  return data
}

export default useResource
