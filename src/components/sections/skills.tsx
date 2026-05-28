"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const categories = Array.from(
    new Set(portfolioData.skills.map((s) => s.category)),
  );

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4">
              Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Technical Skills
            </h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
            실무 경험과 지속적인 학습을 통해 쌓아온 핵심 기술 스택입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const categorySkills = portfolioData.skills.filter(
              (s) => s.category === category,
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-8 hover:bg-white dark:hover:bg-zinc-900 transition-colors group"
              >
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:bg-white dark:group-hover:bg-zinc-800 border border-transparent group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-all shadow-sm"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
