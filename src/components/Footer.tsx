import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart, Shield } from 'lucide-react';
import { CLUSTERS } from '../data/clusters';

interface FooterProps {
  onNavigate: (tab: 'home' | 'timetable' | 'branches' | 'clusters' | 'about') => void;
  onSelectCluster: (cluster: string) => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCluster,
  isDarkMode,
}) => {
  return (
    <footer
      id="main-footer"
      className={`border-t transition-colors mt-20 ${
        isDarkMode
          ? 'bg-neutral-950 border-neutral-800 text-neutral-400'
          : 'bg-neutral-100 border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: College & Dept */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-neutral-950 font-black">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-yellow-400">
                  G H RAISONI
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                  College of Engineering & Management, Jalgaon
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-md">
              Department of First Year Engineering (Semester-I, Academic Year 2026-2027). Modern digital timetable portal for autonomous engineering programs.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-yellow-400" />
              <span>Gat No. 57/1, Shirsoli Road, Mohadi, Jalgaon, Maharashtra 425002</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
              Navigation
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('timetable')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Weekly Timetable
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('branches')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Branch Directories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clusters')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Clusters A to N
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Official Regulations & About
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Clusters */}
          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
              Quick Clusters
            </h5>
            <div className="grid grid-cols-4 gap-1.5 text-[11px] font-semibold">
              {CLUSTERS.map((c) => (
                <button
                  key={c.cluster}
                  onClick={() => {
                    onSelectCluster(c.cluster);
                    onNavigate('timetable');
                  }}
                  className={`p-1.5 rounded text-center transition-colors border ${
                    isDarkMode
                      ? 'bg-neutral-900 border-neutral-800 hover:border-yellow-400 hover:text-yellow-400'
                      : 'bg-white border-neutral-200 hover:border-yellow-500 hover:text-yellow-600'
                  }`}
                  title={`${c.displayCode} - Cluster ${c.cluster}`}
                >
                  {c.cluster}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p>© 2026-2027 G H Raisoni College of Engineering and Management, Jalgaon. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>First Year Engineering Portal</span>
            <span>•</span>
            <span>Master Time Table 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
