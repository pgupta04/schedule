export interface IType {
  type: string,
  time:string,
  period?:number,
  subject?:string,

}
export const type125:IType[] = [
  {
    type: 'C',
    time:'7:50 AM-9:25 AM',
  },
  {
    type: 'C',
    time:'9:30 AM-11:05 AM',
  },
  {
    type: 'CL',
    time:"11:10 AM-1:10 PM",
  },
  {
    type: 'C',
    time:"1:15 PM-2:50 PM",
  },
];

export const type34:IType[]  = [
  {
    type: 'C',
    time:'7:50 AM-9:10 AM',
  },
  {
    type: 'C',
    time:'9:15 AM-10:35 AM',
  },
  {
    type: 'CL',
    time:"10:40 AM-12:25 PM",
  },
  {
    type: 'C',
    time:"12:30 PM-1:50 PM",
  },
];