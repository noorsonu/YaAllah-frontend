import React from 'react';
import Link from 'next/link';
import { Sparkles, Home, ChevronRight, ShieldCheck } from 'lucide-react';
import { api } from '@/lib/api';
import ArticleCard from '@/components/cards/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Important Wazaif – Tried & Tested Islamic Practices | YaAllah',
  description: 'Authentic tested wazaif for marriage, overcoming distress, job success, and family harmony rooted in Sunnah.',
};

export default async function WazaifPage() {
  const allArticles = await api.getPosts();
  const wazaifArticles = allArticles.filter(
    (a) => a.category.slug === 'wazaif' || a.tags?.includes('Tried & Tested') || a.featured
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
          <span className="text-[#650D25] font-semibold">Important Wazaif</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Spiritual Invocations</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            Important & Tested Wazaif
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            A comprehensive repository of authentic wazaif formulated for specific needs: marriage obstacles, financial distress, peace in households, and spiritual protection.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#6E5D57]">
            <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
            <span>Every wazifa includes exact Arabic pronunciation, timing, conditions, and etiquette.</span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {wazaifArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured={article.featured} />
          ))}
        </div>

      </div>
    </div>
  );
}
