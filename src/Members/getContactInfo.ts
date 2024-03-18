import { request, RequestOptions } from '@/request';
import deepmerge from 'deepmerge';
import { trySafe } from 'p-safe';

export default async function getContactInfo(
  params: GetContactInfoParams,
  options: RequestOptions = {}
) {
  return trySafe<ContactInfo>(async () => {
    const { data: response, error } = await request(
      'https://members.tsetmc.com/tsev2/data/InstContact.aspx',
      deepmerge(
        {
          params: {
            t: 't',
            i: params.insId
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
    const result: ContactInfo = {};
    for (const row of rows) {
      const [key, value] = row.split(',');
      result[key] = value;
    }

    return { data: result };
  });
}

export type GetContactInfoParams = {
  insId: string;
};

export type ContactInfo = {
  [key: string]: string;
};
