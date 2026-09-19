import { TimetableEntry, DayOfWeek, ClassType } from '../types';
import { CLUSTERS, SUBJECT_NAMES } from './clusters';

const slotTimeMap: Record<string, { start: string; end: string; startMins: number; endMins: number; spans: string[] }> = {
  '09:45 TO 10:45': { start: '09:45', end: '10:45', startMins: 585, endMins: 645, spans: ['09:45 TO 10:45'] },
  '10:45 TO 11:45': { start: '10:45', end: '11:45', startMins: 645, endMins: 705, spans: ['10:45 TO 11:45'] },
  '11:45 TO 12:45': { start: '11:45', end: '12:45', startMins: 705, endMins: 765, spans: ['11:45 TO 12:45'] },
  '12:45 TO 01:30': { start: '12:45', end: '01:30', startMins: 765, endMins: 810, spans: ['12:45 TO 01:30'] },
  '01:30 TO 02:30': { start: '01:30', end: '02:30', startMins: 810, endMins: 870, spans: ['01:30 TO 02:30'] },
  '02:30 TO 03:30': { start: '02:30', end: '03:30', startMins: 870, endMins: 930, spans: ['02:30 TO 03:30'] },
  '03:30 TO 04:30': { start: '03:30', end: '04:30', startMins: 930, endMins: 990, spans: ['03:30 TO 04:30'] },
  '04:30 TO 05:30': { start: '04:30', end: '05:30', startMins: 990, endMins: 1050, spans: ['04:30 TO 05:30'] },
  
  // 2-hour practical spans:
  '09:45 TO 11:45': { start: '09:45', end: '11:45', startMins: 585, endMins: 705, spans: ['09:45 TO 10:45', '10:45 TO 11:45'] },
  '10:45 TO 12:45': { start: '10:45', end: '12:45', startMins: 645, endMins: 765, spans: ['10:45 TO 11:45', '11:45 TO 12:45'] },
  '01:30 TO 03:30': { start: '01:30', end: '03:30', startMins: 810, endMins: 930, spans: ['01:30 TO 02:30', '02:30 TO 03:30'] },
  '03:30 TO 05:30': { start: '03:30', end: '05:30', startMins: 930, endMins: 1050, spans: ['03:30 TO 04:30', '04:30 TO 05:30'] },
};

let entryCounter = 0;

export function createEntry(
  day: DayOfWeek,
  cluster: string,
  timeSlot: string,
  rawCode: string
): TimetableEntry {
  entryCounter++;
  const clusterInfo = CLUSTERS.find((c) => c.cluster === cluster);
  const branchCode = clusterInfo ? clusterInfo.displayCode : cluster;

  const timeData = slotTimeMap[timeSlot] || {
    start: timeSlot.split(' TO ')[0] || '09:45',
    end: timeSlot.split(' TO ')[1] || '10:45',
    startMins: 585,
    endMins: 645,
    spans: [timeSlot],
  };

  const isTwoHour = timeSlot.includes('09:45 TO 11:45') ||
    timeSlot.includes('10:45 TO 12:45') ||
    timeSlot.includes('01:30 TO 03:30') ||
    timeSlot.includes('03:30 TO 05:30');

  const cleanRaw = rawCode.trim();

  // Special cases: LIBRARY, SPORTS, LUNCH
  if (cleanRaw.toUpperCase() === 'LIBRARY') {
    return {
      id: `${day}-${cluster}-${timeSlot}-${entryCounter}`,
      day,
      cluster,
      branchCode,
      timeSlot,
      startTime: timeData.start,
      endTime: timeData.end,
      startHourMinutes: timeData.startMins,
      endHourMinutes: timeData.endMins,
      rawCode: cleanRaw,
      subjectCode: 'LIBRARY',
      subjectFullName: SUBJECT_NAMES['LIBRARY'],
      faculty: 'Faculty In-Charge',
      roomOrLab: 'Central Library',
      isLab: false,
      type: 'library',
      durationHours: isTwoHour ? 2 : 1,
      timeSlotSpan: timeData.spans,
    };
  }

  if (cleanRaw.toUpperCase() === 'SPORTS') {
    return {
      id: `${day}-${cluster}-${timeSlot}-${entryCounter}`,
      day,
      cluster,
      branchCode,
      timeSlot,
      startTime: timeData.start,
      endTime: timeData.end,
      startHourMinutes: timeData.startMins,
      endHourMinutes: timeData.endMins,
      rawCode: cleanRaw,
      subjectCode: 'SPORTS',
      subjectFullName: SUBJECT_NAMES['SPORTS'],
      faculty: 'Sports Director',
      roomOrLab: 'Sports Complex / Ground',
      isLab: false,
      type: 'sports',
      durationHours: isTwoHour ? 2 : 1,
      timeSlotSpan: timeData.spans,
    };
  }

  // Parse standard code formats e.g. PPS/I/SVC/C-404, CP/I/SBD/-E3/C-COM LAB, BE/I/TVR-B3/A-316 LAB
  const parts = cleanRaw.split('/');
  const subjectCode = parts[0] || cleanRaw;
  const semester = parts[1] || 'I';

  let faculty = '';
  let batch: string | undefined = undefined;
  let roomOrLab = '';

  if (parts.length >= 4) {
    faculty = parts[2];
    if (parts.length === 4) {
      roomOrLab = parts[3];
      // Check if faculty has hyphen batch like TVR-B3
      if (faculty.includes('-')) {
        const sub = faculty.split('-');
        faculty = sub[0];
        batch = sub[1];
      }
    } else if (parts.length >= 5) {
      // e.g. CP/I/SBD/-E3/C-COM LAB
      // parts: ['CP', 'I', 'SBD', '-E3', 'C-COM LAB']
      batch = parts[3].replace(/^-/, '');
      roomOrLab = parts.slice(4).join('/');
    }
  } else if (parts.length === 3) {
    faculty = parts[1];
    roomOrLab = parts[2];
  } else {
    roomOrLab = cleanRaw;
  }

  // If batch was in room part like "-A1/CHY LAB"
  if (!batch && roomOrLab.startsWith('-')) {
    const sub = roomOrLab.split('/');
    batch = sub[0].replace(/^-/, '');
    roomOrLab = sub.slice(1).join('/');
  }

  // Check if room or batch indicator
  const isLab = roomOrLab.toUpperCase().includes('LAB') ||
    roomOrLab.toUpperCase().includes('WP') ||
    roomOrLab.toUpperCase().includes('DH') ||
    isTwoHour;

  const type: ClassType = isLab ? 'lab' : 'lecture';

  return {
    id: `${day}-${cluster}-${timeSlot}-${entryCounter}`,
    day,
    cluster,
    branchCode,
    timeSlot,
    startTime: timeData.start,
    endTime: timeData.end,
    startHourMinutes: timeData.startMins,
    endHourMinutes: timeData.endMins,
    rawCode: cleanRaw,
    subjectCode,
    subjectFullName: SUBJECT_NAMES[subjectCode] || subjectCode,
    faculty,
    roomOrLab,
    batch,
    isLab,
    type,
    durationHours: isTwoHour ? 2 : 1,
    timeSlotSpan: timeData.spans,
  };
}

export function createCustomEntry(opts: {
  day: DayOfWeek;
  cluster: string;
  timeSlot: string;
  subjectCode: string;
  subjectFullName?: string;
  faculty?: string;
  roomOrLab?: string;
  batch?: string;
  isLab?: boolean;
  type?: ClassType;
  rawCode?: string;
}): TimetableEntry {
  entryCounter++;
  const clusterInfo = CLUSTERS.find((c) => c.cluster === opts.cluster);
  const branchCode = clusterInfo ? clusterInfo.displayCode : opts.cluster;

  const timeData = slotTimeMap[opts.timeSlot] || {
    start: opts.timeSlot.split(' TO ')[0] || opts.timeSlot.split(' – ')[0] || '09:45',
    end: opts.timeSlot.split(' TO ')[1] || opts.timeSlot.split(' – ')[1] || '10:45',
    startMins: 585,
    endMins: 645,
    spans: [opts.timeSlot],
  };

  const isTwoHour =
    opts.timeSlot.includes('09:45 TO 11:45') ||
    opts.timeSlot.includes('10:45 TO 12:45') ||
    opts.timeSlot.includes('01:30 TO 03:30') ||
    opts.timeSlot.includes('03:30 TO 05:30');

  const defaultType: ClassType =
    opts.type ||
    (opts.subjectCode === 'NO_LECTURE'
      ? 'no-lecture'
      : opts.subjectCode === 'LUNCH'
      ? 'lunch'
      : opts.subjectCode === 'LIBRARY' || opts.subjectCode === 'LLC'
      ? 'library'
      : opts.isLab
      ? 'lab'
      : 'lecture');

  const subjectFullName =
    opts.subjectFullName ||
    SUBJECT_NAMES[opts.subjectCode] ||
    opts.subjectCode;

  return {
    id: `${opts.day}-${opts.cluster}-${opts.timeSlot}-${entryCounter}`,
    day: opts.day,
    cluster: opts.cluster,
    branchCode,
    timeSlot: opts.timeSlot,
    startTime: timeData.start,
    endTime: timeData.end,
    startHourMinutes: timeData.startMins,
    endHourMinutes: timeData.endMins,
    rawCode: opts.rawCode || opts.subjectCode,
    subjectCode: opts.subjectCode,
    subjectFullName,
    faculty: opts.faculty || '',
    roomOrLab: opts.roomOrLab || '',
    batch: opts.batch,
    isLab: opts.isLab ?? (defaultType === 'lab'),
    type: defaultType,
    durationHours: isTwoHour ? 2 : 1,
    timeSlotSpan: timeData.spans,
  };
}
