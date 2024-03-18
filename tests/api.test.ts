import {
  DayDetails,
  Group,
  Instrument,
  MapType,
  MarketMap,
  MarketWatch,
  TseTmc
} from 'tsetmc-client';
import { expect } from 'chai';

const symbol = {
  id: '35331248532537562',
  name: 'اردستان'
};

describe('Day Details', () => {
  afterEach(async () => await delay(1000));

  it('Get Price Overview Data', async () => {
    const { data } = await DayDetails.getPriceOverview({ insId: symbol.id, dEven: 20230201 });

    !expect(data).not.be.undefined;
    expect(data).to.have.property('volume');
    expect(data!.volume).to.eq(6794682);

    const { error } = await DayDetails.getPriceOverview({ insId: '00000', dEven: 12341212 });
    expect(error).not.be.undefined;
  });

  it('Get Price Data', async () => {
    const { data } = await DayDetails.getPriceData({ insId: symbol.id, dEven: 20230201 });

    expect(data).not.be.undefined;
  });

  it('Get Order Book Data', async () => {
    const { data } = await DayDetails.getOrderBook({ insId: symbol.id, dEven: 20230201 });

    expect(data).not.be.undefined;
  });

  it('Get Trades', async () => {
    const { data } = await DayDetails.getTrades({
      insId: symbol.id,
      dEven: 20230201,
      summarize: true
    });

    expect(data).not.be.undefined;
  });

  it('Get Traders Type', async () => {
    const { data } = await DayDetails.getTradersType({ insId: symbol.id, dEven: 20230201 });

    expect(data).not.be.undefined;
  });

  it('Get Thresholds', async () => {
    const { data } = await DayDetails.getThresholds({ insId: symbol.id, dEven: 20230201 });

    expect(data).not.be.undefined;
  });
});

describe('Group', () => {
  afterEach(async () => await delay(1000));

  it('Get All Groups', async () => {
    const { data, error } = await Group.getAllGroups();

    expect(data).not.be.undefined;
    expect(error).be.undefined;
    expect(data!.length).to.gt(50);
    expect(data![0]).to.have.property('id');
  });
});

describe('Market Map', () => {
  afterEach(async () => await delay(1000));

  it('Get Market Map Data', async () => {
    const { data, error } = await MarketMap.getMarketMap({
      mapType: MapType.MarketValue
    });

    expect(data).not.be.undefined;
    expect(error).be.undefined;
    expect(data!.length).to.gt(100);
    expect(data![0]).to.have.property('id');
  });
});

describe('Market Watch', () => {
  afterEach(async () => await delay(1000));

  it('Get Price Data', async () => {
    const { data, error } = await MarketWatch.getPriceData(undefined, {
      timeout: 10000
    });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.length).to.gt(100);
    expect(data![0]).to.have.property('symbolId');
  });

  it('Get Client Type All', async () => {
    const { data, error } = await MarketWatch.getClientTypeAll();

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    data &&
      Object.entries(data).forEach(([key, value]) => {
        expect(key).not.be.undefined;
        expect(value).not.be.undefined;
        expect(value).to.have.property('legal');
        expect(value).to.have.property('real');
      });
  });

  it('Get Watch Stats', async () => {
    const { data, error } = await TseTmc.MarketWatch.getWatchStats();
    console.log(data!['72044846109864381']);

    Object.entries(data!).forEach(([key, value]) => {
      expect(key).not.be.undefined;
      expect(value).not.be.undefined;
      expect(value).to.have.property('trades');
      expect(value).to.have.property('negative_days');
      expect(value).to.have.property('no_trade_days');
      expect(value).to.have.property('positive_days');
      expect(value).to.have.property('with_trade_days');
      expect(value).to.have.property('company_value');
      expect(value).to.have.property('open_days');
      expect(value).to.have.property('closed_days');
      expect(value).to.have.property('client_type');
    });
  });
});

describe('Instrument', () => {
  afterEach(async () => await delay(1000));

  it('Get Board Members', async () => {
    const { data, error } = await Instrument.getBoardMembersHistory({ symbol: 'ونوين' });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.length).to.gt(0);

    data?.forEach((item) => {
      expect(item).to.have.property('SessionDate');
      if (item.type === 'BoardMembers') {
        expect(item).to.have.property('AssemblyDate');
        expect(item).to.have.property('BoardMembers');
      }
      if (item.type === 'DirectorManager') {
        expect(item).to.have.property('DirectorManager');
        expect(item.DirectorManager).to.have.property('EducationDegree');
        expect(item.DirectorManager).to.have.property('Name');
        expect(item.DirectorManager).to.have.property('NationalCode');
      }
    });
  });

  it('Get DPS Data', async () => {
    const { data, error } = await Instrument.getDPSData({ symbol: 'ونوين' });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.length).to.gt(0);
    expect(data![0]).to.have.property('publishDate');
    expect(data![0]).to.have.property('meetingDate');
    expect(data![0]).to.have.property('fiscalYear');
    expect(data![0]).to.have.property('profitAfterTax');
    expect(data![0]).to.have.property('profitToAllocate');
    expect(data![0]).to.have.property('profitAccumulated');
    expect(data![0]).to.have.property('cashProfitPerShare');
  });

  it('Get Instrument Info', async () => {
    const { data, error } = await Instrument.getInstrumentInfo({ insId: symbol.id });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.insCode).to.eq(symbol.id);
    expect(data!.instrumentID.startsWith('IR')).to.true;
  });

  it('Get Intra Day Price Chart', async () => {
    const { data, error } = await Instrument.getIntraDayPriceChart({
      insId: '47302318535715632'
    });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.length).to.gt(0);
    expect(data![0]).to.have.property('time');
  });

  it('Get Supervisor Message', async () => {
    const { data, error } = await Instrument.getSupervisorMsg({ insId: symbol.id });

    expect(data).not.be.undefined;
    expect(error).be.undefined;

    expect(data!.length).to.gt(0);
    expect(data![0]).to.have.property('id');
    expect(data![0]).to.have.property('title');
  });
});

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
