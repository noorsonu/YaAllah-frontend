import React from 'react';
import Link from 'next/link';
import { Sun, Sparkles, BookOpen, Library, Layers, Info, ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  count?: string;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    id: 'c-1',
    name: 'Daily Duas',
    href: '/daily-duas',
    description: 'Essential morning, evening, and bedtime masnoon prayers.',
    icon: Sun,
    count: '48+ Duas',
  },
  {
    id: 'c-2',
    name: 'Important Wazaif',
    href: '/wazaif',
    description: 'Tested spiritual wazaif for marriage, distress, and needs.',
    icon: Sparkles,
    count: '65+ Wazaif',
  },
  {
    id: 'c-3',
    name: 'Islamic Knowledge',
    href: '/categories/islamic-knowledge',
    description: 'Sunnah guidelines, Hadith references, and Quranic lessons.',
    icon: BookOpen,
    count: '80+ Guides',
  },
  {
    id: 'c-4',
    name: 'Islamic Library',
    href: '/library',
    description: 'Verified PDF guides, dua booklets, and printable charts.',
    icon: Library,
    count: '34+ Books',
  },
  {
    id: 'c-5',
    name: 'All Categories',
    href: '/categories',
    description: 'Browse complete taxonomy by theme, need, and category.',
    icon: Layers,
    count: 'Browse All',
  },
  {
    id: 'c-6',
    name: 'About Us',
    href: '/about',
    description: 'The journey, mission, and editorial ethics behind ya ALLAH.',
    icon: Info,
    count: 'Our Mission',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF4E9] border-b border-[#E8D8C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A441] block mb-2">
            Explore Spiritual Guidance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#650D25] tracking-tight">
            Explore by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D57]">
            Find the exact supplication or knowledge you seek through our organized Islamic taxonomy.
          </p>
        </div>

        {/* Responsive Grid: 2-column on mobile, 3-column on tablet, 6-column on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {CATEGORY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-[#E8D8C0] shadow-sm hover:shadow-xl hover:border-[#D9A441] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Top Corner Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF4E9] group-hover:bg-[#650D25] text-[#650D25] group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-[#E8D8C0]/70 group-hover:border-[#650D25]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#D9A441] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-[#650D25] group-hover:text-[#50091D] leading-tight mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6E5D57] line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Badge */}
                <div className="pt-2 border-t border-[#E8D8C0]/50">
                  <span className="text-[10px] font-semibold text-[#D9A441] uppercase tracking-wider block">
                    {item.count}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
