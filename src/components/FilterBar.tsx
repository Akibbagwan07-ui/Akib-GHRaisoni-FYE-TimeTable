import React from 'react';
import { ChevronDown, SlidersHorizontal, RotateCcw, Info } from 'lucide-react';
import { BRANCH_OPTIONS, CLUSTERS } from '../data';

interface FilterBarProps {
  selectedBranch: string;
  onSelectBranch: (branch: string) => void;
  selectedCluster: string;
  onSelectCluster: (cluster: string) => void;
  isDarkMode: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedBranch,
  onSelectBranch,
  selectedCluster,
  onSelectCluster,
  isDarkMode,
}) => {
  const currentBranchInfo = BRANCH_OPTIONS.find((b) => b.code === selectedBranch);
  const availableClusters = currentBranchInfo ? currentBranchInfo.clusters : [];

  const handleBranchChange = (newBranch: string) => {
    onSelectBranch(newBranch);
    if (newBranch === 'ALL') {
      onSelectCluster('ALL');
    } else {
      const nextBranchInfo = BRANCH_OPTIONS.find((b) => b.code === newBranch);
      if (!nextBranchInfo || !nextBranchInfo.clusters.includes(selectedCluster)) {
        onSelectCluster('ALL');
      }
    }
  };

  const handleResetFilters = () => {
    onSelectBranch('ALL');
    onSelectCluster('ALL');
  };

  const isFiltered = selectedBranch !== 'ALL' || selectedCluster !== 'ALL';

  return (
    <div
      id="filter-bar-container"
      className={`p-4 sm:p-5 rounded-2xl border mb-6 transition-all ${
        isDarkMode
          ? 'bg-neutral-900/90 border-neutral-800 text-white'
          : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-yellow-400" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Filter Schedule
          </h3>
        </div>
        {isFiltered && (
          <button
            id="reset-filters-btn"
            onClick={handleResetFilters}
            className={`text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
              isDarkMode
                ? 'text-neutral-400 hover:text-yellow-400 hover:bg-neutral-800'
                : 'text-neutral-500 hover:text-yellow-600 hover:bg-neutral-100'
            }`}
            title="Reset branch and cluster filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1. SELECT BRANCH DROPDOWN (ONLY BRANCHES) */}
        <div>
          <label
            htmlFor="branch-dropdown-select"
            className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
              isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Select Branch
          </label>
          <div className="relative">
            <select
              id="branch-dropdown-select"
              value={selectedBranch}
              onChange={(e) => handleBranchChange(e.target.value)}
              className={`w-full py-2.5 px-3.5 pr-9 rounded-xl text-sm font-medium border appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/30 ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-700 text-white hover:border-neutral-600'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 hover:border-neutral-400'
              }`}
            >
              <option value="ALL" className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}>
                All Branches
              </option>
              {BRANCH_OPTIONS.map((b) => (
                <option
                  key={b.code}
                  value={b.code}
                  className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}
                >
                  {b.code} – {b.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 2. SELECT CLUSTER DROPDOWN (DEPENDS ON SELECTED BRANCH) */}
        <div>
          <label
            htmlFor="cluster-dropdown-select"
            className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
              isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Select Cluster
          </label>
          <div className="relative">
            <select
              id="cluster-dropdown-select"
              value={selectedCluster}
              disabled={selectedBranch === 'ALL'}
              onChange={(e) => onSelectCluster(e.target.value)}
              className={`w-full py-2.5 px-3.5 pr-9 rounded-xl text-sm font-medium border appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/30 ${
                selectedBranch === 'ALL'
                  ? isDarkMode
                    ? 'bg-neutral-900/50 border-neutral-800 text-neutral-500 cursor-not-allowed'
                    : 'bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed'
                  : isDarkMode
                  ? 'bg-neutral-950 border-neutral-700 text-white hover:border-neutral-600'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 hover:border-neutral-400'
              }`}
            >
              {selectedBranch === 'ALL' ? (
                <option value="ALL" className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}>
                  Select a Branch first
                </option>
              ) : (
                <>
                  <option value="ALL" className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}>
                    All {selectedBranch} Clusters ({availableClusters.join(', ')})
                  </option>
                  {availableClusters.map((cluster) => {
                    const clInfo = CLUSTERS.find((c) => c.cluster === cluster);
                    const label = clInfo ? `Cluster ${cluster} (${clInfo.displayCode})` : `Cluster ${cluster}`;
                    return (
                      <option
                        key={cluster}
                        value={cluster}
                        className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}
                      >
                        {label}
                      </option>
                    );
                  })}
                </>
              )}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {selectedBranch === 'ALL' && (
            <p className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1">
              <Info className="w-3 h-3 text-yellow-400 shrink-0" />
              <span>Choose a branch above to view its assigned clusters.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
