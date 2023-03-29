import { request, SafeReturn } from "../request"
import { Group } from "./types";

export * from './types'


export async function getAllGroups(): Promise<SafeReturn<Group[]>> {
   try {
      const {
         data: response,
         error
      } = await request('http://cdn.tsetmc.com/api/StaticData/GetStaticData')

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      return {
         data: response.data['staticData']
      }
   } catch (e) {
      return { error: e }
   }
}

