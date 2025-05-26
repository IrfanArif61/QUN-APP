'use client';

import {Card, CardContent} from '@/components/ui/card';

const stories = [
  {
    quote:
      'Thanks to QUN USA, I now get paid on time every month. Their fees are reasonable and service is outstanding.',
    author: 'Adeel K.',
    role: 'Freelance Developer',
    location: 'Pakistan',
    accent: 'from-blue-400 to-indigo-500',
  },
  {
    quote:
      'Being a medical transcriptionist, I needed a reliable partner to get my U.S. payments. QUN USA made it seamless.',
    author: 'Maria F.',
    role: 'Healthcare Contractor',
    location: 'Philippines',
    accent: 'from-pink-400 to-purple-500',
  },
  {
    quote:
      "We are a design agency in India working with U.S. clients. QUN USA's payouts are super efficient and clear.",
    author: 'Ravi S.',
    role: 'Creative Director',
    location: 'India',
    accent: 'from-teal-400 to-blue-400',
  },
  {
    quote:
      "It's rare to find payment processors that understand remote work culture in Europe. QUN USA is the bridge we needed.",
    author: 'Elena M.',
    role: 'Marketing Consultant',
    location: 'Germany',
    accent: 'from-yellow-400 to-pink-400',
  },
];

export function SuccessStories() {
  return (
    <section id="stories" className="bg-transparent py-20 px-4 md:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
        Success Stories
      </h2>
      <div className="mx-auto mb-12 h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 blur-sm"></div>
      <p className="text-lg text-center text-white/80 mb-12 max-w-3xl mx-auto">
        Hear from our satisfied clients who have transformed their payment
        experience with QUN USA
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <Card
            key={index}
            accentColor={`linear-gradient(to bottom, var(--tw-gradient-stops))`}
            className="group relative overflow-hidden"
          >
            <div
              className={`absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b ${story.accent}`}
            ></div>
            <CardContent className="p-8 pt-0">
              <p className="text-white/90 italic mb-6 text-lg">
                &quot;{story.quote}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${story.accent}`}
                  >
                    {story.author}
                  </p>
                  <p className="text-sm text-white/60">{story.role}</p>
                </div>
                <p className="text-sm text-white/50">({story.location})</p>
              </div>
            </CardContent>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-white/40 pointer-events-none" />
          </Card>
        ))}
      </div>
    </section>
  );
}
