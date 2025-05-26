'use client';

import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/10 backdrop-blur-md border-b border-cyan-400/30 shadow-2xl ring-1 ring-cyan-400/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-5">
        <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          QUN USA
        </span>
        <nav className="flex gap-8 text-white/90 font-semibold text-lg">
          <a
            href="#services"
            className="transition hover:text-cyan-300 hover:underline underline-offset-4"
          >
            Services
          </a>
          <a
            href="#stories"
            className="transition hover:text-pink-300 hover:underline underline-offset-4"
          >
            Stories
          </a>
          <a
            href="#contact"
            className="transition hover:text-teal-300 hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

// Add to your global CSS (e.g., globals.css):
// .animate-pulse { animation: pulseGlow 2.5s infinite alternate; }
// @keyframes pulseGlow { 0% { filter: drop-shadow(0 0 8px #67e8f9); } 100% { filter: drop-shadow(0 0 24px #a5b4fc); } }
