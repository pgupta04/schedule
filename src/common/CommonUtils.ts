import { dateToDayType } from "../data/dateToDayType";
import { type125, type34 } from "../data/daySchedule";
import { periodToSubject } from "../data/periodToSubject";
import { IType } from "../data/daySchedule";
import { studentToLunchSchedule } from "../data/studentToLunchSchedule";
import { DayType } from "../common/Constants";
import { IStdToLunchSchType } from "../data/studentToLunchSchedule";
import {
  Schedule125LA,
  Schedule34LA,
  Schedule125LB,
  Schedule34LB,
  Schedule125LC,
  Schedule34LC,
} from "../data/lunchPeriodSchedule";
import moment from "moment";

export const determineDayTypeByDate = (dayStr: string): DayType | undefined => {
  //console.log('dateStr', dayStr);
  const day = moment(dayStr);
  // console.log('day parsed', day.format('M/D/YYYY'));
  return dateToDayType.get(day.format("M/D/YYYY"));
};

const spliceLunchPeriod = (schedule: IType[], lunchPeriodSchedule: IType[]) => {
  schedule.map((item,index)=>{
    if(index===2){
      const period = item.period;
      const sub = item.subject;
      console.log('period', period);
      console.log('subject', sub);
      lunchPeriodSchedule.map(item=>{
        if(item.type==='C'){
          item.subject = sub;
          item.period = period;
        } else if (item.type==='L'){
          // item.subject = 'Lunch';
          // item.period = 0;
        }
      });
    }
  });
  schedule.splice(2, 1, ...lunchPeriodSchedule);
};

const addLunchPeriod = (
  studentName: string,
  dayNum: number,
  dayType: DayType | undefined,
  schedule: IType[]
) => {
  console.log("dayType", dayType);
  const lunchSchedules = studentToLunchSchedule.get(studentName);
  let lunchSchType = lunchSchedules
    ? lunchSchedules[dayType as keyof IStdToLunchSchType]
    : {};
  console.log("lunchSchType", lunchSchType);

  //'Schedule125LA'|'Schedule34LA'| 'Schedule125LB'| 'Schedule34LB'|'Schedule125LC' | 'Schedule34LC'
  switch (lunchSchType) {
    case "LA":
      // Schedule125LA
      if ([1, 2, 5].includes(dayNum)) {
        // schedule.splice(2, 1, ...Schedule125LA);
        spliceLunchPeriod(schedule, Schedule125LA);
      } else if ([3, 4].includes(dayNum)) {
        // schedule.splice(2, 1, ...Schedule34LA);
        spliceLunchPeriod(schedule, Schedule34LA);
      }
      break;
    case "LB":
      if ([1, 2, 5].includes(dayNum)) {
        // schedule.splice(2, 1, ...Schedule125LB);
        spliceLunchPeriod(schedule, Schedule125LB);
      } else if ([3, 4].includes(dayNum)) {
        // schedule.splice(2, 1, ...Schedule34LB);
        spliceLunchPeriod(schedule, Schedule34LB);

      }
      break;
    case "LC":
      if ([1, 2, 5].includes(dayNum)) {
        console.log("LC 125", Schedule125LC);
        // schedule.splice(2, 1, ...Schedule125LC);
        spliceLunchPeriod(schedule, Schedule125LC);

      } else if ([3, 4].includes(dayNum)) {
        console.log("LC 34", Schedule34LC);
        // schedule.splice(2, 1, ...Schedule34LC);
        spliceLunchPeriod(schedule, Schedule125LC);
      }
      break;
  }
  // console.log('updated Schedule', schedule);
};

export const determineScheduleType = async (dayStr: string) => {
  console.log('dateStr', dayStr);
  const day = moment(dayStr);
  // console.log('day',day)
  const dayNum = day.day();
  const dayType = determineDayTypeByDate(dayStr);
  
  // console.log('dayNum',dayNum);
  // console.log('dayNum',dayNum);
  var schedule: IType[] = [];
  if(dayType===DayType.X){
    return schedule;
  }
  if ([1, 2, 5].includes(dayNum)) {
    schedule = type125;
  } else if ([3, 4].includes(dayNum)) {
    schedule = type34;
  }
  await console.log('Basic schedule without modifications', schedule);

  // add periods
  if (dayType === DayType.A) {
    await schedule?.forEach((item, index) => {
      item.period = index + 1;
    });
  } else if (dayType === DayType.B) {
    await schedule?.forEach((item, index) => {
      item.period = index + 5;
    });
  }
  await console.log('Basic schedule after periods', schedule);

  // add subjects
  await schedule?.forEach((item) => {
    item.subject = item?.period ? periodToSubject?.get(item?.period) : "";
  });
  await console.log('Basic schedule after subjects', schedule);

  await addLunchPeriod("MAYANKGUPTA", dayNum, dayType, schedule);

  await console.log('Basic schedule after Lunch', schedule);
  return schedule;
};
