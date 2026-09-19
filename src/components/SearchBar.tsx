import React from 'react';
import { Search, X, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultCount: number;
  isDarkMode: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  resultCount,
  isDarkMode,
}) => {
  return (
    <div id="search-bar-container" className="relative w-full max-w-2xl mx-auto mb-8">
      <div
        className={`relative flex items-center rounded-2xl border transition-all shadow-sm ${
          isDarkMode
            ? 'bg-neutral-900/90 border-neutral-700 focus-within:border-yellow-400 focus-within:ring-2 focus-within:ring-yellow-400/20'
            : 'bg-white border-neutral-300 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-400/20'
        }`}
      >
        <div className="pl-4.5 pr-2 flex items-center pointer-events-none text-neutral-400">
          <Search className="w-5 h-5 text-yellow-400" />
        </div>
        <input
          id="global-timetable-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search subject, faculty, room, lab, cluster (e.g. PPS, SVC, PHY LAB, C-404)..."
          className={`w-full py-3.5 pr-10 text-sm sm:text-base font-medium bg-transparent focus:outline-none placeholder:text-neutral-500 ${
            isDarkMode ? 'text-white' : 'text-neutral-900'
          }`}
        />
        {searchQuery && (
          <button
            id="search-clear-btn"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchQuery.trim().length > 0 && (
        <div className="flex items-center justify-between mt-2 px-3 text-xs">
          <span className="text-yellow-400 font-semibold flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Showing {resultCount} matching classes across all clusters
          </span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-neutral-400 hover:text-neutral-200 underline"
          >
            Reset search
          </button>
        </div>
      )}
    </div>
  );
};
