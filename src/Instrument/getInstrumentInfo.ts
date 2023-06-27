import { request, RequestOptions, SafeReturn } from "../request";


export type InstrumentInfo = {
  eps: InstrumentEPS
  sector: InstrumentSector
  staticThreshold: InstrumentStaticThreshold
  minWeek: number
  maxWeek: number
  minYear: number
  maxYear: number
  qTotTran5JAvg: number
  kAjCapValCpsIdx: string
  dEven: number
  topInst: number
  faraDesc: string
  contractSize: number
  nav: number
  underSupervision: number
  cValMne: string
  lVal18: string
  cSocCSAC: string
  lSoc30: string
  yMarNSC: string
  yVal: string
  insCode: string
  lVal30: string
  lVal18AFC: string
  flow: number
  cIsin: string
  zTitad: number
  baseVol: number
  instrumentID: string
  cgrValCot: string
  cComVal: string
  lastDate: number
  sourceID: number
  flowTitle: string
  cgrValCotTitle: string
}

export type InstrumentEPS = {
  epsValue: number | null
  estimatedEPS: string
  sectorPE: number
  psr: number
}

export type InstrumentSector = {
  dEven: number
  cSecVal: string
  lSecVal: string
}

export type InstrumentStaticThreshold = {
  insCode: string | null
  dEven: number
  hEven: number
  psGelStaMax: number
  psGelStaMin: number
}

export type GetInstrumentInfoParams = {
  insId: string
}

export default async function getInstrumentInfo(params: GetInstrumentInfoParams, options: RequestOptions = {}): Promise<SafeReturn<InstrumentInfo>> {
  try {
    const {
      data: response,
      error
    } = await request(`http://cdn.tsetmc.com/api/Instrument/GetInstrumentInfo/${params.insId}`, options)

    if (error) return { error }
    if (!response) return ({ error: "No response" })

    return { data: response.data['instrumentInfo'] }

  } catch (e) {
    return { error: e }
  }
}
