"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3 border-b border-gray-800"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl md:text-2xl"
          >
            <span className="gradient-text">Harsh </span>
            <span className="text-white">Verma</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.path}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 text-white hover-glow"
            >
              <Link href="/#contact">Let's Connect</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card border-l border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 text-white w-full">
                  <Link href="/#contact">Let's Connect</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
