'use client';

import {
  Code,
  Globe2,
  Smartphone,
  BarChart3,
  CreditCard,
  ShoppingCart,
  Search,
  BookOpen,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    badge: 'Full-Stack',
    badgeColor: 'bg-blue-700/60',
    title: 'Web Development',
    desc: 'Custom websites, web applications, and progressive web apps built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Scalable Architecture'],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    badge: 'Cross-Platform',
    badgeColor: 'bg-purple-700/60',
    title: 'Application Development',
    desc: 'Native and cross-platform mobile apps, desktop applications, and enterprise software solutions tailored to your business needs.',
    features: ['iOS & Android', 'Desktop Apps', 'Enterprise Solutions', 'API Integration'],
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-teal-400" />,
    badge: 'AI-Powered',
    badgeColor: 'bg-teal-700/60',
    title: 'Data Analysis',
    desc: 'Transform your data into actionable insights with advanced analytics, machine learning, and business intelligence solutions.',
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'ML Models'],
  },
  {
    icon: <CreditCard className="w-8 h-8 text-pink-400" />,
    badge: 'Secure & Fast',
    badgeColor: 'bg-pink-700/60',
    title: 'Payment Solutions',
    desc: 'International payment processing, merchant services, and secure payment gateway integration for global businesses.',
    features: ['Global Processing', 'Multi-Currency', 'Fraud Protection', 'Compliance Ready'],
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-indigo-400" />,
    badge: 'Revenue Focused',
    badgeColor: 'bg-indigo-700/60',
    title: 'E-commerce Development',
    desc: 'Complete e-commerce solutions from store setup to optimization, including marketplace integration and conversion optimization.',
    features: ['Store Development', 'Marketplace Integration', 'Payment Processing', 'Inventory Management'],
  },
  {
    icon: <Search className="w-8 h-8 text-green-400" />,
    badge: 'Results Driven',
    badgeColor: 'bg-green-700/60',
    title: 'SEO & Digital Marketing',
    desc: 'Comprehensive SEO services and digital marketing strategies to boost your online presence and drive organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Performance Tracking'],
  },
];

const additionalServices = [
  {
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />,
    title: 'Amazon & eBay Training',
    desc: 'Master e-commerce platforms with our comprehensive courses and hands-on training programs.',
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    title: 'IT Consulting',
    desc: 'Strategic technology consulting to align your IT infrastructure with business objectives.',
  },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />,
    title: 'Security Audits',
    desc: 'Comprehensive security assessments and implementation of best practices.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
    title: 'Digital Transformation',
    desc: 'End-to-end digital transformation services to modernize your business processes.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
          Our Core Services
        </h2>
        <p className="text-lg text-center text-white/80 mb-16 max-w-3xl mx-auto">
          We provide end-to-end IT solutions that help businesses thrive in the digital age. 
          From concept to deployment, we're your trusted technology partner.
        </p>
        
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white/5 border border-white/10 shadow-xl p-8 flex flex-col gap-6 min-h-[400px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 shadow-inner group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${service.badgeColor} text-white/90`}
                >
                  {service.badge}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 text-base mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-teal-400"></div>
                      <span className="text-white/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="mt-auto w-full py-3 rounded-xl bg-gradient-to-r from-white/10 to-white/20 text-white font-semibold hover:from-white/20 hover:to-white/30 transition-all border border-white/20">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-white/60 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}