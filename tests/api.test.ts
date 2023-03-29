import { describe, expect, test } from '@jest/globals'
import TseTmc from '../src/index'


const symbol = {
   id: '35331248532537562',
   name: 'اردستان'
}

const commonTimeOut = 20000

describe('Day Details', () => {

   test('Get Price Overview Data', async () => {

      const { data } = await TseTmc.DayDetails.getPriceOverviewData({ insId: symbol.id, dEven: 20230201 })

      expect(data).toBeDefined()
      expect(data).toHaveProperty('volume')
      expect(data.volume).toEqual(6794682)

      const { error } = await TseTmc.DayDetails.getPriceOverviewData({ insId: '00000', dEven: 12341212 })
      expect(error).toBeDefined()


   }, commonTimeOut)

   test('Get Price Data', async () => {

      const { data } = await TseTmc.DayDetails.getPriceData({ insId: symbol.id, dEven: 20230201 })

      expect(data).toBeDefined()

   }, commonTimeOut)

   test('Get Order Book Data', async () => {

      const { data } = await TseTmc.DayDetails.getOrderBookData({ insId: symbol.id, dEven: 20230201 })

      expect(data).toBeDefined()

   }, commonTimeOut)

   test('Get Trades', async () => {

      const { data } = await TseTmc.DayDetails.getTrades({ insId: symbol.id, dEven: 20230201, summarize: true })

      expect(data).toBeDefined()

   }, commonTimeOut)

   test('Get Traders Type', async () => {

      const { data } = await TseTmc.DayDetails.getTradersType({ insId: symbol.id, dEven: 20230201 })

      expect(data).toBeDefined()

   }, commonTimeOut)


   test('Get Thresholds', async () => {

      const { data } = await TseTmc.DayDetails.getThresholds({ insId: symbol.id, dEven: 20230201 })

      expect(data).toBeDefined()

   }, commonTimeOut)

})
