'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sun, Sparkles, Library, MoreHorizontal } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Duas', href: '/daily-duas', icon: Sun },
  { name: 'Wazaif', href: '/wazaif', icon: Sparkles },
  { name: 'Library', href: '/library', icon: Library },
  { name: 'More', href: '/categories', icon: MoreHorizontal },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E8D8C0] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#650D25] font-bold'
                  : 'text-[#6E5D57] hover:text-[#650D25]'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'bg-[#650D25]/10 text-[#650D25] scale-110' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#650D25] stroke-[2.3]' : 'text-[#6E5D57]'}`} />
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'text-[#650D25] font-semibold' : ''}`}>
                {item.name}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-0.5" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
