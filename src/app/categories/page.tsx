import React from 'react';
import Link from 'next/link';
import { Layers, Home, ChevronRight, Sun, Sparkles, BookOpen, Library, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { api } from '@/lib/api';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Islamic Categories & Topics | YaAllah',
  description: 'Browse all Islamic supplications, wazaif, Quranic verses, and educational categories organized by life situations.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sun,
  Sparkles,
  BookOpen,
  Library,
  HeartHandshake,
  ShieldCheck,
};

export default async function CategoriesPage() {
  const categories = await api.getCategories();

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
          <span className="text-[#650D25] font-semibold">Categories</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Islamic Taxonomy</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            Explore Islamic Categories
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            Discover verified supplications and guides categorised systematically to help you quickly find the spiritual support you need.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#D9A441] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4E9] group-hover:bg-[#650D25] text-[#650D25] group-hover:text-white flex items-center justify-center transition-colors border border-[#E8D8C0]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#D9A441] bg-[#FAF4E9] px-3 py-1 rounded-full border border-[#D9A441]/30">
                      {cat.count} Articles
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#650D25] group-hover:text-[#50091D] transition-colors mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-sm text-[#6E5D57] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8D8C0]/60 flex items-center justify-between text-xs font-semibold text-[#650D25] group-hover:text-[#D9A441]">
                  <span>Browse Category</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
