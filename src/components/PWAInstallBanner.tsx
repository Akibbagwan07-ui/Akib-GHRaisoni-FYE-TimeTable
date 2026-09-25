import React, { useState } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallBannerProps {
  isDarkMode?: boolean;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ isDarkMode = true }) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('pwa_banner_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  if (isInstalled || !isInstallable || dismissed) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleInstall = async () => {
    await install();
  };

  return (
    <div
      id="pwa-install-banner"
      className={`mx-4 sm:mx-6 lg:mx-8 mb-6 p-3.5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 transition-all ${
        isDarkMode
          ? 'bg-neutral-900/90 border-yellow-500/40 text-white'
          : 'bg-yellow-50/90 border-yellow-300 text-neutral-950'
      }`}
    >
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-neutral-950 shrink-0 shadow-md">
          <Smartphone className="w-5 h-5 text-neutral-950" />
        </div>
        <div className="text-left flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
              Quick App Install
            </span>
          </div>
          <p className="text-xs sm:text-sm font-semibold truncate">
            Install GH Raisoni FYE TimeTable for 1-tap offline access
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <button
          onClick={handleInstall}
          className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-yellow-400/20 flex items-center gap-1.5 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-neutral-950" />
          <span>Install Now</span>
        </button>
        <button
          onClick={handleDismiss}
          className={`p-2 rounded-xl border transition-colors ${
            isDarkMode
              ? 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800'
              : 'border-neutral-300 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
          }`}
          title="Dismiss"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
