import React from 'react';
import { COMPARISON_DATA } from '../data/summaryData';
import { Table, CheckCircle2, AlertCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison-table-section" className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
      <div className="pb-5 border-b border-slate-150 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
            <Table className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Tabel Matriks Perbedaan Aktivitas Membaca
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Perbandingan langsung antara cara kerja otak anak tipikal vs anak disleksia (dari slide video)
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="py-3 px-4 font-bold text-slate-900 rounded-l-lg">
                Aktivitas Membaca
              </th>
              <th className="py-3 px-4 font-bold text-emerald-800 bg-emerald-50/60">
                Anak Umum (Tipikal)
              </th>
              <th className="py-3 px-4 font-bold text-rose-800 bg-rose-50/60 rounded-r-lg">
                Anak Disleksia
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-150">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  {row.activity}
                </td>
                <td className="py-3.5 px-4 text-slate-700 bg-emerald-50/20">
                  <div className="inline-flex items-center gap-1.5 font-medium text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{row.typical}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-700 bg-rose-50/20">
                  <div className="inline-flex items-center gap-1.5 font-medium text-rose-900">
                    <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    <span>{row.dyslexia}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
