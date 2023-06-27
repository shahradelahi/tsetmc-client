import { describe, expect, test } from '@jest/globals'
import { DayDetails, Group, Instrument, MapType, MarketMap, MarketWatch } from '../src/index'


const symbol = {
  id: '35331248532537562',
  name: 'اردستان'
}

const commonTimeOut = 20000

describe('Day Details', () => {

  test('Get Price Overview Data', async () => {

    const { data } = await DayDetails.getPriceOverview({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()
    expect(data).toHaveProperty('volume')
    expect(data!.volume).toEqual(6794682)

    const { error } = await DayDetails.getPriceOverview({ insId: '00000', dEven: 12341212 })
    expect(error).toBeDefined()


  }, commonTimeOut)

  test('Get Price Data', async () => {

    const { data } = await DayDetails.getPriceData({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Order Book Data', async () => {

    const { data } = await DayDetails.getOrderBook({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Trades', async () => {

    const { data } = await DayDetails.getTrades({ insId: symbol.id, dEven: 20230201, summarize: true })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Traders Type', async () => {

    const { data } = await DayDetails.getTradersType({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

  test('Get Thresholds', async () => {

    const { data } = await DayDetails.getThresholds({ insId: symbol.id, dEven: 20230201 })

    expect(data).toBeDefined()

  }, commonTimeOut)

})

describe('Group', () => {

  test('Get All Groups', async () => {

    const { data, error } = await Group.getAllGroups()

    expect(data).toBeDefined()
    expect(error).toBeUndefined()
    expect(data!.length).toBeGreaterThan(50)
    expect(data![0]).toHaveProperty('id')

  }, commonTimeOut)

})

describe('Market Map', () => {

  test('Get Market Map Data', async () => {

    const { data, error } = await MarketMap.getMarketMap({
      mapType: MapType.MarketValue
    })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()
    expect(data!.length).toBeGreaterThan(100)
    expect(data![0]).toHaveProperty('id')

  }, commonTimeOut)

})

describe('Market Watch', () => {

  test('Get Price Data', async () => {

    const { data, error } = await MarketWatch.getPriceData(undefined, {
      timeout: 10000
    })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(100)
    expect(data![0]).toHaveProperty('symbolId')

  }, commonTimeOut)

})

describe('Instrument', () => {

  test('Get Board Members', async () => {

    const { data, error } = await Instrument.getBoardMembersHistory({ symbol: 'ونوين' })

    // [
    //       {
    //         "AssemblyDate": "1401/11/26",
    //         "SessionDate": "1401/11/26",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "عليرضا بلگوري",
    //             "MemberName": "عليرضا بلگوري",
    //             "NationalCode_RegisterNumber": "2594211826",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "کارشناسي ارشد"
    //           },
    //           {
    //             "PreviousMemberName": "مرتضي معيري",
    //             "MemberName": "مرتضي معيري",
    //             "NationalCode_RegisterNumber": "2002254680",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           },
    //           {
    //             "PreviousMemberName": "محسن زرندي مقدم",
    //             "MemberName": "محسن زرندي مقدم",
    //             "NationalCode_RegisterNumber": "0071702385",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           },
    //           {
    //             "PreviousMemberName": "محمدباقر محمدزاده مقدم",
    //             "MemberName": "محمدباقر محمدزاده مقدم",
    //             "NationalCode_RegisterNumber": "0919321313",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1401/11/26",
    //         "SessionDate": "1401/11/26",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "عليرضا بلگوري",
    //             "MemberName": "عليرضا بلگوري",
    //             "NationalCode_RegisterNumber": "2594211826",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "کارشناسي ارشد"
    //           },
    //           {
    //             "PreviousMemberName": "مرتضي معيري",
    //             "MemberName": "مرتضي معيري",
    //             "NationalCode_RegisterNumber": "2002254680",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           },
    //           {
    //             "PreviousMemberName": "محسن زرندي مقدم",
    //             "MemberName": "محسن زرندي مقدم",
    //             "NationalCode_RegisterNumber": "0071702385",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           },
    //           {
    //             "PreviousMemberName": "محمدباقر محمدزاده مقدم",
    //             "MemberName": "محمدباقر محمدزاده مقدم",
    //             "NationalCode_RegisterNumber": "0919321313",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1398/05/27",
    //         "SessionDate": "1399/02/23",
    //         "BoardMembers": [
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "کارشناس ارشد حسابداري",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "2594211826",
    //             "MemberName": "عليرضا بلگوري",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "عليرضا بلگوري",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "دکتراي حسابداري",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "2002254680",
    //             "MemberName": "مرتضي معيري",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "مرتضي معيري",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "دکتراي مديريت بازاريابي",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "1289310696",
    //             "MemberName": "غلامحسين احمدي",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "غلامحسين احمدي",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "کارشناس  بانکداري",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "0046244417",
    //             "MemberName": "علي اماني",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "علي اماني",
    //             "Designation": "1"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "کارشناس ارشد مديريت دولتي",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "1090908792",
    //             "MemberName": "محمدعلي ايزدي",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "محمدعلي ايزدي",
    //             "Designation": "2"
    //           }
    //         ]
    //       },
    //       {
    //         "MeetingDate": "99/3/13 22:01",
    //         "SessionDate": "99/3/13 22:01",
    //         "DirectorManager": {
    //           "DirectorManagerName": "عليرضا بلگوري",
    //           "DirectorManagerNationalCode": "2594211826",
    //           "DirectorManagerEducationDegree": "کارشناس ارشد حسابداري"
    //         }
    //       },
    //       {
    //         "AssemblyDate": "1398/05/27",
    //         "SessionDate": "1398/06/02",
    //         "BoardMembers": [
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "فوق ليسانس حسابداري",
    //             "Charged": true,
    //             "NationalCode_RegisterNumber": "2594211826",
    //             "MemberName": "عليرضا بلگوري",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "عليرضا بلگوري",
    //             "Designation": "1"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "دکتري حسابداري",
    //             "Charged": false,
    //             "NationalCode_RegisterNumber": "2002254680",
    //             "MemberName": "مرتضي معيري",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "مرتضي معيري",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "فوق ليسانس مديريت بازرگاني",
    //             "Charged": false,
    //             "NationalCode_RegisterNumber": "1289310696",
    //             "MemberName": "غلامحسين احمدي",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "غلامحسين احمدي",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "ليسانس بانکداري",
    //             "Charged": false,
    //             "NationalCode_RegisterNumber": "0046244417",
    //             "MemberName": "علي اماني",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "علي اماني",
    //             "Designation": "0"
    //           },
    //           {
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "EducationDegree": "فوق ليسانس مديريت دولتي",
    //             "Charged": false,
    //             "NationalCode_RegisterNumber": "1090908792",
    //             "MemberName": "محمدعلي ايزدي",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "PreviousMemberName": "محمدعلي ايزدي",
    //             "Designation": "2"
    //           }
    //         ]
    //       },
    //       {
    //         "MeetingDate": "98/6/2 20:53",
    //         "SessionDate": "98/6/2 20:53",
    //         "DirectorManager": {
    //           "DirectorManagerName": "عليرضا بلگوري",
    //           "DirectorManagerNationalCode": "2594211826",
    //           "DirectorManagerEducationDegree": "فوق ليسانس حسابداري"
    //         }
    //       },
    //       {
    //         "MeetingDate": "96/10/18 16:24",
    //         "SessionDate": "96/10/18 16:24",
    //         "DirectorManager": {
    //           "DirectorManagerName": "عليرضا بلگوري",
    //           "DirectorManagerNationalCode": "2594211826",
    //           "DirectorManagerEducationDegree": "فوق ليسانس"
    //         }
    //       },
    //       {
    //         "MeetingDate": "96/9/29 19:56",
    //         "SessionDate": "96/9/29 19:56",
    //         "DirectorManager": {
    //           "DirectorManagerName": "عليرضا بلگوري",
    //           "DirectorManagerNationalCode": "2594211826",
    //           "DirectorManagerEducationDegree": "کارشناسي ارشد"
    //         }
    //       },
    //       {
    //         "AssemblyDate": "1395/07/10",
    //         "SessionDate": "1395/07/14",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "فرهاد عربلو",
    //             "MemberName": "فرهاد عربلو",
    //             "NationalCode_RegisterNumber": "0046995234",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "کارشناس ارشد حسابداري"
    //           },
    //           {
    //             "PreviousMemberName": "اصغر پور متين",
    //             "MemberName": "اصغر پور متين",
    //             "NationalCode_RegisterNumber": "1281619086",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "کارشناس ارشد علوم اقتصادي"
    //           },
    //           {
    //             "PreviousMemberName": "نصرت اله شهبازي",
    //             "MemberName": "نصرت اله شهبازي",
    //             "NationalCode_RegisterNumber": "3369507749",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "کارشناس ارشد حقوق جزا"
    //           },
    //           {
    //             "PreviousMemberName": "سيامک دولتي",
    //             "MemberName": "سيامک دولتي",
    //             "NationalCode_RegisterNumber": "3762128634",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکتراي مديريت بازرگاني"
    //           },
    //           {
    //             "PreviousMemberName": "نصرت الله روشن ضمير",
    //             "MemberName": "نصرت الله روشن ضمير",
    //             "NationalCode_RegisterNumber": "4569807755",
    //             "PreviuosAgent": "فاقد نماینده",
    //             "Agent": "فاقد نماینده",
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "کارشناس علوم اقتصادي"
    //           }
    //         ]
    //       },
    //       {
    //         "MeetingDate": "95/8/5 12:56",
    //         "SessionDate": "95/8/5 12:56",
    //         "DirectorManager": {
    //           "DirectorManagerName": "علي اصغر سفري",
    //           "DirectorManagerNationalCode": "1582035334",
    //           "DirectorManagerEducationDegree": "کارشناس ارشد MBA"
    //         }
    //       },
    //       {
    //         "AssemblyDate": "1392/04/23",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدمجتبي فهيم هاشمي",
    //             "Agent": "فرهاد حنيفي",
    //             "AgentNationalCode": "3255238188",
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکترا مديريت مالي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": null,
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": null
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "ناصر صنعتي نژاد فرد",
    //             "Agent": "محمد ابراهيم منصور خاکي",
    //             "AgentNationalCode": "0043934544",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "دکترا مديريت استراتژيک"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": "بهرام فتحعلي",
    //             "AgentNationalCode": "0040329933",
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "فوق ليسانس حسابداري و علوم بانکي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": "اصغر عارفي",
    //             "Agent": "مهران شريفي",
    //             "AgentNationalCode": "0047542195",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس حسابداري"
    //           }
    //         ]
    //       },
    //       {
    //         "MeetingDate": "92/8/5 14:54",
    //         "SessionDate": "92/8/5 14:54",
    //         "DirectorManager": {
    //           "DirectorManagerName": "حسن معتمدي",
    //           "DirectorManagerNationalCode": "5889471996",
    //           "DirectorManagerEducationDegree": "کارشناسي ارشد مديريت (MBA)"
    //         }
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": "سيدمجتبي فهيم هاشمي",
    //             "AgentNationalCode": "0044215991",
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس رياضيات"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": "سيد محمد صدر هاشمي نژاد",
    //             "AgentNationalCode": "5839761206",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس مديريت بازرگاني"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "ناصر صنعتي نژاد فرد",
    //             "Agent": "ناصر صنعتي نژاد فرد",
    //             "AgentNationalCode": "0033849420",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس علوم اقتصادي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": "بهرام فتحعلي",
    //             "AgentNationalCode": "0040329933",
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "فوق ليسانس حسابداري و علوم بانکي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": "اصغر عارفي",
    //             "Agent": "اصغر عارفي",
    //             "AgentNationalCode": "4500746358",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکترا مديريت بازرگاني"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": "سيدعبدالحسين ثابت",
    //             "AgentNationalCode": "1261617843",
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس مديريت"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": "سيد محمد صدر هاشمي نژاد",
    //             "AgentNationalCode": "5839761206",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس مديريت بازرگاني"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "ناصر صنعتي نژاد فرد",
    //             "Agent": "ناصر صنعتي نژاد فرد",
    //             "AgentNationalCode": "0033849420",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس علوم اقتصادي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": "بهرام فتحعلي",
    //             "AgentNationalCode": "0040329933",
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "فوق ليسانس حسابداري و علوم بانکي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": null,
    //             "Agent": "اصغر عارفي",
    //             "AgentNationalCode": "4500746358",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکترا مديريت بازرگاني"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس مديريت"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس مديريت بازرگاني"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "ناصر صنعتي نژاد فرد",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس علوم اقتصادي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "فوق ليسانس حسابداري و علوم بانکي"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": "اصغر عارفي",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکترا مديريت بازرگاني"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "ناصر صنعتي نژاد فرد",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": null,
    //             "Agent": "اصغر عارفي",
    //             "AgentNationalCode": "4500746358",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "دکترا"
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": "سيدعبدالحسين ثابت",
    //             "AgentNationalCode": "1261617843",
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": "سيد محمد صدر هاشمي نژاد",
    //             "AgentNationalCode": "5839761206",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "علي معنوي راد",
    //             "Agent": "ناصر صنعتي نژاد فرد",
    //             "AgentNationalCode": "0033849420",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": "بهرام فتحعلي",
    //             "AgentNationalCode": "0040329933",
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": null,
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": null
    //           }
    //         ]
    //       },
    //       {
    //         "AssemblyDate": "1390/04/28",
    //         "BoardMembers": [
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "MemberName": "شرکت سرمايه گذاري گروه صنايع بهشهر ايران",
    //             "NationalCode_RegisterNumber": "122763",
    //             "PreviuosAgent": "سيدعبدالحسين ثابت",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "نایب رئیس هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "فوق ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "MemberName": "شرکت سرمايه گذاري سامانه استراتوس",
    //             "NationalCode_RegisterNumber": "168646",
    //             "PreviuosAgent": "سيد محمد صدر هاشمي نژاد",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "MemberName": "شرکت سرمايه گذاري ساختمان گروه صنايع بهشهر",
    //             "NationalCode_RegisterNumber": "122764",
    //             "PreviuosAgent": "علي معنوي راد",
    //             "Agent": "ناصر صنعتي نژاد فرد",
    //             "AgentNationalCode": "0033849420",
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": "ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت تامين مسکن جوانان",
    //             "MemberName": "شرکت تامين مسکن جوانان",
    //             "NationalCode_RegisterNumber": "174842",
    //             "PreviuosAgent": "بهرام فتحعلي",
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "رئیس هیئت مدیره",
    //             "Charged": true,
    //             "EducationDegree": "فوق ليسانس"
    //           },
    //           {
    //             "PreviousMemberName": "شرکت نوسازي و ساختمان تهران",
    //             "MemberName": "شرکت نوسازي و ساختمان تهران",
    //             "NationalCode_RegisterNumber": "124884",
    //             "PreviuosAgent": null,
    //             "Agent": null,
    //             "AgentNationalCode": null,
    //             "Designation": "عضو هیئت مدیره",
    //             "Charged": false,
    //             "EducationDegree": null
    //           }
    //         ]
    //       }
    //     ]

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)

    data?.forEach((item) => {
      expect(item).toHaveProperty('SessionDate')
      if (item.type === 'BoardMembers') {
        expect(item).toHaveProperty('AssemblyDate')
        expect(item).toHaveProperty('BoardMembers')
      }
      if (item.type === 'DirectorManager') {
        expect(item).toHaveProperty('DirectorManager')
        expect(item.DirectorManager).toHaveProperty('EducationDegree')
        expect(item.DirectorManager).toHaveProperty('Name')
        expect(item.DirectorManager).toHaveProperty('NationalCode')
      }
    })

  }, commonTimeOut)

  test('Get DPS Data', async () => {

    const { data, error } = await Instrument.getDPSData({ symbol: 'ونوين' })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('publishDate')
    expect(data![0]).toHaveProperty('meetingDate')
    expect(data![0]).toHaveProperty('fiscalYear')
    expect(data![0]).toHaveProperty('profitAfterTax')
    expect(data![0]).toHaveProperty('profitToAllocate')
    expect(data![0]).toHaveProperty('profitAccumulated')
    expect(data![0]).toHaveProperty('cashProfitPerShare')

  }, commonTimeOut)

  test('Get Instrument Info', async () => {

    const { data, error } = await Instrument.getInstrumentInfo({ insId: symbol.id })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.insCode).toEqual(symbol.id)
    expect(data!.instrumentID.startsWith('IR')).toBeTruthy()

  }, commonTimeOut)

  test('Get Intra Day Price Chart', async () => {

    const { data, error } = await Instrument.getIntraDayPriceChart({ insId: '47302318535715632' })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('time')

  }, commonTimeOut)

  test('Get Supervisor Message', async () => {

    const { data, error } = await Instrument.getSupervisorMsg({ insId: symbol.id })

    expect(data).toBeDefined()
    expect(error).toBeUndefined()

    expect(data!.length).toBeGreaterThan(0)
    expect(data![0]).toHaveProperty('id')
    expect(data![0]).toHaveProperty('title')

  }, commonTimeOut)

})
