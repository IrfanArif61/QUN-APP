'use client';

import {Code, Database, Globe2, ArrowRight, TrendingUp, ShoppingCart} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-16 pb-12 text-center">
      {/* Animated background blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-gradient-to-br from-blue-600 via-purple-600 to-teal-400 opacity-30 blur-3xl animate-blob z-0" />
      
      {/* Trust badge */}
      <div className="mb-6 flex justify-center z-10">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-semibold text-white/90 shadow-xl backdrop-blur-lg ring-2 ring-blue-400/20 animate-pulseGlow">
          <span className="text-lg">💼</span>
          Trusted by 500+ businesses worldwide
        </span>
      </div>
      
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent drop-shadow-xl animate-gradientMove">
        IT Consultancy &
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent animate-gradientMove">
          Digital Solutions
        </span>
      </h1>
      
      {/* Supporting text */}
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-8 z-10">
        Transform your business with our comprehensive IT services. From web development and data analysis to e-commerce solutions and payment processing – we deliver cutting-edge technology solutions that drive growth.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 z-10">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2 animate-pulseGlow"
        >
          Get Free Consultation <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#services"
          className="px-8 py-3 rounded-full bg-white/20 text-white font-semibold text-lg shadow-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
        >
          Our Services
        </a>
      </div>
      
      {/* Features row */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 justify-center items-center mt-4 z-10">
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <Code className="w-6 h-6 text-cyan-300" />
          <span className="font-medium">Custom Development</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 opacity-40 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <Database className="w-6 h-6 text-yellow-300" />
          <span className="font-medium">Data Analytics</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300 opacity-40 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <ShoppingCart className="w-6 h-6 text-purple-300" />
          <span className="font-medium">E-commerce Solutions</span>
        </div>
      </div>
    </section>
  );
}