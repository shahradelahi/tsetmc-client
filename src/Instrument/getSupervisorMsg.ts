import { request, RequestOptions } from '@/request';
import { SafeReturn, trySafe } from 'p-safe';

export type InstrumentSupervisorMsg = {
  id: number;
  dEven: number;
  hEven: number;
  title: string;
  description: string;
  flow: number;
};

export type GetSupervisorMessagesParams = {
  insId: string;
};

export default async function getSupervisorMsg(
  params: GetSupervisorMessagesParams,
  options: RequestOptions = {}
): Promise<SafeReturn<InstrumentSupervisorMsg[]>> {
  return trySafe(async () => {
    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/Msg/GetMsgByInsCode/${params.insId}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    return {
      data: response.data['msg'].map((row: any) => ({
        id: row['tseMsgIdn'],
        dEven: row['dEven'],
        hEven: row['hEven'],
        title: row['tseTitle'],
        description: row['tseDesc'],
        flow: row['flow']
      }))
    };
  });
}
