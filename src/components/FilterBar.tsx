import React from 'react';
import { ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { BRANCH_OPTIONS, CLUSTER_OPTIONS } from '../data';

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
              onChange={(e) => onSelectBranch(e.target.value)}
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

        {/* 2. SELECT CLUSTER DROPDOWN (ONLY CLUSTERS) */}
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
              onChange={(e) => onSelectCluster(e.target.value)}
              className={`w-full py-2.5 px-3.5 pr-9 rounded-xl text-sm font-medium border appearance-none transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400/30 ${
                isDarkMode
                  ? 'bg-neutral-950 border-neutral-700 text-white hover:border-neutral-600'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 hover:border-neutral-400'
              }`}
            >
              <option value="ALL" className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}>
                All Clusters
              </option>
              {CLUSTER_OPTIONS.map((cluster) => (
                <option
                  key={cluster}
                  value={cluster}
                  className={isDarkMode ? 'bg-neutral-950' : 'bg-white'}
                >
                  Cluster {cluster}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
