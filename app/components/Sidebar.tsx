"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookOpen, Layers, Paintbrush } from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  active?: boolean;
  level?: number;
}

interface SidebarSection {
  title: string;
  icon?: React.ReactNode;
  items: SidebarItem[];
}

interface SidebarProps {
  setIsMobileMenuOpen?: (isOpen: boolean) => void;
}

const sidebarData: SidebarSection[] = [
  {
    title: 'MCEmbed',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      { title: 'Introduction', href: '#introduction', active: true },
      { title: 'How it works', href: '#how-it-works' },
    ]
  },
  {
    title: 'Platforms',
    icon: <Layers className="w-4 h-4" />,
    items: [
      { title: 'Modrinth Embed', href: '#modrinth-embed' },
      { title: 'CurseForge Embed', href: '#curseforge-embed' },
    ]
  },
  {
    title: 'Customization',
    icon: <Paintbrush className="w-4 h-4" />,
    items: [
      { title: 'Badge Variants', href: '#variants' },
      { title: 'Integration Examples', href: '#integration-examples' },
      { title: 'Examples with Options', href: '#customization-examples' },
    ]
  }
];

export default function Sidebar({ setIsMobileMenuOpen }: SidebarProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
  
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      router.replace(href, { scroll: false });
    }
  };

  return (
    <div className="sticky top-24">
      <nav className="space-y-8 text-sm">
        {sidebarData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-3">
            <div className="flex items-center gap-2 font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-xs">
              {section.icon}
              <h4>{section.title}</h4>
            </div>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block py-1.5 ${
                      item.active 
                      ? 'text-teal-600 dark:text-teal-400 font-medium' 
                      : 'text-zinc-800 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
} 