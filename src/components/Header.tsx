import React, { useState } from 'react';
import { Menu, X, Sun, Moon, GraduationCap, Calendar, Compass, Layers, Info } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'timetable' | 'branches' | 'clusters' | 'about';
  setCurrentTab: (tab: 'home' | 'timetable' | 'branches' | 'clusters' | 'about') => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Calendar },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'branches', label: 'Branches', icon: Compass },
    { id: 'clusters', label: 'Clusters', icon: Layers },
    { id: 'about', label: 'About', icon: Info },
  ] as const;

  const handleNavClick = (tabId: 'home' | 'timetable' | 'branches' | 'clusters' | 'about') => {
    setCurrentTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors border-b ${
        isDarkMode
          ? 'bg-neutral-950/90 border-neutral-800 text-white'
          : 'bg-white/90 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & College Identity */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg shadow-yellow-500/20 text-neutral-950 font-black tracking-tighter border border-yellow-300">
              <GraduationCap className="w-6 h-6 text-neutral-950" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-neutral-950 border border-yellow-400 flex items-center justify-center text-[8px] font-bold text-yellow-400">
                G
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-yellow-400">
                  G H RAISONI
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-yellow-400/10 text-yellow-400 font-semibold border border-yellow-400/30">
                  Jalgaon
                </span>
              </div>
              <span className={`text-xs font-medium line-clamp-1 ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                College of Engineering & Management
              </span>
              <span className={`text-[11px] font-normal ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                First Year Engineering • Semester-I • 2026-27
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-yellow-400 text-neutral-950 font-bold shadow-md shadow-yellow-400/20'
                      : isDarkMode
                      ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme toggle & Mobile menu button */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'border-neutral-800 bg-neutral-900 text-yellow-400 hover:bg-neutral-800'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
              }`}
              aria-label="Toggle theme"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800'
                  : 'border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`md:hidden px-4 pt-3 pb-5 border-b space-y-1.5 transition-colors ${
            isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  isActive
                    ? 'bg-yellow-400 text-neutral-950 font-bold'
                    : isDarkMode
                    ? 'text-neutral-300 hover:bg-neutral-900'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
