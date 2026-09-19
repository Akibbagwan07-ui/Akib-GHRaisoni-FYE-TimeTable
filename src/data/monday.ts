import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

export const mondayEntries: TimetableEntry[] = [
  // Cluster A
  createEntry('Monday', 'A', '10:45 TO 11:45', 'BEE/I/EE1/C-301'),
  createEntry('Monday', 'A', '11:45 TO 12:45', 'MDC/I/DRN/C-301'),
  createEntry('Monday', 'A', '01:30 TO 03:30', 'EC/I/UT/-A1/CHY LAB'),
  createEntry('Monday', 'A', '01:30 TO 03:30', 'BEE/I/EE1/-A2/C-DC MACHINE LAB'),
  createEntry('Monday', 'A', '01:30 TO 03:30', 'DLD/I/PR/-A3/C-303 LAB'),

  // Cluster B
  createEntry('Monday', 'B', '09:45 TO 10:45', 'BEE/I/EE1/C-302'),
  createEntry('Monday', 'B', '10:45 TO 11:45', 'EC/I/UT/C-302'),
  createEntry('Monday', 'B', '11:45 TO 12:45', 'CS/I/ARP/C-302'),
  createEntry('Monday', 'B', '01:30 TO 02:30', 'LIBRARY'),
  createEntry('Monday', 'B', '02:30 TO 03:30', 'MDC/I/ANS/C-303'),
  createEntry('Monday', 'B', '03:30 TO 05:30', 'EC/I/UT/-B1/CHY LAB'),
  createEntry('Monday', 'B', '03:30 TO 05:30', 'EASP/I/RR/-B2/DC MACHINE LAB'),
  createEntry('Monday', 'B', '03:30 TO 05:30', 'BE/I/TVR/-B3/A-316 LAB'),

  // Cluster C
  createEntry('Monday', 'C', '09:45 TO 10:45', 'MDC/I/SPS/C-304'),
  createEntry('Monday', 'C', '10:45 TO 12:45', 'EM/I/CE2/-C1/WP'),
  createEntry('Monday', 'C', '10:45 TO 12:45', 'EC/I/RDP/-C2/CHY LAB'),
  createEntry('Monday', 'C', '10:45 TO 12:45', 'SPV/I/MP/-C3/ME-CAD LAB'),

  // Cluster D
  createEntry('Monday', 'D', '10:45 TO 11:45', 'MDC/I/AK/C-304'),
  createEntry('Monday', 'D', '11:45 TO 12:45', 'EM/I/CG/C-304'),
  createEntry('Monday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D1/DH'),
  createEntry('Monday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D2/DH'),
  createEntry('Monday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D3/DH'),
  createEntry('Monday', 'D', '03:30 TO 05:30', 'CAD/I/SNP/-D1/CE-CAD LAB'),
  createEntry('Monday', 'D', '03:30 TO 05:30', 'CS/I/MS/-D2/C-COM LAB'),
  createEntry('Monday', 'D', '03:30 TO 05:30', 'EM/I/CG/-D3/WP'),

  // Cluster E
  createEntry('Monday', 'E', '09:45 TO 10:45', 'DLD/I/RW/C-301'),
  createEntry('Monday', 'E', '10:45 TO 11:45', 'LIBRARY'),
  createEntry('Monday', 'E', '11:45 TO 12:45', 'MDC/I/AK/C-402'),
  createEntry('Monday', 'E', '01:30 TO 03:30', 'EC/I/SK/-E1/CHY LAB'),
  createEntry('Monday', 'E', '01:30 TO 03:30', 'BEE/I/EE2/-E2/A-214(A) LAB'),
  createEntry('Monday', 'E', '01:30 TO 03:30', 'CS/I/ARP/-E3/C-PROG. LAB'),

  // Cluster F
  createEntry('Monday', 'F', '09:45 TO 10:45', 'BEE/I/EE2/C-305'),
  createEntry('Monday', 'F', '10:45 TO 12:45', 'EC/I/SK/-F1/CHY LAB'),
  createEntry('Monday', 'F', '10:45 TO 12:45', 'BEE/I/EE2/-F2/C-DC MACHINE LAB'),
  createEntry('Monday', 'F', '10:45 TO 12:45', 'DLD/I/RW/-F3/A-214(B) LAB'),
  createEntry('Monday', 'F', '01:30 TO 02:30', 'CP/I/SBD/C-303'),
  createEntry('Monday', 'F', '02:30 TO 03:30', 'LIBRARY'),
  createEntry('Monday', 'F', '03:30 TO 05:30', 'DLD/I/RW/-F1/A-303 LAB'),
  createEntry('Monday', 'F', '03:30 TO 05:30', 'CP/I/SBD/-F2/C-IT LAB'),
  createEntry('Monday', 'F', '03:30 TO 05:30', 'CS/I/ARP/-F3/C-PROG. LAB'),

  // Cluster G
  createEntry('Monday', 'G', '10:45 TO 12:45', 'CS/I/MS/-G1/C-PROG. LAB'),
  createEntry('Monday', 'G', '10:45 TO 12:45', 'CP/I/SBD/-G2/C-COM LAB'),
  createEntry('Monday', 'G', '10:45 TO 12:45', 'DLD/I/PR/-G3/A-303 LAB'),
  createEntry('Monday', 'G', '01:30 TO 02:30', 'MDC/I/ANS/C-304'),

  // Cluster H
  createEntry('Monday', 'H', '10:45 TO 11:45', 'ICDE/I/SPS/C-305'),
  createEntry('Monday', 'H', '11:45 TO 12:45', 'PPS/I/SC/C-305'),
  createEntry('Monday', 'H', '01:30 TO 03:30', 'EP/I/SW/-H1/PHY LAB'),
  createEntry('Monday', 'H', '01:30 TO 03:30', 'PPS/I/SC/-H2/C-IT LAB'),
  createEntry('Monday', 'H', '01:30 TO 03:30', 'CFT/I/TVR/-H3/A-IDEA LAB'),

  // Cluster I
  createEntry('Monday', 'I', '09:45 TO 10:45', 'PPS/I/SC/C-303'),
  createEntry('Monday', 'I', '10:45 TO 11:45', 'LAS/I/ANS/C-303'),
  createEntry('Monday', 'I', '11:45 TO 12:45', 'ICDE/I/SPS/C-303'),

  // Cluster J
  createEntry('Monday', 'J', '09:45 TO 10:45', 'ICDE/I/DRN/C-401'),
  createEntry('Monday', 'J', '10:45 TO 12:45', 'EP/I/RI/-J1/PHY LAB'),
  createEntry('Monday', 'J', '10:45 TO 12:45', 'PPS/I/SH/-J2/C-IT LAB'),
  createEntry('Monday', 'J', '10:45 TO 12:45', 'CFT/I/JS/-J3/A-IDEA LAB'),
  createEntry('Monday', 'J', '01:30 TO 03:30', 'PPS/I/SH/-J1/C-COM LAB'),
  createEntry('Monday', 'J', '01:30 TO 03:30', 'FDA/I/RD/-J2/C-IT LAB'),
  createEntry('Monday', 'J', '01:30 TO 03:30', 'EP/I/RI/-J3/PHY LAB'),

  // Cluster K
  createEntry('Monday', 'K', '09:45 TO 10:45', 'IKS/I/RI/C-402'),
  createEntry('Monday', 'K', '10:45 TO 11:45', 'ICDE/I/DRN/C-402'),
  createEntry('Monday', 'K', '11:45 TO 12:45', 'LIBRARY'),
  createEntry('Monday', 'K', '01:30 TO 02:30', 'FDA/I/CE2/C-302'),
  createEntry('Monday', 'K', '02:30 TO 03:30', 'CFT/I/JS/C-302'),
  createEntry('Monday', 'K', '03:30 TO 05:30', 'CFT/I/JS/-K1/A-IDEA LAB'),
  createEntry('Monday', 'K', '03:30 TO 05:30', 'EP/I/SB/-K2/PHY LAB'),
  createEntry('Monday', 'K', '03:30 TO 05:30', 'FDA/I/CE2/-K3/IT LAB'),

  // Cluster L
  createEntry('Monday', 'L', '09:45 TO 10:45', 'FDA/I/RD/C-403'),
  createEntry('Monday', 'L', '10:45 TO 12:45', 'EP/I/SB/-L1/PHY LAB'),
  createEntry('Monday', 'L', '10:45 TO 12:45', 'PPS/I/SVC/-L2/C-COM LAB'),
  createEntry('Monday', 'L', '10:45 TO 12:45', 'CFT/I/SR/-L3/A-303 LAB'),
  createEntry('Monday', 'L', '01:30 TO 02:30', 'IKS/I/SB/C-401'),

  // Cluster M
  createEntry('Monday', 'M', '10:45 TO 11:45', 'FDA/I/CE1/C-401'),
  createEntry('Monday', 'M', '11:45 TO 12:45', 'ICDE/I/ANS/C-401'),
  createEntry('Monday', 'M', '01:30 TO 02:30', 'LAS/I/DRN/C-301'),
  createEntry('Monday', 'M', '02:30 TO 03:30', 'IKS/I/AK/C-301'),

  // Cluster N
  createEntry('Monday', 'N', '09:45 TO 10:45', 'PPS/I/SVC/C-404'),
  createEntry('Monday', 'N', '10:45 TO 11:45', 'EP/I/SW/C-404'),
  createEntry('Monday', 'N', '11:45 TO 12:45', 'FDA/I/RD/C-404'),
  createEntry('Monday', 'N', '01:30 TO 02:30', 'ICDE/I/AK/C-305'),
];
