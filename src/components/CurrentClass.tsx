import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, AlertCircle, Coffee, ArrowRight, MapPin, User } from 'lucide-react';
import { TimetableEntry } from '../types';
import { getCurrentAndNextClass, BRANCH_OPTIONS, CLUSTERS } from '../data';

interface CurrentClassProps {
  selectedBranch: string;
  selectedCluster: string;
  isDarkMode: boolean;
}

export const CurrentClass: React.FC<CurrentClassProps> = ({
  selectedBranch,
  selectedCluster,
  isDarkMode,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const branchObj = BRANCH_OPTIONS.find((b) => b.code === selectedBranch);

  const { nowClass, nextClass, dayName, isSunday, isLunchNow } = getCurrentAndNextClass(
    selectedBranch,
    selectedCluster,
    currentTime
  );

  const formattedTimeStr = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section id="current-class-section" className="mb-10">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          <h3
            className={`font-bold text-base sm:text-lg ${
              isDarkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Live Schedule Status
          </h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-400 font-semibold">
            {dayName} • {formattedTimeStr}
          </span>
        </div>
        <div className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
          Active for:{' '}
          <strong className="text-yellow-400">
            {selectedBranch !== 'ALL' ? `Branch ${selectedBranch}` : 'All Branches'}
            {selectedCluster !== 'ALL' ? ` • Cluster ${selectedCluster}` : ''}
          </strong>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* NOW CARD */}
        <div
          id="now-class-card"
          className={`relative p-5 rounded-2xl border transition-all ${
            isDarkMode
              ? 'bg-neutral-900/80 border-neutral-800 text-white'
              : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          } ${nowClass || isLunchNow ? 'border-yellow-400/50 ring-1 ring-yellow-400/20' : ''}`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
              </span>
              <span className="text-xs font-black tracking-wider uppercase text-yellow-400">
                NOW • RUNNING
              </span>
            </div>
            {nowClass && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                {nowClass.startTime} – {nowClass.endTime}
              </span>
            )}
          </div>

          {isSunday ? (
            <div className="py-5 text-center">
              <p className="text-sm font-semibold text-yellow-400">
                Sunday — No regular timetable
              </p>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Enjoy your weekend! Timetable resumes Monday at 09:45 AM.
              </p>
            </div>
          ) : isLunchNow ? (
            <div className="py-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-yellow-400">LUNCH TIME BREAK</h4>
                <p className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  12:45 PM – 01:30 PM • 45 minutes recess
                </p>
              </div>
            </div>
          ) : nowClass ? (
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-base font-extrabold">
                    {nowClass.subjectFullName}
                  </h4>
                  <span className="text-xs font-mono font-bold text-yellow-400">
                    {nowClass.subjectCode}
                  </span>
                  {nowClass.batch && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                      {nowClass.batch}
                    </span>
                  )}
                </div>
                {nowClass.isLab && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-950">
                    LAB
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-800/60 text-xs">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="truncate">Faculty: <strong>{nowClass.faculty || '—'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="truncate">Room/Lab: <strong>{nowClass.roomOrLab}</strong></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4 text-center">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                No class currently running
              </p>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                Check upcoming lectures or browse full daily schedule below.
              </p>
            </div>
          )}
        </div>

        {/* UPCOMING CLASS CARD */}
        <div
          id="upcoming-class-card"
          className={`p-5 rounded-2xl border transition-all ${
            isDarkMode
              ? 'bg-neutral-900/80 border-neutral-800 text-white'
              : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-black tracking-wider uppercase text-yellow-400">
                UPCOMING • NEXT CLASS
              </span>
            </div>
            {nextClass && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                {nextClass.startTime} – {nextClass.endTime}
              </span>
            )}
          </div>

          {isSunday ? (
            <div className="py-5 text-center">
              <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Next scheduled session: Monday morning at 09:45 AM.
              </p>
            </div>
          ) : nextClass ? (
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-base font-extrabold">
                    {nextClass.subjectFullName}
                  </h4>
                  <span className="text-xs font-mono font-bold text-yellow-400">
                    {nextClass.subjectCode}
                  </span>
                  {nextClass.batch && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                      {nextClass.batch}
                    </span>
                  )}
                </div>
                {nextClass.isLab && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-neutral-950">
                    LAB
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-800/60 text-xs">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="truncate">Faculty: <strong>{nextClass.faculty || '—'}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="truncate">Room/Lab: <strong>{nextClass.roomOrLab}</strong></span>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-4 text-center">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                All classes finished for today
              </p>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                Review the upcoming schedule by selecting another day above.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
