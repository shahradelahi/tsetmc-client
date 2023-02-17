import { describe, expect, test } from '@jest/globals'
import TseTmc from '../src'


const symbol = {
   id: '35331248532537562',
   name: 'اردستان'
}

const commonTimeOut = 20000

describe('Day Details', () => {

   test('Get Price Overview Data', async () => {

      const response = await TseTmc.DayDetails.getPriceOverviewData({ id: symbol.id, dEven: 20230201 })

      expect(response).toBeDefined()
      expect(response).toHaveProperty('volume')
      expect(response.volume).toEqual(6794682)

      await TseTmc.DayDetails.getPriceOverviewData({ id: '00000', dEven: 12341212 })
          .catch((err: any) => expect(err).toBeDefined())

   }, commonTimeOut)

   test('Get Price Data', async () => {

      const response = await TseTmc.DayDetails.getPriceData({ id: symbol.id, dEven: 20230201 })

      expect(response).toBeDefined()

   }, commonTimeOut)

   test('Get Order Book Data', async () => {

      const response = await TseTmc.DayDetails.getOrderBookData({ id: symbol.id, dEven: 20230201 })

      expect(response).toBeDefined()

   }, commonTimeOut)

   test('Get Trades', async () => {

      const response = await TseTmc.DayDetails.getTrades({ id: symbol.id, dEven: 20230201, summarize: true })

      expect(response).toBeDefined()

   }, commonTimeOut)

   test('Get Traders Type', async () => {

      const response = await TseTmc.DayDetails.getTradersType({ id: symbol.id, dEven: 20230201 })

      expect(response).toBeDefined()

   }, commonTimeOut)


   test('Get Thresholds', async () => {

      const response = await TseTmc.DayDetails.getThresholds({ id: symbol.id, dEven: 20230201 })

      expect(response).toBeDefined()

   }, commonTimeOut)

})
