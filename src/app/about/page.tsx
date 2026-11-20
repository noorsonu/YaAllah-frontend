import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Info, Home, ChevronRight, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – Our History & Mission | YaAllah',
  description: 'Learn about the journey of YaAllah.in, founded in 2012 as a humble platform dedicated to authentic Islamic supplications, wazaif, and peaceful remembrance.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF4E9] py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6E5D57] mb-6">
          <Link href="/" className="hover:text-[#650D25] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8D8C0]" />
          <span className="text-[#650D25] font-semibold">About Us</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-[#D9A441]/50 p-6 sm:p-10 shadow-sm mb-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src="/logo.png"
                alt="YaAllah Logo"
                width={80}
                height={80}
                className="object-contain w-auto h-full"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25]/10 text-[#650D25] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Our Heritage Since 2012</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#650D25] tracking-wide">
                About ya ALLAH
              </h1>
              <p className="text-sm font-semibold tracking-wider text-[#D9A441] uppercase mt-1">
                A Call to ALLAH!
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#392A25]/90 leading-relaxed">
            YaAllah.in was initiated in 2012 as an earnest platform to facilitate Muslims around the world with verified Sunnah supplications, daily adhkar, and authentic wazaif for times of distress and life decisions.
          </p>
        </div>

        {/* Narrative & Mission */}
        <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm space-y-8">
          
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-[#650D25]">
              The Genesis & Evolution
            </h2>
            <p className="text-sm sm:text-base text-[#392A25]/90 leading-relaxed">
              What began over a decade ago as a personal devotional blog has grown into one of the most widely consulted repositories of Islamic Duas and Wazaif. From helping individuals find peace during severe illness to offering guided Istikhara supplications for marriage, YaAllah has remained committed to pure spiritual solace.
            </p>
            <p className="text-sm sm:text-base text-[#392A25]/90 leading-relaxed">
              We redesigned the entire experience from the ground up to ensure modern speed, pristine typography in Arabic and English, and an ad-free, respectful environment for readers on any mobile or desktop screen.
            </p>
          </section>

          {/* Pillars of YaAllah */}
          <section className="space-y-4 pt-4 border-t border-[#E8D8C0]">
            <h2 className="font-heading text-2xl font-bold text-[#650D25]">
              Our Editorial Principles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF4E9]/60 border border-[#E8D8C0] space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#650D25]">
                  <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                  <span>Unwavering Sunnah Authenticity</span>
                </div>
                <p className="text-xs text-[#6E5D57] leading-relaxed">
                  Every dua is verified against primary Hadith sources (Bukhari, Muslim, Abu Dawood, Tirmidhi) and Noble Quranic chapters.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4E9]/60 border border-[#E8D8C0] space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#650D25]">
                  <Heart className="w-4 h-4 text-[#D9A441]" />
                  <span>Pure Tawheed & Reliance</span>
                </div>
                <p className="text-xs text-[#6E5D57] leading-relaxed">
                  We emphasize that all benefit, cure, and answers come solely from Allah Almighty; wazaif are means of humble plea and devotion.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4E9]/60 border border-[#E8D8C0] space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#650D25]">
                  <BookOpen className="w-4 h-4 text-[#D9A441]" />
                  <span>Accessible Transliteration</span>
                </div>
                <p className="text-xs text-[#6E5D57] leading-relaxed">
                  Clear Roman transliterations and translations ensure non-Arabic speakers recite with accurate phonetics and deep comprehension.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4E9]/60 border border-[#E8D8C0] space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#650D25]">
                  <Info className="w-4 h-4 text-[#D9A441]" />
                  <span>Responsible Spiritual Advice</span>
                </div>
                <p className="text-xs text-[#6E5D57] leading-relaxed">
                  We never claim superstitious guarantees and consistently remind believers that medical conditions require certified professional physicians.
                </p>
              </div>
            </div>
          </section>

          {/* Contact / Get In Touch Link */}
          <div className="pt-6 border-t border-[#E8D8C0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#650D25]">
                Have a Question or Suggestion?
              </h3>
              <p className="text-xs text-[#6E5D57]">
                We welcome inquiries, feedback, and corrections from our community.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shrink-0 shadow"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
