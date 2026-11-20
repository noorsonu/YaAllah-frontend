import type { Metadata } from 'next';
import { DM_Sans, Noto_Naskh_Arabic } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

/* 1. Main font for entire website: DM Sans (full variable weight 100-1000) */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

/* 2. Logo font: BBH Bogle */
const bbhBogle = localFont({
  src: '../../public/fonts/bbh-bogle.ttf',
  variable: '--font-bbh-bogle',
  display: 'swap',
});

/* 3. Arabic font */
const notoArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yaallah.in'),
  title: 'ya ALLAH – A Call to ALLAH! | Islamic Knowledge, Duas & Wazaif',
  description:
    'Welcome to ya ALLAH.in — a trusted platform for Daily Duas, Important Wazaif, Islamic articles and a valuable Library of Islamic knowledge.',
  icons: {
    icon: '/logo-v2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${bbhBogle.variable} ${notoArabic.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF4E9] text-[#392A25] antialiased selection:bg-[#D9A441]/30 selection:text-[#650D25]">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
