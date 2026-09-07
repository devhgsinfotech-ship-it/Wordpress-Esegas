import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ESEGAS | Industrial, Commercial & Medical Gas Supplies',
  description: 'High-purity industrial oxygen, commercial LPG cylinders, argon shielding gas, medical oxygen, and turnkey gas pipeline engineering.',
  keywords: ['Industrial Gas', 'LPG Cylinders', 'Medical Oxygen', 'Argon Gas', 'Gas Piping System', 'ESEGAS'],
  openGraph: {
    title: 'ESEGAS | High-Purity Gas Supplies & Engineering',
    description: 'Leading provider of industrial, commercial, and medical gas cylinders & turnkey pipeline solutions.',
    url: 'https://esegas.com',
    siteName: 'ESEGAS',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className="bg-dark text-light antialiased">
        <Navbar />
        <main className="min-vh-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
