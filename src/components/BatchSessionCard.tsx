import React, { useState } from 'react';
import { Clock, MapPin, User, Layers, FileText, Edit2 } from 'lucide-react';
import { TimetableEntry } from '../types';

interface BatchSessionCardProps {
  entries: TimetableEntry[];
  isDarkMode: boolean;
  userNotes?: Record<string, string>;
  onSaveNote?: (entryId: string, noteText: string) => void;
  onDeleteNote?: (entryId: string) => void;
}

export const BatchSessionCard: React.FC<BatchSessionCardProps> = ({
  entries,
  isDarkMode,
  userNotes = {},
  onSaveNote,
  onDeleteNote,
}) => {
  const first = entries[0];
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState('');

  if (!first) return null;

  // Sort batches: Batch 1, Batch 2, Batch 3
  const sortedBatches = [...entries].sort((a, b) => {
    const bA = a.batch || '';
    const bB = b.batch || '';
    return bA.localeCompare(bB);
  });

  return (
    <div
      id={`batch-session-card-${first.id}`}
      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3 ${
        isDarkMode
          ? 'bg-neutral-900/90 border-neutral-700/80 text-white shadow-lg shadow-black/40'
          : 'bg-white border-neutral-300 text-neutral-900 shadow-sm'
      }`}
    >
      {/* Top Header: Time, 2-Hour Practical badge, Cluster info */}
      <div className="pb-3 border-b border-neutral-800/80 mb-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono font-black text-sm sm:text-base text-yellow-400">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span>{first.timeSlot}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-950 shadow-xs">
              BATCH / PRACTICAL SESSION
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
              {entries.length} Batches
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20">
              Cluster {first.cluster} ({first.branchCode})
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Batches (Batch 1, Batch 2, Batch 3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {sortedBatches.map((batchEntry, index) => {
          const batchLabel = batchEntry.batch || `Batch ${index + 1}`;
          const currentNote = userNotes[batchEntry.id];
          const isEditingThis = editingNoteId === batchEntry.id;

          return (
            <div
              key={batchEntry.id}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition-colors ${
                isDarkMode
                  ? 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700'
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Batch Name Pill */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-xs font-black bg-yellow-400 text-neutral-950 uppercase tracking-wide">
                    {batchLabel}
                  </span>
                  <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-neutral-800 text-yellow-400 border border-neutral-700">
                    {batchEntry.subjectCode}
                  </span>
                </div>

                {/* Subject Title */}
                <h5 className="font-extrabold text-sm leading-snug mb-2 line-clamp-2">
                  {batchEntry.subjectFullName}
                </h5>
              </div>

              {/* Faculty & Room details */}
              <div className="pt-2.5 border-t border-neutral-800/60 text-xs space-y-1.5">
                <div className="flex items-start gap-1.5">
                  <User className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">
                    Faculty / ID:{' '}
                    <strong className={isDarkMode ? 'text-white' : 'text-neutral-900'}>
                      {batchEntry.faculty || '—'}
                    </strong>
                  </span>
                </div>

                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight font-semibold text-yellow-400/90">
                    Room: {batchEntry.roomOrLab}
                  </span>
                </div>

                {/* Personal Note button & display */}
                {onSaveNote && (
                  <div className="pt-1.5">
                    {currentNote && !isEditingThis ? (
                      <div
                        className={`p-1.5 rounded-lg text-[10px] flex items-start justify-between gap-1 ${
                          isDarkMode
                            ? 'bg-yellow-400/10 border border-yellow-400/20 text-yellow-300'
                            : 'bg-yellow-50 border border-yellow-200 text-yellow-900'
                        }`}
                      >
                        <span className="italic break-words line-clamp-2">"{currentNote}"</span>
                        <button
                          onClick={() => {
                            setEditingNoteId(batchEntry.id);
                            setNoteInput(currentNote);
                          }}
                          className="opacity-70 hover:opacity-100 shrink-0"
                          title="Edit note"
                        >
                          <Edit2 className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    ) : isEditingThis ? (
                      <div className="space-y-1">
                        <input
                          type="text"
                          value={noteInput}
                          onChange={(e) => setNoteInput(e.target.value)}
                          placeholder="Note for this batch..."
                          className="w-full text-[10px] p-1 rounded border border-neutral-700 bg-neutral-900 text-white"
                          autoFocus
                        />
                        <div className="flex justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => setEditingNoteId(null)}
                            className="px-1.5 py-0.5 rounded text-[9px] text-neutral-400"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              onSaveNote(batchEntry.id, noteInput.trim());
                              setEditingNoteId(null);
                            }}
                            className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-400 text-neutral-950"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingNoteId(batchEntry.id);
                          setNoteInput('');
                        }}
                        className="text-[10px] text-neutral-400 hover:text-yellow-400 flex items-center gap-1"
                      >
                        <FileText className="w-2.5 h-2.5" />
                        <span>+ Note</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
