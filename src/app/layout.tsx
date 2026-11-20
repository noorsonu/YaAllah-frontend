import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Lora, Amiri, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

/* 1. Main headings: Cormorant Garamond (Variable all weights) */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

/* 2. Navbar & Paragraphs: DM Sans (Variable all weights) */
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

/* 3. Islamic articles: Lora (Variable all weights) */
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

/* 4. Quran / Arabic Duas: Amiri */
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

/* 5. Arabic supporting text: Noto Naskh Arabic */
const notoArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-arabic',
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
      className={`${cormorant.variable} ${dmSans.variable} ${lora.variable} ${amiri.variable} ${notoArabic.variable} h-full`}
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
