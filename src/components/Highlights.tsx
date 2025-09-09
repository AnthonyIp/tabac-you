import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Reveal from "./Reveal";
import type { Highlight, Sections } from "@/lib/content";

interface HighlightsProps {
  highlights: Highlight[];
  sections: Sections;
}

const Highlights = ({ highlights, sections }: HighlightsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <Reveal direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {sections.highlights.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {sections.highlights.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Reveal 
              key={index}
              direction="up" 
              delay={0.1 * index}
              className="h-full"
            >
              <motion.div
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <Card className="p-6 h-full text-center group hover:shadow-elegant hover:border-primary/20 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  {/* Icon */}
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.text}
                  </p>
                  
                  {/* Decorative border */}
                  <div className="mt-4 h-1 w-0 bg-gradient-primary mx-auto group-hover:w-full transition-all duration-500" />
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
