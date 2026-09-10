import type { Metadata } from 'next';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

export const metadata: Metadata = {
  title: 'ESEGAS | High-Precision Gas Analyzer & CEMS Manufacturer',
  description: 'Leading developer and manufacturer of online gas analyzers, OEM gas modules, portable analyzers, and continuous emission monitoring systems.',
  keywords: ['Gas Analyzer', 'CEMS', 'AQMS', 'OEM Gas Module', 'Portable Gas Analyzer', 'ESEGAS'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>
      <body className="bg-white text-dark antialiased">
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Script
          id="google-translate-init"
          strategy="beforeInteractive"
        >
          {`
            function googleTranslateElementInit() {
              if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            }
          `}
        </Script>
        <Script
          id="google-translate-script"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        
        <Navbar />
        <main className="min-vh-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
