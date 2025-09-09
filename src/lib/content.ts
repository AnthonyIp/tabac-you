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
  brandName: string;
  slogan: string;
  description: string;
  cookieNotice: string;
  contact: string;
  phone: string;
  address: string;
  usefulLinks: string;
  googleBusiness: string;
  directions: string;
  followInstagram: string;
  backToTop: string;
  mapCredits: string;
  developedBy: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  url?: string;
  siteName?: string;
}

export interface Sections {
  highlights: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    serviceBadge: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    localGuide: string;
    reviewsCount: string;
    photosCount: string;
    viewAllReviews: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  access: {
    title: string;
    subtitle: string;
    location: string;
    directions: string;
    call: string;
    contact: string;
    phone: string;
    address: string;
    openingHours: string;
    today: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    enlarge: string;
  };
}

export interface Navigation {
  services: string;
  news: string;
  gallery: string;
  access: string;
  directions: string;
  call: string;
  viewDirections: string;
  callNow: string;
  theme: string;
}

export interface Modals {
  news: {
    close: string;
    details: string;
    interested: string;
  };
  legal: {
    mentions: string;
    privacy: string;
    cookies: string;
  };
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
  sections: Sections;
  navigation: Navigation;
  modals: Modals;
  seo: SEO;
}

// Import du contenu statique - Fichier JSON
import contentData from '../../public/data/content.json';

// Content loader
export async function loadContent(): Promise<ContentData> {
  try {
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
