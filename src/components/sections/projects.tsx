"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-100/50 dark:bg-zinc-900/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="w-12 h-[2px] bg-zinc-900 dark:bg-white" />
              <span className="text-sm font-black uppercase tracking-[0.4em] text-zinc-400">Selected Works</span>
            </motion.div>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Featured <br /> <span className="text-zinc-400">Projects</span>
            </h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-lg font-light leading-relaxed text-right md:text-left">
            실무 현장에서의 성능 최적화 경험과 <br />
            팀 프로젝트를 통한 기술적 도전을 담았습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* 프로젝트 넘버링 (배경) */}
              <div className="absolute -left-10 top-0 text-[12rem] font-black text-zinc-100 dark:text-zinc-900/20 -z-10 select-none hidden lg:block group-hover:text-zinc-200 dark:group-hover:text-zinc-800/40 transition-colors duration-700">
                0{index + 1}
              </div>

              {/* 이미지/비주얼 영역 (링크가 있을 때만 인터랙션 활성화) */}
              <div className="lg:col-span-7 relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-700 ease-out shadow-2xl group-hover:shadow-zinc-300/50 dark:group-hover:shadow-none group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 via-transparent to-zinc-900/10 dark:from-zinc-800/50 dark:to-black/50 opacity-50" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 group-hover:scale-105">
                  <h4 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic opacity-20 group-hover:opacity-40 transition-opacity">
                    {project.title.split(' ')[0]}
                  </h4>
                  <div className="w-12 h-[1px] bg-zinc-300 dark:bg-zinc-700 my-4" />
                  <p className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 group-hover:opacity-60 transition-opacity text-zinc-500">
                    {project.githubUrl || project.liveUrl ? "Live Showcase" : "Enterprise Solution"}
                  </p>
                </div>

                {/* 링크가 있는 프로젝트만 호버 오버레이 표시 */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="absolute inset-0 bg-zinc-900/40 dark:bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center gap-6">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        className="p-4 bg-white dark:bg-zinc-100 rounded-2xl text-zinc-900 hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-white/20"
                        aria-label="GitHub Repository"
                      >
                        <GitHubIcon className="h-6 w-6" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        className="p-4 bg-white dark:bg-zinc-100 rounded-2xl text-zinc-900 hover:scale-110 active:scale-95 transition-all shadow-xl hover:shadow-white/20"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* 텍스트 정보 영역 */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-black text-zinc-400 dark:text-zinc-500 tracking-[0.2em] uppercase">
                    <span>{project.period}</span>
                    <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                    <span className="text-zinc-900 dark:text-zinc-100">
                      {project.githubUrl || project.liveUrl ? "Public Work" : "Internal Project"}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter transition-all duration-500 group-hover:translate-x-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 회사 프로젝트임을 알리는 차분한 텍스트로 대체 */}
                {!project.githubUrl && !project.liveUrl && (
                  <div className="pt-6">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                      Confidential Enterprise Project
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
