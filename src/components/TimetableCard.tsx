import React, { useState } from 'react';
import { Clock, MapPin, User, FileText, Coffee, Ban, Edit2 } from 'lucide-react';
import { TimetableEntry } from '../types';

interface TimetableCardProps {
  entry: TimetableEntry;
  isDarkMode: boolean;
  isCurrentClass?: boolean;
  userNote?: string;
  onSaveNote?: (entryId: string, noteText: string) => void;
  onDeleteNote?: (entryId: string) => void;
}

export const TimetableCard: React.FC<TimetableCardProps> = ({
  entry,
  isDarkMode,
  isCurrentClass = false,
  userNote,
  onSaveNote,
  onDeleteNote,
}) => {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteInput, setNoteInput] = useState(userNote || '');

  // 1. NO LECTURE DISPLAY (Section 9)
  if (entry.type === 'no-lecture' || entry.subjectCode === 'NO_LECTURE') {
    return (
      <div
        id={`timetable-card-${entry.id}`}
        className={`p-5 rounded-2xl border border-dashed transition-all flex flex-col items-center justify-center text-center min-h-[160px] ${
          isDarkMode
            ? 'bg-neutral-900/40 border-neutral-800 text-neutral-400'
            : 'bg-neutral-100/70 border-neutral-300 text-neutral-600'
        }`}
      >
        <div className="w-10 h-10 mb-2.5 rounded-full bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center text-neutral-400">
          <Ban className="w-5 h-5" />
        </div>
        <div className="text-sm font-black uppercase tracking-wider text-neutral-300">
          NO LECTURE
        </div>
        <div className="font-mono text-xs font-bold text-yellow-400 mt-1">
          {entry.timeSlot}
        </div>
        <div className="text-[11px] text-neutral-500 mt-2">
          Cluster {entry.cluster} ({entry.branchCode})
        </div>
      </div>
    );
  }

  // 2. LUNCH BLOCK DISPLAY (Section 9)
  if (entry.type === 'lunch' || entry.subjectCode === 'LUNCH') {
    return (
      <div
        id={`timetable-card-${entry.id}`}
        className={`p-5 rounded-2xl border transition-all flex flex-col items-center justify-center text-center min-h-[160px] ${
          isDarkMode
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
            : 'bg-amber-50/80 border-amber-200 text-amber-900 shadow-xs'
        }`}
      >
        <div className="w-10 h-10 mb-2 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
          <Coffee className="w-5 h-5" />
        </div>
        <div className="text-sm font-black uppercase tracking-wider text-amber-400">
          LUNCH TIME
        </div>
        <div className="font-mono text-xs font-bold text-amber-300 mt-1">
          {entry.timeSlot}
        </div>
        <div className="text-[11px] opacity-75 mt-2">
          College Cafeteria & Dining Hall
        </div>
      </div>
    );
  }

  // 3. NORMAL LECTURE DISPLAY
  const handleSaveNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveNote) {
      onSaveNote(entry.id, noteInput.trim());
    }
    setIsEditingNote(false);
  };

  const handleDeleteNoteClick = () => {
    if (onDeleteNote) {
      onDeleteNote(entry.id);
    }
    setNoteInput('');
    setIsEditingNote(false);
  };

  // Badges based on type
  const getBadge = () => {
    if (entry.type === 'lab') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-950 shadow-xs">
          LAB
        </span>
      );
    }
    if (entry.type === 'library') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
          LIBRARY
        </span>
      );
    }
    if (entry.type === 'sports') {
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          SPORTS
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700">
        LECTURE
      </span>
    );
  };

  return (
    <div
      id={`timetable-card-${entry.id}`}
      className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:shadow-md ${
        isCurrentClass
          ? 'ring-2 ring-yellow-400 border-yellow-400/80 bg-yellow-400/5'
          : isDarkMode
          ? 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700 text-white'
          : 'bg-white border-neutral-200 hover:border-neutral-300 text-neutral-900 shadow-xs'
      }`}
    >
      {/* 1. TIME */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-yellow-400 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>{entry.timeSlot}</span>
          </div>
          <div className="flex items-center gap-1.5">
            {entry.durationHours > 1 && (
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                2 Hrs
              </span>
            )}
            {getBadge()}
          </div>
        </div>

        {/* 2. SUBJECT */}
        <h4 className="font-extrabold text-sm sm:text-base leading-snug mb-1.5">
          {entry.subjectFullName}
        </h4>

        {/* 3. CODE */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block font-mono text-xs px-2 py-0.5 rounded bg-neutral-800/80 text-yellow-400 border border-neutral-700/80 font-bold">
            {entry.subjectCode}
          </span>
          {entry.batch && (
            <span className="text-xs px-1.5 py-0.5 rounded font-bold bg-neutral-800 text-neutral-200 border border-neutral-700">
              {entry.batch}
            </span>
          )}
        </div>
      </div>

      {/* 4. FACULTY & 5. ROOM */}
      <div>
        <div
          className={`grid grid-cols-1 gap-1.5 pt-2.5 border-t text-xs ${
            isDarkMode ? 'border-neutral-800 text-neutral-300' : 'border-neutral-100 text-neutral-600'
          }`}
        >
          {/* FACULTY */}
          <div className="flex items-center gap-1.5 truncate">
            <User className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="truncate">
              Faculty:{' '}
              <strong className={isDarkMode ? 'text-white' : 'text-neutral-900'}>
                {entry.faculty || '—'}
              </strong>
            </span>
          </div>

          {/* ROOM */}
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="truncate">
              Room:{' '}
              <strong className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>
                {entry.roomOrLab || '—'}
              </strong>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 pt-1.5 text-[11px] text-neutral-400">
          <span>
            Cluster: <strong className="text-yellow-400">{entry.cluster} ({entry.branchCode})</strong>
          </span>

          {/* Personal Note Button */}
          {onSaveNote && (
            <button
              onClick={() => setIsEditingNote(!isEditingNote)}
              className="text-[11px] text-neutral-400 hover:text-yellow-400 transition-colors flex items-center gap-1 cursor-pointer"
              title="Add a personal note"
            >
              <FileText className="w-3 h-3" />
              <span>{userNote ? 'Note' : '+ Note'}</span>
            </button>
          )}
        </div>

        {/* Existing Note Display */}
        {userNote && !isEditingNote && (
          <div
            className={`mt-2.5 p-2 rounded-xl text-xs flex items-start justify-between gap-2 ${
              isDarkMode
                ? 'bg-yellow-400/10 border border-yellow-400/20 text-yellow-300'
                : 'bg-yellow-50 border border-yellow-200 text-yellow-900'
            }`}
          >
            <span className="italic break-words">"{userNote}"</span>
            <button
              onClick={() => setIsEditingNote(true)}
              className="opacity-70 hover:opacity-100 text-neutral-400 hover:text-white cursor-pointer"
              title="Edit note"
            >
              <Edit2 className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Personal Note Editor inline */}
        {isEditingNote && (
          <form onSubmit={handleSaveNoteSubmit} className="mt-2.5 space-y-1.5">
            <input
              type="text"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="e.g. Bring practical file / journal..."
              className={`w-full text-xs p-2 rounded-lg border focus:outline-none focus:ring-1 focus:ring-yellow-400 ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-700 text-white'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900'
              }`}
              autoFocus
            />
            <div className="flex items-center justify-end gap-1.5">
              {userNote && (
                <button
                  type="button"
                  onClick={handleDeleteNoteClick}
                  className="px-2 py-1 rounded text-[10px] text-red-400 hover:bg-red-500/10 cursor-pointer"
                >
                  Delete
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsEditingNote(false)}
                className="px-2 py-1 rounded text-[10px] text-neutral-400 hover:bg-neutral-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-2.5 py-1 rounded text-[10px] font-bold bg-yellow-400 text-neutral-950 cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
