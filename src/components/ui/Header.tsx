'use client';

import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/10 backdrop-blur-md border-b border-cyan-400/30 shadow-2xl ring-1 ring-cyan-400/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            QUN USA
          </span>
          <div className="hidden md:block text-white/60 text-sm">
            IT Consultancy & Digital Solutions
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white/90 font-semibold text-lg">
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
            Portfolio
          </a>
          <a
            href="#contact"
            className="transition hover:text-teal-300 hover:underline underline-offset-4"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold hover:scale-105 transition-all"
          >
            Get Quote
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
          <nav className="flex flex-col gap-4 p-6 text-white/90 font-semibold">
            <a
              href="#services"
              className="transition hover:text-cyan-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#stories"
              className="transition hover:text-pink-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="transition hover:text-teal-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}