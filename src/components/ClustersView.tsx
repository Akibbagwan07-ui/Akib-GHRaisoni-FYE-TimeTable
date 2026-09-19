import React from 'react';
import { Layers, ArrowRight, BookOpen, Users, CheckCircle2 } from 'lucide-react';
import { CLUSTERS } from '../data/clusters';

interface ClustersViewProps {
  onSelectCluster: (cluster: string) => void;
  onNavigateToTimetable: () => void;
  isDarkMode: boolean;
}

export const ClustersView: React.FC<ClustersViewProps> = ({
  onSelectCluster,
  onNavigateToTimetable,
  isDarkMode,
}) => {
  const handleClusterClick = (cluster: string) => {
    onSelectCluster(cluster);
    onNavigateToTimetable();
  };

  return (
    <section id="clusters-page-view" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic Clusters</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-3 ${
              isDarkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            All 14 Timetable Clusters (A to N)
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            The college master timetable groups branches into administrative clusters (A through N). Each cluster follows a dedicated weekly sequence of lectures and 3-batch laboratory rotations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CLUSTERS.map((cl) => (
            <div
              key={cl.cluster}
              id={`cluster-card-${cl.cluster.toLowerCase()}`}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:border-yellow-400/60 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-neutral-900/70 border-neutral-800 text-white'
                  : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400 text-neutral-950 font-black text-lg flex items-center justify-center shadow-sm">
                    {cl.cluster}
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-neutral-800 text-neutral-200 border border-neutral-700">
                    {cl.displayCode}
                  </span>
                </div>

                <h3 className="font-extrabold text-base mb-1">
                  Cluster {cl.cluster}
                </h3>
                <p className="text-xs text-yellow-400 font-semibold mb-3">
                  {cl.fullName}
                </p>

                <div className="space-y-1.5 text-xs text-neutral-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-yellow-400" />
                    <span>
                      Lab Batches: <strong>{cl.cluster}1, {cl.cluster}2, {cl.cluster}3</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Academic Year: 2026-27 (Sem-I)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleClusterClick(cl.cluster)}
                className="w-full py-2.5 px-3 rounded-xl bg-yellow-400/10 hover:bg-yellow-400 text-yellow-400 hover:text-neutral-950 border border-yellow-400/30 hover:border-yellow-400 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Full Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
