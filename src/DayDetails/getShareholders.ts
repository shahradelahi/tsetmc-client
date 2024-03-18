import { GetDayDetailsCommonParams } from '@/interface';
import { request, RequestOptions } from '@/request';
import { SafeReturn, trySafe } from 'p-safe';
import { even2JDate } from '@/utils';

export default async function getShareholders(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
): Promise<SafeReturn<ShareHolderDataRow[]>> {
  return trySafe(async () => {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/Shareholder/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    const data = response.data['shareShareholder'];

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
    };
  });
}

export interface ShareHolder {
  id: string;
  name: string;
}

export interface ShareHolderDataRow {
  id: string;
  date: Date;
  shareholder: ShareHolder;
  count: number;
  percentage: number;
}
