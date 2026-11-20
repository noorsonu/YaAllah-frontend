import React from 'react';
import Link from 'next/link';
import { FileText, Home, ChevronRight, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions & Disclaimer | ya ALLAH',
  description: 'Terms of use, religious content policy, and responsible disclaimer for ya ALLAH.in.',
};

export default function TermsPage() {
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
          <span className="text-[#650D25] font-semibold">Terms & Conditions</span>
        </nav>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D9A441]">
            <FileText className="w-4 h-4" />
            <span>Editorial Agreement</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#650D25] tracking-tight">
            Terms of Use & Religious Disclaimer
          </h1>

          <p className="text-xs text-[#6E5D57]">
            Last Updated: November 2026
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF4E9] border border-[#D9A441] flex items-start gap-3 my-4">
            <AlertTriangle className="w-5 h-5 text-[#650D25] shrink-0 mt-0.5" />
            <p className="text-xs text-[#392A25] leading-relaxed">
              <strong>Crucial Religious & Medical Note:</strong> All supplications, wazaif, and guidance shared on ya ALLAH are for devotional and educational purposes. Neither ya ALLAH nor its contributors claim to issue guaranteed medical, legal, or commercial outcomes. For any physical or mental ailment, consult licensed doctors.
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-sm text-[#392A25]/90 space-y-4 leading-relaxed">
            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing and reading content on ya ALLAH.in, you acknowledge and agree to respect the sacred nature of Quranic verses, Hadith, and Islamic traditions presented on this site.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              2. Intellectual Property & Free Distribution
            </h3>
            <p>
              Educational PDF guides, charts, and articles provided in the Islamic Library are free for personal devotional use, printing, and sharing. Systematic commercial resale or automated mass scraping is strictly prohibited.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              3. Nature of Supplication (Dua)
            </h3>
            <p>
              Dua is a heartfelt conversation between a servant and Allah Almighty. Acceptance of dua is subject to the divine wisdom of Allah. Practice of wazaif should always be accompanied by sincere repentance, halal sustenance, and fulfillment of obligatory Islamic duties (Fard Salah).
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              4. Governing Law
            </h3>
            <p>
              These terms are governed by standard international publishing best practices and ethical digital stewardship.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
