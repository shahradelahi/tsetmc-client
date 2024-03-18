[TseTmc.com]: http://www.tsetmc.com
[ShahradElahi]: https://github.com/shahradelahi

# TseTmc Client Library for NodeJS

[![npm](https://img.shields.io/npm/v/tsetmc-client)](https://www.npmjs.com/package/tsetmc-client)
[![npm bundle size](https://packagephobia.now.sh/badge?p=tsetmc-client)](https://packagephobia.now.sh/result?p=tsetmc-client)

This library is for getting tehran stock market data from the [TseTmc.com] website.

## Installation

```bash
npm install tsetmc-client
```

## Usage

```javascript
import { DayDetails } from 'tsetmc-client';

const parameters = {
  insId: '35331248532537562',
  dEven: 20230201 // Date in format of YYYYMMDD
};

DayDetails.getPriceData(parameters).then((data) => {
  console.log(data); // {"priceChange": 740.00, "low":15630.00, ...}
});
```

### 📚 Documentation

For all configuration options, please see [the API docs](https://paka.dev/npm/tsetmc-client/api).

## License

[MIT](LICENSE) © [Shahrad Elahi](ShahradElahi)
