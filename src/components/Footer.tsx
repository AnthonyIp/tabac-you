import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Shield, ExternalLink, Instagram } from "lucide-react";
import LegalModals from "./LegalModals";
import type { Footer as FooterType, Access } from "@/lib/content";

interface FooterProps {
  footer: FooterType;
  access: Access;
}

const Footer = ({ footer, access }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          size="sm"
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 shadow-glow bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🔥</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Les Allumettes</h3>
                  <p className="text-muted-foreground">Au cœur de Vert-le-Petit</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
                Votre tabac-presse FDJ de proximité à Vert-le-Petit. 
                Jeux, presse locale et accueil chaleureux depuis des années au service de notre communauté.
              </p>
              
              {/* Cookie-free Notice */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Site sans cookies - Respect de votre vie privée</span>
              </div>
            </div>

            {/* Contact Quick */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a 
                    href={access.links.call}
                    className="text-primary hover:underline font-medium"
                  >
                    {access.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-foreground text-sm leading-relaxed">{access.address}</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Liens utiles</h4>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.gmb, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Notre fiche Google
                </Button>
                <Button
                  variant="ghost"
                  size="sm" 
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.directions, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Itinéraire
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.instagram, '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Suivez-nous sur Instagram
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-border pt-8 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  {footer.legal}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Carte : © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">OpenStreetMap</a> contributors
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Développé par <a href="https://anthonyip.fr" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Anthony Ip</a>
                </p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <LegalModals />
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
