'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center border-b-2 border-[#D9A441]">
      
      {/* 1. Rich Maroon Architecture Mosque Background (Badshahi Mosque in Red Sandstone / Maroon) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mosque-maroon.jpg"
          alt="Majestic Maroon Red Sandstone Mosque with Domes and Minarets"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* 2. Balanced Maroon & Vignette Overlay (Mosque details, arches & domes are clearly visible) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#50091D]/90 via-[#50091D]/45 to-black/50" />
        
        {/* Subtle radial ambient warmth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#50091D_85%)] opacity-60" />
      </div>

      {/* Decorative Top & Bottom Subtle Gold Accent Ribbons */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A441] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A441] to-transparent z-10" />

      {/* 3. Text directly ON the Image (NO box / NO card container) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        {/* Pill Badge directly on image */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#50091D]/70 backdrop-blur-sm border border-[#D9A441] shadow-lg text-xs sm:text-sm font-bold text-[#E8C78D] mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9A441] shadow-[0_0_8px_#D9A441] animate-pulse" />
          <span className="tracking-widest uppercase">The Trusted Platform for Sunnah & Wazaif</span>
        </div>

        {/* Grand Headline: A Call to ALLAH! */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          A Call to <span className="text-[#E8C78D] underline decoration-[#D9A441] decoration-4 underline-offset-8">ALLAH!</span>
        </h1>

        {/* Short Description directly on image */}
        <p className="text-base sm:text-xl lg:text-2xl text-[#FAF4E9] max-w-3xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Welcome to <strong className="font-bold text-white underline decoration-[#D9A441]/60">YaAllah.in</strong> — a trusted platform for Daily Duas, Important Wazaif, Islamic articles and a valuable Library of Islamic knowledge.
        </p>

        {/* Action Buttons directly on image */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 max-w-md sm:max-w-none mx-auto mb-10 sm:mb-12">
          <Link
            href="/daily-duas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-[#650D25] text-white hover:bg-[#50091D] border-2 border-[#D9A441] shadow-2xl hover:shadow-[0_0_25px_rgba(217,164,65,0.4)] transition-all duration-300 group"
          >
            <span>Explore Duas & Wazaif</span>
            <ArrowRight className="w-4 h-4 text-[#E8C78D] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/library"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-[#E8D8C0] hover:border-[#D9A441] text-[#FAF4E9] hover:text-white shadow-xl transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 text-[#D9A441]" />
            <span>Browse Islamic Library</span>
          </Link>
        </div>

        {/* Trust Pillars directly on image */}
        <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#FAF4E9]">
          <div className="flex items-center gap-2 bg-[#50091D]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D9A441]/40 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
            <span className="font-medium">Authentic Hadith References</span>
          </div>

          <div className="flex items-center gap-2 bg-[#50091D]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D9A441]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D9A441]" />
            <span className="font-medium">Tried & Tested Daily Wazaif</span>
          </div>

          <div className="flex items-center gap-2 bg-[#50091D]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D9A441]/40 shadow-sm">
            <BookOpen className="w-4 h-4 text-[#D9A441]" />
            <span className="font-medium">Verified Arabic & Transliterations</span>
          </div>
        </div>

      </div>

    </section>
  );
}
