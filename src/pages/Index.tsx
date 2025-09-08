import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { loadContent, type ContentData } from "@/lib/content";

// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import AccessMap from "@/components/AccessMap";
import Footer from "@/components/Footer";

const Index = () => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await loadContent();
        setContent(data);
      } catch (err) {
        setError("Erreur lors du chargement du contenu");
        console.error("Content loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-4">🔥</div>
          <p className="text-xl text-muted-foreground">Chargement...</p>
        </motion.div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-4">Erreur</h1>
          <p className="text-muted-foreground">{error}</p>
        </motion.div>
      </div>
    );
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": content.brand.name,
    "description": content.seo.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": content.access.address,
      "addressLocality": "Vert-le-Petit",
      "addressRegion": "Essonne",
      "postalCode": "91710",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": content.access.map.lat,
      "longitude": content.access.map.lng
    },
    "telephone": content.access.phone,
    "url": window.location.origin,
    "sameAs": [content.access.links.gmb],
    "openingHours": content.access.hours.map(h => `${h.day} ${h.hours}`),
    "priceRange": "€",
    "paymentAccepted": "Cash, Card",
    "image": content.seo.ogImage
  };

  return (
    <>
      {/* SEO & Meta Tags */}
      <Helmet>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
        <meta name="keywords" content={content.seo.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lesallumettes-vert.fr" />
        
        {/* Open Graph */}
        <meta property="og:title" content={content.seo.title} />
        <meta property="og:description" content={content.seo.description} />
        <meta property="og:image" content={`https://lesallumettes-vert.fr${content.seo.ogImage}`} />
        <meta property="og:url" content="https://lesallumettes-vert.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.seo.title} />
        <meta name="twitter:description" content={content.seo.description} />
        <meta name="twitter:image" content={`https://lesallumettes-vert.fr${content.seo.ogImage}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//g.page" />
      </Helmet>
      
      {/* Page Content */}
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Header 
          brand={content.brand} 
          links={content.access.links} 
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero 
            hero={content.hero} 
            links={content.access.links} 
          />

          {/* Highlights Section */}
          <Highlights highlights={content.highlights} />

          {/* Services Section */}
          <Services services={content.services} />

          {/* News Section */}
          <News news={content.news} />

          {/* Gallery Section */}
          <Gallery gallery={content.gallery} />

          {/* Reviews Section */}
          <Reviews 
            reviews={content.reviews} 
            gmbLink={content.access.links.gmb} 
          />

          {/* Access & Map Section */}
          <AccessMap access={content.access} />
        </main>

        {/* Footer */}
        <Footer 
          footer={content.footer} 
          access={content.access} 
        />
      </div>
    </>
  );
};

export default Index;
