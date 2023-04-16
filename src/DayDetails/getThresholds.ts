import { GetDayDetailsCommonParams } from "../interface";
import { request, SafeReturn } from "../request";

export default async function getThresholds(params: GetDayDetailsCommonParams): Promise<SafeReturn<ThresholdsData>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['staticThreshold']

      return {
         data: {
            rangeMax: data[1]['psGelStaMax'],
            rangeMin: data[1]['psGelStaMin']
         }
      }
   } catch (e) {
      return { error: e }
   }
}

export interface ThresholdsData {
   rangeMax: number
   rangeMin: number
}
