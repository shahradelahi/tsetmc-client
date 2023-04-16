import { describe, expect, test } from '@jest/globals'
import { DayDetails, Group, Instrument, MapType, MarketMap, MarketWatch } from '../src/index'


const symbol = {
   id: '35331248532537562',
   name: 'اردستان'
}

const commonTimeOut = 20000

describe('Day Details', () => {

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

   test('Get All Groups', async () => {

      const { data, error } = await Group.getAllGroups()

      expect(data).toBeDefined()
      expect(error).toBeUndefined()
      expect(data!.length).toBeGreaterThan(50)
      expect(data![0]).toHaveProperty('id')

   }, commonTimeOut)

})

describe('Market Map', () => {

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

   test('Get Price Data', async () => {

      const { data, error } = await MarketWatch.getPriceData()

      expect(data).toBeDefined()
      expect(error).toBeUndefined()

      expect(data!.length).toBeGreaterThan(100)
      expect(data![0]).toHaveProperty('symbolId')

   }, commonTimeOut)

})

describe('Instrument', () => {

   test('Get Instrument Info', async () => {

      const { data, error } = await Instrument.getInstrumentInfo({ insId: symbol.id })

      expect(data).toBeDefined()
      expect(error).toBeUndefined()

      expect(data!.insCode).toEqual(symbol.id)
      expect(data!.instrumentID.startsWith('IR')).toBeTruthy()

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
