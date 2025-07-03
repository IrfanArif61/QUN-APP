import {Hero} from '@/components/sections/Hero';
import {Services} from '@/components/sections/Services';
import {Pricing} from '@/components/sections/Pricing';
import {SuccessStories} from '@/components/sections/SuccessStories';
import {ContactForm} from '@/components/sections/ContactForm';
import {Header} from '@/components/ui/Header';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Minimalistic background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 w-[60vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-100 via-gray-50 to-white opacity-40 blur-3xl animate-blob" />
        <div className="absolute right-0 bottom-0 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-gray-200 via-gray-100 to-transparent opacity-20 blur-2xl animate-blob2" />
        <div className="absolute left-0 top-0 w-[25vw] h-[25vw] rounded-full bg-gradient-to-br from-gray-300 via-gray-200 to-transparent opacity-15 blur-2xl animate-blob3" />
      </div>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8">
          <section className="transition-all duration-700 ease-in-out">
            <Hero />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <Services />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <Pricing />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <SuccessStories />
          </section>
          <section className="transition-all duration-700 ease-in-out mt-8">
            <ContactForm />
          </section>
        </main>
        
        <footer className="relative z-10 bg-gray-900 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <span className="text-3xl font-bold tracking-wide text-gray-900 bg-white px-4 py-2 rounded-lg">
                  QUN USA
                </span>
                <p className="text-gray-300 mt-4 max-w-md">
                  Leading IT consultancy providing comprehensive digital solutions to businesses worldwide. 
                  From web development to data analytics, we transform ideas into reality.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
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
                <ul className="space-y-2 text-gray-300">
                  <li>Toledo, Ohio, USA</li>
                  <li>+1 (413) 474-8410</li>
                  <li>Abhatti20169@gmail.com</li>
                  <li>24/7 Support Available</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm md:text-base text-gray-400">
                &copy; 2025 QUN USA. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
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