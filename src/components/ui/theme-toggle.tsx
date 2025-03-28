"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9"></div>; // Placeholder with same dimensions
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : 180,
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-yellow-500" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : -180,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-blue-400" />
      </motion.div>

      {/* For screen readers */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
