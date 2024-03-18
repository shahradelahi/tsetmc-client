import { request, RequestOptions } from '@/request';
import { trySafe } from 'p-safe';
import deepmerge from 'deepmerge';

export type SupervisionDetail = {
  status: string;
  reason: string;
  description: string;
  date: Date;
};

export default async function getSupervisionDetail(insId: string, options: RequestOptions = {}) {
  return trySafe<SupervisionDetail>(async () => {
    const { data: response, error } = await request(
      'http://old.tsetmc.com/tsev2/data/Supervision.aspx',
      deepmerge<RequestOptions>(
        {
          params: {
            i: insId
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

    const [status, reason, description, date] = response.data.split('#');

    return {
      data: {
        status: UnderSupervision(status),
        reason,
        description,
        date: new Date(date)
      }
    };
  });
}

function UnderSupervision(status: string): string {
  switch (status) {
    default:
    case '0':
      return '';
    case '1':
      return 'مشمول فرآیند تعلیق';
    case '2':
      return 'معامله تحت احتیاط';
    case '3':
      return 'تعلیق شده';
  }
}
