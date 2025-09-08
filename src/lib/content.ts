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
        name: "Tabac Presse FDJ Les Allumettes",
        slogan: "Au cœur de Vert-le-Petit",
        logoLight: "/images/logo-light.svg",
        logoDark: "/images/logo-dark.svg"
      },
      hero: {
        title: "Tabac Presse FDJ Les Allumettes",
        subtitle: "Jeux FDJ, presse locale et tabac au cœur de la campagne essonnienne",
        image: "/images/hero-facade.jpg",
        ctas: [
          { "label": "Voir l'itinéraire", "href": "#access", "primary": true },
          { "label": "Découvrir nos services", "href": "#services", "primary": false }
        ]
      },
      highlights: [
        { 
          "icon": "🎰", 
          "title": "Jeux FDJ", 
          "description": "Loto, Euromillions, Keno et tous vos jeux préférés"
        },
        { 
          "icon": "📰", 
          "title": "Presse locale", 
          "description": "Journaux, magazines et actualités de la région"
        },
        { 
          "icon": "🚬", 
          "title": "Tabac", 
          "description": "Cigarettes, tabac à rouler et accessoires"
        }
      ],
      services: [
        {
          "id": "fdj",
          "title": "Jeux FDJ",
          "description": "Loto, Euromillions, Keno, Amigo, Cash, 4/20, 5/34, 6/49, 7/39, 8/20, 9/39, 10/20, 11/20, 12/20, 13/20, 14/20, 15/20, 16/20, 17/20, 18/20, 19/20, 20/20",
          "icon": "🎰",
          "image": "/images/fdj-service.jpg",
          "features": [
            "Loto et Euromillions",
            "Keno et Amigo",
            "Jeux de grattage",
            "Paiement sécurisé"
          ]
        },
        {
          "id": "presse",
          "title": "Presse & Magazines",
          "description": "Journaux locaux, nationaux et magazines spécialisés",
          "icon": "📰",
          "image": "/images/presse-service.jpg",
          "features": [
            "Journaux quotidiens",
            "Magazines spécialisés",
            "Presse locale",
            "Abonnements"
          ]
        },
        {
          "id": "tabac",
          "title": "Tabac & Accessoires",
          "description": "Cigarettes, tabac à rouler et tous les accessoires",
          "icon": "🚬",
          "image": "/images/tabac-service.jpg",
          "features": [
            "Cigarettes",
            "Tabac à rouler",
            "Papiers et filtres",
            "Accessoires"
          ]
        }
      ],
      gallery: [
        {
          "id": "exterior",
          "title": "Façade du magasin",
          "image": "/images/exterior-facade.jpg",
          "alt": "Façade du Tabac Presse FDJ Les Allumettes"
        },
        {
          "id": "interior",
          "title": "Intérieur du magasin",
          "image": "/images/interior-counter.jpg",
          "alt": "Comptoir du magasin"
        }
      ],
      news: [
        {
          "id": "horaires",
          "title": "Nouveaux horaires",
          "date": "2024-01-15",
          "category": "Actualité",
          "image": "/images/news-horaires.jpg",
          "text": "Découvrez nos nouveaux horaires d'ouverture",
          "description": "Nous avons mis à jour nos horaires pour mieux vous servir. Ouvert du lundi au samedi de 8h à 19h, fermé le jeudi, et le dimanche de 9h à 13h."
        }
      ],
      reviews: [
        {
          "id": "review1",
          "name": "Marie L.",
          "rating": 5,
          "text": "Excellent service, très accueillant !",
          "date": "2024-01-10",
          "isLocalGuide": true,
          "reviewCount": 12,
          "photoCount": 3
        }
      ],
      access: {
        address: "4 Rue du Général Leclerc, 91710 Vert-le-Petit",
        phone: "01 64 93 73 98",
        hours: [
          { "day": "Lundi", "hours": "7h00 - 13h30 et 15h00 - 19h00", "today": false },
          { "day": "Mardi", "hours": "7h00 - 13h30 et 15h00 - 19h00", "today": false },
          { "day": "Mercredi", "hours": "7h00 - 13h30 et 15h00 - 19h00", "today": false },
          { "day": "Jeudi", "hours": "Fermé", "today": false },
          { "day": "Vendredi", "hours": "7h00 - 13h30 et 15h00 - 19h00", "today": false },
          { "day": "Samedi", "hours": "8h00 - 13h30 et 15h00 - 19h00", "today": false },
          { "day": "Dimanche", "hours": "8h00 - 13h00", "today": false }
        ],
        links: {
          directions: "https://www.google.com/maps/dir//4+Rue+du+Général+Leclerc,+91710+Vert-le-Petit",
          call: "tel:0164937398",
          gmb: "https://maps.app.goo.gl/example",
          instagram: "https://www.instagram.com/lesallumettes.vertlepetit/"
        },
        map: {
          lat: 48.5512429,
          lng: 2.3665276,
          zoom: 17
        }
      },
      footer: {
        legal: "© 2025 Les Allumettes - Tous droits réservés"
      },
      seo: {
        title: "Tabac Presse FDJ Les Allumettes - Vert-le-Petit (91710)",
        description: "Votre tabac-presse FDJ à Vert-le-Petit. Jeux FDJ, presse locale, tabac et accueil chaleureux au cœur de l'Essonne. Ouvert 7j/7.",
        keywords: "tabac, presse, FDJ, Vert-le-Petit, Essonne, 91710, jeux, loto, euromillions, journaux",
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
