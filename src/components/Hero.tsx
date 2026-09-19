import React from 'react';
import { Calendar, Compass, Clock, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewTimetable: () => void;
  onExploreClusters: () => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onViewTimetable,
  onExploreClusters,
  isDarkMode,
}) => {
  const stats = [
    { label: 'Clusters', value: '14', desc: 'A through N (ETC to AI)' },
    { label: 'Days', value: '6', desc: 'Mon to Sat official cycle' },
    { label: 'Time Slots', value: '8', desc: '09:45 AM - 05:30 PM' },
    { label: 'Semester', value: 'I', desc: 'Academic Year 2026-27' },
  ];

  return (
    <section id="hero-section" className="relative pt-12 pb-14 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-yellow-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Department tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Department of First Year Engineering</span>
        </div>

        {/* Main headings */}
        <h2 className="text-sm sm:text-base font-bold tracking-widest text-yellow-400 uppercase mb-2">
          FIRST YEAR ENGINEERING
        </h2>
        <h1
          id="hero-title"
          className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}
        >
          TIME TABLE <span className="text-yellow-400">2026-27</span>
        </h1>

        <p
          id="hero-subtitle"
          className={`max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed ${
            isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          Find your daily timetable quickly by selecting your branch or cluster.
          Access lectures, laboratory batches, room allocations, and faculty schedules.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            id="hero-view-timetable-btn"
            onClick={onViewTimetable}
            className="px-7 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            View Timetable
          </button>
          <button
            id="hero-explore-clusters-btn"
            onClick={onExploreClusters}
            className={`px-7 py-3.5 rounded-xl border font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer ${
              isDarkMode
                ? 'border-neutral-700 bg-neutral-900/80 text-white hover:border-yellow-400/60 hover:bg-neutral-800'
                : 'border-neutral-300 bg-white text-neutral-900 hover:border-yellow-500 hover:bg-neutral-50 shadow-sm'
            }`}
          >
            <Compass className="w-4 h-4 text-yellow-400" />
            Explore Clusters
          </button>
        </div>

        {/* Quick Statistics Grid */}
        <div
          id="hero-stats-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          {stats.map((st, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all hover:border-yellow-400/50 ${
                isDarkMode
                  ? 'bg-neutral-900/60 border-neutral-800 text-white backdrop-blur-sm'
                  : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                  {st.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight mb-1">
                {st.value}
              </div>
              <p className={`text-xs ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
