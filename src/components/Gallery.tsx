import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import type { GalleryItem, Sections } from "@/lib/content";

interface GalleryProps {
  gallery: GalleryItem[];
  sections: Sections;
}

const Gallery = ({ gallery, sections }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? gallery.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === gallery.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const itemWidth = container.scrollWidth / gallery.length;
    const scrollLeft = index * itemWidth;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
  }, [gallery.length]);

  const scrollNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % gallery.length;
    scrollToIndex(nextIndex);
  }, [currentIndex, gallery.length, scrollToIndex]);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <>
      <section id="gallery" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Reveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {sections.gallery.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {sections.gallery.subtitle}
              </p>
            </div>
          </Reveal>

          {/* Horizontal Carousel */}
          <Reveal direction="up" delay={0.4}>
            <div className="relative">

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 h-64 cursor-pointer group snap-center"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium bg-black/50 px-3 py-1 rounded-full">
                          {sections.gallery.enlarge}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              src={gallery[selectedImage].src}
              alt={gallery[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium mb-2">{gallery[selectedImage].alt}</p>
              <p className="text-sm opacity-75">
                {selectedImage + 1} / {gallery.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
