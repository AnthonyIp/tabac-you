import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Récupérer le thème sauvegardé ou utiliser "dark" par défaut
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    
    // Supprimer les classes de thème existantes
    root.classList.remove("light", "dark");
    
    // Utiliser le thème choisi
    root.classList.add(theme);
    
    // Sauvegarder le thème
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  return { theme, setTheme, mounted };
}
