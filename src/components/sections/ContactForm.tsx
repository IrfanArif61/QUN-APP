'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Mail, User, Phone, MapPin, MessageCircle, Building, Briefcase} from 'lucide-react';

const serviceOptions = [
  'Web Development',
  'Application Development',
  'Data Analysis',
  'Payment Solutions',
  'E-commerce Development',
  'SEO & Digital Marketing',
  'IT Consulting',
  'Amazon/eBay Training',
  'Other'
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess('Thank you! We\'ll get back to you within 24 hours with a detailed proposal.');
        setForm({name: '', email: '', company: '', phone: '', service: '', budget: '', message: ''});
      } else {
        setError('Failed to send. Please try again later.');
      }
    } catch {
      setError('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 flex justify-center items-center bg-transparent"
    >
      <div className="w-full max-w-7xl bg-transparent flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
        {/* Left side: Info */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start lg:py-8 lg:pr-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl leading-relaxed">
            Ready to transform your business with cutting-edge technology? Get a free consultation 
            and detailed project proposal. Our experts are here to turn your vision into reality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Email</div>
                  <div className="text-gray-600">Abhatti20169@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Phone</div>
                  <div className="text-gray-600">+1 (413) 474-8410</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Location</div>
                  <div className="text-gray-600">Toledo, Ohio, USA</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Free consultation & project analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">24-hour response guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Transparent pricing & timelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-gray-600">Ongoing support & maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side: Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-10">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
              <p className="text-gray-600">Tell us about your project and we'll provide a detailed proposal</p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  icon={<User />}
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({...f, name: e.target.value}))
                  }
                  className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  icon={<Mail />}
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({...f, email: e.target.value}))
                  }
                  className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Company Name *"
                  icon={<Building />}
                  required
                  value={form.company}
                  onChange={(e) =>
                    setForm((f) => ({...f, company: e.target.value}))
                  }
                  className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  icon={<Phone />}
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({...f, phone: e.target.value}))
                  }
                  className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm((f) => ({...f, service: e.target.value}))
                    }
                    className="w-full h-10 pl-10 pr-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition"
                  >
                    <option value="" className="bg-white">Select Service *</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} className="bg-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <Input
                  placeholder="Budget Range (Optional)"
                  value={form.budget}
                  onChange={(e) =>
                    setForm((f) => ({...f, budget: e.target.value}))
                  }
                  className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500"
                />
              </div>
              
              <Textarea
                placeholder="Tell us about your project, goals, and requirements... *"
                required
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({...f, message: e.target.value}))
                }
                className="bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:border-gray-400 focus:bg-white transition placeholder:text-gray-500 min-h-[120px]"
              />
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-lg tracking-wide border-2 border-transparent hover:border-gray-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : '🚀 Get Free Consultation'}
              </button>
              
              {success && (
                <div className="text-green-700 text-center font-semibold p-4 bg-green-50 rounded-xl border border-green-200">
                  {success}
                </div>
              )}
              {error && (
                <div className="text-red-700 text-center font-semibold p-4 bg-red-50 rounded-xl border border-red-200">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}