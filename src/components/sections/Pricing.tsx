'use client';

import {Check, Star, Zap, Crown, ArrowRight} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    price: '$400',
    period: 'Starting from',
    description: 'Perfect for small businesses and startups looking to establish their digital presence',
    features: [
      'Basic website development (5-10 pages)',
      'Responsive mobile design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media integration',
      '3 months free maintenance',
      'Email support',
      'Basic analytics setup'
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderGradient: 'from-blue-500/30 to-cyan-500/30'
  },
  {
    name: 'Professional',
    icon: <Star className="w-8 h-8 text-purple-400" />,
    price: '$1,000',
    period: 'Starting from',
    description: 'Comprehensive solution for growing businesses with advanced features and integrations',
    features: [
      'Custom web application development',
      'E-commerce platform setup',
      'Payment gateway integration',
      'Advanced SEO & digital marketing',
      'Data analytics dashboard',
      'Mobile app development (basic)',
      '6 months free maintenance',
      'Priority support (24/7)',
      'Performance optimization',
      'Security implementation',
      'Third-party API integrations'
    ],
    popular: true,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderGradient: 'from-purple-500/30 to-pink-500/30'
  },
  {
    name: 'Enterprise',
    icon: <Crown className="w-8 h-8 text-yellow-400" />,
    price: 'Custom',
    period: 'Quote based',
    description: 'Full-scale digital transformation for large organizations with complex requirements',
    features: [
      'Enterprise application development',
      'Advanced data analysis & ML',
      'International payment processing',
      'Multi-platform mobile apps',
      'Complete digital transformation',
      'Amazon/eBay training programs',
      '12 months free maintenance',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security audits',
      'Scalable cloud infrastructure',
      'White-label solutions',
      'Ongoing consultation'
    ],
    popular: false,
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    borderGradient: 'from-yellow-500/30 to-orange-500/30'
  }
];

const additionalServices = [
  {
    service: 'SEO Audit & Strategy',
    price: '$400 - $2,000',
    description: 'Comprehensive SEO analysis and optimization strategy'
  },
  {
    service: 'Amazon/eBay Training',
    price: '$1,500 - $5,000',
    description: 'Complete e-commerce marketplace training and setup'
  },
  {
    service: 'Data Analysis Project',
    price: '$3,000 - $15,000',
    description: 'Custom data analytics and business intelligence solutions'
  },
  {
    service: 'Payment Integration',
    price: '$1,000 - $5,000',
    description: 'International payment gateway setup and optimization'
  },
  {
    service: 'Mobile App Development',
    price: '$8,000 - $25,000',
    description: 'Native or cross-platform mobile application development'
  },
  {
    service: 'IT Consulting (Hourly)',
    price: '$150 - $300/hour',
    description: 'Strategic technology consulting and project guidance'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
            Transparent Pricing
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your business needs. All plans include our commitment to quality, 
            timely delivery, and ongoing support to ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white/70">
              <Check className="w-5 h-5 text-green-400" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="w-5 h-5 text-green-400" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-white/10 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/20' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.bgGradient} mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className={`text-4xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all block text-center ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/25`
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Get Started
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Need something specific? We offer individual services and custom solutions 
              tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-white">{service.service}</h4>
                  <span className="text-blue-400 font-bold text-sm">{service.price}</span>
                </div>
                <p className="text-white/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with our experts. We'll analyze your requirements 
              and recommend the best solution for your business goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 text-white font-bold hover:scale-105 transition-all shadow-lg"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+14134748410"
                className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                Call: +1 (413) 474-8410
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}