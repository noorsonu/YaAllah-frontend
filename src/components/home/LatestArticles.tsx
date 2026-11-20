import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import ArticleCard from '@/components/cards/ArticleCard';
import { Article } from '@/types';

interface LatestArticlesProps {
  articles: Article[];
}

export default function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E8D8C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B8860B]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Continuous Knowledge</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#50091D] tracking-tight">
              Latest Articles & Daily Guidance
            </h2>
            <p className="text-sm sm:text-base text-[#5A4841]">
              Freshly published authentic Sunnah supplications, remedies, and spiritual insights.
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <Link
              href="/categories"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FAF4E9] border border-[#E8D8C0] text-[#50091D] hover:border-[#B8860B] hover:bg-[#50091D] hover:text-white transition-all shadow-sm group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/categories"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shadow"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 text-[#D9A441]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
