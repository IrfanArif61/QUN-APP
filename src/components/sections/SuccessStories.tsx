'use client';

import {Card, CardContent} from '@/components/ui/card';

const stories = [
  {
    quote:
      'QUN USA transformed our e-commerce platform, increasing our sales by 300% within 6 months. Their technical expertise and business understanding are exceptional.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechRetail Solutions',
    location: 'California, USA',
    accent: 'from-blue-400 to-indigo-500',
    project: 'E-commerce Platform Development',
  },
  {
    quote:
      'The data analytics solution they built helped us identify key market trends and optimize our operations. ROI was evident within the first quarter.',
    author: 'Michael Chen',
    role: 'Operations Director',
    company: 'Global Manufacturing Inc.',
    location: 'Singapore',
    accent: 'from-teal-400 to-blue-400',
    project: 'Business Intelligence Dashboard',
  },
  {
    quote:
      'Their payment processing integration was seamless and secure. We now handle international transactions effortlessly across 50+ countries.',
    author: 'Elena Rodriguez',
    role: 'Finance Manager',
    company: 'International Services Ltd.',
    location: 'Madrid, Spain',
    accent: 'from-pink-400 to-purple-500',
    project: 'Payment Gateway Integration',
  },
  {
    quote:
      'The mobile app they developed exceeded our expectations. User engagement increased by 250% and our app store ratings improved significantly.',
    author: 'David Kumar',
    role: 'Product Manager',
    company: 'HealthTech Innovations',
    location: 'Mumbai, India',
    accent: 'from-yellow-400 to-pink-400',
    project: 'Mobile Application Development',
  },
  {
    quote:
      'QUN USA\'s SEO expertise helped us rank #1 for our target keywords. Organic traffic increased by 400% and lead quality improved dramatically.',
    author: 'Lisa Thompson',
    role: 'Marketing Director',
    company: 'Digital Marketing Pro',
    location: 'London, UK',
    accent: 'from-green-400 to-teal-400',
    project: 'SEO & Digital Marketing',
  },
  {
    quote:
      'Their Amazon FBA training program was comprehensive and practical. We launched successfully and achieved $100K in sales within 3 months.',
    author: 'Ahmed Hassan',
    role: 'Entrepreneur',
    company: 'E-commerce Ventures',
    location: 'Dubai, UAE',
    accent: 'from-purple-400 to-blue-400',
    project: 'Amazon FBA Training & Setup',
  },
];

export function SuccessStories() {
  return (
    <section id="stories" className="bg-transparent py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
          Client Success Stories
        </h2>
        <div className="mx-auto mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-teal-300 blur-sm"></div>
        <p className="text-lg text-center text-white/80 mb-16 max-w-3xl mx-auto">
          Discover how we've helped businesses across industries achieve their digital transformation goals 
          and drive measurable results through our comprehensive IT solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden h-full"
            >
              <div
                className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${story.accent}`}
              ></div>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex-1">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${story.accent} text-white`}>
                      {story.project}
                    </span>
                  </div>
                  <p className="text-white/90 italic mb-6 text-base leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p
                        className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r ${story.accent}`}
                      >
                        {story.author}
                      </p>
                      <p className="text-sm text-white/70">{story.role}</p>
                      <p className="text-sm text-white/60 font-medium">{story.company}</p>
                    </div>
                    <p className="text-xs text-white/50 text-right">{story.location}</p>
                  </div>
                </div>
              </CardContent>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-white/40 pointer-events-none" />
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60">Projects Completed</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/60">Countries Served</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-white/60">Client Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}