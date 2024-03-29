import * as DayDetails from './DayDetails/index';
import * as Group from './Group/index';
import * as MarketMap from './MarketMap/index';
import * as MarketWatch from './MarketWatch/index';
import * as Instrument from './Instrument/index';

export * as utils from './utils/index';

export { DayDetails, Group, MarketMap, MarketWatch, Instrument };

const TseTmc = { DayDetails, Group, MarketMap, MarketWatch, Instrument };
export { TseTmc };
export default TseTmc;

// ---- Enums
export { GroupType } from './Group/getAllGroups';
export { MapType } from './MarketMap/getMarketMap';

// ---- Types
export type { PriceOverviewData } from './DayDetails/getPriceOverview';
export type { PriceDataRow } from './DayDetails/getPriceData';
export type { TradeDataRow } from './DayDetails/getTrades';
export type {
  TradersTypeData,
  TradersTypeInfo,
  TradersTypeSubInfo
} from './DayDetails/getTradersType';
export type { SupervisionDetail } from './DayDetails/getSupervisionDetail';
export type { ShareHolderDataRow, ShareHolder } from './DayDetails/getShareholders';
export type { ThresholdsData } from './DayDetails/getThresholds';

export type { GroupData } from './Group/getAllGroups';

export type { BoardMember } from './Instrument/getBoardMembersHistory';
export type { DPSData } from './Instrument/getDPSData';
export type {
  InstrumentInfo,
  InstrumentEPS,
  InstrumentSector,
  InstrumentStaticThreshold
} from './Instrument/getInstrumentInfo';
export type { IntraDayPriceChart } from './Instrument/getIntraDayPriceChart';
export type { InstrumentSupervisorMsg } from './Instrument/getSupervisorMsg';

export type { MapDataRow } from './MarketMap/getMarketMap';

export type {
  TraderType,
  WatchTradersTypeData,
  WatchTradersType
} from './MarketWatch/getClientTypeAll';
export type { GetWatchPriceParams, WatchPrice } from './MarketWatch/getPriceData';
export type { WatchStatsData, WatchStats } from './MarketWatch/getWatchStats';
