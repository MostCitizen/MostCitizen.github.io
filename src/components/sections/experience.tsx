"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-zinc-900 dark:bg-white" />
            <span className="text-sm font-black uppercase tracking-[0.4em] text-zinc-400">Career Path</span>
          </motion.div>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Professional <br /> <span className="text-zinc-400">Experience</span></h3>
        </div>

        <div className="space-y-20">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
            >
              {/* 왼쪽: 기간 정보 */}
              <div className="md:col-span-3">
                <div className="sticky top-32">
                  <span className="text-lg font-bold tabular-nums text-zinc-900 dark:text-zinc-100">
                    {exp.period}
                  </span>
                  <div className="h-[1px] w-8 bg-zinc-200 dark:bg-zinc-800 mt-4" />
                </div>
              </div>

              {/* 오른쪽: 직무 및 성과 상세 */}
              <div className="md:col-span-9 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-medium text-zinc-500 dark:text-zinc-400 tracking-tight">
                    {exp.company}
                  </h4>
                </div>
                
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="group flex gap-4 text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                      <span className="flex-none w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-3 group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 하단 구분선 (마지막 항목 제외) */}
              {index !== portfolioData.experiences.length - 1 && (
                <div className="col-span-full border-b border-zinc-100 dark:border-zinc-900 pt-12" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
