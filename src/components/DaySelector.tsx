import React from 'react';
import { DayOfWeek } from '../types';
import { DAYS_ORDER } from '../data';

interface DaySelectorProps {
  selectedDay: DayOfWeek;
  onSelectDay: (day: DayOfWeek) => void;
  isDarkMode: boolean;
}

const DAY_ABBREVIATIONS: Record<DayOfWeek, string> = {
  Monday: 'MON',
  Tuesday: 'TUE',
  Wednesday: 'WED',
  Thursday: 'THU',
  Friday: 'FRI',
  Saturday: 'SAT',
};

export const DaySelector: React.FC<DaySelectorProps> = ({
  selectedDay,
  onSelectDay,
  isDarkMode,
}) => {
  // Check if today matches any day
  const todayDayIndex = new Date().getDay();
  const dayIndexMap: Record<number, DayOfWeek> = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const actualToday = dayIndexMap[todayDayIndex];

  return (
    <div id="day-selector-container" className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          Select Day
        </span>
        {actualToday && (
          <span className="text-[11px] text-yellow-400/90 font-medium">
            Today is <strong>{actualToday}</strong>
          </span>
        )}
      </div>

      {/* Horizontal scroll container on mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {DAYS_ORDER.map((day) => {
          const isSelected = selectedDay === day;
          const isToday = actualToday === day;

          return (
            <button
              key={day}
              id={`day-btn-${day.toLowerCase()}`}
              onClick={() => onSelectDay(day)}
              className={`relative flex-1 min-w-[72px] sm:min-w-[90px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all select-none cursor-pointer flex flex-col items-center justify-center ${
                isSelected
                  ? 'bg-yellow-400 text-neutral-950 shadow-md shadow-yellow-400/25 ring-2 ring-yellow-400'
                  : isDarkMode
                  ? 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-850'
                  : 'bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:border-neutral-300 hover:bg-neutral-50 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-1">
                <span>{DAY_ABBREVIATIONS[day]}</span>
                {isToday && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-neutral-950' : 'bg-yellow-400 animate-pulse'
                    }`}
                    title="Today"
                  />
                )}
              </div>
              <span
                className={`text-[10px] lowercase font-normal hidden sm:inline ${
                  isSelected
                    ? 'text-neutral-900 font-semibold'
                    : isDarkMode
                    ? 'text-neutral-500'
                    : 'text-neutral-400'
                }`}
              >
                {day}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
