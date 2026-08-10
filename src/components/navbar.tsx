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
          H<span className="text-primary transition-colors">Y</span>.
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/LeeHoYoon_Portfolio.pdf"
            download="LeeHoYoon_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-primary hover:underline transition-all"
          >
            PDF
          </a>
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <a
            href="/LeeHoYoon_Portfolio.pdf"
            download="LeeHoYoon_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-primary border border-primary/30 px-2.5 py-1 rounded-full"
          >
            PDF
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
