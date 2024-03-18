import { GetDayDetailsCommonParams } from '@/interface';
import { request, RequestOptions } from '@/request';
import { trySafe } from 'p-safe';
import { even2JDate } from '@/utils';

export default async function getPriceData(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
) {
  return trySafe<PriceDataRow[]>(async () => {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    const data = response.data['closingPriceHistory'];

    return {
      data: data.map((row: any) => ({
        time: even2JDate(dEven, row['hEven']),
        close: row['pClosing'],
        last: row['pDrCotVal'],
        value: row['qTotCap'],
        volume: row['qTotTran5J'],
        count: row['zTotTran']
      }))
    };
  });
}

export interface PriceDataRow {
  time: Date;
  close: number;
  last: number;
  value: number;
  volume: number;
  count: number;
}
