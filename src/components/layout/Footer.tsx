'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, Heart, Shield, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#50091D] text-[#FAF4E9] pt-14 pb-24 lg:pb-12 border-t-2 border-[#D9A441]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#D9A441]/30">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/logo.png"
                  alt="YaAllah Official Logo"
                  width={48}
                  height={48}
                  className="object-contain w-auto h-full"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-tight text-white block">
                  YaAllah
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#D9A441] uppercase">
                  A Call to ALLAH!
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#FAF4E9]/80 leading-relaxed pr-4">
              Welcome to YaAllah.in — a trusted platform for Daily Duas, Important Wazaif, 
              authentic Islamic articles, and a valuable Library of Islamic knowledge founded on Sunnah.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#D9A441] uppercase tracking-wider block mb-2">
                Join our Islamic Newsletter
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#650D25] border border-[#D9A441]/50 text-xs text-[#FAF4E9]">
                  <CheckCircle className="w-4 h-4 text-[#D9A441]" />
                  <span>JazakAllah Khair! You have been subscribed.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-md">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-[#D9A441] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-white/10 border border-[#D9A441]/40 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D9A441] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#D9A441] text-[#392A25] font-semibold text-xs rounded-r-lg hover:bg-[#E8C78D] transition-colors flex items-center gap-1 shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-semibold text-[#D9A441] tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF4E9]/80">
              <li>
                <Link href="/" className="hover:text-[#D9A441] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/daily-duas" className="hover:text-[#D9A441] transition-colors">
                  Daily Duas
                </Link>
              </li>
              <li>
                <Link href="/wazaif" className="hover:text-[#D9A441] transition-colors">
                  Important Wazaif
                </Link>
              </li>
              <li>
                <Link href="/nad-e-ali-shareef" className="hover:text-[#D9A441] transition-colors">
                  Nad e Ali Shareef
                </Link>
              </li>
              <li>
                <Link href="/facing-hardships-make-a-dua" className="hover:text-[#D9A441] transition-colors">
                  Dua for Hardships
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[#D9A441] transition-colors">
                  Islamic Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-semibold text-[#D9A441] tracking-wide">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF4E9]/80">
              <li>
                <Link href="/daily-duas" className="hover:text-[#D9A441] transition-colors">
                  Morning & Evening Adhkar
                </Link>
              </li>
              <li>
                <Link href="/categories/marriage-related" className="hover:text-[#D9A441] transition-colors">
                  Marriage & Family Duas
                </Link>
              </li>
              <li>
                <Link href="/categories/spiritual-healing" className="hover:text-[#D9A441] transition-colors">
                  Spiritual Healing & Shifa
                </Link>
              </li>
              <li>
                <Link href="/categories/islamic-knowledge" className="hover:text-[#D9A441] transition-colors">
                  Quranic Verses & Hadith
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#D9A441] transition-colors">
                  All Islamic Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Legal */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-semibold text-[#D9A441] tracking-wide">
              Information
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF4E9]/80">
              <li>
                <Link href="/about" className="hover:text-[#D9A441] transition-colors">
                  About YaAllah
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D9A441] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#D9A441] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D9A441] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[#D9A441] transition-colors">
                  Downloadable Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Islamic Disclaimer */}
        <div className="py-6 border-b border-[#D9A441]/20 flex flex-col sm:flex-row items-center gap-3 text-xs text-[#FAF4E9]/70 text-center sm:text-left">
          <Shield className="w-5 h-5 text-[#D9A441] shrink-0" />
          <p>
            <strong>Disclaimer:</strong> yaALLAH.in provides educational Islamic supplications, Masnoon duas, and traditional wazaif. Supplications are acts of worship and faith, not medical substitutes. For health conditions, always consult licensed healthcare professionals.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF4E9]/60 gap-4">
          <p>
            © 2026 YaAllah.in — All rights reserved. &ldquo;A Call to ALLAH!&rdquo;
          </p>
          <div className="flex items-center gap-1 text-[#FAF4E9]/70">
            <span>Built with devotion & peace</span>
            <Heart className="w-3.5 h-3.5 text-[#D9A441] fill-[#D9A441]" />
            <span>for the Ummah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
