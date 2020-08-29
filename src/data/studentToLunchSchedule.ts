import { DayType } from "../common/Constants";

export interface IStdToLunchSchType {
  A?: 'LA'|'LB'|'LC';
  B?: 'LA'|'LB'|'LC';
}
export const studentToLunchSchedule: Map<string, IStdToLunchSchType> = new Map([
  ["MAYANKGUPTA", { A: "LA", B: "LC" }],
]);
