import { request, SafeReturn } from "../request";

export type InstrumentSupervisorMsg = {
   id: number
   dEven: number
   hEven: number
   title: string
   description: string
   flow: number
}

export type GetSupervisorMessagesParams = {
   insId: string
}

export default async function getSupervisorMsg(params: GetSupervisorMessagesParams): Promise<SafeReturn<InstrumentSupervisorMsg[]>> {
   try {
      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/Msg/GetMsgByInsCode/${params.insId}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      return {
         data: response.data['msg'].map((row: any) => ({
            id: row['tseMsgIdn'],
            dEven: row['dEven'],
            hEven: row['hEven'],
            title: row['tseTitle'],
            description: row['tseDesc'],
            flow: row['flow']
         }))
      }

   } catch (e) {
      return { error: e }
   }
}
