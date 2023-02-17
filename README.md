# TseTmc Client Library for NodeJS

This library is for getting tehran stock market data from the [TseTmc.com] website.

## Installation

```bash
npm install tsetmc-client
```

## Usage

```javascript
const tsetmc = require('tsetmc-client');

const parameters = {
   symbolId: '35331248532537562',
   dEven: 20230201 // Date in format of YYYYMMDD
} 

tsetmc.DayDetails.getPriceData(parameters).then((data) => {
  console.log(data); // {"priceChange": 740.00, "low":15630.00, ...}
});
```

## API

### DayDetails

This object contains with methods for getting data from the [DayDetails](http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=35331248532537562#) page.

* `getPriceOverview({ symbolId, dEven })`: [`Promise<PriceOverviewData>`](docs/types.md#PriceOverviewData)
* `getPriceData({ symbolId, dEven })`: [`Promise<PriceDataRow[]>`](docs/types.md#PriceDataRow)
* `getOrderBookData({ symbolId, dEven })`: [`Promise<OrderBookDataRow[]>`](docs/types.md#OrderBookDataRow)
* `getTrades({ symbolId, dEven, summarize })`: [`Promise<TradeDataRow[]>`](docs/types.md#TradeDataRow)
* `getTradersType({ symbolId, dEven })`: [`Promise<TradersTypeData[]>`](docs/types.md#TradersTypeData)
* `getThresholds({ symbolId, dEven })`: [`Promise<ThresholdsData[]>`](docs/types.md#ThresholdsData)
* `getShareholders({ symbolId, dEven })`: [`Promise<ShareHolderDataRow>`](docs/types.md#ShareHolderDataRow)

### Group

This is for getting list of available symbol groups

* `getAllGroups()`: [`Promise<Group[]>`](docs/types.md#Group)


### MarketMap

This object contains with methods for getting data from the [MarketMap](http://main.tsetmc.com/marketmap) page.

* `getMarketMap()`: [`Promise<MapDataRow[]>`](docs/types.md#MapDataRow)

## Types

For more information about the types, see [docs/types.md](docs/types.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[TseTmc.com]: http://www.tsetmc.com


## Donate/Support

If you like this project, please consider donating to support it's development.

[![Give a Star](https://img.shields.io/github/stars/shahradelahi/tsetmc-client.svg?style=social&label=Star)](https://github.com/shahradelahi/tsetmc-client)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/shahradelahi)
[![Contact for Further Support](https://img.shields.io/badge/Contact%20for%20Further%20Support-Telegram-blue.svg)](https://t.me/shahradelahi)


