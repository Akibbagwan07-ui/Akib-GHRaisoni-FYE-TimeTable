import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

const ALL_CLUSTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

export const saturdayEntries: TimetableEntry[] = ALL_CLUSTERS.map((cluster) =>
  createEntry(
    'Saturday',
    cluster,
    '09:45 TO 12:45',
    'LLC Activity / Workshop / Expert Lecture / etc'
  )
);
