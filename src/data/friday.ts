import { TimetableEntry } from '../types';
import { createEntry } from './parserHelper';

export const fridayEntries: TimetableEntry[] = [
  // Cluster A • ETC
  createEntry('Friday', 'A', '09:45 TO 10:45', 'BEE/I/SM/C-404'),
  createEntry('Friday', 'A', '10:45 TO 12:45', 'DLD/I/PR/-A1/A-303 LAB'),
  createEntry('Friday', 'A', '10:45 TO 12:45', 'M&S/I/RW/-A2/A-214(B) LAB'),
  createEntry('Friday', 'A', '10:45 TO 12:45', 'CS/I/ARP/-A3/C-PROG. LAB'),

  // Cluster B • EE
  createEntry('Friday', 'B', '09:45 TO 10:45', 'YOGA/I/KM/JSH'),
  createEntry('Friday', 'B', '10:45 TO 11:45', 'EASP/I/ASK/C-402'),
  createEntry('Friday', 'B', '11:45 TO 12:45', 'BE/I/TVR/C-402'),
  createEntry('Friday', 'B', '01:30 TO 03:30', 'BE/I/TVR/-B1/A-303 LAB'),
  createEntry('Friday', 'B', '01:30 TO 03:30', 'BEE/I/SM/-B2/A-214(A) LAB'),
  createEntry('Friday', 'B', '01:30 TO 03:30', 'CS/I/ARP/-B3/C-PROG. LAB'),

  // Cluster C • ME
  createEntry('Friday', 'C', '09:45 TO 10:45', 'EG/I/JNW/C-301'),
  createEntry('Friday', 'C', '10:45 TO 11:45', 'EM/I/SDC/C-301'),
  createEntry('Friday', 'C', '11:45 TO 12:45', 'SPV/I/MP/C-301'),
  createEntry('Friday', 'C', '01:30 TO 02:30', 'MDC/I/SPS/C-305'),

  // Cluster D • CE
  createEntry('Friday', 'D', '09:45 TO 10:45', 'EC/I/RDP/C-402'),
  createEntry('Friday', 'D', '10:45 TO 12:45', 'CS/I/MS/-D1/C-COM LAB'),
  createEntry('Friday', 'D', '10:45 TO 12:45', 'EC/I/RDP/-D2/CHY LAB'),
  createEntry('Friday', 'D', '10:45 TO 12:45', 'CAD/I/SNP/-D3/CE-CAD LAB'),
  createEntry('Friday', 'D', '01:30 TO 03:30', 'EM/I/CG/-D1/C-EM LAB'),
  createEntry('Friday', 'D', '01:30 TO 03:30', 'CAD/I/SNP/-D2/CE-CAD LAB'),
  createEntry('Friday', 'D', '01:30 TO 03:30', 'EC/I/RDP/-D3/CHY LAB'),

  // Cluster E • AIML
  createEntry('Friday', 'E', '09:45 TO 10:45', 'DLD/I/RW/C-401'),
  createEntry('Friday', 'E', '10:45 TO 11:45', 'BEE/I/EE2/C-401'),
  createEntry('Friday', 'E', '11:45 TO 12:45', 'LIBRARY'),
  createEntry('Friday', 'E', '01:30 TO 02:30', 'CP/I/SBD/C-301'),
  createEntry('Friday', 'E', '02:30 TO 03:30', 'EC/I/SK/C-301'),
  createEntry('Friday', 'E', '03:30 TO 05:30', 'BEE/I/EE2/-E1/A-214(A) LAB'),
  createEntry('Friday', 'E', '03:30 TO 05:30', 'CS/I/MS/-E2/C-PROG. LAB'),
  createEntry('Friday', 'E', '03:30 TO 05:30', 'DLD/I/RW/-E3/A-303 LAB'),

  // Cluster F • DS
  createEntry('Friday', 'F', '10:45 TO 11:45', 'MDC/I/ANS/C-403'),
  createEntry('Friday', 'F', '11:45 TO 12:45', 'BEE/I/EE2/C-403'),
  createEntry('Friday', 'F', '01:30 TO 02:30', 'DLD/I/RW/C-402'),

  // Cluster G • IT
  createEntry('Friday', 'G', '09:45 TO 10:45', 'YOGA/I/KM/JSH'),
  createEntry('Friday', 'G', '10:45 TO 12:45', 'BEE/I/SM/-G1/DC MACHINE LAB'),
  createEntry('Friday', 'G', '10:45 TO 12:45', 'EC/I/SK/-G2/CHY LAB'),
  createEntry('Friday', 'G', '10:45 TO 12:45', 'CP/I/SBD/-G3/C-IT LAB'),
  createEntry('Friday', 'G', '01:30 TO 02:30', 'DLD/I/PR/C-303'),
  createEntry('Friday', 'G', '02:30 TO 03:30', 'MDC/I/ANS/C-303'),
  createEntry('Friday', 'G', '03:30 TO 04:30', 'BEE/I/SM/C-303'),

  // Cluster H • CSE-I
  createEntry('Friday', 'H', '09:45 TO 11:45', 'CFT/I/TVR/-H1/A-303 LAB'),
  createEntry('Friday', 'H', '09:45 TO 11:45', 'EP/I/SW/-H2/PHY LAB'),
  createEntry('Friday', 'H', '09:45 TO 11:45', 'FDA/I/RK/-H3/CE-CAD LAB'),
  createEntry('Friday', 'H', '11:45 TO 12:45', 'LAS/I/DRN/C-401'),

  // Cluster I • CSE-II
  createEntry('Friday', 'I', '09:45 TO 10:45', 'IKS/I/SK/C-304'),
  createEntry('Friday', 'I', '10:45 TO 11:45', 'ICDE/I/SPS/C-304'),
  createEntry('Friday', 'I', '11:45 TO 12:45', 'LAS/I/ANS/C-304'),
  createEntry('Friday', 'I', '01:30 TO 03:30', 'FDA/I/RK/-I1/C-COM LAB'),
  createEntry('Friday', 'I', '01:30 TO 03:30', 'CFT/I/JS/-I2/A-214(B) LAB'),
  createEntry('Friday', 'I', '01:30 TO 03:30', 'PPS/I/SC/-I3/C-IT LAB'),

  // Cluster J • CSE-III
  createEntry('Friday', 'J', '09:45 TO 10:45', 'LAS/I/AK/C-403'),
  createEntry('Friday', 'J', '10:45 TO 12:45', 'FDA/I/RD/-J1/C-COM LAB'),
  createEntry('Friday', 'J', '10:45 TO 12:45', 'CFT/I/JS/-J2/A-IDEA LAB'),
  createEntry('Friday', 'J', '10:45 TO 12:45', 'PPS/I/SH/-J3/C-IT LAB'),
  createEntry('Friday', 'J', '01:30 TO 02:30', 'ICDE/I/DRN/C-401'),

  // Cluster K • CSE-IV
  createEntry('Friday', 'K', '10:45 TO 11:45', 'IKS/I/RI/C-404'),
  createEntry('Friday', 'K', '11:45 TO 12:45', 'LAS/I/AK/C-404'),
  createEntry('Friday', 'K', '01:30 TO 02:30', 'LIBRARY'),
  createEntry('Friday', 'K', '02:30 TO 03:30', 'PPS/I/SH/C-304'),
  createEntry('Friday', 'K', '03:30 TO 05:30', 'PPS/I/SH/-K1/C-COM LAB'),
  createEntry('Friday', 'K', '03:30 TO 05:30', 'FDA/I/RK/-K2/C-IT LAB'),
  createEntry('Friday', 'K', '03:30 TO 05:30', 'EP/I/SB/-K3/PHY LAB'),

  // Cluster L • CSE-V
  createEntry('Friday', 'L', '09:45 TO 10:45', 'ICDE/I/DRN/C-305'),
  createEntry('Friday', 'L', '10:45 TO 11:45', 'PPS/I/SC/C-305'),
  createEntry('Friday', 'L', '11:45 TO 12:45', 'LAS/I/SPS/C-305'),
  createEntry('Friday', 'L', '01:30 TO 03:30', 'PPS/I/SVC/-L1/C-COM LAB'),
  createEntry('Friday', 'L', '01:30 TO 03:30', 'FDA/I/RD/-L2/C-IT LAB'),
  createEntry('Friday', 'L', '01:30 TO 03:30', 'EP/I/SB/-L3/PHY LAB'),

  // Cluster M • AI-I
  createEntry('Friday', 'M', '09:45 TO 10:45', 'PPS/I/SVC/C-302'),
  createEntry('Friday', 'M', '10:45 TO 11:45', 'IKS/I/AK/C-302'),
  createEntry('Friday', 'M', '11:45 TO 12:45', 'EP/I/RI/C-302'),

  // Cluster N • AI-II
  createEntry('Friday', 'N', '09:45 TO 10:45', 'LAS/I/SPS/C-303'),
  createEntry('Friday', 'N', '10:45 TO 11:45', 'CFT/I/SR/C-303'),
  createEntry('Friday', 'N', '11:45 TO 12:45', 'PPS/I/SVC/C-303'),
  createEntry('Friday', 'N', '01:30 TO 02:30', 'IKS/I/SW/C-302'),
  createEntry('Friday', 'N', '02:30 TO 03:30', 'ICDE/I/AK/C-302'),
  createEntry('Friday', 'N', '03:30 TO 05:30', 'FDA/I/RD/-N1/C-COM LAB'),
  createEntry('Friday', 'N', '03:30 TO 05:30', 'CFT/I/SR/-N2/A-IDEA LAB'),
  createEntry('Friday', 'N', '03:30 TO 05:30', 'PPS/I/SVC/-N3/C-IT LAB'),
];
