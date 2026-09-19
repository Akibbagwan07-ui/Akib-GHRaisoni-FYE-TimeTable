import { ClusterInfo } from '../types';

export const CLUSTERS: ClusterInfo[] = [
  {
    cluster: 'A',
    code: 'ETC',
    displayCode: 'ETC',
    branchName: 'Electronics & Telecommunication Engineering',
    fullName: 'Cluster A • ETC (Electronics & Telecommunication Engineering)',
  },
  {
    cluster: 'B',
    code: 'EE',
    displayCode: 'EE',
    branchName: 'Electrical Engineering',
    fullName: 'Cluster B • EE (Electrical Engineering)',
  },
  {
    cluster: 'C',
    code: 'ME',
    displayCode: 'ME',
    branchName: 'Mechanical Engineering',
    fullName: 'Cluster C • ME (Mechanical Engineering)',
  },
  {
    cluster: 'D',
    code: 'CE',
    displayCode: 'CE',
    branchName: 'Civil Engineering',
    fullName: 'Cluster D • CE (Civil Engineering)',
  },
  {
    cluster: 'E',
    code: 'AIML',
    displayCode: 'AIML',
    branchName: 'Artificial Intelligence & Machine Learning',
    fullName: 'Cluster E • AIML (Artificial Intelligence & Machine Learning)',
  },
  {
    cluster: 'F',
    code: 'DS',
    displayCode: 'DS',
    branchName: 'Data Science',
    fullName: 'Cluster F • DS (Data Science)',
  },
  {
    cluster: 'G',
    code: 'IT',
    displayCode: 'IT',
    branchName: 'Information Technology',
    fullName: 'Cluster G • IT (Information Technology)',
  },
  {
    cluster: 'H',
    code: 'CSE',
    displayCode: 'CSE-I',
    branchName: 'Computer Science Engineering-I',
    fullName: 'Cluster H • CSE-I (Computer Science Engineering-I)',
  },
  {
    cluster: 'I',
    code: 'CSE',
    displayCode: 'CSE-II',
    branchName: 'Computer Science Engineering-II',
    fullName: 'Cluster I • CSE-II (Computer Science Engineering-II)',
  },
  {
    cluster: 'J',
    code: 'CSE',
    displayCode: 'CSE-III',
    branchName: 'Computer Science Engineering-III',
    fullName: 'Cluster J • CSE-III (Computer Science Engineering-III)',
  },
  {
    cluster: 'K',
    code: 'CSE',
    displayCode: 'CSE-IV',
    branchName: 'Computer Science Engineering-IV',
    fullName: 'Cluster K • CSE-IV (Computer Science Engineering-IV)',
  },
  {
    cluster: 'L',
    code: 'CSE',
    displayCode: 'CSE-V',
    branchName: 'Computer Science Engineering-V',
    fullName: 'Cluster L • CSE-V (Computer Science Engineering-V)',
  },
  {
    cluster: 'M',
    code: 'AI',
    displayCode: 'AI-I',
    branchName: 'Artificial Intelligence-I',
    fullName: 'Cluster M • AI-I (Artificial Intelligence-I)',
  },
  {
    cluster: 'N',
    code: 'AI',
    displayCode: 'AI-II',
    branchName: 'Artificial Intelligence-II',
    fullName: 'Cluster N • AI-II (Artificial Intelligence-II)',
  },
];

export interface BranchOption {
  code: string;
  name: string;
  clusters: string[];
}

export const BRANCH_OPTIONS: BranchOption[] = [
  {
    code: 'ETC',
    name: 'Electronics & Telecommunication Engineering',
    clusters: ['A'],
  },
  {
    code: 'EE',
    name: 'Electrical Engineering',
    clusters: ['B'],
  },
  {
    code: 'ME',
    name: 'Mechanical Engineering',
    clusters: ['C'],
  },
  {
    code: 'CE',
    name: 'Civil Engineering',
    clusters: ['D'],
  },
  {
    code: 'AIML',
    name: 'Artificial Intelligence & Machine Learning',
    clusters: ['E'],
  },
  {
    code: 'DS',
    name: 'Data Science',
    clusters: ['F'],
  },
  {
    code: 'IT',
    name: 'Information Technology',
    clusters: ['G'],
  },
  {
    code: 'CSE',
    name: 'Computer Science Engineering',
    clusters: ['H', 'I', 'J', 'K', 'L'],
  },
  {
    code: 'AI',
    name: 'Artificial Intelligence',
    clusters: ['M', 'N'],
  },
];

export const CLUSTER_OPTIONS = ['H', 'I', 'J', 'K', 'L', 'M', 'N'] as const;

export const OFFICIAL_TIME_SLOTS = [
  { slot: '09:45 TO 10:45', start: '09:45', end: '10:45', isLunch: false },
  { slot: '10:45 TO 11:45', start: '10:45', end: '11:45', isLunch: false },
  { slot: '11:45 TO 12:45', start: '11:45', end: '12:45', isLunch: false },
  { slot: '12:45 TO 01:30', start: '12:45', end: '01:30', isLunch: true },
  { slot: '01:30 TO 02:30', start: '01:30', end: '02:30', isLunch: false },
  { slot: '02:30 TO 03:30', start: '02:30', end: '03:30', isLunch: false },
  { slot: '03:30 TO 04:30', start: '03:30', end: '04:30', isLunch: false },
  { slot: '04:30 TO 05:30', start: '04:30', end: '05:30', isLunch: false },
];

export const SUBJECT_NAMES: Record<string, string> = {
  'PPS': 'Programming for Problem Solving',
  'CP': 'Computer Programming',
  'CS': 'Communication Skills',
  'EC': 'Environmental Chemistry',
  'EP': 'Engineering Physics',
  'BEE': 'Basic Electrical Engineering',
  'BE': 'Basic Electronics',
  'DLD': 'Digital Logic Design',
  'EM': 'Engineering Mechanics',
  'EG': 'Engineering Graphics',
  'CAD': 'Computer Aided Drafting (CAD)',
  'SPV': 'Solar PV System',
  'FDA': 'Fundamentals of Data Analytics',
  'ICDE': 'Integral Calculus and Differential Equations',
  'CFT': 'Computer Fundamentals and Trouble Shooting',
  'IKS': 'Indian Knowledge Systems',
  'LAS': 'Linear Algebra and Statistics',
  'M&S': 'Modelling and Simulation',
  'MDC': 'Matrices and Differential Calculus',
  'EASP': 'Energy Audit and Solar Photovoltaic',
  'LIBRARY': 'Library / Self Study',
  'LLC': 'Library / LLC-1',
  'SPORTS': 'Sports & Physical Activity',
  'LUNCH': 'Lunch Time',
  'NO_LECTURE': 'No Lecture',
};
