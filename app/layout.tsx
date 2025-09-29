import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Daniel Dirgantara | Full-Stack Developer',
  description: 'Computer Science student specializing in database management and backend development.',
  keywords: ['Daniel Dirgantara', 'Full-Stack Developer', 'Backend Developer', 'Database Administrator', 'Next.js', 'React', 'Node.js'],
  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}