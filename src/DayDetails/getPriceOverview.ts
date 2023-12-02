import { request, RequestOptions, SafeReturn } from '../request';
import { GetDayDetailsCommonParams } from '../interface';

export default async function getPriceOverviewData(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
): Promise<SafeReturn<PriceOverviewData>> {
  try {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: 'No response' };

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
  } catch (error) {
    return { error };
  }
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
