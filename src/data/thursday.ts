import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

export const thursdayEntries: TimetableEntry[] = [
  // Cluster A
  createEntry('Thursday', 'A', '09:45 TO 11:45', 'CS/I/ARP/-A1/C-PROG. LAB'),
  createEntry('Thursday', 'A', '09:45 TO 11:45', 'EC/I/UT/-A2/CHY LAB'),
  createEntry('Thursday', 'A', '09:45 TO 11:45', 'M&S/I/TVR/-A3/A-IDEA LAB'),
  createEntry('Thursday', 'A', '11:45 TO 12:45', 'MDC/I/DRN/C-301'),
  createEntry('Thursday', 'A', '01:30 TO 02:30', 'DLD/I/PR/C-401'),

  // Cluster B
  createEntry('Thursday', 'B', '09:45 TO 10:45', 'MDC/I/ANS/C-302'),
  createEntry('Thursday', 'B', '10:45 TO 11:45', 'BEE/I/EE1/C-302'),
  createEntry('Thursday', 'B', '11:45 TO 12:45', 'BE/I/TVR/C-302'),
  createEntry('Thursday', 'B', '01:30 TO 03:30', 'BEE/I/EE1/-B1/DC MACHINE LAB'),
  createEntry('Thursday', 'B', '01:30 TO 03:30', 'EC/I/UT/-B2/CHY LAB'),
  createEntry('Thursday', 'B', '01:30 TO 03:30', 'EASP/I/RR/-B3/A-214(A) LAB'),

  // Cluster C
  createEntry('Thursday', 'C', '10:45 TO 11:45', 'EG/I/JNW/C-401'),
  createEntry('Thursday', 'C', '11:45 TO 12:45', 'MDC/I/SPS/C-401'),
  createEntry('Thursday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-C1/DH'),
  createEntry('Thursday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-C2/DH'),
  createEntry('Thursday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-C3/DH'),
  createEntry('Thursday', 'C', '03:30 TO 05:30', 'CS/I/MS/-C1/C-COM LAB'),
  createEntry('Thursday', 'C', '03:30 TO 05:30', 'SPV/I/MP/-C2/ME-CAD LAB'),
  createEntry('Thursday', 'C', '03:30 TO 05:30', 'EM/I/CE2/-C3/WP'),

  // Cluster D
  createEntry('Thursday', 'D', '09:45 TO 10:45', 'MDC/I/AK/C-401'),
  createEntry('Thursday', 'D', '10:45 TO 12:45', 'EC/I/RDP/-D1/CHY LAB'),
  createEntry('Thursday', 'D', '10:45 TO 12:45', 'EM/I/CG/-D2/WP'),
  createEntry('Thursday', 'D', '10:45 TO 12:45', 'CS/I/MS/-D3/C-IT LAB'),
  createEntry('Thursday', 'D', '01:30 TO 02:30', 'EM/I/CG/C-304'),

  // Cluster E
  createEntry('Thursday', 'E', '09:45 TO 11:45', 'CP/I/SBD/-E1/C-COM LAB'),
  createEntry('Thursday', 'E', '09:45 TO 11:45', 'DLD/I/RW/-E2/A-303 LAB'),
  createEntry('Thursday', 'E', '09:45 TO 11:45', 'BEE/I/EE2/-E3/DC MACHINE LAB'),
  createEntry('Thursday', 'E', '11:45 TO 12:45', 'MDC/I/AK/C-402'),

  // Cluster F
  createEntry('Thursday', 'F', '10:45 TO 11:45', 'EC/I/SK/C-404'),
  createEntry('Thursday', 'F', '11:45 TO 12:45', 'BEE/I/EE2/C-404'),
  createEntry('Thursday', 'F', '01:30 TO 02:30', 'DLD/I/RW/C-302'),
  createEntry('Thursday', 'F', '02:30 TO 03:30', 'MDC/I/ANS/C-302'),
  createEntry('Thursday', 'F', '03:30 TO 05:30', 'BEE/I/EE2/-F1/A-214(A) LAB'),
  createEntry('Thursday', 'F', '03:30 TO 05:30', 'CS/I/ARP/-F2/C-PROG. LAB'),
  createEntry('Thursday', 'F', '03:30 TO 05:30', 'CP/I/SBD/-F3/C-IT LAB'),

  // Cluster G
  createEntry('Thursday', 'G', '09:45 TO 10:45', 'BEE/I/EE1/C-303'),
  createEntry('Thursday', 'G', '10:45 TO 11:45', 'MDC/I/ANS/C-303'),
  createEntry('Thursday', 'G', '11:45 TO 12:45', 'DLD/I/PR/C-303'),
  createEntry('Thursday', 'G', '01:30 TO 03:30', 'CP/I/SBD/-G1/C-COM LAB'),
  createEntry('Thursday', 'G', '01:30 TO 03:30', 'CS/I/MS/-G2/C-PROG. LAB'),
  createEntry('Thursday', 'G', '01:30 TO 03:30', 'EC/I/SK/-G3/CHY LAB'),

  // Cluster H
  createEntry('Thursday', 'H', '09:45 TO 11:45', 'PPS/I/SC/-H1/C-IT LAB'),
  createEntry('Thursday', 'H', '09:45 TO 11:45', 'FDA/I/CE1/-H2/CE-CAD LAB'),
  createEntry('Thursday', 'H', '09:45 TO 11:45', 'EP/I/SW/-H3/PHY LAB'),
  createEntry('Thursday', 'H', '11:45 TO 12:45', 'IKS/I/UT/C-403'),
  createEntry('Thursday', 'H', '01:30 TO 02:30', 'LAS/I/DRN/C-301'),
  createEntry('Thursday', 'H', '02:30 TO 03:30', 'CFT/I/TVR/C-301'),

  // Cluster I
  createEntry('Thursday', 'I', '09:45 TO 10:45', 'IKS/I/SK/C-304'),
  createEntry('Thursday', 'I', '10:45 TO 11:45', 'CFT/I/JS/C-304'),
  createEntry('Thursday', 'I', '11:45 TO 12:45', 'PPS/I/SC/C-304'),
  createEntry('Thursday', 'I', '01:30 TO 03:30', 'PPS/I/SC/-I1/C-IT LAB'),
  createEntry('Thursday', 'I', '01:30 TO 03:30', 'FDA/I/CE1/-I2/C-COM LAB'),
  createEntry('Thursday', 'I', '01:30 TO 03:30', 'EP/I/SW/-I3/PHY LAB'),

  // Cluster J
  createEntry('Thursday', 'J', '09:45 TO 10:45', 'IKS/I/RDP/C-402'),
  createEntry('Thursday', 'J', '10:45 TO 11:45', 'PPS/I/SH/C-402'),
  createEntry('Thursday', 'J', '11:45 TO 12:45', 'LIBRARY'),
  createEntry('Thursday', 'J', '01:30 TO 02:30', 'LAS/I/AK/C-305'),
  createEntry('Thursday', 'J', '02:30 TO 03:30', 'IKS/I/RDP/C-305'),
  createEntry('Thursday', 'J', '03:30 TO 05:30', 'CFT/I/JS/-J1/A-IDEA LAB'),
  createEntry('Thursday', 'J', '03:30 TO 05:30', 'EP/I/RI/-J2/PHY LAB'),
  createEntry('Thursday', 'J', '03:30 TO 05:30', 'FDA/I/RD/-J3/C-COM LAB'),

  // Cluster K
  createEntry('Thursday', 'K', '09:45 TO 10:45', 'PPS/I/SH/C-305'),
  createEntry('Thursday', 'K', '10:45 TO 11:45', 'LAS/I/AK/C-305'),
  createEntry('Thursday', 'K', '11:45 TO 12:45', 'EP/I/SB/C-305'),

  // Cluster L
  createEntry('Thursday', 'L', '09:45 TO 10:45', 'ICDE/I/DRN/C-301'),
  createEntry('Thursday', 'L', '10:45 TO 11:45', 'IKS/I/SB/C-301'),
  createEntry('Thursday', 'L', '11:45 TO 12:45', 'SPORTS'),
  createEntry('Thursday', 'L', '01:30 TO 02:30', 'CFT/I/SR/C-402'),

  // Cluster M
  createEntry('Thursday', 'M', '09:45 TO 10:45', 'CFT/I/SR/C-403'),
  createEntry('Thursday', 'M', '10:45 TO 11:45', 'LAS/I/DRN/C-403'),
  createEntry('Thursday', 'M', '11:45 TO 12:45', 'LIBRARY'),
  createEntry('Thursday', 'M', '01:30 TO 02:30', 'ICDE/I/ANS/C-303'),
  createEntry('Thursday', 'M', '02:30 TO 03:30', 'PPS/I/SVC/C-303'),
  createEntry('Thursday', 'M', '03:30 TO 05:30', 'FDA/I/CE1/-M1/CE-CAD LAB'),
  createEntry('Thursday', 'M', '03:30 TO 05:30', 'CFT/I/SR/-M2/A-214(B) LAB'),
  createEntry('Thursday', 'M', '03:30 TO 05:30', 'PPS/I/SVC/-M3/C-IT LAB'),

  // Cluster N
  createEntry('Thursday', 'N', '09:45 TO 10:45', 'LAS/I/SPS/C-404'),
  createEntry('Thursday', 'N', '10:45 TO 12:45', 'PPS/I/SVC/-N1/C-COM LAB'),
  createEntry('Thursday', 'N', '10:45 TO 12:45', 'FDA/I/RD/-N2/C-ME-CAD LAB'),
  createEntry('Thursday', 'N', '10:45 TO 12:45', 'EP/I/RI/-N3/PHY LAB'),
];
