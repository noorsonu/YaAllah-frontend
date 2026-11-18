import type { Metadata } from 'next';
import { Playfair_Display, Inter, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'YaAllah – A Call to ALLAH! | Islamic Knowledge, Duas & Wazaif',
  description:
    'Welcome to YaAllah.in — a trusted platform for Daily Duas, Important Wazaif, Islamic articles and a valuable Library of Islamic knowledge.',
  icons: {
    icon: '/logo-circle.png',
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
      className={`${playfair.variable} ${inter.variable} ${notoArabic.variable} h-full`}
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
