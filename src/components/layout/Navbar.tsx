'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown, BookOpen, Sparkles, Sun, Library, ShieldCheck, HeartHandshake } from 'lucide-react';
import SearchModal from '@/components/common/SearchModal';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Daily Duas', href: '/daily-duas' },
  { name: 'Wazaif', href: '/wazaif' },
  { 
    name: 'Categories', 
    href: '/categories',
    dropdown: [
      { name: 'Daily Duas', href: '/daily-duas', icon: Sun, desc: 'Morning & evening prayers' },
      { name: 'Important Wazaif', href: '/wazaif', icon: Sparkles, desc: 'Tested spiritual practices' },
      { name: 'Islamic Knowledge', href: '/categories/islamic-knowledge', icon: BookOpen, desc: 'Sunnah etiquette & guides' },
      { name: 'Islamic Library', href: '/library', icon: Library, desc: 'Downloadable PDF resources' },
      { name: 'Marriage & Family', href: '/categories/marriage-related', icon: HeartHandshake, desc: 'Duas for spouse & harmony' },
      { name: 'Spiritual Healing', href: '/categories/spiritual-healing', icon: ShieldCheck, desc: 'Ruqyah & Quranic shifa' },
    ]
  },
  { name: 'Library', href: '/library' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-[#E8D8C0]'
            : 'bg-[#FAF4E9] border-b border-[#E8D8C0]/80 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand with original aspect ratio */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 shrink-0 transition-transform group-hover:scale-105 duration-200">
                <Image
                  src="/logo-v2.png"
                  alt="ya ALLAH Official Logo"
                  width={52}
                  height={52}
                  priority
                  className="object-contain w-auto h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-wide text-[#650D25] leading-none group-hover:text-[#50091D] transition-colors">
                  <span className="font-semibold">ya</span> ALLAH
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-[#D9A441] uppercase mt-0.5">
                  A Call to ALLAH!
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                if (item.dropdown) {
                  return (
                    <div 
                      key={item.name} 
                      className="relative"
                      onMouseEnter={() => setCategoriesOpen(true)}
                      onMouseLeave={() => setCategoriesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'text-[#650D25] font-semibold bg-[#650D25]/8'
                            : 'text-[#392A25] hover:text-[#650D25] hover:bg-[#FAF4E9]'
                        }`}
                        onClick={() => setCategoriesOpen(!categoriesOpen)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-[#D9A441]' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {categoriesOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E8D8C0] p-2 mt-1 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.dropdown.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FAF4E9] transition-colors group"
                              >
                                <div className="p-2 rounded-lg bg-[#FAF4E9] text-[#650D25] group-hover:bg-[#650D25] group-hover:text-white transition-colors">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-[#392A25] group-hover:text-[#650D25]">
                                    {sub.name}
                                  </div>
                                  <p className="text-xs text-[#6E5D57]">
                                    {sub.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#650D25] font-semibold bg-[#650D25]/8'
                        : 'text-[#392A25] hover:text-[#650D25] hover:bg-[#FAF4E9]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E8D8C0] hover:border-[#D9A441] text-[#6E5D57] hover:text-[#650D25] text-xs font-medium shadow-sm transition-all group"
                aria-label="Search"
              >
                <Search className="w-3.5 h-3.5 text-[#D9A441] group-hover:scale-110 transition-transform" />
                <span>Search Duas...</span>
                <kbd className="hidden xl:inline-block ml-1 px-1.5 py-0.5 text-[10px] bg-[#FAF4E9] text-[#8A7166] rounded border border-[#E8D8C0]">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/library"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#650D25] text-white hover:bg-[#50091D] shadow-sm hover:shadow transition-all"
              >
                Library
              </Link>
            </div>

            {/* Mobile Header Icons */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full text-[#392A25] hover:text-[#650D25] hover:bg-[#E8D8C0]/30 transition-colors"
                aria-label="Search Duas"
              >
                <Search className="w-5 h-5 text-[#650D25]" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#392A25] hover:text-[#650D25] hover:bg-[#E8D8C0]/30 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#650D25]" /> : <Menu className="w-6 h-6 text-[#650D25]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8D8C0] bg-white animate-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                Home
              </Link>
              <Link
                href="/daily-duas"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                Daily Duas
              </Link>
              <Link
                href="/wazaif"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                Important Wazaif
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                All Categories
              </Link>
              <Link
                href="/library"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                Islamic Library & Downloads
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                About ya ALLAH
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#392A25] hover:bg-[#FAF4E9] hover:text-[#650D25]"
              >
                Contact & Support
              </Link>

              <div className="pt-3 border-t border-[#E8D8C0]">
                <Link
                  href="/daily-duas"
                  className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold bg-[#650D25] text-white hover:bg-[#50091D] transition-colors shadow"
                >
                  Explore Duas & Wazaif
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
