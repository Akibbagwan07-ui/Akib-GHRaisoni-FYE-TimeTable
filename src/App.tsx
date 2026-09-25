import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CurrentClass } from './components/CurrentClass';
import { SearchBar } from './components/SearchBar';
import { DaySelector } from './components/DaySelector';
import { FilterBar } from './components/FilterBar';
import { TimetableGrid } from './components/TimetableGrid';
import { TimetableCard } from './components/TimetableCard';
import { BranchesView } from './components/BranchesView';
import { ClustersView } from './components/ClustersView';
import { AboutView } from './components/AboutView';
import { PrintModal } from './components/PrintModal';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallBanner } from './components/PWAInstallBanner';

import { DayOfWeek, TimetableEntry } from './types';
import {
  ALL_TIMETABLE_ENTRIES,
  CLUSTERS,
  BRANCH_OPTIONS,
  getEntriesForBranchAndClusterAndDay,
} from './data';
import { Printer, Filter } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<'home' | 'timetable' | 'branches' | 'clusters' | 'about'>('home');

  // Dark/Light Theme State with localStorage
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('ghr_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('ghr_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Selected Branch filter (defaults to 'ALL')
  const [selectedBranch, setSelectedBranch] = useState<string>('ALL');

  // Selected Cluster filter (defaults to 'ALL')
  const [selectedCluster, setSelectedCluster] = useState<string>('ALL');

  const handleSelectBranch = (branch: string) => {
    setSelectedBranch(branch);
    if (branch === 'ALL') {
      setSelectedCluster('ALL');
    } else {
      const branchInfo = BRANCH_OPTIONS.find((b) => b.code === branch);
      if (!branchInfo || !branchInfo.clusters.includes(selectedCluster)) {
        setSelectedCluster('ALL');
      }
    }
  };

  // Calculate default Day of Week based on system time
  const getDefaultDay = (): DayOfWeek => {
    const dayMap: Record<number, DayOfWeek> = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    };
    const dayNum = new Date().getDay();
    return dayMap[dayNum] || 'Monday';
  };

  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(getDefaultDay);

  // Global Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Personal Notes State with localStorage
  const [userNotes, setUserNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('ghr_user_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleSaveNote = (entryId: string, noteText: string) => {
    const updated = { ...userNotes, [entryId]: noteText };
    setUserNotes(updated);
    localStorage.setItem('ghr_user_notes', JSON.stringify(updated));
  };

  const handleDeleteNote = (entryId: string) => {
    const updated = { ...userNotes };
    delete updated[entryId];
    setUserNotes(updated);
    localStorage.setItem('ghr_user_notes', JSON.stringify(updated));
  };

  // Print Modal State
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Filtered timetable entries based on Day, Branch, and Cluster
  const currentDayEntries = useMemo(() => {
    return getEntriesForBranchAndClusterAndDay(
      selectedBranch,
      selectedCluster,
      selectedDay
    );
  }, [selectedBranch, selectedCluster, selectedDay]);

  // Global Search results across ALL days, branches, and clusters
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return ALL_TIMETABLE_ENTRIES.filter((entry) => {
      const clusterObj = CLUSTERS.find((c) => c.cluster === entry.cluster);
      return (
        entry.subjectFullName.toLowerCase().includes(query) ||
        entry.subjectCode.toLowerCase().includes(query) ||
        entry.faculty.toLowerCase().includes(query) ||
        entry.roomOrLab.toLowerCase().includes(query) ||
        entry.cluster.toLowerCase() === query ||
        entry.branchCode.toLowerCase().includes(query) ||
        entry.rawCode.toLowerCase().includes(query) ||
        (clusterObj && clusterObj.fullName.toLowerCase().includes(query)) ||
        (entry.batch && entry.batch.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 flex flex-col font-sans ${
        isDarkMode ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-900'
      }`}
    >
      {/* Primary Sticky Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Container Content */}
      <main className="flex-1">
        {/* PWA Install Banner for Mobile / Android */}
        <PWAInstallBanner isDarkMode={isDarkMode} />

        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onViewTimetable={() => setCurrentTab('timetable')}
              onExploreClusters={() => setCurrentTab('clusters')}
              isDarkMode={isDarkMode}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Search Bar */}
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                resultCount={searchResults.length}
                isDarkMode={isDarkMode}
              />

              {/* If User has an active Search Query on Home */}
              {searchQuery.trim().length > 0 ? (
                <div className="mb-14">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-yellow-400" />
                    <span>Search Results for "{searchQuery}"</span>
                  </h3>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {searchResults.map((entry) => (
                        <div key={entry.id} className="relative">
                          <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider mb-1 px-1">
                            {entry.day}
                          </div>
                          <TimetableCard
                            entry={entry}
                            isDarkMode={isDarkMode}
                            userNote={userNotes[entry.id]}
                            onSaveNote={handleSaveNote}
                            onDeleteNote={handleDeleteNote}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`p-8 rounded-2xl border text-center ${
                        isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
                      }`}
                    >
                      <p className="text-sm text-neutral-400">
                        No classes found matching "{searchQuery}". Try searching by subject name (e.g. CFT, BEE), room (A-214, C-402), or faculty name.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* Live Class Schedule Status (Now & Upcoming) */}
                  <CurrentClass
                    selectedBranch={selectedBranch}
                    selectedCluster={selectedCluster}
                    isDarkMode={isDarkMode}
                  />

                  {/* Day Selector */}
                  <DaySelector
                    selectedDay={selectedDay}
                    onSelectDay={setSelectedDay}
                    isDarkMode={isDarkMode}
                  />

                  {/* Filter Bar with Independent Branch and Cluster Dropdowns */}
                  <FilterBar
                    selectedBranch={selectedBranch}
                    onSelectBranch={handleSelectBranch}
                    selectedCluster={selectedCluster}
                    onSelectCluster={setSelectedCluster}
                    isDarkMode={isDarkMode}
                  />

                  {/* Print / Download Button Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-neutral-400">
                      <span>
                        Filter:{' '}
                        <strong className="text-yellow-400">
                          {selectedBranch !== 'ALL' ? `Branch ${selectedBranch}` : 'All Branches'}
                        </strong>
                        {' • '}
                        <strong className="text-yellow-400">
                          {selectedCluster !== 'ALL' ? `Cluster ${selectedCluster}` : 'All Clusters'}
                        </strong>
                      </span>
                    </div>
                    <button
                      id="home-open-print-modal-btn"
                      onClick={() => setIsPrintModalOpen(true)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                        isDarkMode
                          ? 'border-neutral-800 bg-neutral-900 text-neutral-200 hover:border-yellow-400 hover:text-yellow-400'
                          : 'border-neutral-200 bg-white text-neutral-800 hover:border-yellow-500 hover:text-yellow-600 shadow-xs'
                      }`}
                    >
                      <Printer className="w-4 h-4 text-yellow-400" />
                      <span>Print / PDF Timetable</span>
                    </button>
                  </div>

                  {/* Timetable Grid with Grouped Batch Sessions */}
                  <TimetableGrid
                    entries={currentDayEntries}
                    selectedDay={selectedDay}
                    selectedBranch={selectedBranch}
                    selectedCluster={selectedCluster}
                    isDarkMode={isDarkMode}
                    userNotes={userNotes}
                    onSaveNote={handleSaveNote}
                    onDeleteNote={handleDeleteNote}
                  />
                </>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: TIMETABLE DEDICATED VIEW */}
        {currentTab === 'timetable' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                  First Year Master Timetable
                </h2>
                <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Academic Year 2026-27 • Semester-I • Official Class Schedule
                </p>
              </div>

              {/* Print Action */}
              <button
                id="timetable-open-print-modal-btn"
                onClick={() => setIsPrintModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-yellow-400/20"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Timetable</span>
              </button>
            </div>

            {/* Search Bar */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              resultCount={searchResults.length}
              isDarkMode={isDarkMode}
            />

            {/* If Search is active */}
            {searchQuery.trim().length > 0 ? (
              <div className="mb-14">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-yellow-400" />
                  <span>Search Results for "{searchQuery}"</span>
                </h3>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {searchResults.map((entry) => (
                      <div key={entry.id} className="relative">
                        <div className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider mb-1 px-1">
                          {entry.day}
                        </div>
                        <TimetableCard
                          entry={entry}
                          isDarkMode={isDarkMode}
                          userNote={userNotes[entry.id]}
                          onSaveNote={handleSaveNote}
                          onDeleteNote={handleDeleteNote}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`p-8 rounded-2xl border text-center ${
                      isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'
                    }`}
                  >
                    <p className="text-sm text-neutral-400">
                      No classes found matching "{searchQuery}".
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Day Selector */}
                <DaySelector
                  selectedDay={selectedDay}
                  onSelectDay={setSelectedDay}
                  isDarkMode={isDarkMode}
                />

                {/* Filter Bar with Independent Selectors */}
                <FilterBar
                  selectedBranch={selectedBranch}
                  onSelectBranch={handleSelectBranch}
                  selectedCluster={selectedCluster}
                  onSelectCluster={setSelectedCluster}
                  isDarkMode={isDarkMode}
                />

                {/* Timetable Grid View */}
                <TimetableGrid
                  entries={currentDayEntries}
                  selectedDay={selectedDay}
                  selectedBranch={selectedBranch}
                  selectedCluster={selectedCluster}
                  isDarkMode={isDarkMode}
                  userNotes={userNotes}
                  onSaveNote={handleSaveNote}
                  onDeleteNote={handleDeleteNote}
                />
              </>
            )}
          </div>
        )}

        {/* TAB 3: BRANCHES */}
        {currentTab === 'branches' && (
          <BranchesView
            onSelectBranch={(branch) => {
              handleSelectBranch(branch);
            }}
            onSelectCluster={(cluster) => {
              setSelectedCluster(cluster);
            }}
            onNavigateToTimetable={() => setCurrentTab('timetable')}
            isDarkMode={isDarkMode}
          />
        )}

        {/* TAB 4: CLUSTERS */}
        {currentTab === 'clusters' && (
          <ClustersView
            onSelectCluster={(cluster) => {
              const branchInfo = BRANCH_OPTIONS.find((b) => b.clusters.includes(cluster));
              if (branchInfo) {
                setSelectedBranch(branchInfo.code);
              }
              setSelectedCluster(cluster);
              setCurrentTab('timetable');
            }}
            onNavigateToTimetable={() => setCurrentTab('timetable')}
            isDarkMode={isDarkMode}
          />
        )}

        {/* TAB 5: ABOUT */}
        {currentTab === 'about' && (
          <AboutView isDarkMode={isDarkMode} />
        )}
      </main>

      {/* Official College Footer */}
      <Footer
        onNavigate={setCurrentTab}
        onSelectCluster={(c) => {
          const branchInfo = BRANCH_OPTIONS.find((b) => b.clusters.includes(c));
          if (branchInfo) {
            setSelectedBranch(branchInfo.code);
          }
          setSelectedCluster(c);
          setCurrentTab('timetable');
        }}
        isDarkMode={isDarkMode}
      />

      {/* Clean Printable Timetable Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        selectedCluster={selectedCluster}
      />

      {/* Offline Mode Status Indicator */}
      <OfflineIndicator />
    </div>
  );
}
