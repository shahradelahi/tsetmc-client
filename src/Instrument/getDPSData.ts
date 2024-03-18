import { request, RequestOptions } from '@/request';
import { trySafe } from 'p-safe';
import deepmerge from 'deepmerge';
import { faToAr } from '@/utils';

export type GetDPSDataParams = {
  symbol: string;
};

export type DPSData = {
  publishDate: string;
  meetingDate: string;
  fiscalYear: string;
  profitAfterTax: string;
  profitToAllocate: string;
  profitAccumulated: string;
  cashProfitPerShare: string;
};

export default async function getDPSData(params: GetDPSDataParams, options: RequestOptions = {}) {
  return trySafe<DPSData[]>(async () => {
    const { data: response, error } = await request(
      'http://old.tsetmc.com/tsev2/data/DPSData.aspx',
      deepmerge(
        {
          params: {
            s: faToAr(params.symbol)
          }
        },
        options
      )
    );

    if (error) {
      return { error };
    }

    if (!response || !response.data) {
      return { error: new Error('NoData') };
    }

    const rows = response.data.split(';');
    const result: DPSData[] = [];
    for (const row of rows) {
      const [
        publishDate,
        meetingDate,
        fiscalYear,
        profitAfterTax,
        profitToAllocate,
        profitAccumulated,
        cashProfitPerShare
      ] = row.split('@');
      result.push({
        publishDate,
        meetingDate,
        fiscalYear,
        profitAfterTax,
        profitToAllocate,
        profitAccumulated,
        cashProfitPerShare
      });
    }

    return { data: result };
  });
}
