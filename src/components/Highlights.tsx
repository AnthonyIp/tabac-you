import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { Highlight } from "@/lib/content";

interface HighlightsProps {
  highlights: Highlight[];
}

const Highlights = ({ highlights }: HighlightsProps) => {
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi choisir Les Allumettes ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez tous les avantages de votre commerce de proximité au cœur de Vert-le-Petit
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;