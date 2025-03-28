import React from 'react';
import Link from 'next/link';
import { Github, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 md:px-8">
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto text-center py-6 md:py-8">
          <p className="text-zinc-600 dark:text-zinc-400 mb-3 flex items-center justify-center gap-1 flex-wrap">
            <span className="inline-flex items-center gap-1">
              MCEmbed is powered by{' '}
              <Link
                href="https://github.com/Xurify/modrinth-embed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                modrinth-embed
                <ExternalLink className="h-3 w-3" />
              </Link>
            </span>
            <span className="inline-flex items-center gap-1">
              and{' '}
              <Link
                href="https://github.com/Xurify/curseforge-embed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                curseforge-embed
                <ExternalLink className="h-3 w-3" />
              </Link>
            </span>
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center justify-center gap-1 flex-wrap">
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            </span>
            <span>© {new Date().getFullYear()} MCEmbed. All rights reserved.</span>
          </p>
        </div>
        
        <div className="flex justify-center pb-6 md:pb-8">
          <Link
            href="https://github.com/Xurify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 mx-2 inline-flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
} 