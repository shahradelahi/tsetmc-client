import { SafeReturn } from '../request';

export type WatchTradersType = {
  legal: TraderTypeData;
  real: TraderTypeData;
};

export type TraderTypeData = {
  buy: {
    volume: number;
    count: number;
  };
  sell: {
    volume: number;
    count: number;
  };
};

export type TraderType = 'legal' | 'real';

export type WatchTradersTypeData = {
  [symbolId: string]: WatchTradersType;
};

export default async function getClientTypeAll(): Promise<SafeReturn<WatchTradersTypeData>> {
  try {
    const response = await fetch('http://old.tsetmc.com/tsev2/data/ClientTypeAll.aspx');
    const text = await response.text();

    const watchData: WatchTradersTypeData = {};

    const rows = text.split(';');
    for (const row of rows) {
      if (!row) {
        continue;
      }

      const [symbolId, r_buy_c, l_buy_c, r_buy_v, l_buy_v, r_sell_c, l_sell_c, r_sell_v, l_sell_v] =
        row.split(',');

      watchData[symbolId] = {
        legal: {
          buy: {
            volume: parseInt(l_buy_v),
            count: parseInt(l_buy_c)
          },
          sell: {
            volume: parseInt(l_sell_v),
            count: parseInt(l_sell_c)
          }
        },
        real: {
          buy: {
            volume: parseInt(r_buy_v),
            count: parseInt(r_buy_c)
          },
          sell: {
            volume: parseInt(r_sell_v),
            count: parseInt(r_sell_c)
          }
        }
      };
    }

    return { data: watchData };
  } catch (e) {
    return { error: e };
  }
}
