export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  featured?: boolean;
  isPopular?: boolean;
  arabicDua?: {
    arabic: string;
    transliteration: string;
    englishTranslation: string;
    hindiTranslation?: string;
    reference?: string;
    benefits?: string[];
  };
  tags?: string[];
  commentCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: number;
}

export interface LibraryResource {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: 'PDF' | 'AUDIO' | 'BOOK';
  fileSize: string;
  downloadUrl: string;
  language: string;
  pages?: number;
  publishedAt: string;
}

export interface CommentItem {
  id: string;
  author: string;
  date: string;
  content: string;
  replies?: CommentItem[];
}
