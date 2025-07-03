import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'QUN USA – Premier IT Consultancy & Digital Solutions',
  description:
    'Leading IT consultancy offering web development, application development, data analysis, payment solutions, and e-commerce expertise. Transform your business with our comprehensive digital services.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'QUN USA – Premier IT Consultancy & Digital Solutions',
    description:
      'Leading IT consultancy offering web development, application development, data analysis, payment solutions, and e-commerce expertise. Transform your business with our comprehensive digital services.',
    url: 'https://qun-app-7e6l.vercel.app/',
    siteName: 'QUN USA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QUN USA – Premier IT Consultancy & Digital Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUN USA – Premier IT Consultancy & Digital Solutions',
    description:
      'Leading IT consultancy offering web development, application development, data analysis, payment solutions, and e-commerce expertise. Transform your business with our comprehensive digital services.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}