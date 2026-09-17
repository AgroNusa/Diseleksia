import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpenCheck, Brain } from 'lucide-react';
import { SUMMARY_BULLETS_MEMAHAMI, CORE_QUOTES_MEMAHAMI } from '../data/summaryData';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = async () => {
    const fullText = `RANGKUMAN UTAMA: MEMAHAMI DISLEKSIA (Edukasi Medika Teknologi)\n\nPesan Kunci:\n"${CORE_QUOTES_MEMAHAMI.mainQuestion}"\n\n"${CORE_QUOTES_MEMAHAMI.mislabelWarning}"\n\n6 Poin Inti:\n${SUMMARY_BULLETS_MEMAHAMI.map((b, i) => `${i + 1}. ${b}`).join('\n')}`;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header id="main-header" className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs flex-shrink-0">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-150">
                Edukasi Medika Teknologi
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">Panduan Medis Klinis</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Memahami Disleksia: Rangkuman Lengkap
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="copy-summary-btn"
            onClick={handleCopySummary}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors border border-slate-200 whitespace-nowrap cursor-pointer"
            title="Salin Rangkuman Teks Lengkap"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Salin Rangkuman</span>
              </>
            )}
          </button>
          <a
            id="quick-read-link"
            href="#quick-takeaways"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Poin Inti</span>
          </a>
        </div>
      </div>
    </header>
  );
};
