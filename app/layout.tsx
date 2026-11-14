import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cinnamon Edge – Sri Lankan Café & Restaurant Brisbane',
  description:
    'Discover authentic Sri Lankan cuisine, traditional hoppers, kottu, signature fried rice and welcoming café dining at Cinnamon Edge in Mount Gravatt East, QLD.',
  keywords: [
    'Cinnamon Edge',
    'Sri Lankan restaurant Brisbane',
    'Sri Lankan cafe Mount Gravatt East',
    'Hoppers Brisbane',
    'Kottu Brisbane',
    'Sri Lankan food Queensland',
    'Catering Mount Gravatt East',
  ],
  openGraph: {
    title: 'Cinnamon Edge – Sri Lankan Café & Restaurant Brisbane',
    description:
      'Discover authentic Sri Lankan cuisine, traditional hoppers, kottu, signature fried rice and welcoming café dining at Cinnamon Edge in Mount Gravatt East, QLD.',
    type: 'website',
    siteName: 'Cinnamon Edge',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinnamon Edge – Sri Lankan Café & Restaurant Brisbane',
    description:
      'Discover authentic Sri Lankan cuisine, traditional hoppers, kottu, signature fried rice and welcoming café dining at Cinnamon Edge in Mount Gravatt East, QLD.',
  },
};

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Cinnamon Edge',
  description:
    'Sri Lankan Café & Restaurant in Mount Gravatt East, Brisbane serving authentic Sri Lankan cuisine, hoppers, kottu, fried rice, starters and café beverages.',
  telephone: '+61 415 735 617',
  servesCuisine: ['Sri Lankan', 'Café'],
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 6/742 Creek Road',
    addressLocality: 'Mount Gravatt East',
    addressRegion: 'QLD',
    postalCode: '4122',
    addressCountry: 'AU',
  },
  hasMap: 'https://maps.app.goo.gl/ceQtifPvpuMjhWCP7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased selection:bg-[#163024] selection:text-[#FAF6F0]">
        {children}
      </body>
    </html>
  );
}

