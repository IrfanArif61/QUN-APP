import {Hero} from '@/components/sections/Hero';
import {Services} from '@/components/sections/Services';
import {SuccessStories} from '@/components/sections/SuccessStories';
import {ContactForm} from '@/components/sections/ContactForm';
import {Header} from '@/components/ui/Header';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 w-[80vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-700 opacity-60 blur-3xl animate-blob" />
        <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-teal-400 via-blue-400 to-transparent opacity-30 blur-2xl animate-blob2" />
        <div className="absolute left-0 top-0 w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-transparent opacity-20 blur-2xl animate-blob3" />
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
        
        <footer className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20 text-white py-12 mt-12 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow">
                  QUN USA
                </span>
                <p className="text-white/70 mt-4 max-w-md">
                  Leading IT consultancy providing comprehensive digital solutions to businesses worldwide. 
                  From web development to data analytics, we transform ideas into reality.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Web Development</li>
                  <li>App Development</li>
                  <li>Data Analysis</li>
                  <li>Payment Solutions</li>
                  <li>E-commerce</li>
                  <li>SEO & Marketing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-white/70">
                  <li>Toledo, Ohio, USA</li>
                  <li>+1 (413) 474-8410</li>
                  <li>Abhatti20169@gmail.com</li>
                  <li>24/7 Support Available</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm md:text-base opacity-80">
                &copy; 2025 QUN USA. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#contact" className="hover:text-white transition">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}