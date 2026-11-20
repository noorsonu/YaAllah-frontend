'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen } from 'lucide-react';

interface ArabicDuaBoxProps {
  dua: {
    arabic: string;
    transliteration: string;
    englishTranslation: string;
    hindiTranslation?: string;
    reference?: string;
    benefits?: string[];
  };
  fontSize?: number;
}

export default function ArabicDuaBox({ dua, fontSize = 24 }: ArabicDuaBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(dua.arabic);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-3xl bg-gradient-to-b from-[#FAF4E9] to-white border-2 border-[#D9A441] p-6 sm:p-8 shadow-lg relative overflow-hidden">
      {/* Decorative corner embellishments */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[radial-gradient(#D9A441_1px,transparent_1px)] [background-size:8px_8px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[radial-gradient(#D9A441_1px,transparent_1px)] [background-size:8px_8px] opacity-40 pointer-events-none" />

      {/* Header bar with Reference & Copy button */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8D8C0]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#650D25]">
            Noble Supplication (Dua)
          </span>
          {dua.reference && (
            <span className="hidden sm:inline-block text-[11px] font-medium bg-white px-2.5 py-0.5 rounded-full border border-[#E8D8C0] text-[#6E5D57]">
              {dua.reference}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8D8C0] text-xs font-medium text-[#650D25] hover:border-[#D9A441] transition-colors shadow-sm"
          title="Copy Arabic text"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Copy Arabic</span>
            </>
          )}
        </button>
      </div>

      {/* Arabic Script Block (RTL, Large, Beautifully styled with Amiri Quran font) */}
      <div 
        dir="rtl" 
        style={{ fontSize: `${fontSize}px` }}
        className="font-quran text-[#50091D] font-bold leading-[2.2] sm:leading-[2.5] text-center my-6 py-4 px-2 sm:px-6 tracking-wide select-all"
      >
        {dua.arabic}
      </div>

      {/* Roman Transliteration */}
      <div className="mt-6 pt-5 border-t border-[#E8D8C0]/80 space-y-4 text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441] block mb-1">
            Pronunciation & Transliteration
          </span>
          <p className="text-sm sm:text-base italic font-serif text-[#392A25] leading-relaxed bg-white/70 p-3.5 rounded-xl border border-[#E8D8C0]/60">
            &ldquo;{dua.transliteration}&rdquo;
          </p>
        </div>

        {/* English Translation */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#650D25] block mb-1">
            English Translation
          </span>
          <p className="text-sm sm:text-base text-[#392A25] leading-relaxed">
            {dua.englishTranslation}
          </p>
        </div>

        {/* Hindi Translation (if available) */}
        {dua.hindiTranslation && (
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6E5D57] block mb-1">
              हिंदी अनुवाद (Hindi Translation)
            </span>
            <p className="text-sm text-[#392A25]/90 leading-relaxed font-sans bg-[#FAF4E9]/70 p-3 rounded-xl border border-[#E8D8C0]/50">
              {dua.hindiTranslation}
            </p>
          </div>
        )}
      </div>

      {/* Benefits / Virtues */}
      {dua.benefits && dua.benefits.length > 0 && (
        <div className="mt-6 pt-4 border-t border-[#E8D8C0]/80">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#650D25] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Spiritual Virtues & Key Benefits</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#392A25]/85">
            {dua.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 bg-white/80 p-2.5 rounded-lg border border-[#E8D8C0]/50">
                <span className="text-[#D9A441] font-bold">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
