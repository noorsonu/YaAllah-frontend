import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedWazaif from '@/components/home/FeaturedWazaif';
import CategoryGrid from '@/components/home/CategoryGrid';
import LatestArticles from '@/components/home/LatestArticles';
import LibraryPromo from '@/components/home/LibraryPromo';
import { api } from '@/lib/api';

export default async function HomePage() {
  const articles = await api.getPosts();

  return (
    <>
      {/* B. Hero Section */}
      <HeroSection />

      {/* C. Featured Dua & Wazaif Section */}
      <FeaturedWazaif articles={articles} />

      {/* D. Explore by Category */}
      <CategoryGrid />

      {/* E. Latest Articles */}
      <LatestArticles articles={articles} />

      {/* F. Islamic Library Section */}
      <LibraryPromo />
    </>
  );
}
