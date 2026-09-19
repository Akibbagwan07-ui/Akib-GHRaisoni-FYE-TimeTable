import React from 'react';
import { Info, ShieldCheck, FileCheck, School, BookOpen, Clock, Building, Award } from 'lucide-react';
import { SUBJECT_NAMES } from '../data/clusters';

interface AboutViewProps {
  isDarkMode: boolean;
}

export const AboutView: React.FC<AboutViewProps> = ({ isDarkMode }) => {
  return (
    <section id="about-page-view" className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Title Banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Academic Portal Information</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-2 ${
              isDarkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            About This Timetable Portal
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Official Timetable Information for First Year B.Tech Engineering Students.
          </p>
        </div>

        {/* Institution Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode ? 'bg-neutral-900/80 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-neutral-950 flex items-center justify-center font-black text-xl shrink-0 shadow-md shadow-yellow-400/20">
              GH
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-yellow-400">
                G H Raisoni College of Engineering and Management, Jalgaon
              </h3>
              <p className={`text-sm mt-0.5 font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                Department of First Year Engineering (FY B.Tech)
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs px-2.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Academic Year: <strong>2026-2027</strong>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 font-semibold">
                  Semester-I
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                  Autonomous Institute
                </span>
              </div>
            </div>
          </div>

          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
            This website is engineered specifically to give first-year students and faculty quick, friction-free access to daily schedules, laboratory batch allocations, lecture venues, and faculty designations.
          </p>
        </div>

        {/* Data Source Truth & Verification Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode ? 'bg-neutral-900/80 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold">Data Integrity & Source of Truth</h3>
          </div>
          <div
            className={`p-4 rounded-xl border mb-4 text-xs font-mono ${
              isDarkMode
                ? 'bg-neutral-950 border-neutral-800 text-neutral-300'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800'
            }`}
          >
            Source: Official Master Time Table 2026 (Semester-I) PDF & Branch + Cluster Reference Document
          </div>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            All timetable entries—including subject codes, room allocations (such as C-301, C-404, A-303 LAB, PHY LAB), faculty initials, and batch schedules—are strictly extracted from the college's official Master Time Table document without interpolation or automated guesswork.
          </p>
        </div>

        {/* Official Subject Abbreviations Glossary */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode ? 'bg-neutral-900/80 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-bold">Subject Code Glossary</h3>
            </div>
            <span className="text-xs text-yellow-400 font-semibold">
              Semester-I Curriculum
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {Object.entries(SUBJECT_NAMES).map(([code, fullName]) => (
              <div
                key={code}
                className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                  isDarkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <span className="font-mono font-bold text-yellow-400 px-2 py-0.5 rounded bg-neutral-800/80">
                  {code}
                </span>
                <span className={`text-right font-medium truncate ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                  {fullName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Schedule Structure Card */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border ${
            isDarkMode ? 'bg-neutral-900/80 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Clock className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold">Daily Time Structure</h3>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-800/30">
              <span className="font-mono font-bold text-yellow-400">09:45 AM – 12:45 PM</span>
              <span className="text-neutral-300">Morning Session (Lectures / 2-Hour Practical Labs)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
              <span className="font-mono">12:45 PM – 01:30 PM</span>
              <span>Official Lunch Break (45 minutes)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-800/30">
              <span className="font-mono font-bold text-yellow-400">01:30 PM – 03:30 PM</span>
              <span className="text-neutral-300">Afternoon Session (Lectures / 2-Hour Practical Labs)</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-800/30">
              <span className="font-mono font-bold text-yellow-400">03:30 PM – 05:30 PM</span>
              <span className="text-neutral-300">Evening Practical Laboratory Rotation (Batches 1, 2, 3)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
