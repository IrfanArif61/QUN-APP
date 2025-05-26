'use client';

import {
  CreditCard,
  Globe2,
  Zap,
  Shield,
  Clock,
  FileText,
  BadgeCheck,
  DollarSign,
} from 'lucide-react';

const services = [
  {
    icon: <CreditCard className="w-7 h-7 text-purple-300" />,
    badge: 'No Hidden Fees',
    badgeColor: 'bg-purple-700/60',
    title: 'Transparent Pricing',
    desc: 'Only 5% service fee plus applicable taxes.',
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-300" />,
    badge: 'Quick Turnaround',
    badgeColor: 'bg-blue-700/60',
    title: 'Fast Processing',
    desc: 'Payments processed within 24–48 hours.',
  },
  {
    icon: <Shield className="w-7 h-7 text-pink-300" />,
    badge: 'Enterprise Security',
    badgeColor: 'bg-pink-700/60',
    title: 'Secure Transactions',
    desc: 'Bank-level encryption and security protocols.',
  },
  {
    icon: <Globe2 className="w-7 h-7 text-teal-300" />,
    badge: 'Worldwide Access',
    badgeColor: 'bg-teal-700/60',
    title: 'Global Coverage',
    desc: 'Available in 150+ countries worldwide.',
  },
  {
    icon: <FileText className="w-7 h-7 text-indigo-300" />,
    badge: 'Streamlined Process',
    badgeColor: 'bg-indigo-700/60',
    title: 'Easy Documentation',
    desc: 'Simple onboarding with minimal paperwork.',
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-fuchsia-300" />,
    badge: 'Fully Compliant',
    badgeColor: 'bg-fuchsia-700/60',
    title: 'Compliance Ready',
    desc: 'Full regulatory compliance and reporting.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-white">
        Why Choose QUN USA?
      </h2>
      <p className="text-lg text-center text-white/80 mb-12 max-w-2xl mx-auto">
        We provide comprehensive payout solutions designed for the modern remote
        workforce, ensuring you get paid quickly and securely.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative rounded-2xl bg-white/5 border border-white/10 shadow-xl p-7 flex flex-col gap-4 min-h-[220px] hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/20 shadow-inner">
                {s.icon}
              </div>
              <span
                className={`ml-auto px-3 py-1 text-xs font-semibold rounded-full ${s.badgeColor} text-white/90`}
              >
                {s.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
            <p className="text-white/70 text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
