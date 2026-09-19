import React, { useRef } from 'react';
import { Printer, X, Download, FileText } from 'lucide-react';
import { CLUSTERS, TIMETABLE_BY_DAY, DAYS_ORDER, OFFICIAL_TIME_SLOTS } from '../data';
import { TimetableEntry } from '../types';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCluster: string;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  selectedCluster,
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const clusterCode = selectedCluster === 'ALL' ? 'H' : selectedCluster;
  const clusterInfo = CLUSTERS.find((c) => c.cluster === clusterCode);

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-700 text-white w-full max-w-4xl max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Top Bar */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-yellow-400" />
            <h3 className="font-bold text-base">
              Print Timetable Sheet — Cluster {clusterCode} ({clusterInfo?.displayCode})
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleTriggerPrint}
              className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet Preview */}
        <div className="p-6 overflow-y-auto bg-neutral-950 no-scrollbar">
          <div
            ref={printAreaRef}
            id="printable-timetable-sheet"
            className="bg-white text-black p-8 rounded-xl shadow-lg border border-neutral-300 print-card font-sans"
          >
            {/* College Header */}
            <div className="text-center border-b-2 border-black pb-4 mb-4">
              <h2 className="text-xl font-black uppercase tracking-tight text-neutral-900">
                G H Raisoni College of Engineering and Management, Jalgaon
              </h2>
              <h3 className="text-sm font-bold uppercase text-neutral-800">
                Department of First Year Engineering
              </h3>
              <p className="text-xs font-semibold text-neutral-600 mt-1">
                MASTER TIME TABLE 2026-2027 • SEMESTER-I
              </p>
              <div className="mt-2 text-xs font-bold bg-neutral-100 py-1.5 px-3 rounded border border-neutral-300 inline-block">
                Cluster: <span className="text-black font-extrabold">{clusterCode}</span> | Branch: {clusterInfo?.fullName} ({clusterInfo?.displayCode})
              </div>
            </div>

            {/* Daily Schedule Tables for this cluster */}
            <div className="space-y-4">
              {DAYS_ORDER.filter((d) => d !== 'Saturday').map((day) => {
                const dayEntries = (TIMETABLE_BY_DAY[day] || [])
                  .filter((e) => e.cluster === clusterCode)
                  .sort((a, b) => a.startHourMinutes - b.startHourMinutes);

                return (
                  <div key={day} className="border border-neutral-400 rounded overflow-hidden">
                    <div className="bg-neutral-200 px-3 py-1.5 font-bold text-xs flex justify-between items-center border-b border-neutral-400">
                      <span className="uppercase">{day}</span>
                      <span className="text-[11px] font-normal text-neutral-700">
                        {dayEntries.length} Sessions
                      </span>
                    </div>

                    {dayEntries.length > 0 ? (
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-neutral-300 bg-neutral-50 text-[11px]">
                            <th className="p-1.5 font-bold w-28">Time</th>
                            <th className="p-1.5 font-bold">Subject</th>
                            <th className="p-1.5 font-bold">Type/Batch</th>
                            <th className="p-1.5 font-bold">Faculty</th>
                            <th className="p-1.5 font-bold">Venue</th>
                            <th className="p-1.5 font-bold text-right">Code</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                          {dayEntries.map((e) => (
                            <tr key={e.id}>
                              <td className="p-1.5 font-mono font-bold whitespace-nowrap">{e.timeSlot}</td>
                              <td className="p-1.5 font-semibold">{e.subjectFullName}</td>
                              <td className="p-1.5">{e.isLab ? `LAB (${e.batch || 'All'})` : 'Lecture'}</td>
                              <td className="p-1.5">{e.faculty || '—'}</td>
                              <td className="p-1.5 font-bold">{e.roomOrLab}</td>
                              <td className="p-1.5 text-right font-mono text-[10px] text-neutral-600">{e.rawCode}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className="p-2 text-xs italic text-neutral-500">No scheduled sessions.</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Note & Signatures at bottom */}
            <div className="mt-6 pt-4 border-t border-neutral-300 text-[10px] text-neutral-600 flex justify-between items-end">
              <div>
                <p>Lunch Break: 12:45 PM – 01:30 PM (Daily)</p>
                <p>Extracted from Official Master Time Table 2026-27 (Semester-I)</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Time Table Incharge / HOD</p>
                <p>First Year Engineering Dept.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
