import { request, RequestOptions, SafeReturn } from "../request";
import deepmerge from "deepmerge";

export type SupervisionDetail = {
  status: string
  reason: string
  description: string
  date: Date
}

export default async function getSupervisionDetail(insId: string, options: RequestOptions = {}): Promise<SafeReturn<SupervisionDetail>> {
  try {

    const {
      data: response,
      error
    } = await request('http://old.tsetmc.com/tsev2/data/Supervision.aspx', deepmerge<RequestOptions>({
      params: {
        i: insId
      }
    }, options))

    if (error) {
      return { error }
    }

    if (!response || !response.data) {
      return { error: 'NoData' }
    }

    const [ status, reason, description, date ] = response.data.split('#')

    return {
      data: {
        status: UnderSupervision(status),
        reason,
        description,
        date: new Date(date)
      }
    }

  } catch (e) {
    return { error: e }
  }
}

function UnderSupervision(status: string): string {
  switch (status) {
    default:
    case '0':
      return ''
    case '1':
      return 'مشمول فرآیند تعلیق'
    case '2':
      return 'معامله تحت احتیاط'
    case '3':
      return 'تعلیق شده'
  }
}
