import { RequestOptions, SafeReturn } from "../request";
export type InstrumentSupervisorMsg = {
    id: number;
    dEven: number;
    hEven: number;
    title: string;
    description: string;
    flow: number;
};
export type GetSupervisorMessagesParams = {
    insId: string;
};
export default function getSupervisorMsg(params: GetSupervisorMessagesParams, options?: RequestOptions): Promise<SafeReturn<InstrumentSupervisorMsg[]>>;
