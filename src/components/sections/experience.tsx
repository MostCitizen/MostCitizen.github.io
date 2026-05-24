import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Experience</h2>
        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800">
              <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <div className="space-y-2">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.company}
                </h4>
                <ul className="mt-4 space-y-2 list-disc list-inside text-zinc-600 dark:text-zinc-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
