import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import type { Brand, Links, Navigation } from "@/lib/content";

interface HeaderProps {
  brand: Brand;
  links: Links;
  navigation: Navigation;
}

const Header = ({ brand, links, navigation }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Scroll spy for active navigation
  const activeSection = useScrollSpy(['services', 'news', 'gallery', 'access'], { offset: 100 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: navigation.services, href: "#services" },
    { label: navigation.news, href: "#news" },
    { label: navigation.gallery, href: "#gallery" },
    { label: navigation.access, href: "#access" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border" 
          : "bg-background/20 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-primary">🔥</div>
            <div>
              <h1 className={`text-lg font-bold leading-tight drop-shadow-sm ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                {brand.name.split(" ").slice(-2).join(" ")}
              </h1>
              <p className={`text-xs font-medium ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}>{brand.slogan}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative transition-colors duration-200 font-semibold group px-3 py-2 rounded-md drop-shadow-sm ${
                    isScrolled 
                      ? isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground hover:text-foreground/90 hover:bg-foreground/5"
                      : isActive
                        ? "text-primary bg-white/20"
                        : "text-white hover:text-white/90 hover:bg-white/10"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-primary transition-all duration-300 ${
                    isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`} />
                </motion.button>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              onClick={() => window.open(links.directions, '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {navigation.directions}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity duration-200"
              onClick={() => window.open(links.call, '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              {navigation.call}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-foreground/5 border border-transparent hover:border-foreground/10 drop-shadow-sm"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile CTAs */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{navigation.theme}</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      window.open(links.directions, '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {navigation.viewDirections}
                  </Button>
                  <Button
                    variant="default"
                    className="w-full justify-start bg-gradient-primary hover:opacity-90"
                    onClick={() => {
                      window.open(links.call, '_self');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {navigation.callNow}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
