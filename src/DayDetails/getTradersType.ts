import { GetDayDetailsCommonParams } from '../interface';
import { request, RequestOptions, SafeReturn } from '../request';

export default async function getTradersType(
  params: GetDayDetailsCommonParams,
  options: RequestOptions = {}
): Promise<SafeReturn<TradersTypeData>> {
  try {
    const { insId, dEven } = params;

    const { data: response, error } = await request(
      `http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/${insId}/${dEven}`,
      options
    );

    if (error) return { error };
    if (!response) return { error: 'No response' };

    const data = response.data['clientType'];

    return {
      data: {
        legal: {
          buy: {
            volume: data['buy_N_Volume'],
            value: data['buy_N_Value'],
            count: data['buy_N_Count']
          },
          sell: {
            volume: data['sell_N_Volume'],
            value: data['sell_N_Value'],
            count: data['sell_N_Count']
          }
        },
        real: {
          buy: {
            volume: data['buy_I_Volume'],
            value: data['buy_I_Value'],
            count: data['buy_I_Count']
          },
          sell: {
            volume: data['sell_I_Volume'],
            value: data['sell_I_Value'],
            count: data['sell_I_Count']
          }
        }
      }
    };
  } catch (e) {
    return { error: e };
  }
}

export interface TradersTypeData {
  legal: TradersTypeInfo;
  real: TradersTypeInfo;
}

export interface TradersTypeInfo {
  buy: TradersTypeSubInfo;
  sell: TradersTypeSubInfo;
}

export interface TradersTypeSubInfo {
  count: number;
  volume: number;
  value: number;
}
