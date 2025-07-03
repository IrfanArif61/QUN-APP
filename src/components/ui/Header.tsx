'use client';

import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold tracking-tight text-gray-900">
            QUN USA
          </span>
          <div className="hidden md:block text-gray-600 text-sm">
            IT Consultancy & Digital Solutions
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium text-lg">
          <a
            href="#services"
            className="transition hover:text-gray-900 hover:underline underline-offset-4"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="transition hover:text-gray-900 hover:underline underline-offset-4"
          >
            Pricing
          </a>
          <a
            href="#stories"
            className="transition hover:text-gray-900 hover:underline underline-offset-4"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="transition hover:text-gray-900 hover:underline underline-offset-4"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
          >
            Get Quote
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <a
              href="#services"
              className="transition hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="transition hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#stories"
              className="transition hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="transition hover:text-gray-900 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="mt-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold text-center"
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