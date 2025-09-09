import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/use-parallax";
import type { Hero as HeroType, Links } from "@/lib/content";

interface HeroProps {
  hero: HeroType;
  links: Links;
}

const Hero = ({ hero }: HeroProps) => {
  const parallaxRef = useParallax({ speed: 0.5, direction: 'up' });
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAClick = (cta: any) => {
    if (cta.href.startsWith('#')) {
      scrollToSection(cta.href);
    } else {
      window.open(cta.href, '_blank');
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Section principale - Présentation du tabac presse FDJ Les Allumettes"
    >
      {/* Background Image with Parallax */}
      <motion.div
        ref={parallaxRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translateZ(0)"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden="true"
      />
      
      {/* Preload critical image with high priority */}
      <link rel="preload" as="image" href={hero.image} fetchpriority="high" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {hero.title}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {hero.subtitle}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {hero.ctas.map((cta, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant={cta.primary ? "default" : "outline"}
                  className={`
                    px-8 py-4 text-lg font-semibold min-w-[200px]
                    ${cta.primary 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow" 
                      : "bg-white/20 border-white/50 text-white hover:bg-white/30 backdrop-blur-sm dark:bg-black/40 dark:border-white/60 dark:text-white dark:hover:bg-black/50"
                    }
                    transition-all duration-300 group
                  `}
                  onClick={() => handleCTAClick(cta)}
                >
                  {cta.primary && <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />}
                  {cta.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
