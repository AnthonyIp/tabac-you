import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className={`w-9 h-9 p-0 ${
        isScrolled 
          ? "bg-background/10 text-foreground hover:bg-background/20" 
          : "bg-white/20 text-white hover:bg-white/30"
      }`}>
        <Moon className="w-4 h-4" />
      </Button>
    );
  }

  const getIcon = () => {
    return theme === "light" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />;
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className={`w-9 h-9 p-0 relative overflow-hidden ${
          isScrolled 
            ? "bg-background/10 text-foreground hover:bg-background/20" 
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
        aria-label={`Thème actuel: ${theme}. Cliquer pour changer`}
        title={`Thème: ${theme === "light" ? "Clair" : "Sombre"}`}
      >
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {getIcon()}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
