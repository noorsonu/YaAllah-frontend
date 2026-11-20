import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ChevronRight, Home, Sparkles, ShieldCheck } from 'lucide-react';
import { api } from '@/lib/api';
import ArabicDuaBox from '@/components/articles/ArabicDuaBox';
import ReadingControlsContainer from '@/components/articles/ReadingControlsContainer';
import ShareButtons from '@/components/articles/ShareButtons';
import CommentsSection from '@/components/articles/CommentsSection';
import ArticleCard from '@/components/cards/ArticleCard';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await api.getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await api.getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | ya ALLAH',
    };
  }

  return {
    title: `${post.title} | ya ALLAH`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await api.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await api.getPosts();
  const relatedPosts = allPosts.filter((a) => a.id !== post.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-[#FAF4E9] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6E5D57] mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#650D25] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <Link href={`/${post.category.slug}`} className="hover:text-[#650D25] transition-colors">
            {post.category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <span className="text-[#650D25] font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm mb-8">
          {/* Category & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#650D25] text-white shadow-sm">
              {post.category.name}
            </span>

            {/* Reading Controls UI (Font Size, Bookmark, Share) */}
            <ReadingControlsContainer title={post.title} />
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#650D25] tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-base sm:text-lg text-[#392A25]/90 leading-relaxed font-normal mb-6 pb-6 border-b border-[#E8D8C0]">
            {post.excerpt}
          </p>

          {/* Author & Published Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E5D57]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center text-[#650D25]">
                <User className="w-5 h-5 text-[#650D25]" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#392A25] block">
                  {post.author.name}
                </span>
                <span className="text-[11px] text-[#8A7166]">Verified Contributor</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D9A441]" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D9A441]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[#D9A441]/40 shadow-md mb-8 bg-[#FAF4E9]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body Container */}
        <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm space-y-6">
          
          {/* Authentic Arabic Dua Component (if present) */}
          {post.arabicDua && (
            <ArabicDuaBox dua={post.arabicDua} />
          )}

          {/* Main Article Content */}
          {post.content && (
            <div
              className="prose prose-stone max-w-none prose-headings:font-heading prose-headings:text-[#650D25] prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-[#392A25] prose-p:leading-relaxed prose-li:text-[#392A25] prose-ul:my-4 prose-li:my-1 prose-strong:text-[#650D25]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* Verified Hadith & Reference Guarantee */}
          <div className="my-8 p-5 rounded-2xl bg-[#FAF4E9] border border-[#D9A441]/50 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-[#650D25] shrink-0 mt-0.5" />
            <div className="text-xs text-[#392A25]">
              <h4 className="font-bold text-[#650D25] uppercase tracking-wider mb-1">
                Authenticity & Respect of Divine Word
              </h4>
              <p className="leading-relaxed text-[#6E5D57]">
                All verses and supplications on ya ALLAH are extracted from authentic Quranic chapters and recognized Sunnah compendiums (Bukhari, Muslim, Abu Dawood, Tirmidhi). Readers are advised to maintain physical cleanliness (Taharah) while holding or reciting divine words.
              </p>
            </div>
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#8A7166] mr-1">Tags:</span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25]"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* Social Sharing */}
          <ShareButtons title={post.title} />

          {/* Comments Section */}
          <CommentsSection postTitle={post.title} initialCount={post.commentCount} />
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D9A441]" />
            <h3 className="font-heading text-2xl font-bold text-[#650D25]">
              Related Duas & Recommended Reading
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
