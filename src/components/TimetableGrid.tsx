import React, { useState, useMemo } from 'react';
import { LayoutGrid, Table, Clock, Coffee, AlertCircle, Sparkles } from 'lucide-react';
import { TimetableEntry, DayOfWeek } from '../types';
import { TimetableCard } from './TimetableCard';
import { BatchSessionCard } from './BatchSessionCard';
import { BRANCH_OPTIONS, CLUSTERS } from '../data';

interface TimetableGridProps {
  entries: TimetableEntry[];
  selectedDay: DayOfWeek;
  selectedBranch: string;
  selectedCluster: string;
  isDarkMode: boolean;
  userNotes: Record<string, string>;
  onSaveNote: (id: string, note: string) => void;
  onDeleteNote: (id: string) => void;
}

export const TimetableGrid: React.FC<TimetableGridProps> = ({
  entries,
  selectedDay,
  selectedBranch,
  selectedCluster,
  isDarkMode,
  userNotes,
  onSaveNote,
  onDeleteNote,
}) => {
  const [viewMode, setViewMode] = useState<'cards' | 'grid'>('cards');

  const branchObj = BRANCH_OPTIONS.find((b) => b.code === selectedBranch);

  // Check if there is already an explicit lunch entry in the entries
  const hasLunchEntry = useMemo(() => {
    return entries.some((e) => e.type === 'lunch' || e.subjectCode === 'LUNCH');
  }, [entries]);

  // Combine entries and ensure Lunch block is present at 12:45 - 01:30
  const combinedEntriesWithLunch = useMemo(() => {
    if (selectedDay === 'Saturday' || entries.length === 0) {
      return entries;
    }

    if (hasLunchEntry) {
      return entries;
    }

    // Insert dedicated lunch block at 12:45 - 01:30
    const lunchEntry: TimetableEntry = {
      id: `lunch-block-${selectedDay}-${selectedCluster}`,
      day: selectedDay,
      cluster: selectedCluster !== 'ALL' ? selectedCluster : 'ALL',
      branchCode: selectedBranch !== 'ALL' ? selectedBranch : 'ALL',
      timeSlot: '12:45 – 01:30',
      startTime: '12:45',
      endTime: '01:30',
      startHourMinutes: 765,
      endHourMinutes: 810,
      rawCode: 'LUNCH',
      subjectCode: 'LUNCH',
      subjectFullName: 'Lunch Time',
      faculty: '',
      roomOrLab: 'Cafeteria / Dining Hall',
      isLab: false,
      type: 'lunch',
      durationHours: 1,
      timeSlotSpan: ['12:45 TO 01:30'],
    };

    return [...entries, lunchEntry];
  }, [entries, hasLunchEntry, selectedDay, selectedCluster, selectedBranch]);

  // Group entries: entries with the same cluster and timeSlot and batch are grouped
  const groupedSessions = useMemo(() => {
    const sorted = [...combinedEntriesWithLunch].sort(
      (a, b) => a.startHourMinutes - b.startHourMinutes
    );

    const groups: {
      key: string;
      isBatchGroup: boolean;
      timeSlot: string;
      startHourMinutes: number;
      entries: TimetableEntry[];
    }[] = [];

    sorted.forEach((entry) => {
      // If it's a batch session (has batch like Batch 1, Batch 2 or isLab)
      const groupKey = `${entry.cluster}_${entry.timeSlot}`;
      const existing = groups.find(
        (g) => g.key === groupKey && (entry.batch || g.isBatchGroup)
      );

      if (existing && entry.type !== 'lunch' && entry.type !== 'no-lecture') {
        existing.entries.push(entry);
        existing.isBatchGroup = true;
      } else {
        groups.push({
          key: groupKey,
          isBatchGroup: false,
          timeSlot: entry.timeSlot,
          startHourMinutes: entry.startHourMinutes,
          entries: [entry],
        });
      }
    });

    return groups;
  }, [combinedEntriesWithLunch]);

  // Saturday Empty State
  if (selectedDay === 'Saturday') {
    return (
      <div
        id="saturday-empty-view"
        className={`p-10 rounded-2xl border text-center my-8 ${
          isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200'
        }`}
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
          <Clock className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-2">No Scheduled Classes on Saturday</h3>
        <p className={`text-sm max-w-md mx-auto mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
          According to the official Master Time Table (Semester-I, 2026-27), Saturdays are reserved for self-study, library work, remedial activities, and projects.
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          Academic Schedule resumes Monday 09:45 AM
        </span>
      </div>
    );
  }

  // No classes match filter
  if (entries.length === 0) {
    return (
      <div
        id="no-classes-empty-view"
        className={`p-10 rounded-2xl border text-center my-8 ${
          isDarkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-neutral-200'
        }`}
      >
        <AlertCircle className="w-10 h-10 mx-auto mb-3 text-neutral-400" />
        <h3 className="text-lg font-bold mb-1">No Classes Scheduled</h3>
        <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
          There are no lectures or labs scheduled for{' '}
          {selectedBranch !== 'ALL' ? `Branch ${selectedBranch} ` : ''}
          {selectedCluster !== 'ALL' ? `Cluster ${selectedCluster} ` : ''}
          on {selectedDay}.
        </p>
      </div>
    );
  }

  return (
    <div id="timetable-view-container" className="my-6">
      {/* Header bar: Status and View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold flex items-center gap-2">
            <span>{selectedDay}'s Timetable</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 font-mono font-bold">
              {entries.length} Sessions
            </span>
          </h3>
          <p className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {selectedBranch !== 'ALL' && (
              <span>
                Branch: <strong className="text-yellow-400">{selectedBranch}</strong> ({branchObj?.name}) •{' '}
              </span>
            )}
            {selectedCluster !== 'ALL' ? (
              <span>
                Cluster: <strong className="text-yellow-400">{selectedCluster}</strong>
              </span>
            ) : (
              <span>All Clusters</span>
            )}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div
          className={`flex items-center p-1 rounded-xl border ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }`}
        >
          <button
            id="view-mode-cards-btn"
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-yellow-400 text-neutral-950 shadow-xs'
                : isDarkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>
          <button
            id="view-mode-grid-btn"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-yellow-400 text-neutral-950 shadow-xs'
                : isDarkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Schedule Table</span>
          </button>
        </div>
      </div>

      {/* VIEW: CARDS (Responsive Grid with Grouped Batch Sessions) */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {groupedSessions.map((group) => {
            if (group.isBatchGroup && group.entries.length > 1) {
              return (
                <BatchSessionCard
                  key={group.key}
                  entries={group.entries}
                  isDarkMode={isDarkMode}
                  userNotes={userNotes}
                  onSaveNote={onSaveNote}
                  onDeleteNote={onDeleteNote}
                />
              );
            }
            const single = group.entries[0];
            return (
              <TimetableCard
                key={single.id}
                entry={single}
                isDarkMode={isDarkMode}
                userNote={userNotes[single.id]}
                onSaveNote={onSaveNote}
                onDeleteNote={onDeleteNote}
              />
            );
          })}
        </div>
      ) : (
        /* VIEW: SCHEDULE TABLE / MASTER MATRIX */
        <div
          id="timetable-grid-table-wrap"
          className={`overflow-x-auto rounded-2xl border ${
            isDarkMode ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
          }`}
        >
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr
                className={`border-b ${
                  isDarkMode
                    ? 'bg-neutral-900/90 border-neutral-800 text-neutral-300'
                    : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                }`}
              >
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Time Slot</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Cluster</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Subject & Code</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Type / Batch</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Faculty / Identifier</th>
                <th className="py-3 px-4 font-bold uppercase tracking-wider">Room / Lab</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/40">
              {combinedEntriesWithLunch.map((entry) => (
                <tr
                  key={entry.id}
                  className={`transition-colors ${
                    entry.type === 'no-lecture'
                      ? 'bg-neutral-900/30 text-neutral-500 italic'
                      : entry.type === 'lunch'
                      ? isDarkMode
                        ? 'bg-amber-500/5 text-amber-300 font-medium'
                        : 'bg-amber-50 text-amber-900 font-medium'
                      : isDarkMode
                      ? 'hover:bg-neutral-900/50'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-yellow-400 whitespace-nowrap">
                    {entry.timeSlot}
                  </td>
                  <td className="py-3.5 px-4 font-bold">
                    {entry.type === 'lunch' ? (
                      <span className="text-amber-400">—</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                        {entry.cluster} ({entry.branchCode})
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-sm">{entry.subjectFullName}</div>
                    <div className="text-[11px] font-mono text-neutral-400">{entry.subjectCode}</div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {entry.type === 'no-lecture' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-400 border border-neutral-700">
                        EMPTY
                      </span>
                    ) : entry.type === 'lunch' ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-400 border border-amber-400/30">
                        BREAK
                      </span>
                    ) : entry.isLab ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-yellow-400 text-neutral-950 mr-1.5">
                        {entry.batch ? entry.batch : 'LAB'}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-800 text-neutral-300">
                        LECTURE
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-medium">
                    {entry.faculty || '—'}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-yellow-400/90">
                    {entry.roomOrLab || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
