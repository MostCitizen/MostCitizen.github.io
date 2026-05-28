"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between px-8 py-3 transition-all duration-500 rounded-full",
          scrolled
            ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#" className="text-2xl font-black tracking-tighter group">
          H<span className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">Y</span>.
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
