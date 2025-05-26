'use client';

import {ShieldCheck, Zap, Globe2, ArrowRight} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-16 pb-12 text-center">
      {/* Animated background blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] bg-gradient-to-br from-blue-600 via-purple-600 to-teal-400 opacity-30 blur-3xl animate-blob z-0" />
      {/* Trust badge */}
      <div className="mb-6 flex justify-center z-10">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-semibold text-white/90 shadow-xl backdrop-blur-lg ring-2 ring-blue-400/20 animate-pulseGlow">
          <span className="text-lg">🌐</span>
          Trusted by 10,000+ remote workers worldwide
        </span>
      </div>
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent drop-shadow-xl animate-gradientMove">
        Global Payouts
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent animate-gradientMove">
          Made Simple
        </span>
      </h1>
      {/* Supporting text */}
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8 z-10">
        Empowering remote workers and global companies with seamless, secure
        payout services from the USA. Get paid faster, work smarter.
      </p>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 z-10">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2 animate-pulseGlow"
        >
          Start Your Business <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#services"
          className="px-8 py-3 rounded-full bg-white/20 text-white font-semibold text-lg shadow-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
        >
          Learn More
        </a>
      </div>
      {/* Features row */}
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 justify-center items-center mt-4 z-10">
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <ShieldCheck className="w-6 h-6 text-cyan-300" />
          <span className="font-medium">Bank-level Security</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 opacity-40 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <Zap className="w-6 h-6 text-yellow-300" />
          <span className="font-medium">Lightning Fast</span>
        </div>
        <div className="hidden sm:block w-6 h-1 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-teal-300 opacity-40 mx-2" />
        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
          <Globe2 className="w-6 h-6 text-purple-300" />
          <span className="font-medium">Global Coverage</span>
        </div>
      </div>
    </section>
  );
}

// Add to your global CSS (e.g., globals.css):
// .animate-blob { animation: blob 18s infinite alternate; }
// @keyframes blob { 0% { transform: scale(1) translate(-50%,-50%); } 100% { transform: scale(1.15) translate(-48%,-52%); } }
// .animate-gradientMove { background-size: 200% 200%; animation: gradientMove 6s ease-in-out infinite alternate; }
// @keyframes gradientMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
// .animate-pulseGlow { animation: pulseGlow 2.5s infinite alternate; }
// @keyframes pulseGlow { 0% { filter: drop-shadow(0 0 8px #67e8f9); } 100% { filter: drop-shadow(0 0 24px #a5b4fc); } }
