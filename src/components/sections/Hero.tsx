'use client';

import {Code, Database, Globe2, ArrowRight, TrendingUp, ShoppingCart} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-16 pb-12 text-center">
      {/* Minimalistic background blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] bg-gradient-to-br from-gray-100 via-gray-50 to-white opacity-30 blur-3xl animate-blob z-0" />
      
      {/* Trust badge */}
      <div className="mb-6 flex justify-center z-10">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm">
          <span className="text-lg">💼</span>
          Trusted by 500+ businesses worldwide
        </span>
      </div>
      
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-gray-900">
        IT Consultancy &
        <br />
        <span className="text-gray-700">
          Digital Solutions
        </span>
      </h1>
      
      {/* Supporting text */}
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8 z-10">
        Transform your business with our comprehensive IT services. From web development and data analysis to e-commerce solutions and payment processing – we deliver cutting-edge technology solutions that drive growth.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 z-10">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold text-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center gap-2"
        >
          Get Free Consultation <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#services"
          className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold text-lg shadow-lg border border-gray-200 hover:bg-gray-50 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center gap-2"
        >
          Our Services
        </a>
      </div>
      
      {/* Features row */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 justify-center items-center mt-4 z-10">
        <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <Code className="w-6 h-6 text-gray-600" />
          <span className="font-medium text-gray-700">Custom Development</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gray-300 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <Database className="w-6 h-6 text-gray-600" />
          <span className="font-medium text-gray-700">Data Analytics</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gray-300 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <span className="font-medium text-gray-700">E-commerce Solutions</span>
        </div>
      </div>
    </section>
  );
}