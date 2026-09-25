import React, { useState } from 'react';
import { Download, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'hero' | 'compact';
  isDarkMode?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'header',
  isDarkMode = true,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already installed as a PWA, hide install triggers
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    setIsInstalling(true);
    try {
      await install();
    } finally {
      setIsInstalling(false);
    }
  };

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    if (variant === 'hero') {
      return (
        <button
          id="hero-pwa-install-btn"
          onClick={handleInstallClick}
          disabled={isInstalling}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-neutral-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer disabled:opacity-50"
        >
          <Download className="w-4 h-4 text-neutral-950" />
          <span>{isInstalling ? 'Installing...' : 'Install Mobile App'}</span>
        </button>
      );
    }

    if (variant === 'compact') {
      return (
        <button
          onClick={handleInstallClick}
          disabled={isInstalling}
          className="w-full px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-yellow-400/20"
        >
          <Download className="w-4 h-4 text-neutral-950" />
          <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
        </button>
      );
    }

    // Default: Header button
    return (
      <button
        id="header-pwa-install-btn"
        onClick={handleInstallClick}
        disabled={isInstalling}
        className="px-3 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-yellow-400/20 flex items-center gap-1.5 cursor-pointer hover:-translate-y-0.5"
        title="Install timetable app on your device for fast offline access"
      >
        <Download className="w-4 h-4 text-neutral-950" />
        <span className="hidden sm:inline">Install App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        {variant === 'hero' ? (
          <button
            id="hero-ios-install-btn"
            onClick={() => setShowIOSGuide(true)}
            className={`px-6 py-3.5 rounded-xl border font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer ${
              isDarkMode
                ? 'border-yellow-400/40 bg-neutral-900/80 text-yellow-400 hover:bg-neutral-800'
                : 'border-yellow-500/50 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 shadow-sm'
            }`}
          >
            <Share2 className="w-4 h-4 text-yellow-400" />
            <span>Install on iOS</span>
          </button>
        ) : (
          <button
            id="header-ios-install-btn"
            onClick={() => setShowIOSGuide(true)}
            className="px-3 py-2 rounded-xl bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
            title="How to install on iPhone / iPad"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add to Home</span>
          </button>
        )}

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div
              className={`w-full max-w-sm rounded-2xl p-6 shadow-2xl border ${
                isDarkMode
                  ? 'bg-neutral-900 border-neutral-700 text-white'
                  : 'bg-white border-neutral-200 text-neutral-900'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-neutral-950 font-black text-sm">
                    G
                  </div>
                  <h3 className="text-base font-bold">Install on iPhone / iPad</h3>
                </div>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
                  <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400 shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400">Step 1:</span> Tap the{' '}
                    <strong>Share</strong> button at the bottom of Safari.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
                  <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400 shrink-0">
                    <PlusSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400">Step 2:</span> Scroll down and tap{' '}
                    <strong>"Add to Home Screen"</strong>.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50">
                  <div className="p-1.5 rounded-lg bg-yellow-400/10 text-yellow-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400">Step 3:</span> Tap <strong>Add</strong> in
                    the top right corner. The timetable will open as a standalone app!
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
