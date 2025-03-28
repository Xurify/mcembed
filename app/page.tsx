"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed z-50 bottom-4 right-4 p-3 bg-zinc-900 dark:bg-zinc-800 text-white rounded-full shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <Header />
      <div className="flex flex-1 w-full mx-auto container">
        <aside className="hidden md:block w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 py-8 px-4">
          <Sidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </aside>
        <aside
          className={`
          fixed md:hidden inset-y-0 left-0 w-64 bg-zinc-50 dark:bg-zinc-950 
          transform transition-transform duration-300 ease-in-out z-40
          border-r border-zinc-200 dark:border-zinc-800 py-8 px-4
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <Sidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </aside>
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 py-6 md:py-8 px-4 md:px-8 w-full max-w-4xl overflow-x-hidden">
            <Documentation />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
