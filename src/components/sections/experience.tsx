"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.3em] mb-4 text-center md:text-left">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-center md:text-left">Professional Experience</h3>
        </div>

        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-0"
            >
              {/* 타임라인 선 */}
              <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* 기간 (데스크탑) */}
                <div className="hidden md:block w-[150px] pt-1 text-right">
                  <span className="text-sm font-bold text-zinc-400 tabular-nums">
                    {exp.period}
                  </span>
                </div>

                {/* 중앙 점 */}
                <div className="absolute left-0 md:left-[176px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-950 z-10" />

                {/* 내용 카드 */}
                <div className="flex-1 glass-card rounded-3xl p-8 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-none transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-semibold text-zinc-500 dark:text-zinc-400 italic">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="md:hidden text-sm font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <span className="text-zinc-300 dark:text-zinc-700 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
