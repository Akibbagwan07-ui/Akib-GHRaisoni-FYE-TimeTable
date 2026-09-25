import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

export const tuesdayEntries: TimetableEntry[] = [
  // Cluster A • ETC
  createEntry('Tuesday', 'A', '10:45 TO 11:45', 'DLD/I/PR/C-402'),
  createEntry('Tuesday', 'A', '11:45 TO 12:45', 'BEE/I/SM/C-402'),
  createEntry('Tuesday', 'A', '01:30 TO 02:30', 'LIBRARY'),
  createEntry('Tuesday', 'A', '02:30 TO 03:30', 'MDC/I/DRN/C-305'),
  createEntry('Tuesday', 'A', '03:30 TO 05:30', 'BEE/I/EE2/-A1/A-214(A) LAB'),
  createEntry('Tuesday', 'A', '03:30 TO 05:30', 'DLD/I/PR/-A2/A-303 LAB'),
  createEntry('Tuesday', 'A', '03:30 TO 05:30', 'EC/I/UT/-A3/CHY LAB'),

  // Cluster B • EE
  createEntry('Tuesday', 'B', '09:45 TO 10:45', 'BE/I/TVR/C-302'),
  createEntry('Tuesday', 'B', '10:45 TO 11:45', 'BEE/I/SM/C-302'),
  createEntry('Tuesday', 'B', '11:45 TO 12:45', 'MDC/I/ANS/C-302'),
  createEntry('Tuesday', 'B', '01:30 TO 03:30', 'CS/I/ARP/-B1/C-PROG. LAB'),
  createEntry('Tuesday', 'B', '01:30 TO 03:30', 'BE/I/TVR-B2/A-IDEA LAB'),
  createEntry('Tuesday', 'B', '01:30 TO 03:30', 'EC/I/UT/-B3/CHY LAB'),

  // Cluster C • ME
  createEntry('Tuesday', 'C', '10:45 TO 11:45', 'EM/I/SDC/403'),
  createEntry('Tuesday', 'C', '11:45 TO 12:45', 'MDC/I/SPS/C-403'),
  createEntry('Tuesday', 'C', '01:30 TO 02:30', 'CS/I/MS/C-301'),
  createEntry('Tuesday', 'C', '02:30 TO 03:30', 'EC/I/RDP/C-301'),
  createEntry('Tuesday', 'C', '03:30 TO 05:30', 'SPV/I/MP/-C1/ME-CAD LAB'),
  createEntry('Tuesday', 'C', '03:30 TO 05:30', 'CS/I/MS/-C2/C-PROG. LAB'),
  createEntry('Tuesday', 'C', '03:30 TO 05:30', 'EC/I/RDP/-C3/CHY LAB'),

  // Cluster D • CE
  createEntry('Tuesday', 'D', '09:45 TO 10:45', 'MDC/I/AK/C-303'),
  createEntry('Tuesday', 'D', '10:45 TO 11:45', 'EG/I/JNW/C-303'),
  createEntry('Tuesday', 'D', '11:45 TO 12:45', 'CS/I/MS/C-303'),
  createEntry('Tuesday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D1/DH'),
  createEntry('Tuesday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D2/DH'),
  createEntry('Tuesday', 'D', '01:30 TO 03:30', 'EG/I/JNW/-D3/DH'),

  // Cluster E • AIML
  createEntry('Tuesday', 'E', '10:45 TO 12:45', 'DLD/I/RW/-E1/A-303 LAB'),
  createEntry('Tuesday', 'E', '10:45 TO 12:45', 'EC/I/SK/-E2/CHY LAB'),
  createEntry('Tuesday', 'E', '10:45 TO 12:45', 'CP/I/SBD/-E3/C-COM LAB'),
  createEntry('Tuesday', 'E', '01:30 TO 02:30', 'BEE/I/EE2/C-304'),
  createEntry('Tuesday', 'E', '02:30 TO 03:30', 'MDC/I/AK/C-304'),

  // Cluster F • DS
  createEntry('Tuesday', 'F', '09:45 TO 10:45', 'CS/I/ARP/C-301'),
  createEntry('Tuesday', 'F', '10:45 TO 12:45', 'CS/I/ARP/-F1/C-PROG. LAB'),
  createEntry('Tuesday', 'F', '10:45 TO 12:45', 'EC/I/RDP/-F2/CHY LAB'),
  createEntry('Tuesday', 'F', '10:45 TO 12:45', 'BEE/I/EE2/-F3/DC MACHINE LAB'),
  createEntry('Tuesday', 'F', '01:30 TO 02:30', 'LIBRARY'),
  createEntry('Tuesday', 'F', '02:30 TO 03:30', 'MDC/I/ANS/C-303'),

  // Cluster G • IT
  createEntry('Tuesday', 'G', '09:45 TO 10:45', 'CS/I/MS/C-304'),
  createEntry('Tuesday', 'G', '10:45 TO 11:45', 'MDC/I/ANS/C-304'),
  createEntry('Tuesday', 'G', '11:45 TO 12:45', 'CP/I/SBD/C-304'),
  createEntry('Tuesday', 'G', '01:30 TO 03:30', 'EC/I/SK/-G1/CHY LAB'),
  createEntry('Tuesday', 'G', '01:30 TO 03:30', 'DLD/I/PR/-G2/A-303 LAB'),
  createEntry('Tuesday', 'G', '01:30 TO 03:30', 'BEE/I/SM/-G3/DC MACHINE LAB'),

  // Cluster H • CSE-I
  createEntry('Tuesday', 'H', '09:45 TO 10:45', 'YOGA/I/KM/JSH'),
  createEntry('Tuesday', 'H', '10:45 TO 11:45', 'LAS/I/DRN/C-301'),
  createEntry('Tuesday', 'H', '11:45 TO 12:45', 'PPS/I/SC/C-301'),

  // Cluster I • CSE-II
  createEntry('Tuesday', 'I', '09:45 TO 10:45', 'FDA/I/RK/C-305'),
  createEntry('Tuesday', 'I', '10:45 TO 11:45', 'YOGA/I/KM/JSH'),
  createEntry('Tuesday', 'I', '11:45 TO 12:45', 'EP/I/SW/C-404'),
  createEntry('Tuesday', 'I', '01:30 TO 02:30', 'ICDE/I/SPS/C-302'),
  createEntry('Tuesday', 'I', '02:30 TO 03:30', 'PPS/I/SC/C-302'),
  createEntry('Tuesday', 'I', '03:30 TO 05:30', 'EP/I/SW/-I1/PHY LAB'),
  createEntry('Tuesday', 'I', '03:30 TO 05:30', 'PPS/I/SC/-I2/C-COM LAB'),
  createEntry('Tuesday', 'I', '03:30 TO 05:30', 'CFT/I/JS/-I3/A-IDEA LAB'),

  // Cluster J • CSE-III
  createEntry('Tuesday', 'J', '10:45 TO 11:45', 'CFT/I/JS/C-305'),
  createEntry('Tuesday', 'J', '11:45 TO 12:45', 'PPS/I/SH/C-305'),
  createEntry('Tuesday', 'J', '01:30 TO 02:30', 'EP/I/RI/C-305'),

  // Cluster K • CSE-IV
  createEntry('Tuesday', 'K', '09:45 TO 10:45', 'ICDE/I/DRN/C-401'),
  createEntry('Tuesday', 'K', '10:45 TO 11:45', 'PPS/I/SH/C-401'),
  createEntry('Tuesday', 'K', '11:45 TO 12:45', 'SPORTS'),
  createEntry('Tuesday', 'K', '01:30 TO 03:30', 'FDA/I/RK/-K1/C-COM LAB'),
  createEntry('Tuesday', 'K', '01:30 TO 03:30', 'CFT/I/JS/-K2/A-214(B) LAB'),
  createEntry('Tuesday', 'K', '01:30 TO 03:30', 'PPS/I/SH/-K3/C-IT LAB'),

  // Cluster L • CSE-V
  createEntry('Tuesday', 'L', '09:45 TO 10:45', 'PPS/I/SC/C-402'),
  createEntry('Tuesday', 'L', '10:45 TO 12:45', 'CFT/I/SR/-L1/A-IDEA LAB'),
  createEntry('Tuesday', 'L', '10:45 TO 12:45', 'EP/I/SB/-L2/PHY LAB'),
  createEntry('Tuesday', 'L', '10:45 TO 12:45', 'FDA/I/RD/-L3/C-IT LAB'),
  createEntry('Tuesday', 'L', '01:30 TO 02:30', 'ICDE/I/DRN/C-401'),
  createEntry('Tuesday', 'L', '02:30 TO 03:30', 'LAS/I/SPS/C-401'),
  createEntry('Tuesday', 'L', '03:30 TO 05:30', 'FDA/I/RD/-L1/C-COM LAB'),
  createEntry('Tuesday', 'L', '03:30 TO 05:30', 'CFT/I/SR/-L2/A-214(B) LAB'),
  createEntry('Tuesday', 'L', '03:30 TO 05:30', 'PPS/I/SH/-L3/C-IT LAB'),

  // Cluster M • AI-I
  createEntry('Tuesday', 'M', '09:45 TO 10:45', 'PPS/I/SVC/C-403'),
  createEntry('Tuesday', 'M', '10:45 TO 12:45', 'PPS/I/SVC/-M1/C-IT LAB'),
  createEntry('Tuesday', 'M', '10:45 TO 12:45', 'FDA/I/SWP/-M2/C-COM LAB'),
  createEntry('Tuesday', 'M', '10:45 TO 12:45', 'EP/I/RI/-M3/PHY LAB'),

  // Cluster N • AI-II
  createEntry('Tuesday', 'N', '09:45 TO 10:45', 'IKS/I/SW/C-404'),
  createEntry('Tuesday', 'N', '10:45 TO 11:45', 'ICDE/I/AK/C-404'),
  createEntry('Tuesday', 'N', '11:45 TO 12:45', 'YOGA/I/KM/JSH'),
  createEntry('Tuesday', 'N', '01:30 TO 03:30', 'EP/I/SW/-N1/PHY LAB'),
  createEntry('Tuesday', 'N', '01:30 TO 03:30', 'PPS/I/SVC/-N2/C-COM LAB'),
  createEntry('Tuesday', 'N', '01:30 TO 03:30', 'CFT/I/SR/-N3/A-303 LAB'),
];
