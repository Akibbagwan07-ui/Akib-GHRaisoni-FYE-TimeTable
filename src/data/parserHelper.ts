import { TimetableEntry, DayOfWeek, ClassType } from '../types';
import { CLUSTERS, SUBJECT_NAMES } from './clusters';

export const FACULTY_MAP: Record<string, string> = {
  JNW: 'Prof. Jitendra N. Wadadkar',
  DRN: 'Dr. Dnyaneshwar R. Nhavi',
  SPS: 'Prof. Suvarna P. Saraf',
  ANS: 'Prof. Aatif N. Shaikh',
  AK: 'Prof. Aabid Khan',
  ARP: 'Prof. Akshay R. Patil',
  MS: 'Prof. Monika Singh',
  SK: 'Dr. Sanjay Kumavat',
  UT: 'Dr. Ujwala Tayade',
  RDP: 'Prof. Ravindra D. Patil',
  SW: 'Prof. Surekha Wani',
  SB: 'Dr. Sanjeev Bhandari',
  RI: 'Dr. Ravi Ingle',
  RW: 'Prof. Ranjit Wagh',
  PR: 'Prof. Pankaj Rangalani',
  TVR: 'Prof. Tripti Verma',
  SBD: 'Prof. Suyash Bonde',
  SH: 'Prof. Sahil Hussain',
  SC: 'Prof. Sayantan Chowdhary',
  SVC: 'Prof. Sujit V. Chaudhari',
  JS: 'Prof. Juned Shaikh',
  SJ: 'Prof. Saurabh Raj',
  MP: 'Dr. Mukund Patil',
  RD: 'Prof. Ruchira Deshpande',
  SNP: 'Dr. Shantanu N. Pawar',
  CG: 'Dr. Chandraprakash Gour',
  SM: 'Dr. Sairam Mishra',
  ASK: 'Dr. Ashwini K.',
  RK: 'Prof. Raushan Kumar',
  SWP: 'Dr. Swati Patil',
  SDC: 'Prof. Shivendrasingh Chavan',
  KM: 'Dr. Krunal Mahajan',
  EE1: 'EE Faculty (EE1)',
  EE2: 'EE Faculty (EE2)',
  ETC1: 'ETC Faculty (ETC1)',
  ETC2: 'ETC Faculty (ETC2)',
  CE1: 'CE Faculty (CE1)',
};

const slotTimeMap: Record<
  string,
  { start: string; end: string; startMins: number; endMins: number; spans: string[] }
> = {
  '09:45 TO 10:45': {
    start: '09:45',
    end: '10:45',
    startMins: 585,
    endMins: 645,
    spans: ['09:45 TO 10:45'],
  },
  '10:45 TO 11:45': {
    start: '10:45',
    end: '11:45',
    startMins: 645,
    endMins: 705,
    spans: ['10:45 TO 11:45'],
  },
  '11:45 TO 12:45': {
    start: '11:45',
    end: '12:45',
    startMins: 705,
    endMins: 765,
    spans: ['11:45 TO 12:45'],
  },
  '12:45 TO 01:30': {
    start: '12:45',
    end: '01:30',
    startMins: 765,
    endMins: 810,
    spans: ['12:45 TO 01:30'],
  },
  '01:30 TO 02:30': {
    start: '01:30',
    end: '02:30',
    startMins: 810,
    endMins: 870,
    spans: ['01:30 TO 02:30'],
  },
  '02:30 TO 03:30': {
    start: '02:30',
    end: '03:30',
    startMins: 870,
    endMins: 930,
    spans: ['02:30 TO 03:30'],
  },
  '03:30 TO 04:30': {
    start: '03:30',
    end: '04:30',
    startMins: 930,
    endMins: 990,
    spans: ['03:30 TO 04:30'],
  },
  '04:30 TO 05:30': {
    start: '04:30',
    end: '05:30',
    startMins: 990,
    endMins: 1050,
    spans: ['04:30 TO 05:30'],
  },

  // 2-hour practical spans:
  '09:45 TO 11:45': {
    start: '09:45',
    end: '11:45',
    startMins: 585,
    endMins: 705,
    spans: ['09:45 TO 10:45', '10:45 TO 11:45'],
  },
  '10:45 TO 12:45': {
    start: '10:45',
    end: '12:45',
    startMins: 645,
    endMins: 765,
    spans: ['10:45 TO 11:45', '11:45 TO 12:45'],
  },
  '01:30 TO 03:30': {
    start: '01:30',
    end: '03:30',
    startMins: 810,
    endMins: 930,
    spans: ['01:30 TO 02:30', '02:30 TO 03:30'],
  },
  '03:30 TO 05:30': {
    start: '03:30',
    end: '05:30',
    startMins: 930,
    endMins: 1050,
    spans: ['03:30 TO 04:30', '04:30 TO 05:30'],
  },

  // 3-hour Saturday LLC span:
  '09:45 TO 12:45': {
    start: '09:45',
    end: '12:45',
    startMins: 585,
    endMins: 765,
    spans: ['09:45 TO 10:45', '10:45 TO 11:45', '11:45 TO 12:45'],
  },
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

  const isTwoHour =
    timeSlot.includes('09:45 TO 11:45') ||
    timeSlot.includes('10:45 TO 12:45') ||
    timeSlot.includes('01:30 TO 03:30') ||
    timeSlot.includes('03:30 TO 05:30');

  const isThreeHour = timeSlot.includes('09:45 TO 12:45');

  const cleanRaw = rawCode.trim();

  // Special cases: LIBRARY, SPORTS, LLC
  if (cleanRaw.toUpperCase() === 'LIBRARY') {
    return {
      id: `${day}-${cluster}-${timeSlot}-LIB-${entryCounter}`,
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
      subjectFullName: SUBJECT_NAMES['LIBRARY'] || 'Library / Self Study',
      faculty: 'Faculty In-Charge',
      roomOrLab: 'Central Library',
      isLab: false,
      type: 'library',
      durationHours: 1,
      timeSlotSpan: timeData.spans,
    };
  }

  if (cleanRaw.toUpperCase() === 'SPORTS') {
    return {
      id: `${day}-${cluster}-${timeSlot}-SPT-${entryCounter}`,
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
      subjectFullName: SUBJECT_NAMES['SPORTS'] || 'Sports & Physical Activity',
      faculty: 'Dr. Krunal Mahajan',
      roomOrLab: 'Sports Complex / Ground',
      isLab: false,
      type: 'sports',
      durationHours: 1,
      timeSlotSpan: timeData.spans,
    };
  }

  if (cleanRaw.toUpperCase().includes('LLC') || cleanRaw.toUpperCase().includes('WORKSHOP')) {
    return {
      id: `${day}-${cluster}-${timeSlot}-LLC-${entryCounter}`,
      day,
      cluster,
      branchCode,
      timeSlot,
      startTime: timeData.start,
      endTime: timeData.end,
      startHourMinutes: timeData.startMins,
      endHourMinutes: timeData.endMins,
      rawCode: cleanRaw,
      subjectCode: 'LLC',
      subjectFullName: 'LLC Activity / Workshop / Expert Lecture',
      faculty: 'Department Faculty / Expert Speaker',
      roomOrLab: 'College Campus / Respective Dept',
      isLab: false,
      type: 'lecture',
      durationHours: isThreeHour ? 3 : 1,
      timeSlotSpan: timeData.spans,
    };
  }

  // Parse standard code formats e.g. PPS/I/SVC/C-404, EC/I/UT/-A1/CHY LAB, BE/I/TVR-B3/A-316 LAB
  const parts = cleanRaw.split('/');
  const subjectCode = parts[0] || cleanRaw;

  let facultyCode = '';
  let batch: string | undefined = undefined;
  let roomOrLab = '';

  if (parts.length >= 5) {
    // e.g. EC/I/UT/-A1/CHY LAB or CP/I/SBD/-F1/C-IT LAB
    facultyCode = parts[2] || '';
    batch = parts[3].replace(/^-/, '');
    roomOrLab = parts.slice(4).join('/');
  } else if (parts.length === 4) {
    // e.g. MDC/I/DRN/C-301 or BE/I/TVR-B3/A-316 LAB or YOGA/I/KM/JSH
    const p2 = parts[2];
    if (p2.includes('-')) {
      const sub = p2.split('-');
      facultyCode = sub[0];
      batch = sub[1];
    } else {
      facultyCode = p2;
    }
    roomOrLab = parts[3];

    // If batch was in room like -A1/CHY LAB
    if (!batch && roomOrLab.startsWith('-')) {
      const sub = roomOrLab.split('/');
      batch = sub[0].replace(/^-/, '');
      roomOrLab = sub.slice(1).join('/');
    }
  } else if (parts.length === 3) {
    facultyCode = parts[1];
    roomOrLab = parts[2];
  } else {
    roomOrLab = cleanRaw;
  }

  // Resolve faculty name
  const facultyName = FACULTY_MAP[facultyCode] || (facultyCode ? `Prof. ${facultyCode}` : '');

  // Room normalization
  if (roomOrLab === '403') roomOrLab = 'C-403';
  if (roomOrLab === 'JSH') roomOrLab = 'JSH (Janaki Sahani Hall)';
  if (roomOrLab === 'DH') roomOrLab = 'DH (Drawing Hall)';

  // Lab determination
  const isLab =
    roomOrLab.toUpperCase().includes('LAB') ||
    roomOrLab.toUpperCase().includes('DH') ||
    isTwoHour;

  const type: ClassType =
    subjectCode === 'YOGA'
      ? 'lecture'
      : isLab
      ? 'lab'
      : 'lecture';

  return {
    id: `${day}-${cluster}-${timeSlot}-${batch || 'L'}-${entryCounter}`,
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
    faculty: facultyName,
    roomOrLab,
    batch: batch ? `Batch ${batch}` : undefined,
    isLab,
    type,
    durationHours: isThreeHour ? 3 : isTwoHour ? 2 : 1,
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
    start: opts.timeSlot.split(' TO ')[0] || '09:45',
    end: opts.timeSlot.split(' TO ')[1] || '10:45',
    startMins: 585,
    endMins: 645,
    spans: [opts.timeSlot],
  };

  const isTwoHour =
    opts.timeSlot.includes('09:45 TO 11:45') ||
    opts.timeSlot.includes('10:45 TO 12:45') ||
    opts.timeSlot.includes('01:30 TO 03:30') ||
    opts.timeSlot.includes('03:30 TO 05:30');

  const isThreeHour = opts.timeSlot.includes('09:45 TO 12:45');

  const defaultType: ClassType =
    opts.type ||
    (opts.subjectCode === 'NO_LECTURE'
      ? 'no-lecture'
      : opts.subjectCode === 'LUNCH'
      ? 'lunch'
      : opts.subjectCode === 'LIBRARY'
      ? 'library'
      : opts.subjectCode === 'SPORTS'
      ? 'sports'
      : opts.isLab
      ? 'lab'
      : 'lecture');

  const subjectFullName =
    opts.subjectFullName ||
    SUBJECT_NAMES[opts.subjectCode] ||
    opts.subjectCode;

  return {
    id: `${opts.day}-${opts.cluster}-${opts.timeSlot}-${opts.batch || 'custom'}-${entryCounter}`,
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
    durationHours: isThreeHour ? 3 : isTwoHour ? 2 : 1,
    timeSlotSpan: timeData.spans,
  };
}
