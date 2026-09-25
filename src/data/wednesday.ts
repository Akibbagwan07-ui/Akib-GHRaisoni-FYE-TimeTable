import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

export const wednesdayEntries: TimetableEntry[] = [
  // Cluster A • ETC
  createEntry('Wednesday', 'A', '09:45 TO 10:45', 'M&S/I/TVR/C-302'),
  createEntry('Wednesday', 'A', '10:45 TO 11:45', 'DLD/I/PR/C-302'),
  createEntry('Wednesday', 'A', '11:45 TO 12:45', 'CS/I/ARP/C-302'),
  createEntry('Wednesday', 'A', '01:30 TO 02:30', 'MDC/I/DRN/C-301'),
  createEntry('Wednesday', 'A', '02:30 TO 03:30', 'EC/I/UT/C-301'),
  createEntry('Wednesday', 'A', '03:30 TO 05:30', 'M&S/I/PR/-A1/A-214(B) LAB'),
  createEntry('Wednesday', 'A', '03:30 TO 05:30', 'CS/I/ARP/-A2/C-PROG. LAB'),
  createEntry('Wednesday', 'A', '03:30 TO 05:30', 'BEE/I/EE2/-A3/DC MACHINE LAB'),

  // Cluster B • EE
  createEntry('Wednesday', 'B', '09:45 TO 11:45', 'EASP/I/ASK/-B1/A-214(A) LAB'),
  createEntry('Wednesday', 'B', '09:45 TO 11:45', 'CS/I/ARP/-B2/C-PROG. LAB'),
  createEntry('Wednesday', 'B', '09:45 TO 11:45', 'BEE/I/SM/-B3/DC MACHINE LAB'),
  createEntry('Wednesday', 'B', '11:45 TO 12:45', 'MDC/I/ANS/C-403'),

  // Cluster C • ME
  createEntry('Wednesday', 'C', '09:45 TO 11:45', 'EC/I/RDP/-C1/CHY LAB'),
  createEntry('Wednesday', 'C', '09:45 TO 11:45', 'EM/I/SDC/-C2/C-EM LAB'),
  createEntry('Wednesday', 'C', '09:45 TO 11:45', 'CS/I/MS/-C3/C-COM LAB'),
  createEntry('Wednesday', 'C', '11:45 TO 12:45', 'EM/I/SDC/C-401'),
  createEntry('Wednesday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-D1/DH'),
  createEntry('Wednesday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-D2/DH'),
  createEntry('Wednesday', 'C', '01:30 TO 03:30', 'EG/I/JNW/-D3/DH'),

  // Cluster D • CE
  createEntry('Wednesday', 'D', '09:45 TO 10:45', 'EM/I/CG/C-401'),
  createEntry('Wednesday', 'D', '10:45 TO 11:45', 'EG/I/JNW/C-401'),
  createEntry('Wednesday', 'D', '11:45 TO 12:45', 'YOGA/I/KM/JSH'),
  createEntry('Wednesday', 'D', '01:30 TO 02:30', 'MDC/I/AK/C-303'),
  createEntry('Wednesday', 'D', '02:30 TO 03:30', 'CAD/I/SNP/C-303'),

  // Cluster E • AIML
  createEntry('Wednesday', 'E', '09:45 TO 10:45', 'BEE/I/EE2/C-303'),
  createEntry('Wednesday', 'E', '10:45 TO 11:45', 'MDC/I/AK/C-303'),
  createEntry('Wednesday', 'E', '11:45 TO 12:45', 'CS/I/MS/C-303'),
  createEntry('Wednesday', 'E', '01:30 TO 03:30', 'CS/I/ARP/-E1/C-PROG. LAB'),
  createEntry('Wednesday', 'E', '01:30 TO 03:30', 'CP/I/SBD/-E2/C-COM LAB'),
  createEntry('Wednesday', 'E', '01:30 TO 03:30', 'EC/I/SK/-E3/CHY LAB'),

  // Cluster F • DS
  createEntry('Wednesday', 'F', '09:45 TO 10:45', 'DLD/I/RW/C-404'),
  createEntry('Wednesday', 'F', '10:45 TO 12:45', 'CP/I/SBD/-F1/C-IT LAB'),
  createEntry('Wednesday', 'F', '10:45 TO 12:45', 'DLD/I/RW/-F2/A-303 LAB'),
  createEntry('Wednesday', 'F', '10:45 TO 12:45', 'EC/I/UT/-F3/CHY LAB'),
  createEntry('Wednesday', 'F', '01:30 TO 03:30', 'MDC/I/ANS/C-401'),

  // Cluster G • IT
  createEntry('Wednesday', 'G', '09:45 TO 10:45', 'DLD/I/PR/C-304'),
  createEntry('Wednesday', 'G', '10:45 TO 11:45', 'EC/I/SK/C-304'),
  createEntry('Wednesday', 'G', '11:45 TO 12:45', 'BEE/I/SM/C-304'),
  createEntry('Wednesday', 'G', '01:30 TO 03:30', 'DLD/I/PR/-G1/A-303 LAB'),
  createEntry('Wednesday', 'G', '01:30 TO 03:30', 'BEE/I/SM/-G2/DC MACHINE LAB'),
  createEntry('Wednesday', 'G', '01:30 TO 03:30', 'CS/I/MS/-G3/C-IT LAB'),

  // Cluster H • CSE-I
  createEntry('Wednesday', 'H', '09:45 TO 10:45', 'IKS/I/UT/C-305'),
  createEntry('Wednesday', 'H', '10:45 TO 11:45', 'ICDE/I/SPS/C-305'),
  createEntry('Wednesday', 'H', '11:45 TO 12:45', 'PPS/I/SC/C-305'),
  createEntry('Wednesday', 'H', '01:30 TO 02:30', 'ICDE/I/SPS/C-302'),
  createEntry('Wednesday', 'H', '02:30 TO 03:30', 'EP/I/SW/C-302'),
  createEntry('Wednesday', 'H', '03:30 TO 05:30', 'FDA/I/RK/-H1/C-COM LAB'),
  createEntry('Wednesday', 'H', '03:30 TO 05:30', 'CFT/I/TVR/-H2/A-IDEA LAB'),
  createEntry('Wednesday', 'H', '03:30 TO 05:30', 'PPS/I/SC/-H3/C-IT LAB'),

  // Cluster I • CSE-II
  createEntry('Wednesday', 'I', '09:45 TO 10:45', 'LAS/I/ANS/C-402'),
  createEntry('Wednesday', 'I', '10:45 TO 12:45', 'CFT/I/JS/-I1/A-214(B) LAB'),
  createEntry('Wednesday', 'I', '10:45 TO 12:45', 'EP/I/SW/-I2/PHY LAB'),
  createEntry('Wednesday', 'I', '10:45 TO 12:45', 'FDA/I/RK/-I3/C- IT LAB'),

  // Cluster J • CSE-III
  createEntry('Wednesday', 'J', '10:45 TO 11:45', 'PPS/I/SH/C-402'),
  createEntry('Wednesday', 'J', '11:45 TO 12:45', 'LAS/I/AK/C-402'),
  createEntry('Wednesday', 'J', '01:30 TO 02:30', 'FDA/I/RD/C-305'),
  createEntry('Wednesday', 'J', '02:30 TO 03:30', 'ICDE/I/DRN/C-305'),

  // Cluster K • CSE-IV
  createEntry('Wednesday', 'K', '09:45 TO 10:45', 'LAS/I/AK/C-403'),
  createEntry('Wednesday', 'K', '10:45 TO 11:45', 'ICDE/I/DRN/C-403'),
  createEntry('Wednesday', 'K', '11:45 TO 12:45', 'LIBRARY'),
  createEntry('Wednesday', 'K', '01:30 TO 03:30', 'EP/I/SB/-K1/PHY LAB'),
  createEntry('Wednesday', 'K', '01:30 TO 03:30', 'PPS/I/SH/-K2/C-IT LAB'),
  createEntry('Wednesday', 'K', '01:30 TO 03:30', 'CFT/I/JS/-K3/A-214(B) LAB'),

  // Cluster L • CSE-V
  createEntry('Wednesday', 'L', '09:45 TO 10:45', 'EP/I/SB/C-301'),
  createEntry('Wednesday', 'L', '10:45 TO 11:45', 'PPS/I/SC/C-301'),
  createEntry('Wednesday', 'L', '11:45 TO 12:45', 'LAS/I/SPS/C-301'),

  // Cluster M • AI-I
  createEntry('Wednesday', 'M', '09:45 TO 10:45', 'YOGA/I/KM/JSH'),
  createEntry('Wednesday', 'M', '10:45 TO 11:45', 'ICDE/I/ANS/C-404'),
  createEntry('Wednesday', 'M', '11:45 TO 12:45', 'LAS/I/DRN/C-404'),
  createEntry('Wednesday', 'M', '01:30 TO 03:30', 'CFT/I/SR/-M1/A-IDEA LAB'),
  createEntry('Wednesday', 'M', '01:30 TO 03:30', 'EP/I/RI/-M2/PHY LAB'),
  createEntry('Wednesday', 'M', '01:30 TO 03:30', 'FDA/I/SWP/-M3/C-COM LAB'),
  createEntry('Wednesday', 'M', '03:30 TO 05:30', 'EP/I/RI/-M1/PHY LAB'),
  createEntry('Wednesday', 'M', '03:30 TO 05:30', 'PPS/I/SVC/-M2/COM LAB'),
  createEntry('Wednesday', 'M', '03:30 TO 05:30', 'CFT/I/SR/-M3/A-214(B) LAB'),

  // Cluster N • AI-II
  createEntry('Wednesday', 'N', '10:45 TO 12:45', 'CFT/I/SR/-N1/A-IDEA LAB'),
  createEntry('Wednesday', 'N', '10:45 TO 12:45', 'EP/I/SB/-N2/PHY LAB'),
  createEntry('Wednesday', 'N', '10:45 TO 12:45', 'FDA/I/RD/-N3/C-COM LAB'),
  createEntry('Wednesday', 'N', '01:30 TO 02:30', 'PPS/I/SVC/C-304'),
  createEntry('Wednesday', 'N', '02:30 TO 03:30', 'LAS/I/SPS/C-304'),
];
