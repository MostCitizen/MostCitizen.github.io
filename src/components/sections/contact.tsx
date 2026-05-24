import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          새로운 기회와 협업에 언제나 열려 있습니다. 
          궁금한 점이 있으시거나 함께 프로젝트를 진행하고 싶으시다면 언제든 연락 주세요!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </a>
          <div className="flex gap-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
