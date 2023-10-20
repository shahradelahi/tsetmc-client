import { afterEach, describe, expect, test } from '@jest/globals'
import TseTmc, { DayDetails, Group, Instrument, MapType, MarketMap, MarketWatch } from '../src/index'


const symbol = {
  id: '35331248532537562',
  name: 'اردستان'
}

const commonTimeOut = 20000

describe('Day Details', () => {

  afterEach(async () => await delay(1000))

  test('Get Price Overview Data', async () => {

    const { data } = await DayDetails.getPriceOverview({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()
    expect(data).toHaveProperty('volume')
    expect(data!.volume).toEqual(6794682)

    const { error } = await DayDetails.getPriceOverview({ insId: '00000', dEven: 12341212 })
    expect(error).toBeDefined()


  }, commonTimeOut)

  test('Get Price Data', async () => {

    const { data } = await DayDetails.getPriceData({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Order Book Data', async () => {

    const { data } = await DayDetails.getOrderBook({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Trades', async () => {

    const { data } = await DayDetails.getTrades({ insId: symbol.id, dEven: 20230201, summarize: true })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Traders Type', async () => {

    const { data } = await DayDetails.getTradersType({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Thresholds', async () => {

    const { data } = await DayDetails.getThresholds({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

})

describe('Group', () => {

  afterEach(async () => await delay(1000))

  test('Get All Groups', async () => {

    const { data, error } = await Group.getAllGroups()

    expect(data).toBeDefined()
    expect(error).toBeUndefined()
    expect(data!.length).toBeGreaterThan(50)
    expect(data![0]).toHaveProperty('id')

  }, commonTimeOut)

})

describe('Market Map', () => {

  afterEach(async () => await delay(1000))

  test('Get Market Map Data', async () => {

    const { data, error } = await MarketMap.getMarketMap({
      mapType: MapType.MarketValue
    })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()
    expect(data!.length).toBeGreaterThan(100)
    expect(data![0]).toHaveProperty('id')

  }, commonTimeOut)

})

describe('Market Watch', () => {

  afterEach(async () => await delay(1000))

  test('Get Price Data', async () => {

    const { data, error } = await MarketWatch.getPriceData(undefined, {
      timeout: 10000
    })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(100)
    expect(data![0]).toHaveProperty('symbolId')

  }, commonTimeOut)

  test('Get Client Type All', async () => {

    const { data, error } = await MarketWatch.getClientTypeAll()

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    data && Object.entries(data).forEach(([ key, value ]) => {
      expect(key).toBeDefined()
      expect(value).toBeDefined()
      expect(value).toHaveProperty('legal')
      expect(value).toHaveProperty('real')
    })

  }, commonTimeOut)

  test('Get Watch Stats', async () => {

    const { data, error } = await TseTmc.MarketWatch.getWatchStats()
    console.log(data!['72044846109864381'])

    Object.entries(data!).forEach(([ key, value ]) => {
      expect(key).toBeDefined()
      expect(value).toBeDefined()
      expect(value).toHaveProperty('trades')
      expect(value).toHaveProperty('negative_days')
      expect(value).toHaveProperty('no_trade_days')
      expect(value).toHaveProperty('positive_days')
      expect(value).toHaveProperty('with_trade_days')
      expect(value).toHaveProperty('company_value')
      expect(value).toHaveProperty('open_days')
      expect(value).toHaveProperty('closed_days')
      expect(value).toHaveProperty('client_type')
    })

  }, commonTimeOut)

})

describe('Instrument', () => {

  afterEach(async () => await delay(1000))

  test('Get Board Members', async () => {

    const { data, error } = await Instrument.getBoardMembersHistory({ symbol: 'ونوين' })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)

    data?.forEach((item) => {
      expect(item).toHaveProperty('SessionDate')
      if (item.type === 'BoardMembers') {
        expect(item).toHaveProperty('AssemblyDate')
        expect(item).toHaveProperty('BoardMembers')
      }
      if (item.type === 'DirectorManager') {
        expect(item).toHaveProperty('DirectorManager')
        expect(item.DirectorManager).toHaveProperty('EducationDegree')
        expect(item.DirectorManager).toHaveProperty('Name')
        expect(item.DirectorManager).toHaveProperty('NationalCode')
      }
    })

  }, commonTimeOut)

  test('Get DPS Data', async () => {

    const { data, error } = await Instrument.getDPSData({ symbol: 'ونوين' })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('publishDate')
    expect(data![0]).toHaveProperty('meetingDate')
    expect(data![0]).toHaveProperty('fiscalYear')
    expect(data![0]).toHaveProperty('profitAfterTax')
    expect(data![0]).toHaveProperty('profitToAllocate')
    expect(data![0]).toHaveProperty('profitAccumulated')
    expect(data![0]).toHaveProperty('cashProfitPerShare')

  }, commonTimeOut)

  test('Get Instrument Info', async () => {

    const { data, error } = await Instrument.getInstrumentInfo({ insId: symbol.id })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.insCode).toEqual(symbol.id)
    expect(data!.instrumentID.startsWith('IR')).toBeTruthy()

  }, commonTimeOut)

  test('Get Intra Day Price Chart', async () => {

    const { data, error } = await Instrument.getIntraDayPriceChart({ insId: '47302318535715632' })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('time')

  }, commonTimeOut)

  test('Get Supervisor Message', async () => {

    const { data, error } = await Instrument.getSupervisorMsg({ insId: symbol.id })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('id')
    expect(data![0]).toHaveProperty('title')

  }, commonTimeOut)

})

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
