import { GetDayDetailsCommonParams } from '@/interface';
import { request, RequestOptions } from '@/request';
import { trySafe } from 'p-safe';

export default async function getThresholds(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
) {
  return trySafe<ThresholdsData>(async () => {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    const data = response.data['staticThreshold'];

    return {
      data: {
        rangeMax: Number(data[1].psGelStaMax),
        rangeMin: Number(data[1]?.psGelStaMin)
      }
    };
  });
}

export interface ThresholdsData {
  rangeMax: number;
  rangeMin: number;
}
