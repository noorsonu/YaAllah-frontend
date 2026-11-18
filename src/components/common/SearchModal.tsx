'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { api } from '@/lib/api';
import { Article } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      const res = await api.search(query);
      setResults(res);
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D9A441]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-[#E8D8C0] bg-[#FAF4E9]">
          <Search className="w-5 h-5 text-[#650D25] ml-2 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Duas, Wazaif, Surahs, Keywords..."
            autoFocus
            className="w-full bg-transparent text-[#392A25] text-lg placeholder-[#8A7166] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm font-medium rounded-lg text-[#650D25] hover:bg-[#650D25]/10"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {isLoading && (
            <div className="py-8 text-center text-sm text-[#8A7166]">
              Searching authentic supplications...
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="py-10 text-center">
              <BookOpen className="w-10 h-10 mx-auto text-[#D9A441] mb-2 opacity-60" />
              <p className="text-base font-medium text-[#392A25]">No matching prayers or wazaif found</p>
              <p className="text-sm text-[#6E5D57] mt-1">Try searching for keywords like &ldquo;Nad e Ali&rdquo;, &ldquo;Hardship&rdquo;, or &ldquo;Marriage&rdquo;</p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D9A441] px-2 mb-2">
                Matching Duas & Articles ({results.length})
              </div>
              {results.map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  onClick={onClose}
                  className="flex items-start justify-between p-3 rounded-xl hover:bg-[#FAF4E9] transition-colors border border-transparent hover:border-[#E8D8C0] group"
                >
                  <div className="pr-4">
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-[#650D25]/10 text-[#650D25] mb-1">
                      {article.category.name}
                    </span>
                    <h4 className="text-sm md:text-base font-semibold text-[#392A25] group-hover:text-[#650D25] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#6E5D57] line-clamp-1 mt-0.5">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#D9A441] shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          )}

          {!query && (
            <div className="py-6 px-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8A7166] mb-3">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Nad e Ali', 'Ayatul Kursi', 'Facing Hardships', 'Marriage Wazifa', 'Morning Azkar', 'Ruqyah Shifa'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF4E9] border border-[#E8D8C0] text-[#392A25] hover:border-[#D9A441] hover:text-[#650D25] transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-[#D9A441]" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
