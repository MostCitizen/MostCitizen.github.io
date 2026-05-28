"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-zinc-200/30 dark:bg-zinc-800/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zinc-200/30 dark:bg-zinc-800/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-zinc-500 dark:text-zinc-400 font-semibold tracking-[0.2em] uppercase text-xs mb-6">
            Software Engineer Portfolio
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
            I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-[length:200%_auto] animate-gradient">{portfolioData.name}</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-zinc-400 dark:text-zinc-500 mt-4 tracking-tight">
            Building efficient code & scalable systems.
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {portfolioData.about}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-10 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-bold shadow-xl shadow-zinc-200 dark:shadow-none hover:scale-105 transition-transform active:scale-95"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-10 py-4 glass-card rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-400">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.div>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
