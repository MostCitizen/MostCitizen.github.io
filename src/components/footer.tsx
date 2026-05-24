import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
