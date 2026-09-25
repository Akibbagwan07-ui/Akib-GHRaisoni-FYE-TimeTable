import React from 'react';
import { GraduationCap, MapPin, Heart, Sparkles, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CLUSTERS } from '../data/clusters';

interface FooterProps {
  onNavigate: (tab: 'home' | 'timetable' | 'branches' | 'clusters' | 'about') => void;
  onSelectCluster: (cluster: string) => void;
  isDarkMode: boolean;
}

// Crisp official WhatsApp vector icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Crisp official Instagram vector icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCluster,
  isDarkMode,
}) => {
  const instagramUrl = 'https://www.instagram.com/aaqieb_bagwan?stkn=MXdwbGNweXFxem8yZw==';
  const whatsappUrl = 'https://wa.me/917796360365';

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
        {/* ======================================================== */}
        {/* SOCIAL & CREATOR CONTACT SECTION                          */}
        {/* ======================================================== */}
        <div
          id="creator-contact-section"
          className={`p-6 sm:p-8 rounded-3xl border mb-12 relative overflow-hidden transition-all ${
            isDarkMode
              ? 'bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 border-neutral-800 text-white shadow-xl shadow-black/40'
              : 'bg-gradient-to-br from-white via-yellow-50/40 to-amber-50/30 border-neutral-200 text-neutral-900 shadow-lg shadow-neutral-200/50'
          }`}
        >
          {/* Subtle decorative glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            {/* Left side: Creator Info */}
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Developer & Contact</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                Created by <span className="text-yellow-400">Akib Bagwan</span>
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}
              >
                Need help with the timetable schedule, found a discrepancy, or have feature ideas?
                Connect directly for prompt support, updates, or collaboration.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  WhatsApp: <strong className="text-white">+91 7796360365</strong>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  Instagram: <strong className="text-white">@aaqieb_bagwan</strong>
                </span>
              </div>
            </div>

            {/* Right side: Interactive Tappable Social Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              {/* WhatsApp Button */}
              <a
                id="footer-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Akib Bagwan on WhatsApp at +91 7796360365"
                className="group px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer min-h-[48px]"
              >
                <div className="p-1 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 leading-none mb-0.5">
                    Direct Chat
                  </div>
                  <div className="text-sm font-extrabold flex items-center gap-1">
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>

              {/* Instagram Button */}
              <a
                id="footer-instagram-btn"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram profile aaqieb_bagwan"
                className="group px-5 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/40 transition-all cursor-pointer min-h-[48px]"
              >
                <div className="p-1 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-pink-100 leading-none mb-0.5">
                    Follow & Message
                  </div>
                  <div className="text-sm font-extrabold flex items-center gap-1">
                    <span>aaqieb_bagwan</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* EXISTING 4-COLUMN FOOTER DIRECTORY                        */}
        {/* ======================================================== */}
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
              <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
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

        {/* Bottom copyright & author line */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p>© 2026-2027 G H Raisoni College of Engineering and Management, Jalgaon. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-2 text-neutral-400">
            <span>Created by <strong className="text-yellow-400">Akib Bagwan</strong></span>
            <span>•</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>+91 7796360365</span>
            </a>
            <span>•</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:underline inline-flex items-center gap-1"
            >
              <InstagramIcon className="w-3 h-3" />
              <span>@aaqieb_bagwan</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
