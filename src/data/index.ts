import { TimetableEntry, DayOfWeek, ClusterInfo } from '../types';
import {
  CLUSTERS,
  OFFICIAL_TIME_SLOTS,
  SUBJECT_NAMES,
  BRANCH_OPTIONS,
  CLUSTER_OPTIONS,
  BranchOption,
} from './clusters';
import { mondayEntries } from './monday';
import { tuesdayEntries } from './tuesday';
import { wednesdayEntries } from './wednesday';
import { thursdayEntries } from './thursday';
import { fridayEntries } from './friday';
import { saturdayEntries } from './saturday';

export {
  CLUSTERS,
  OFFICIAL_TIME_SLOTS,
  SUBJECT_NAMES,
  BRANCH_OPTIONS,
  CLUSTER_OPTIONS,
};
export type { BranchOption };

export const ALL_TIMETABLE_ENTRIES: TimetableEntry[] = [
  ...mondayEntries,
  ...tuesdayEntries,
  ...wednesdayEntries,
  ...thursdayEntries,
  ...fridayEntries,
  ...saturdayEntries,
];

export const TIMETABLE_BY_DAY: Record<DayOfWeek, TimetableEntry[]> = {
  Monday: mondayEntries,
  Tuesday: tuesdayEntries,
  Wednesday: wednesdayEntries,
  Thursday: thursdayEntries,
  Friday: fridayEntries,
  Saturday: saturdayEntries,
};

export const DAYS_ORDER: DayOfWeek[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function getEntriesForClusterAndDay(cluster: string, day: DayOfWeek): TimetableEntry[] {
  const dayList = TIMETABLE_BY_DAY[day] || [];
  if (cluster === 'ALL') {
    return dayList;
  }
  return dayList.filter((entry) => entry.cluster === cluster);
}

export function getEntriesForBranchAndClusterAndDay(
  branch: string,
  cluster: string,
  day: DayOfWeek
): TimetableEntry[] {
  let entries = TIMETABLE_BY_DAY[day] || [];

  if (branch && branch !== 'ALL') {
    const branchInfo = BRANCH_OPTIONS.find((b) => b.code === branch);
    if (branchInfo) {
      entries = entries.filter((e) => branchInfo.clusters.includes(e.cluster));
    }
  }

  if (cluster && cluster !== 'ALL') {
    entries = entries.filter((e) => e.cluster === cluster);
  }

  return entries;
}

export function getCurrentAndNextClass(
  branch: string,
  cluster: string,
  currentTime = new Date()
): {
  nowClass: TimetableEntry | null;
  nextClass: TimetableEntry | null;
  dayName: DayOfWeek | 'Sunday';
  isSunday: boolean;
  isLunchNow: boolean;
} {
  const days: (DayOfWeek | 'Sunday')[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDayIndex = currentTime.getDay();
  const dayName = days[currentDayIndex];

  if (dayName === 'Sunday') {
    return {
      nowClass: null,
      nextClass: null,
      dayName: 'Sunday',
      isSunday: true,
      isLunchNow: false,
    };
  }

  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
  const isLunchNow = currentMinutes >= 765 && currentMinutes < 810; // 12:45 to 13:30

  const dayEntries = getEntriesForBranchAndClusterAndDay(
    branch,
    cluster,
    dayName as DayOfWeek
  );

  // Sort by start time
  const sortedEntries = [...dayEntries].sort(
    (a, b) => a.startHourMinutes - b.startHourMinutes
  );

  // Now class
  const nowClass =
    sortedEntries.find(
      (e) =>
        e.type !== 'no-lecture' &&
        currentMinutes >= e.startHourMinutes &&
        currentMinutes < e.endHourMinutes
    ) || null;

  // Next class
  const nextClass =
    sortedEntries.find(
      (e) => e.type !== 'no-lecture' && e.startHourMinutes > currentMinutes
    ) || null;

  return {
    nowClass,
    nextClass,
    dayName,
    isSunday: false,
    isLunchNow,
  };
}
