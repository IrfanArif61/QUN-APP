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
  title: 'QUN USA – Seamless Global Payouts',
  description:
    'Empowering remote workers and global companies with secure, fast payout services from the USA.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'QUN USA – Seamless Global Payouts',
    description:
      'Empowering remote workers and global companies with secure, fast payout services from the USA.',
    url: 'https://qun-app-7e6l.vercel.app/',
    siteName: 'QUN USA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QUN USA – Seamless Global Payouts',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUN USA – Seamless Global Payouts',
    description:
      'Empowering remote workers and global companies with secure, fast payout services from the USA.',
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
