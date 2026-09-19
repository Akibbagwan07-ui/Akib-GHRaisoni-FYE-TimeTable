export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface ClusterInfo {
  cluster: string; // 'A' through 'N'
  code: string; // 'ETC', 'EE', 'ME', 'CE', 'AIML', 'DS', 'IT', 'CSE', 'AI'
  branchName: string; // e.g. 'Computer Science Engineering-I'
  fullName: string; // e.g. 'Cluster H • CSE-I (Computer Science Engineering-I)'
  displayCode: string; // e.g. 'CSE-I', 'AI-I', 'ETC'
  description?: string;
}

export type ClassType = 'lecture' | 'lab' | 'library' | 'sports' | 'lunch' | 'no-lecture';

export interface TimetableEntry {
  id: string;
  day: DayOfWeek;
  cluster: string; // 'A' - 'N'
  branchCode: string; // e.g. 'CSE-I', 'ETC'
  timeSlot: string; // e.g. '09:45 TO 10:45' or '01:30 TO 03:30'
  startTime: string; // '09:45', '10:45', '11:45', '12:45', '13:30', '14:30', '15:30', '16:30' (24h or 12h for calculation)
  endTime: string; // '10:45', '11:45', '12:45', '13:30', '14:30', '15:30', '16:30', '17:30'
  startHourMinutes: number; // minutes from midnight, e.g. 9*60+45 = 585
  endHourMinutes: number; // minutes from midnight
  rawCode: string; // e.g. "PPS/I/SVC/C-404"
  subjectCode: string; // e.g. "PPS"
  subjectFullName: string; // e.g. "Programming for Problem Solving"
  faculty: string; // e.g. "SVC"
  roomOrLab: string; // e.g. "C-404" or "C-PROG. LAB"
  batch?: string; // e.g. "A1", "A2", "A3"
  isLab: boolean;
  type: ClassType;
  durationHours: number; // 1 or 2
  timeSlotSpan: string[]; // which time slots it spans, e.g. ['01:30 TO 02:30', '02:30 TO 03:30']
}

export interface UserNote {
  entryId: string;
  note: string;
  updatedAt: string;
}
