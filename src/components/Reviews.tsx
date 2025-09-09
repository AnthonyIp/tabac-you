import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/content";
import type { Review, Sections } from "@/lib/content";

interface ReviewsProps {
  reviews: Review[];
  gmbLink: string;
  sections: Sections;
}

const Reviews = ({ reviews, gmbLink, sections }: ReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sections.reviews.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sections.reviews.subtitle}
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 shadow-md"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"  
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 shadow-md"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Reviews */}
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="p-8 md:p-12 text-center bg-card/90 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 mx-1 ${
                          i < reviews[currentIndex].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                    "{reviews[currentIndex].comment}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-2">
                      <cite className="text-lg font-semibold text-primary not-italic">
                        {reviews[currentIndex].name}
                      </cite>
                      {reviews[currentIndex].isLocalGuide && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {sections.reviews.localGuide}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <time>
                        {formatDate(reviews[currentIndex].date)}
                      </time>
                      {reviews[currentIndex].reviewCount && (
                        <span>
                          {reviews[currentIndex].reviewCount} {sections.reviews.reviewsCount}
                        </span>
                      )}
                      {reviews[currentIndex].photoCount && (
                        <span>
                          {reviews[currentIndex].photoCount} {sections.reviews.photosCount}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            onClick={() => window.open(gmbLink, '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {sections.reviews.viewAllReviews}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
