import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye } from "lucide-react";
import { formatDate } from "@/lib/content";
import type { NewsItem } from "@/lib/content";
import { NewsModal } from "./NewsModal";

interface NewsProps {
  news: NewsItem[];
}

const News = ({ news }: NewsProps) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (article: NewsItem) => {
    setSelectedNews(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'FDJ': 'bg-blue-500',
      'Actualité': 'bg-green-500',
      'Presse': 'bg-purple-500',
      'default': 'bg-primary'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <section id="news" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Actualités & Nouveautés
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informé de nos dernières nouveautés et événements spéciaux
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {news.map((article, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="overflow-hidden group hover:shadow-elegant transition-all duration-300 h-full bg-card/90 backdrop-blur-sm">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className={`${getCategoryColor(article.category)} text-white border-0`}
                    >
                      {article.category}
                    </Badge>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 flex items-center text-white text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <div className="text-muted-foreground leading-relaxed">
                    <p className="line-clamp-3">
                      {article.text}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openModal(article)}
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Lire la suite</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* News Modal */}
      <NewsModal 
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default News;
