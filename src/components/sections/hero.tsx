"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="max-w-4xl w-full text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase text-sm mb-4">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            I&apos;m <span className="text-zinc-900 dark:text-white">{portfolioData.name}</span>, <br />
            a {portfolioData.title}.
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          {portfolioData.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="text-zinc-400" />
      </motion.div>
    </section>
  );
}
