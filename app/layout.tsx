import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Inter } from 'next/font/google';
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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Imobiliária KP | Construindo Sonhos',
  description: 'Encontre seu imóvel dos sonhos com a Imobiliária KP.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable} ${inter.variable} scroll-smooth overflow-x-hidden`}>
      <body className="bg-black text-stone-100 antialiased selection:bg-white selection:text-black overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
