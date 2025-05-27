'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Mail, User, Phone, MapPin, MessageCircle} from 'lucide-react';

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
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
        setSuccess('Thank you! Your inquiry has been sent.');
        setForm({name: '', email: '', company: '', message: ''});
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
      <div className="w-full max-w-5xl bg-transparent flex flex-col md:flex-row gap-10 items-center md:items-stretch">
        {/* Left side: Info */}
        <div className="flex-1 flex flex-col justify-center md:justify-start md:py-6 md:pl-4 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
            Contact Us
          </h2>
          <p className="text-white/80 mb-6 text-base md:text-lg max-w-md">
            Have questions or want to get started? Fill out the form and our
            team will get back to you promptly. Or reach out directly:
          </p>
          <ul className="space-y-3 text-white/80 text-base">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-300" /> Abhatti20169@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-300" /> +1 (413) 474-8410
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-300" /> Toledo city, Ohio
              state
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-pink-300" /> Live chat
              available 24/7
            </li>
          </ul>
        </div>
        {/* Right side: Form */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12 flex flex-col gap-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  icon={<User />}
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({...f, name: e.target.value}))
                  }
                  className="bg-white/10 text-white border border-white/20 rounded-xl focus:border-blue-400 focus:bg-white/20 transition placeholder:text-white/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  icon={<Mail />}
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({...f, email: e.target.value}))
                  }
                  className="bg-white/10 text-white border border-white/20 rounded-xl focus:border-blue-400 focus:bg-white/20 transition placeholder:text-white/50"
                />
              </div>
              <Input
                placeholder="Company Name"
                required
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({...f, company: e.target.value}))
                }
                className="bg-white/10 text-white border border-white/20 rounded-xl focus:border-blue-400 focus:bg-white/20 transition placeholder:text-white/50"
              />
              <Textarea
                placeholder="Describe your business and payout needs..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({...f, message: e.target.value}))
                }
                className="bg-white/10 text-white border border-white/20 rounded-xl focus:border-blue-400 focus:bg-white/20 transition placeholder:text-white/50 min-h-[120px]"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-3 rounded-2xl shadow-lg transition-all text-lg tracking-wide border-2 border-transparent hover:border-white/40 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : '🚀 Submit Inquiry'}
              </button>
              {success && (
                <div className="text-green-400 text-center font-semibold mt-2">
                  {success}
                </div>
              )}
              {error && (
                <div className="text-red-400 text-center font-semibold mt-2">
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
