import React from 'react';
import Link from 'next/link';
import { Sun, Home, ChevronRight, Sparkles } from 'lucide-react';
import { api } from '@/lib/api';
import ArticleCard from '@/components/cards/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily Duas – Authentic Morning & Evening Supplications | ya ALLAH',
  description: 'Explore daily Masnoon duas for morning, evening, protection, and peaceful remembrance from verified Hadith sources.',
};

export default async function DailyDuasPage() {
  const allArticles = await api.getPosts();
  const dailyDuas = allArticles.filter(
    (a) => a.category.slug === 'daily-duas' || a.tags?.includes('Azkar') || a.tags?.includes('Protection')
  );

  return (
    <div className="min-h-screen bg-[#FAF4E9] py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6E5D57] mb-6">
          <Link href="/" className="hover:text-[#650D25] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <span className="text-[#650D25] font-semibold">Daily Duas</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Sun className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Prescribed Sunnah Remembrance</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            Daily Duas & Masnoon Supplications
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            Strengthen your daily connection with Allah Subhanahu Wa Ta&apos;ala through authentic morning, evening, and situational prayers taught by the Beloved Prophet Muhammad ﷺ.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dailyDuas.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Informative Guidance Card */}
        <div className="mt-14 bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#650D25] font-heading font-bold text-lg">
              <Sparkles className="w-5 h-5 text-[#D9A441]" />
              <span>Looking for the Printable Daily Dua Booklet?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6E5D57]">
              Download our free high-resolution PDF booklet containing all morning and evening supplications in Arabic, English, and transliteration.
            </p>
          </div>

          <Link
            href="/library"
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shrink-0 shadow"
          >
            Download Free PDF Guide
          </Link>
        </div>

      </div>
    </div>
  );
}
