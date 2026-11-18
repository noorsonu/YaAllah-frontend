import React from 'react';
import Link from 'next/link';
import { Library, Home, ChevronRight, Download, FileText, BookOpen, Music, ShieldCheck } from 'lucide-react';
import { api } from '@/lib/api';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamic Library & Downloadable PDF Resources | YaAllah',
  description: 'Download verified Islamic ebooks, Daily Masnoon Dua guides, 40 Rabbana charts, and printable Hadith collections for free.',
};

export default async function LibraryPage() {
  const resources = await api.getLibraryResources();

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
          <span className="text-[#650D25] font-semibold">Islamic Library</span>
        </nav>

        {/* Page Banner */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-3">
            <Library className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Knowledge Archives</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#650D25] tracking-tight mb-3">
            Islamic Library & Downloadable Resources
          </h1>

          <p className="text-base sm:text-lg text-[#392A25]/90 max-w-3xl leading-relaxed">
            Explore articles, guides and downloadable resources for your daily life.
            All publications are provided completely free for personal study, memorization, and distribution.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#6E5D57]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
              Verified Sunnah Sources
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#D9A441]" />
              Clean High-Resolution PDFs
            </span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => {
            const isAudio = item.fileType === 'AUDIO';
            const isBook = item.fileType === 'BOOK';
            const Icon = isAudio ? Music : isBook ? BookOpen : FileText;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl border border-[#E8D8C0] p-6 shadow-sm hover:shadow-xl hover:border-[#D9A441] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF4E9] text-[#650D25] border border-[#E8D8C0]">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-[#D9A441] bg-[#FAF4E9] px-2.5 py-0.5 rounded-md border border-[#D9A441]/30">
                      {item.fileType}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4E9] text-[#650D25] flex items-center justify-center shrink-0 border border-[#E8D8C0]">
                      <Icon className="w-5 h-5 text-[#650D25]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#650D25] leading-snug group-hover:text-[#50091D] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#392A25]/85 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Metadata & Download Button */}
                <div className="pt-4 border-t border-[#E8D8C0]/60 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6E5D57]">
                    <span>{item.language}</span>
                    <span>{item.fileSize} {item.pages ? `• ${item.pages} pgs` : ''}</span>
                  </div>

                  <a
                    href={item.downloadUrl}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4 text-[#E8C78D]" />
                    <span>Download {item.fileType}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
