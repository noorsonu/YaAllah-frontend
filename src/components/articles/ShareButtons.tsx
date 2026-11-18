'use client';

import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : 'https://www.yaallah.in';
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`${title}\n${getShareUrl()}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(title);
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <div className="py-6 border-y border-[#E8D8C0] my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650D25]">
        <Share2 className="w-4 h-4 text-[#D9A441]" />
        <span>Share this Dua with Family & Friends:</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={shareWhatsApp}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={shareTwitter}
          className="p-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs shadow-sm transition-all flex items-center justify-center w-8 h-8"
          title="Share on X"
          aria-label="Share on X"
        >
          <span className="font-bold text-[11px]">𝕏</span>
        </button>

        <button
          onClick={shareFacebook}
          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs shadow-sm transition-all flex items-center justify-center w-8 h-8 font-bold text-xs"
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          f
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8D8C0] hover:border-[#D9A441] text-[#392A25] text-xs font-medium transition-all shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-600 font-semibold">Copied Link</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
