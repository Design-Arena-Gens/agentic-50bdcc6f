import './globals.css';

export const metadata = {
  metadataBase: new URL('https://agentic-50bdcc6f.vercel.app'),
  title: 'AquaFlow Pro | High-Efficiency Water Pump',
  description:
    'AquaFlow Pro is a high-efficiency, low-noise water pump engineered for reliability and performance in residential, agricultural, and industrial applications.',
  openGraph: {
    title: 'AquaFlow Pro | High-Efficiency Water Pump',
    description:
      'Engineered for reliability and performance with smart control, ultra-quiet operation, and energy savings.',
    url: 'https://agentic-50bdcc6f.vercel.app',
    siteName: 'AquaFlow Pro',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AquaFlow Pro Water Pump',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaFlow Pro | High-Efficiency Water Pump',
    description:
      'Smart control, ultra-quiet, and energy-efficient water pump for modern needs.',
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}

