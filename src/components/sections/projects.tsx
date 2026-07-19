"use client";

import React, { useState, useEffect } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ExternalLink, ArrowRight, ShieldCheck, Globe, X } from "lucide-react";
import { GitHubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
                <div
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col p-8 rounded-[2rem] bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900/40 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(97,95,255,0.06)] dark:hover:shadow-[0_20px_50px_rgba(97,95,255,0.02)] overflow-hidden cursor-pointer"
                >
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
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-primary"
                        >
                          <GitHubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 group-hover:text-primary transition-all duration-300">
                        <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[11px] tracking-tight">
                          자세히 보기
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto no-scrollbar rounded-[2rem] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-8 md:p-10 shadow-2xl space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {selectedProject.period}
                  </span>
                  <h4 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-300 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Project Overview</h5>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg font-light leading-relaxed whitespace-pre-line">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Role & Contribution info */}
              {(selectedProject.role || selectedProject.contribution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50">
                  {selectedProject.role && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Role</span>
                      <span className="text-[14px] font-bold text-zinc-800 dark:text-zinc-200">
                        {selectedProject.role}
                      </span>
                    </div>
                  )}
                  {selectedProject.contribution && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Contribution</span>
                      <span className="text-[14px] font-bold text-primary">
                        {selectedProject.contribution}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Key Achievements */}
              {selectedProject.keyAchievements && selectedProject.keyAchievements.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Key Achievements</h5>
                  <ul className="space-y-4">
                    {selectedProject.keyAchievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed text-[15px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-none" />
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {selectedProject.challenges && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Troubleshooting & Challenge</h5>
                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 leading-relaxed text-[15px]">
                    {selectedProject.challenges}
                  </div>
                </div>
              )}

              {/* Links / Call to Action */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                {selectedProject.playStoreUrl && (
                  <a
                    href={selectedProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <PlayStoreIcon className="w-4 h-4" />
                    Google Play Store
                  </a>
                )}
                {selectedProject.appStoreUrl && (
                  <a
                    href={selectedProject.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <AppStoreIcon className="w-4 h-4" />
                    App Store
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
