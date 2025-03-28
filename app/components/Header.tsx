import React from 'react';
import Link from 'next/link';
import { GithubIcon, SearchIcon, LayersIcon, ExternalLinkIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-lg">
            <LayersIcon className="w-6 h-6" />
            <span>MCEmbed</span>
          </Link>

          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-zinc-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 font-medium">
              Documentation
            </Link>
            <a
              href="https://github.com/Xurify/modrinth-embed" 
              target="_blank" 
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white inline-flex items-center gap-1"
            >
              Modrinth Embed
              <ExternalLinkIcon className="h-3 w-3" />
            </a>
            <a
              href="https://github.com/Xurify/curseforge-embed" 
              target="_blank" 
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white inline-flex items-center gap-1"
            >
              CurseForge Embed
              <ExternalLinkIcon className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-60">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent"
            />
            <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-zinc-500 dark:text-zinc-400" />
          </div>

          <a
            href="https://github.com/Xurify/mcembed" 
            target="_blank"
            className="p-2 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
} 