import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      id="pwa-offline-indicator"
      className="fixed bottom-4 left-4 right-4 sm:right-auto z-50 flex items-center justify-between sm:justify-start gap-2.5 rounded-xl bg-neutral-900 border border-yellow-500/50 px-4 py-2.5 text-xs font-semibold text-yellow-300 shadow-xl shadow-black/50 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
        </span>
        <WifiOff className="w-4 h-4 text-yellow-400" />
        <span>Offline Mode — Viewing cached timetable</span>
      </div>
    </div>
  );
};
