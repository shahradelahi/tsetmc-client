### PriceOverviewData

```typescript
interface PriceOverviewData {
  priceChange: number;
  priceChangePercent: number;
  priceChangePercentString: string;
  priceChangeString: string;
  priceLast: number;
  priceLastString: string;
  priceMax: number;
  priceMaxString: string;
  priceMin: number;
  priceMinString: string;
  priceOpen: number;
  priceOpenString: string;
  priceYesterday: number;
  priceYesterdayString: string;
  volume: number;
  volumeString: string;
}
```

### PriceDataRow

```typescript
interface PriceDataRow {
  time: Date;
  close: number;
  last: number;
  value: number;
  volume: number;
  count: number;
}
```

### OrderBookDataRow

```typescript
interface OrderBookDataRow {
  time: Date;
  buyRows: OrderBookRow[];
  sellRows: OrderBookRow[];
}
```

### OrderBookRow

```typescript
interface OrderBookRow {
  time: Date;
  count: number;
  price: number;
  volume: number;
}
```

### TradeDataRow

```typescript
interface TradeDataRow {
  time: Date;
  price: number;
  volume: number;
}
```

### TradersTypeData

```typescript
interface TradersTypeData {
  legal: TradersTypeInfo;
  real: TradersTypeInfo;
}
```

### TradersTypeInfo

```typescript
interface TradersTypeInfo {
  buy: TradersTypeSubInfo;
  sell: TradersTypeSubInfo;
}
```

### TradersTypeSubInfo

```typescript
interface TradersTypeSubInfo {
  count: number;
  volume: number;
  value: number;
}
```

### ThresholdsData

```typescript
interface ThresholdsData {
  rangeMax: number;
  rangeMin: number;
}
```

### ShareHolderDataRow

```typescript
interface ShareHolderDataRow {
  id: string;
  date: Date;
  shareholder: ShareHolder;
  count: number;
  percentage: number;
}
```

### ShareHolder

```typescript
interface ShareHolder {
  id: string;
  name: string;
}
```

### Group

```typescript
interface Group {
  id: number;
  code: number;
  name: string;
  description: string;
  type: GroupType;
}
```

### GroupType

```typescript
enum GroupType {
  PAPER = 'PAPER',
  INDUSTRY = 'INDUSTRIAL'
}
```

### MapDataRow

```typescript
interface MapDataRow {
  id: string;
  shortName: string;
  longName: string;
  close: number;
  last: number;
  volume: number;
  value: number;
  count: number;
  groupName: string;
  color: string;
  priceChangePercent: number;
  percent: number;
}
```
