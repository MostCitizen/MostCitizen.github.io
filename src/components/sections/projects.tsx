"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Terminal, ShieldCheck, Globe } from "lucide-react";
import { GitHubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/icons";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase block"
            >
              Building with purpose
            </motion.span>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Featured <span className="text-zinc-400">Projects</span>
            </h3>
          </div>
          <div className="h-[1px] flex-1 bg-zinc-100 dark:bg-zinc-800/50 hidden md:block mx-12 mb-4" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-[280px] text-sm leading-relaxed font-medium">
            실무 성능 최적화부터 <br />
            AI 기반 팀 프로젝트까지.
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            const isPublic = !!(
              project.githubUrl ||
              project.liveUrl ||
              project.playStoreUrl ||
              project.appStoreUrl
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* 카드 본체 */}
                <div className="h-full flex flex-col p-8 rounded-[2rem] bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900/40 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(97,95,255,0.06)] dark:hover:shadow-[0_20px_50px_rgba(97,95,255,0.02)] overflow-hidden">
                  {/* 상단: 아이콘 & 상태 뱃지 */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm text-primary">
                        {isPublic ? (
                          <Globe className="w-5 h-5" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-zinc-400" />
                        )}
                      </div>
                      <span
                        className={
                          isPublic
                            ? "text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-100"
                            : "text-[10px] font-black uppercase tracking-widest text-zinc-400"
                        }
                      >
                        {isPublic ? "Public Project" : "Enterprise"}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-primary"
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-primary"
                          title="Google Play Store"
                        >
                          <PlayStoreIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-primary"
                          title="Apple App Store"
                        >
                          <AppStoreIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-primary"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* 중단: 타이틀 & 설명 */}
                  <div className="flex-1 space-y-4">
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* 하단: 기술 스택 & 기간 */}
                  <div className="mt-12 space-y-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-bold bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 rounded-lg group-hover:border-primary/20 group-hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {project.period}
                      </span>
                      <Terminal className="w-4 h-4 text-zinc-200 dark:text-zinc-800" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
