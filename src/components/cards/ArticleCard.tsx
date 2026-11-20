import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group bg-white rounded-2xl border border-[#E8D8C0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 ${
        featured ? 'ring-1 ring-[#D9A441]/40' : ''
      }`}
    >
      {/* Featured Image Container */}
      <Link href={`/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-[#FAF4E9]">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#650D25] text-white shadow-md">
          {article.category.name}
        </span>

        {featured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#D9A441] text-[#392A25] shadow-md">
            Verified Wazifa
          </span>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#6E5D57] mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
              {article.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#650D25] group-hover:text-[#50091D] transition-colors leading-snug line-clamp-2 mb-2.5">
            <Link href={`/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#392A25]/85 line-clamp-2 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer: Author & Read More */}
        <div className="pt-4 border-t border-[#E8D8C0]/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#FAF4E9] border border-[#E8D8C0] flex items-center justify-center text-[#650D25] font-semibold text-[10px]">
              <User className="w-3.5 h-3.5 text-[#650D25]" />
            </div>
            <span className="font-medium text-[#392A25] truncate max-w-[120px]">
              {article.author.name}
            </span>
          </div>

          <Link
            href={`/${article.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-[#650D25] group-hover:text-[#D9A441] transition-colors"
          >
            <span>Read Dua</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
