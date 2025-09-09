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
          aria-label={footer.backToTop}
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
                  <h3 className="text-xl font-bold text-foreground">{footer.brandName}</h3>
                  <p className="text-muted-foreground">{footer.slogan}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
                {footer.description}
              </p>
              
              {/* Cookie-free Notice */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>{footer.cookieNotice}</span>
              </div>
            </div>

            {/* Contact Quick */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{footer.contact}</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">{footer.phone}</p>
                  <a 
                    href={access.links.call}
                    className="text-primary hover:underline font-medium"
                  >
                    {access.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{footer.address}</p>
                  <p className="text-foreground text-sm leading-relaxed">{access.address}</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">{footer.usefulLinks}</h4>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.gmb, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {footer.googleBusiness}
                </Button>
                <Button
                  variant="ghost"
                  size="sm" 
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.directions, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {footer.directions}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  onClick={() => window.open(access.links.instagram, '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  {footer.followInstagram}
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
                <p 
                  className="text-xs text-muted-foreground/70 mt-1"
                  dangerouslySetInnerHTML={{ __html: footer.mapCredits }}
                />
                <p 
                  className="text-xs text-muted-foreground/60 mt-1"
                  dangerouslySetInnerHTML={{ __html: footer.developedBy }}
                />
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
