import React from 'react';
import Link from 'next/link';
import { Shield, Home, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | YaAllah',
  description: 'Privacy Policy and data protection terms for YaAllah.in readers and community members.',
};

export default function PrivacyPolicyPage() {
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
          <span className="text-[#650D25] font-semibold">Privacy Policy</span>
        </nav>

        {/* Content Card */}
        <div className="bg-white rounded-3xl border border-[#E8D8C0] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D9A441]">
            <Shield className="w-4 h-4" />
            <span>Transparency & Security</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#650D25] tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#6E5D57]">
            Last Updated: November 2026
          </p>

          <div className="prose prose-stone max-w-none text-sm text-[#392A25]/90 space-y-4 leading-relaxed">
            <p>
              At <strong>YaAllah.in</strong>, we deeply respect the personal privacy of our visitors. This Privacy Policy details how information is handled when you browse, submit comments, or subscribe to educational Islamic content.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              1. Information We Collect
            </h3>
            <p>
              We only collect information voluntarily provided by you, such as your email address when subscribing to our newsletter, or your name when leaving a public comment on a supplication article. We do not sell, rent, or distribute personal information to third parties.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              2. Cookies and Analytics
            </h3>
            <p>
              YaAllah uses standard cookies and anonymous web analytics to track page views and improve website performance across mobile and desktop devices. You can configure your browser to reject cookies without affecting your ability to read supplications.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              3. Comments and Moderation
            </h3>
            <p>
              Comments submitted to YaAllah undergo moderation to prevent spam and ensure respect for Islamic values. When you post a comment, your email is never made public; only your submitted display name and reflection are visible.
            </p>

            <h3 className="font-heading text-lg font-bold text-[#650D25] mt-6 mb-2">
              4. Contact Us
            </h3>
            <p>
              If you have any questions regarding our privacy practices or wish to request data deletion, please contact us at <a href="mailto:privacy@yaallah.in" className="text-[#650D25] underline">privacy@yaallah.in</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
