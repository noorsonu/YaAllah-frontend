import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/cards/ArticleCard';
import { Article } from '@/types';

interface FeaturedWazaifProps {
  articles: Article[];
}

export default function FeaturedWazaif({ articles }: FeaturedWazaifProps) {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8D8C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF4E9] border border-[#B8860B]/40 text-[#50091D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Verified & Tried Supplications</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#50091D] tracking-tight">
              Powerful Tried & Tested Dua Wazaif
            </h2>

            <p className="text-sm sm:text-base text-[#5A4841] max-w-2xl leading-relaxed">
              Authentic spiritual prescriptions formulated with Quranic verses and prophetic traditions for life’s most pressing difficulties.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/wazaif"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#650D25] hover:text-[#8C1C30] group transition-colors"
            >
              <span>View Full Wazaif List</span>
              <ArrowRight className="w-4 h-4 text-[#B8860B] group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured={true} />
          ))}
        </div>

      </div>
    </section>
  );
}
