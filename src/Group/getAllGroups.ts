import { request, RequestOptions } from '@/request';
import { SafeReturn, trySafe } from 'p-safe';

export default async function getAllGroups(
  options: RequestOptions = {}
): Promise<SafeReturn<GroupData[]>> {
  return trySafe(async () => {
    const { data: response, error } = await request(
      'http://cdn.tsetmc.com/api/StaticData/GetStaticData',
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    return {
      data: response.data['staticData']
    };
  });
}

export enum GroupType {
  PAPER = 'PAPER',
  INDUSTRY = 'INDUSTRIAL'
}

export interface GroupData {
  id: number;
  code: number;
  name: string;
  description: string;
  type: GroupType;
}
