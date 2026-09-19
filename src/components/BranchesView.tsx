import React from 'react';
import { Compass, ArrowRight, Layers } from 'lucide-react';
import { BRANCH_OPTIONS } from '../data';

interface BranchesViewProps {
  onSelectBranch: (branch: string) => void;
  onSelectCluster: (cluster: string) => void;
  onNavigateToTimetable: () => void;
  isDarkMode: boolean;
}

export const BranchesView: React.FC<BranchesViewProps> = ({
  onSelectBranch,
  onSelectCluster,
  onNavigateToTimetable,
  isDarkMode,
}) => {
  const branchDescriptions: Record<string, string> = {
    ETC: 'Electronic circuits, signals, analog & digital communication systems, and microcontrollers.',
    EE: 'Electrical machines, energy audit, solar photovoltaic systems, and power electronics.',
    ME: 'Thermodynamics, engineering mechanics, computer-aided drafting (CAD), and manufacturing.',
    CE: 'Structural engineering, surveying, building materials, and infrastructure planning.',
    AIML: 'Python foundations, computational thinking, machine learning principles, and AI workflows.',
    DS: 'Data analytics, statistical modeling, data structures, and algorithmic decision making.',
    IT: 'Computer networks, programming, web technologies, software systems, and data analytics.',
    CSE: 'Core computer science, algorithms, software engineering, programming (Clusters H, I, J, K, L).',
    AI: 'Specialized artificial intelligence systems, computer vision, and neural reasoning (Clusters M, N).',
  };

  const handleBranchClick = (branchCode: string, firstCluster: string) => {
    onSelectBranch(branchCode);
    onSelectCluster('ALL');
    onNavigateToTimetable();
  };

  return (
    <section id="branches-page-view" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Academic Branches</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-black tracking-tight mb-3 ${
              isDarkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Engineering Branches
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Official First Year Engineering branches for Academic Year 2026-27 (Semester-I). Select any branch to filter its weekly timetable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BRANCH_OPTIONS.map((branch) => (
            <div
              key={branch.code}
              id={`branch-card-${branch.code.toLowerCase()}`}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:border-yellow-400/60 hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-neutral-900/70 border-neutral-800 text-white'
                  : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded bg-yellow-400 text-neutral-950 font-mono">
                    {branch.code}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded font-bold border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
                    {branch.clusters.length === 1
                      ? `Cluster ${branch.clusters[0]}`
                      : `Clusters ${branch.clusters.join(', ')}`}
                  </span>
                </div>

                <h3 className="text-lg font-black tracking-tight mb-2 leading-snug">
                  {branch.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {branchDescriptions[branch.code] || 'Official first year curriculum program.'}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-yellow-400" />
                  <span>
                    {branch.clusters.length === 1
                      ? `Group: ${branch.clusters[0]}`
                      : `${branch.clusters.length} Divisions`}
                  </span>
                </span>
                <button
                  onClick={() => handleBranchClick(branch.code, branch.clusters[0])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
                >
                  <span>Select Branch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
