'use client';

import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Bookmark, Share2, Check } from 'lucide-react';

interface ReadingControlsProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  title: string;
}

export default function ReadingControls({ fontSize, setFontSize, title }: ReadingControlsProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleZoomIn = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const handleZoomOut = () => {
    if (fontSize > 14) setFontSize(fontSize - 2);
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        if (navigator.share) {
          await navigator.share({
            title,
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.warn('Share dismissed', err);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#E8D8C0] shadow-sm">
      <div className="flex items-center border-r border-[#E8D8C0] pr-2 mr-1">
        <button
          onClick={handleZoomOut}
          disabled={fontSize <= 14}
          title="Decrease Font Size"
          aria-label="Decrease Font Size"
          className="p-1.5 rounded-lg text-[#6E5D57] hover:text-[#650D25] hover:bg-[#FAF4E9] disabled:opacity-40 transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-xs font-semibold text-[#650D25] px-1.5 min-w-[2.2rem] text-center">
          {fontSize}px
        </span>
        <button
          onClick={handleZoomIn}
          disabled={fontSize >= 24}
          title="Increase Font Size"
          aria-label="Increase Font Size"
          className="p-1.5 rounded-lg text-[#6E5D57] hover:text-[#650D25] hover:bg-[#FAF4E9] disabled:opacity-40 transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      <button
        onClick={() => setBookmarked(!bookmarked)}
        title={bookmarked ? 'Remove Bookmark' : 'Bookmark Dua'}
        aria-label="Bookmark Dua"
        className={`p-1.5 rounded-lg transition-colors ${
          bookmarked
            ? 'bg-[#650D25] text-[#FAF4E9]'
            : 'text-[#6E5D57] hover:text-[#650D25] hover:bg-[#FAF4E9]'
        }`}
      >
        <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current text-[#D9A441]' : ''}`} />
      </button>

      <button
        onClick={handleShare}
        title="Share or Copy Link"
        aria-label="Share or Copy Link"
        className="p-1.5 rounded-lg text-[#6E5D57] hover:text-[#650D25] hover:bg-[#FAF4E9] transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
