import { request } from "../request"
import { Group } from "./types";

export * from './types'


export async function getAllGroups(): Promise<Group[]> {
   const response = await request<Group[]>({
      url: 'http://cdn.tsetmc.com/api/StaticData/GetStaticData',
      method: "GET"
   })
   return response.json()['staticData']
}

