import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layers, Home, ChevronRight } from 'lucide-react';
import { api } from '@/lib/api';
import ArticleCard from '@/components/cards/ArticleCard';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await api.getCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await api.getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | ya ALLAH',
    };
  }

  return {
    title: `${category.name} Articles & Duas | ya ALLAH`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await api.getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await api.getPosts({ category: slug });

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
          <Link href="/categories" className="hover:text-[#650D25] transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <span className="text-[#650D25] font-semibold">{category.name}</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Category Archive</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            {category.name}
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Articles Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E8D8C0] p-12 text-center">
            <p className="text-base font-semibold text-[#392A25]">
              No articles currently indexed under this category.
            </p>
            <Link
              href="/categories"
              className="mt-4 inline-block px-6 py-2.5 rounded-xl bg-[#650D25] text-white text-xs font-semibold"
            >
              Back to All Categories
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
