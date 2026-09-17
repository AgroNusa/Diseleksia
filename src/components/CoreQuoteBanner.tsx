import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { CORE_QUOTE } from '../data/summaryData';

export const CoreQuoteBanner: React.FC = () => {
  return (
    <div id="quote-banner" className="relative rounded-2xl bg-gradient-to-r from-amber-50/80 via-slate-50 to-teal-50/70 border border-amber-200/70 p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200">
          <Quote className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Pesan Kunci Video</span>
          </div>
          <p className="text-lg sm:text-xl font-medium text-slate-800 italic leading-relaxed">
            "{CORE_QUOTE.text}"
          </p>
          <p className="text-xs text-slate-500 font-medium">
            Kebenaran neurosains yang mematahkan stigma malas atau kurang motivasi pada anak disleksia.
          </p>
        </div>
      </div>
    </div>
  );
};
