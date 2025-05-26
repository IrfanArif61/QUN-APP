import {Hero} from '@/components/sections/Hero';
import {Services} from '@/components/sections/Services';
import {SuccessStories} from '@/components/sections/SuccessStories';
import {ContactForm} from '@/components/sections/ContactForm';
import {Header} from '@/components/ui/Header';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Animated background blob */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 w-[80vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-700 opacity-60 blur-3xl animate-blob" />
        <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-teal-400 via-blue-400 to-transparent opacity-30 blur-2xl animate-blob2" />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1333] via-[#2d1b4e] to-[#0f1021] text-white flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8">
          <section className="transition-all duration-700 ease-in-out">
            <Hero />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <Services />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <SuccessStories />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <ContactForm />
          </section>
        </main>
        <footer className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 text-white text-center py-8 mt-12 shadow-2xl">
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow">
              QUN USA
            </span>
            <p className="text-sm md:text-base opacity-80">
              &copy; 2025 QUN USA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
