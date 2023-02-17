import { request } from "../request"
import { Group } from "./types";

export * from './types'


export async function getAllGroups(): Promise<Group[]> {
   return new Promise<Group[]>(async (resolve, reject) => {

      const response = await request({
         url: 'http://cdn.tsetmc.com/api/StaticData/GetStaticData',
         method: "GET"
      }).catch(reject)

      if (!response) return

      resolve(response.json()['staticData'])

   })
}

