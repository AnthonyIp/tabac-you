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

// Content loader
export async function loadContent(): Promise<ContentData> {
  try {
    const response = await fetch('/data/content.json');
    if (!response.ok) {
      throw new Error('Failed to load content');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading content:', error);
    // Retourner des données par défaut en cas d'erreur
    return {
      brand: {
        name: "Les Allumettes",
        slogan: "Votre presse de proximité"
      },
      hero: {
        title: "Bienvenue chez Les Allumettes",
        subtitle: "Votre presse de proximité à Vert-le-Petit",
        image: "/images/hero-facade.jpg",
        cta: {
          text: "Découvrir nos services",
          href: "#services"
        }
      },
      services: [],
      gallery: [],
      news: [],
      reviews: [],
      access: {
        address: "4 Rue du Général Leclerc, 91710 Vert-le-Petit",
        phone: "01 64 93 73 98",
        hours: "Lun-Mer-Ven-Sam: 8h-19h, Jeu: Fermé, Dim: 9h-13h",
        links: {
          directions: "",
          call: "",
          gmb: "",
          instagram: ""
        },
        map: {
          lat: 48.5512429,
          lng: 2.3665276,
          zoom: 17
        }
      },
      footer: {
        legal: "© 2024 Les Allumettes. Tous droits réservés."
      },
      seo: {
        title: "Les Allumettes - Tabac Presse FDJ",
        description: "Votre tabac-presse FDJ à Vert-le-Petit",
        keywords: "tabac, presse, FDJ, Vert-le-Petit",
        ogImage: "/images/og-image.jpg"
      }
    };
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
