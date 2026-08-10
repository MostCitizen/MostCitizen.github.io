import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

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
            className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/10 hover:bg-primary-hover hover:scale-105 transition-all active:scale-95"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </a>
          {portfolioData.phone && (
            <a
              href={`tel:${portfolioData.phone}`}
              className="flex items-center gap-3 px-6 py-3 glass-card rounded-xl font-medium hover:bg-primary/5 hover:border-primary/30 transition-all hover:scale-105 active:scale-95 text-zinc-900 dark:text-zinc-100"
            >
              <Phone className="h-5 w-5 text-primary" />
              {portfolioData.phone}
            </a>
          )}
          <div className="flex gap-4">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
