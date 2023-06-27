import { request, RequestOptions, SafeReturn } from "../request";

export default async function getAllGroups(options: RequestOptions = {}): Promise<SafeReturn<GroupData[]>> {
  try {
    const {
      data: response,
      error
    } = await request('http://cdn.tsetmc.com/api/StaticData/GetStaticData', options)

    if (error) return { error }
    if (!response) return ({ error: "No response" })

    return {
      data: response.data['staticData']
    }
  } catch (e) {
    return { error: e }
  }
}

export enum GroupType {
  PAPER = 'PAPER',
  INDUSTRY = 'INDUSTRIAL',
}

export interface GroupData {
  id: number
  code: number
  name: string
  description: string
  type: GroupType
}
