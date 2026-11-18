import { Article, Category, LibraryResource } from '@/types';
import { ARTICLES, CATEGORIES, LIBRARY_RESOURCES } from './data';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Service layer prepared for Java Spring Boot REST API integration.
 * In development / offline mode, falls back to structured validated data.
 */
export const api = {
  // 1. Posts & Articles
  async getPosts(options?: { category?: string; featured?: boolean; limit?: number }): Promise<Article[]> {
    if (API_BASE_URL) {
      try {
        const params = new URLSearchParams();
        if (options?.category) params.append('category', options.category);
        if (options?.featured) params.append('featured', 'true');
        if (options?.limit) params.append('limit', options.limit.toString());
        
        const res = await fetch(`${API_BASE_URL}/api/v1/posts?${params.toString()}`, { next: { revalidate: 60 } });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API fetch failed, using fallback data', err);
      }
    }

    let results = [...ARTICLES];
    if (options?.category) {
      results = results.filter((a) => a.category.slug === options.category);
    }
    if (options?.featured) {
      results = results.filter((a) => a.featured);
    }
    if (options?.limit) {
      results = results.slice(0, options.limit);
    }
    return results;
  },

  async getPostBySlug(slug: string): Promise<Article | null> {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/posts/${slug}`, { next: { revalidate: 60 } });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API fetch failed, using fallback data', err);
      }
    }

    const post = ARTICLES.find((a) => a.slug === slug);
    return post || null;
  },

  // 2. Categories
  async getCategories(): Promise<Category[]> {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/categories`, { next: { revalidate: 300 } });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API fetch failed, using fallback data', err);
      }
    }
    return CATEGORIES;
  },

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    const cats = await this.getCategories();
    return cats.find((c) => c.slug === slug) || null;
  },

  // 3. Search
  async search(query: string): Promise<Article[]> {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/search?q=${encodeURIComponent(q)}`);
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API search failed, searching local dataset', err);
      }
    }

    return ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags?.some((t) => t.toLowerCase().includes(q)) ||
        a.arabicDua?.transliteration.toLowerCase().includes(q)
    );
  },

  // 4. Library Resources
  async getLibraryResources(): Promise<LibraryResource[]> {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/library`, { next: { revalidate: 300 } });
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API fetch failed, using fallback data', err);
      }
    }
    return LIBRARY_RESOURCES;
  },
};
