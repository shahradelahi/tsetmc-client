import { RequestOptions, SafeReturn } from "../request";
export default function getContactInfo(params: GetContactInfoParams, options?: RequestOptions): Promise<SafeReturn<ContactInfo>>;
export type GetContactInfoParams = {
    insId: string;
};
export type ContactInfo = {
    [key: string]: string;
};
