import { RequestOptions, SafeReturn } from "../request";
export type GetBoardMembersParams = {
    symbol: string;
};
export type BoardMember = {
    PreviousMemberName: string;
    MemberName: string;
    NationalCode_RegisterNumber: string;
    PreviuosAgent: string;
    Agent: string;
    AgentNationalCode: string | null;
    Designation: string;
    Charged: boolean;
    EducationDegree: string;
};
export type BoardMembersHistory = {
    type: 'BoardMembers';
    AssemblyDate: string;
    SessionDate: string;
    BoardMembers: BoardMember[];
} | {
    type: 'DirectorManager';
    MeetingDate: string;
    SessionDate: string;
    DirectorManager: {
        Name: string;
        NationalCode: string;
        EducationDegree: string;
    };
};
export default function getBoardMembersHistory(params: GetBoardMembersParams, options?: RequestOptions): Promise<SafeReturn<BoardMembersHistory[]>>;
