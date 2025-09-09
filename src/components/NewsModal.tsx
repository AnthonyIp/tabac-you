import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, X } from "lucide-react";
import { NewsItem, Modals } from "@/lib/content";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface NewsModalProps {
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
  modals: Modals;
}

export function NewsModal({ news, isOpen, onClose, modals }: NewsModalProps) {
  if (!news) return null;

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "d MMMM yyyy", { locale: fr });
    } catch {
      return dateString;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "FDJ":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Presse":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Actualité":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className={getCategoryColor(news.category)}>
                  {news.category}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(news.date)}</span>
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold text-foreground leading-tight">
                {news.title}
              </DialogTitle>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 hover:bg-muted rounded-full transition-colors"
              aria-label={modals.news.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Résumé */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-foreground/90 font-medium leading-relaxed">
              {news.text}
            </p>
          </div>

          {/* Description détaillée */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              {modals.news.details}
            </h3>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {news.description}
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground/80 text-center">
              💡 <strong>{modals.news.interested}</strong>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
