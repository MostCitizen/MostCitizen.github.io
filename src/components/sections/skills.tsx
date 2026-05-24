"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const categories = ["Frontend", "Backend", "Mobile", "DevOps", "Others"] as const;

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => {
            const categorySkills = portfolioData.skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="space-y-4">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium shadow-sm"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
