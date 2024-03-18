import { request, RequestOptions } from '@/request';
import { SafeReturn, trySafe } from 'p-safe';
import { even2JDate } from '@/utils';
import { GetDayDetailsCommonParams, SerializableRecord } from '@/interface';

export default async function getTrades(
  params: GetTradesParams,
  options: RequestOptions = {}
): Promise<SafeReturn<TradeDataRow>> {
  return trySafe(async () => {
    const { insId, dEven, summarize } = params;
    const summarizeStr = summarize ? 'true' : 'false';

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/Trade/GetTradeHistory/${insId}/${dEven}/${summarizeStr}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    const data = response.data['tradeHistory'];

    return {
      data: data.map((row: SerializableRecord) => ({
        time: even2JDate(dEven, Number(row['hEven'])),
        price: row['pTran'],
        volume: row['qTitTran']
      }))
    };
  });
}

export interface GetTradesParams extends GetDayDetailsCommonParams {
  summarize: boolean;
}

export interface TradeDataRow {
  time: Date;
  price: number;
  volume: number;
}
