import { request, RequestOptions, SafeReturn } from "../request";
import deepmerge from "deepmerge";
import { faToAr } from "../utils";

export type GetBoardMembersParams = {
  symbol: string
}

export type BoardMember = {
  PreviousMemberName: string
  MemberName: string
  NationalCode_RegisterNumber: string
  PreviuosAgent: string
  Agent: string
  AgentNationalCode: string | null
  Designation: string
  Charged: boolean
  EducationDegree: string
}

export type BoardMembersHistory = {
  type: 'BoardMembers'
  AssemblyDate: string
  SessionDate: string
  BoardMembers: BoardMember[]
} | {
  type: 'DirectorManager'
  MeetingDate: string
  SessionDate: string
  DirectorManager: {
    Name: string
    NationalCode: string
    EducationDegree: string
  }
}

export default async function getBoardMembersHistory(params: GetBoardMembersParams, options: RequestOptions = {}): Promise<SafeReturn<BoardMembersHistory[]>> {
  try {
    const {
      data: response,
      error
    } = await request('http://old.tsetmc.com/tsev2/data/CodalContent.aspx', deepmerge({
      params: {
        s: faToAr(params.symbol),
        r: '12'
      }
    }, options))

    if (error) {
      return { error }
    }

    if (!response || !response.data) {
      return { error: 'NoData' }
    }

    const ds = eval(response.data)
    const result: BoardMembersHistory[] = []

    for (const item of ds) {
      if (item[4].Root.AssemblyDate) {
        result.push({
          type: 'BoardMembers',
          AssemblyDate: item[4].Root.AssemblyDate,
          SessionDate: item[4].Root.BoardMembersSessionDate,
          BoardMembers: item[4].Root.BoardMembers.BoardMember.map((member: any) => ({
            ...member,
            Charged: member.Charged === 'موظف' || member.Charged === 'True'
          }))
        })
      }
      if (item[4].Root.DirectorManager) {
        result.push({
          type: 'DirectorManager',
          MeetingDate: item[1],
          SessionDate: item[2],
          DirectorManager: {
            Name: item[4].Root.DirectorManager.DirectorManagerName,
            NationalCode: item[4].Root.DirectorManager.DirectorManagerNationalCode,
            EducationDegree: item[4].Root.DirectorManager.DirectorManagerEducationDegree
          }
        })
      }
    }

    return { data: result }

  } catch (e) {
    return { error: e }
  }
}
