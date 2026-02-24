import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luxe Balneário | Exclusive Real Estate',
  description: 'Premium properties in Balneário Camboriú. Experience the pinnacle of luxury living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable} scroll-smooth overflow-x-hidden`}>
      <body className="bg-stone-100 text-stone-900 antialiased selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
