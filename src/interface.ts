export interface GetDayDetailsCommonParams {
  insId: string;
  dEven: number;
}

export type Serializable = string | number | boolean | null;

export type SerializableRecord = Record<string, Serializable>;
