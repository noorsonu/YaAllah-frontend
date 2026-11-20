import React from 'react';
import Link from 'next/link';
import { Search, Home, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { api } from '@/lib/api';
import ArticleCard from '@/components/cards/ArticleCard';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Search Results for "${q}" | ya ALLAH` : 'Search Duas & Wazaif | ya ALLAH',
    description: 'Search authentic Islamic supplications, wazaif, Quranic verses, and downloadable guides.',
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || '';
  const results = query ? await api.search(query) : [];

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
          <span className="text-[#650D25] font-semibold">Search</span>
        </nav>

        {/* Search Header Form */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#650D25] tracking-tight mb-4">
              {query ? `Search Results for "${query}"` : 'Search Authentic Duas & Wazaif'}
            </h1>
            
            <form action="/search" method="get" className="relative flex items-center">
              <Search className="w-5 h-5 text-[#650D25] absolute left-4" />
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search by keyword, surah, purpose (e.g. Nad e Ali, Marriage, Hardship)..."
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl border border-[#E8D8C0] bg-[#FAF4E9]/50 text-sm text-[#392A25] focus:outline-none focus:border-[#D9A441] focus:bg-white shadow-sm transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 rounded-xl bg-[#650D25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#50091D] transition-colors"
              >
                Search
              </button>
            </form>

            {query && (
              <p className="text-xs text-[#6E5D57] mt-3">
                Found <strong>{results.length}</strong> matching Islamic supplications & articles.
              </p>
            )}
          </div>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : query ? (
          <div className="bg-white rounded-3xl border border-[#E8D8C0] p-12 text-center max-w-2xl mx-auto space-y-4">
            <BookOpen className="w-12 h-12 mx-auto text-[#D9A441] opacity-70" />
            <h3 className="font-heading text-xl font-bold text-[#650D25]">
              No exact matches found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-sm text-[#6E5D57]">
              Please check your spelling, or try searching for broader keywords such as &ldquo;Wazifa&rdquo;, &ldquo;Dua&rdquo;, &ldquo;Ayatul Kursi&rdquo;, or &ldquo;Ruqyah&rdquo;.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              {['Nad e Ali', 'Facing Hardships', 'Ayatul Kursi', 'Marriage Wazifa'].map((k) => (
                <Link
                  key={k}
                  href={`/search?q=${encodeURIComponent(k)}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
                >
                  {k}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E8D8C0] p-12 text-center max-w-2xl mx-auto space-y-4">
            <Sparkles className="w-10 h-10 mx-auto text-[#D9A441]" />
            <h3 className="font-heading text-xl font-bold text-[#650D25]">
              Explore Popular Invocations
            </h3>
            <p className="text-sm text-[#6E5D57]">
              Type in any term above or browse our curated popular supplications below:
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['Nad e Ali', 'Facing Hardships', 'Ayatul Kursi', 'Marriage Wazifa', 'Morning Azkar', 'Ruqyah Shifa'].map((k) => (
                <Link
                  key={k}
                  href={`/search?q=${encodeURIComponent(k)}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
                >
                  {k}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
