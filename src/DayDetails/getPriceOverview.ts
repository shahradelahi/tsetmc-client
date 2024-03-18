import { request, RequestOptions } from '@/request';
import { trySafe } from 'p-safe';
import { GetDayDetailsCommonParams } from '@/interface';

export default async function getPriceOverviewData(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
) {
  return trySafe<PriceOverviewData>(async () => {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    const data = response.data['closingPriceDaily'];

    return {
      data: {
        priceChange: data['priceChange'],
        low: data['priceMin'],
        high: data['priceMax'],
        yesterday: data['priceYesterday'],
        open: data['priceFirst'],
        close: data['pClosing'],
        last: data['pDrCotVal'],
        count: data['zTotTran'],
        volume: data['qTotTran5J'],
        value: data['qTotCap']
      }
    };
  });
}

export interface PriceOverviewData {
  priceChange: number;
  low: number;
  high: number;
  yesterday: number;
  open: number;
  close: number;
  last: number;
  count: number;
  volume: number;
  value: number;
}
