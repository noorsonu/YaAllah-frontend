'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import MosqueTopSilhouette from './MosqueTopSilhouette';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center bg-gradient-to-b from-[#1F0209] via-[#3B0513] to-[#4F091D] border-b-2 border-[#D9A441] select-none">
      
      {/* ============================================================ */}
      {/* 1. VECTOR BACKGROUND: ISLAMIC STAR GEOMETRIC LATTICE PATTERN */}
      {/* ============================================================ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15 sm:opacity-20 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamicLatticeHero" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M30 0 L36 12 L48 6 L42 18 L54 24 L42 30 L48 42 L36 36 L30 48 L24 36 L12 42 L18 30 L6 24 L18 18 L12 6 L24 12 Z"
              fill="none"
              stroke="#D9A441"
              strokeWidth="0.8"
            />
            <circle cx="30" cy="24" r="3" fill="none" stroke="#E8C78D" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="twilightSunset" cx="50%" cy="80%" r="65%">
            <stop offset="0%" stopColor="#FFA834" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8C1C30" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1F0209" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicLatticeHero)" />
        <rect width="100%" height="100%" fill="url(#twilightSunset)" />
      </svg>

      {/* ============================================================ */}
      {/* 2. RESPONSIVE MOSQUE SILHOUETTE:                             */}
      {/* - Mobile: Extra Large & Tall (w-[180%]), Subtle (opacity-16) */}
      {/* - Laptop: Faint & Soft (sm:w-full sm:opacity-10)             */}
      {/* ============================================================ */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-0 overflow-hidden">
        <MosqueTopSilhouette className="w-[180%] sm:w-full max-w-none sm:max-w-[1200px] h-auto opacity-16 sm:opacity-10 transition-opacity duration-300 drop-shadow-[0_0_30px_rgba(255,180,50,0.3)]" />
      </div>

      {/* ============================================================ */}
      {/* 3. VECTOR GRAND GOLDEN ARCHWAY (DESKTOP/TABLET >= 640px ONLY) */}
      {/* ============================================================ */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldArchRib" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E6F18" />
            <stop offset="15%" stopColor="#E5B246" />
            <stop offset="50%" stopColor="#FFF7CC" />
            <stop offset="85%" stopColor="#E5B246" />
            <stop offset="100%" stopColor="#9E6F18" />
          </linearGradient>
        </defs>
        <path
          d="M0 160 C140 140 260 100 360 65 C480 30 600 15 720 15 C840 15 960 30 1080 65 C1180 100 1300 140 1440 160"
          stroke="url(#goldArchRib)"
          strokeWidth="3.5"
          opacity="0.9"
        />
        <path
          d="M0 170 C140 150 260 110 360 75 C480 40 600 25 720 25 C840 25 960 40 1080 75 C1180 110 1300 150 1440 170"
          stroke="url(#goldArchRib)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.75"
        />
      </svg>

      {/* ============================================================ */}
      {/* 4. VECTOR HANGING GOLDEN LANTERNS (DESKTOP/TABLET >= 640px)  */}
      {/* ============================================================ */}
      {/* Left Lantern */}
      <div className="hidden sm:block absolute top-0 left-6 sm:left-12 lg:left-20 pointer-events-none z-10">
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none" className="w-10 sm:w-14 h-auto drop-shadow-[0_4px_16px_rgba(255,180,50,0.5)]">
          <defs>
            <linearGradient id="lanternGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#E5B246" />
              <stop offset="100%" stopColor="#8A5A0A" />
            </linearGradient>
            <radialGradient id="lampWarmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF9E0" stopOpacity="1" />
              <stop offset="30%" stopColor="#FFC843" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#FF8800" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF8800" stopOpacity="0" />
            </radialGradient>
          </defs>
          <line x1="30" y1="0" x2="30" y2="90" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="30" cy="90" r="3.5" fill="url(#lanternGoldGrad)" />
          <path d="M18 100 C18 92 42 92 42 100 L46 110 L14 110 Z" fill="url(#lanternGoldGrad)" />
          <polygon points="14,110 46,110 40,150 20,150" fill="url(#lampWarmGlow)" />
          <polygon points="14,110 46,110 40,150 20,150" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" fill="none" />
          <line x1="30" y1="110" x2="30" y2="150" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" />
          <polygon points="20,150 40,150 30,168" fill="url(#lanternGoldGrad)" />
          <circle cx="30" cy="174" r="2" fill="url(#lanternGoldGrad)" />
        </svg>
      </div>

      {/* Right Lantern */}
      <div className="hidden sm:block absolute top-0 right-6 sm:right-12 lg:right-20 pointer-events-none z-10">
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none" className="w-10 sm:w-14 h-auto drop-shadow-[0_4px_16px_rgba(255,180,50,0.5)]">
          <line x1="30" y1="0" x2="30" y2="75" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="30" cy="75" r="3.5" fill="url(#lanternGoldGrad)" />
          <path d="M18 85 C18 77 42 77 42 85 L46 95 L14 95 Z" fill="url(#lanternGoldGrad)" />
          <polygon points="14,95 46,95 40,135 20,135" fill="url(#lampWarmGlow)" />
          <polygon points="14,95 46,95 40,135 20,135" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" fill="none" />
          <line x1="30" y1="95" x2="30" y2="135" stroke="url(#lanternGoldGrad)" strokeWidth="1.5" />
          <polygon points="20,135 40,135 30,153" fill="url(#lanternGoldGrad)" />
          <circle cx="30" cy="159" r="2" fill="url(#lanternGoldGrad)" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 5. CENTERPIECE: 100% VECTOR HARDWARE-RENDERED TYPOGRAPHY    */}
      {/* ============================================================ */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-10 sm:py-16 text-center flex flex-col items-center">
        
        {/* Top Islamic Floral Rosette Emblem */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[200px] sm:max-w-xs mb-1 sm:mb-2">
          <div className="h-[1px] sm:h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#E5B246] to-[#E5B246]" />
          <svg className="w-6 h-6 sm:w-9 sm:h-9 text-[#E5B246] drop-shadow-[0_2px_8px_rgba(255,200,60,0.6)]" viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="rosetteGradVector" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7CC" />
                <stop offset="50%" stopColor="#E5B246" />
                <stop offset="100%" stopColor="#A8751A" />
              </linearGradient>
            </defs>
            <g fill="url(#rosetteGradVector)">
              <polygon points="24,2 29,15 42,15 32,24 36,38 24,30 12,38 16,24 6,15 19,15" />
              <circle cx="24" cy="24" r="5" fill="#FFF7CC" />
              <circle cx="24" cy="24" r="2.5" fill="#50091D" />
              <path d="M24 0 C22 6 22 10 24 13 C26 10 26 6 24 0 Z" />
              <path d="M24 48 C22 42 22 38 24 35 C26 38 26 42 24 48 Z" />
              <path d="M0 24 C6 22 10 22 13 24 C10 26 6 26 0 24 Z" />
              <path d="M48 24 C42 22 38 22 35 24 C38 26 42 26 48 24 Z" />
            </g>
          </svg>
          <div className="h-[1px] sm:h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#E5B246] to-[#E5B246]" />
        </div>

        {/* Main Title: A Call to (Top) & ALLAH! (Bottom) */}
        <div className="flex flex-col items-center justify-center my-1 sm:my-2">
          <span className="font-heading text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            A Call to
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider leading-tight mt-0.5 sm:mt-1">
            <span className="inline-block text-[#FFD466] border-b-2 sm:border-b-4 border-[#D9A441] pb-0.5 sm:pb-1 drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
              ALLAH!
            </span>
          </h1>
        </div>

        {/* Pure Golden Crescent Moon (Clean Hilal) with Golden Dividers */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[220px] sm:max-w-md mx-auto py-2 sm:py-3">
          <div className="h-[1px] sm:h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#E5B246] to-[#E5B246]" />
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full drop-shadow-[0_2px_6px_rgba(255,200,60,0.7)]">
              <defs>
                <linearGradient id="pureCrescentGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7CC" />
                  <stop offset="50%" stopColor="#E5B246" />
                  <stop offset="100%" stopColor="#A8751A" />
                </linearGradient>
              </defs>
              <path
                d="M20 2 C10 2 2 10 2 20 C2 30 10 38 20 38 C25 38 29.5 36 33 32.5 C26 34 18 29 18 20 C18 11 26 6 33 7.5 C29.5 4 25 2 20 2 Z"
                fill="url(#pureCrescentGold)"
              />
            </svg>
          </div>
          <div className="h-[1px] sm:h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#E5B246] to-[#E5B246]" />
        </div>

        {/* Mission Statement Paragraph from Official YaAllah.in */}
        <p className="text-xs sm:text-base md:text-lg text-[#FAF4E9] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-xl mx-auto px-2">
          Welcome to{' '}
          <span className="font-semibold text-white underline decoration-[#D9A441] decoration-2 underline-offset-4">
            YaAllah.in
          </span>{' '}
          — a trusted platform for Daily Duas, Important Wazaif, Islamic articles and a valuable Library of Islamic knowledge.
        </p>

        {/* Action Buttons: Responsive Side-by-Side on Mobile and Desktop */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-4 sm:pt-6 z-30">
          <Link
            href="/daily-duas"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#650D25] via-[#7B1330] to-[#50091D] text-white hover:brightness-110 border sm:border-2 border-[#D9A441] shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all active:scale-95 group"
          >
            <span>Explore Duas</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD466] group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-7 sm:py-3 rounded-full font-bold text-xs sm:text-sm bg-[#1F0209]/80 hover:bg-[#1F0209] backdrop-blur-md border border-[#E8C78D]/60 text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all active:scale-95"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D9A441]" />
            <span>Library</span>
          </Link>
        </div>

        {/* Bottom Islamic Rosette Accent */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-[160px] sm:max-w-xs mt-4 sm:mt-5">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E5B246]/60" />
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5B246]/80" viewBox="0 0 48 48" fill="none">
            <g fill="url(#rosetteGradVector)">
              <polygon points="24,4 28,15 39,15 30,23 34,35 24,28 14,35 18,23 9,15 20,15" />
              <circle cx="24" cy="24" r="3" fill="#FFF7CC" />
            </g>
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E5B246]/60" />
        </div>

      </div>

    </section>
  );
}
