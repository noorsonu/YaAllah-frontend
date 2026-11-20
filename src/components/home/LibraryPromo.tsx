import React from 'react';
import Link from 'next/link';
import { BookOpen, Download, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function LibraryPromo() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#FAF4E9] border-b border-[#E8D8C0]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D9A441_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9A441]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#650D25]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-white to-[#FAF4E9] rounded-3xl border-2 border-[#D9A441]/50 p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25]">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Verified Downloads & Free PDF Books</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#650D25] tracking-tight leading-tight">
                Islamic Library
              </h2>

              <p className="text-base sm:text-lg text-[#392A25]/90 max-w-2xl leading-relaxed">
                Explore articles, guides and downloadable resources for your daily life. 
                Equip your home with verified Masnoon pocket booklets, 40 Rabbana duas, and printable daily charts.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#392A25]">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#650D25]" />
                  </div>
                  <span>100% Free & Authentic Sunnah PDFs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center shrink-0">
                    <FileText className="w-3.5 h-3.5 text-[#650D25]" />
                  </div>
                  <span>Print-Ready High Resolution Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-[#650D25]" />
                  </div>
                  <span>Arabic, English & Transliteration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FAF4E9] border border-[#D9A441] flex items-center justify-center shrink-0">
                    <Download className="w-3.5 h-3.5 text-[#650D25]" />
                  </div>
                  <span>Instant One-Click Direct Downloads</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="/library"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#650D25] text-white hover:bg-[#50091D] shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 text-[#D9A441]" />
                  <span>Explore Library & Downloads</span>
                  <ArrowRight className="w-4 h-4 text-[#E8C78D] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Visual Composition: Books, Quran Stand, Decorative Islamic Motif */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Decorative Gold Halo */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#D9A441]/20 to-[#650D25]/15 blur-xl -rotate-3" />

                <div className="relative bg-white rounded-2xl border border-[#D9A441] p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8D8C0]">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#650D25]" />
                      <span className="font-heading font-bold text-sm text-[#392A25]">Featured Resources</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#D9A441] bg-[#FAF4E9] px-2.5 py-0.5 rounded-full border border-[#D9A441]/40">
                      Free Access
                    </span>
                  </div>

                  {/* Resource 1 */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4E9] border border-[#E8D8C0]/70">
                    <div className="p-2.5 rounded-lg bg-white text-[#650D25] border border-[#D9A441]/30">
                      <FileText className="w-5 h-5 text-[#650D25]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#650D25]">
                        Daily Masnoon Duas Pocket Guide
                      </h4>
                      <p className="text-[11px] text-[#6E5D57] mt-0.5">
                        48 Pages • PDF Booklet • 3.4 MB
                      </p>
                    </div>
                    <Link
                      href="/library"
                      className="p-2 rounded-lg bg-white hover:bg-[#650D25] hover:text-white text-[#650D25] transition-colors border border-[#E8D8C0]"
                    >
                      <Download className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Resource 2 */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4E9] border border-[#E8D8C0]/70">
                    <div className="p-2.5 rounded-lg bg-white text-[#650D25] border border-[#D9A441]/30">
                      <BookOpen className="w-5 h-5 text-[#650D25]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#650D25]">
                        40 Rabbana Duas from Holy Quran
                      </h4>
                      <p className="text-[11px] text-[#6E5D57] mt-0.5">
                        36 Pages • Arabic & English • 4.8 MB
                      </p>
                    </div>
                    <Link
                      href="/library"
                      className="p-2 rounded-lg bg-white hover:bg-[#650D25] hover:text-white text-[#650D25] transition-colors border border-[#E8D8C0]"
                    >
                      <Download className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Resource 3 */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF4E9] border border-[#E8D8C0]/70">
                    <div className="p-2.5 rounded-lg bg-white text-[#650D25] border border-[#D9A441]/30">
                      <Sparkles className="w-5 h-5 text-[#650D25]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-[#650D25]">
                        Morning & Evening Adhkar Chart
                      </h4>
                      <p className="text-[11px] text-[#6E5D57] mt-0.5">
                        Wall Printable Poster • 1.9 MB
                      </p>
                    </div>
                    <Link
                      href="/library"
                      className="p-2 rounded-lg bg-white hover:bg-[#650D25] hover:text-white text-[#650D25] transition-colors border border-[#E8D8C0]"
                    >
                      <Download className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
