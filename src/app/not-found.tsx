import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Search, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FAF4E9] px-4 py-16">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl border border-[#D9A441]/50 p-8 sm:p-12 shadow-xl space-y-6">
        
        {/* Logo and Status */}
        <div className="relative w-16 h-16 mx-auto mb-2">
          <Image
            src="/logo.png"
            alt="YaAllah Logo"
            width={64}
            height={64}
            className="object-contain w-auto h-full"
          />
        </div>

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#650D25]/10 text-[#650D25]">
          Error 404 • Page Not Found
        </span>

        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#650D25] tracking-tight">
          This Page Has Moved or Does Not Exist
        </h1>

        <p className="text-sm sm:text-base text-[#6E5D57] leading-relaxed max-w-md mx-auto">
          The supplication or resource you were seeking may have been renamed or relocated during our recent upgrade.
        </p>

        {/* Quick Recovery Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shadow"
          >
            <Home className="w-4 h-4 text-[#D9A441]" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/search"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441] transition-colors"
          >
            <Search className="w-4 h-4 text-[#D9A441]" />
            <span>Search Website</span>
          </Link>
        </div>

        {/* Suggested Sections */}
        <div className="pt-6 border-t border-[#E8D8C0] text-xs text-[#8A7166]">
          <span className="block mb-3 font-semibold text-[#392A25] uppercase tracking-wider">
            Popular Destinations:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/daily-duas"
              className="px-3 py-1.5 rounded-lg bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
            >
              Daily Duas
            </Link>
            <Link
              href="/wazaif"
              className="px-3 py-1.5 rounded-lg bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
            >
              Important Wazaif
            </Link>
            <Link
              href="/library"
              className="px-3 py-1.5 rounded-lg bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
            >
              Islamic Library
            </Link>
            <Link
              href="/nad-e-ali-shareef"
              className="px-3 py-1.5 rounded-lg bg-[#FAF4E9] border border-[#E8D8C0] text-[#650D25] hover:border-[#D9A441]"
            >
              Nad e Ali Shareef
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
