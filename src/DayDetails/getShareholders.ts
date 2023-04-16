import { GetDayDetailsCommonParams } from "../interface";
import { request, SafeReturn } from "../request";
import { even2JDate } from "../utils/timeUtils";

export default async function getShareholders(params: GetDayDetailsCommonParams): Promise<SafeReturn<ShareHolderDataRow[]>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/Shareholder/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['shareShareholder']

      return {
         data: data.map((row: any) => ({
            date: even2JDate(dEven, row['dEven']),
            shareholder: {
               id: row['shareHolderId'].toString(),
               name: row['shareHolderName']
            },
            count: row['numberOfShares'],
            percentage: row['perOfShares']
         }))
      }
   } catch (e) {
      return { error: e }
   }
}

export interface ShareHolder {
   id: string
   name: string
}

export interface ShareHolderDataRow {
   id: string
   date: Date
   shareholder: ShareHolder
   count: number
   percentage: number
}
