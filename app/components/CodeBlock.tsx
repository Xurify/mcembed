'use client';

import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

interface CodeBlockProps {
  html?: string;
  markdown?: string;
  code?: string;
  language?: string;
  showLanguage?: boolean;
  className?: string;
}

export default function CodeBlock({ 
  html, 
  markdown, 
  code, 
  language = 'text', 
  showLanguage = true,
  className = '' 
}: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'markdown'>(html ? 'html' : 'markdown');
  const [copied, setCopied] = useState(false);
  
  const displayCode = code || (activeTab === 'html' ? html : markdown);
  const showTabs = html && markdown;
  
  const copyToClipboard = () => {
    if (!displayCode) return;
    
    navigator.clipboard.writeText(displayCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
    <div className={`group relative border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        {showTabs ? (
          <div className="flex">
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                activeTab === 'html' 
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                activeTab === 'markdown' 
                  ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
              onClick={() => setActiveTab('markdown')}
            >
              Markdown
            </button>
          </div>
        ) : (
          showLanguage && (
            <div className="px-4 py-2 text-sm text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>{language}</span>
            </div>
          )
        )}
      </div>

      <div className="relative">
        <pre className="p-4 bg-zinc-50 dark:bg-zinc-900 overflow-x-auto text-sm m-0 leading-normal">
          <code className={`language-${language} block`}>{displayCode}</code>
        </pre>
        
        <button
          className="absolute top-3 right-3 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 text-zinc-500 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 focus:outline-none z-10 shadow-sm cursor-pointer"
          onClick={copyToClipboard}
          aria-label="Copy code"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
} 