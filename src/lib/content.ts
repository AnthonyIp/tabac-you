export interface Brand {
  name: string;
  slogan: string;
  logoLight: string;
  logoDark: string;
}

export interface CTAButton {
  label: string;
  href: string;
  primary: boolean;
}

export interface Hero {
  title: string;
  subtitle: string;
  image: string;
  ctas: CTAButton[];
}

export interface Highlight {
  icon: string;
  title: string;
  text: string;
}

export interface Service {
  title: string;
  desc: string;
  image: string;
  features: string[];
}

export interface NewsItem {
  title: string;
  date: string;
  text: string;
  description: string;
  image: string;
  category: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  photoCount?: number;
}

export interface HoursItem {
  day: string;
  hours: string;
  today: boolean;
}

export interface MapInfo {
  lat: number;
  lng: number;
  zoom: number;
  provider: string;
}

export interface Links {
  directions: string;
  call: string;
  gmb: string;
  instagram: string;
}

export interface Access {
  address: string;
  phone: string;
  email: string;
  hours: HoursItem[];
  map: MapInfo;
  links: Links;
}

export interface Footer {
  legal: string;
  mentions: string;
  privacy: string;
  cookieNotice: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  url?: string;
  siteName?: string;
}

export interface ContentData {
  brand: Brand;
  hero: Hero;
  highlights: Highlight[];
  services: Service[];
  news: NewsItem[];
  gallery: GalleryItem[];
  reviews: Review[];
  access: Access;
  footer: Footer;
  seo: SEO;
}

// Import du contenu statique - Fichier JSON
import contentData from '../../public/data/content.json';

// Content loader
export async function loadContent(): Promise<ContentData> {
  try {
    console.log('✅ Using bundled content data from JSON file');
    console.log('📊 Data preview:', {
      brand: contentData.brand?.name,
      hero: contentData.hero?.title,
      services: contentData.services?.length,
      reviews: contentData.reviews?.length
    });
    return contentData as ContentData;
  } catch (error) {
    console.error('❌ Critical error: Content data not available:', error);
    throw new Error('Content data is required but not available. Please check the build configuration.');
  }
}

// Helper to get today's day index
export function getTodayIndex(): number {
  return new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
}

// Helper to format rating as stars
export function formatRating(rating: number): string {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Helper to format date
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
