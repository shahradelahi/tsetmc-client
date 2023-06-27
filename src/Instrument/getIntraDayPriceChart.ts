import { request, RequestOptions, SafeReturn } from "../request";
import deepmerge from "deepmerge";

export type GetIntraDayPriceChartParams = {
  insId: string
}

export type IntraDayPriceChart = {
  time: Date
  high: number
  low: number
  open: number
  close: number
  volume: number
}

export default async function getIntraDayPriceChart(params: GetIntraDayPriceChartParams, options: RequestOptions = {}): Promise<SafeReturn<IntraDayPriceChart[]>> {
  try {

    const {
      data: response,
      error
    } = await request('http://old.tsetmc.com/tsev2/chart/data/IntraDayPrice.aspx', deepmerge<RequestOptions>({
      params: {
        i: params.insId
      }
    }, options))

    if (error) {
      return { error }
    }

    if (!response || !response.data) {
      return { error: 'NoData' }
    }

    const ticks = response.data.split(';')
    if (!Array.isArray(ticks) || ticks.length === 0) {
      return { error: 'NoData' }
    }

    const result: IntraDayPriceChart[] = []
    for (const tick of ticks) {
      const [ time, high, low, open, close, volume ] = tick.split(',')
      const [ hour, minute ] = time.split(':')
      result.push({
        time: new Date(Date.UTC(2010, 1, 1, parseInt(hour), parseInt(minute))),
        high: parseInt(high),
        low: parseInt(low),
        open: parseInt(open),
        close: parseInt(close),
        volume: parseInt(volume)
      })
    }

    return { data: result }

  } catch (e) {
    return { error: e }
  }
}

