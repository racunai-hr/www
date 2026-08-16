import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'racunAI — Računovodstvena SaaS platforma za Hrvatsku',
  description:
    'Moderna multi-tenant platforma za računovodstvo: RRIF kontni plan, PDV knjige, bankovni uvoz, auto-knjiženje i izvještaji.',
  openGraph: {
    title: 'racunAI — Računovodstvena SaaS platforma',
    description:
      'Računovodstvo prilagođeno hrvatskim propisima — od izdavanja računa do PDV-S obrasca.',
    url: 'https://racunai.hr',
    siteName: 'racunAI',
    locale: 'hr_HR',
    type: 'website',
  },
  icons: {
    icon: '/racunai-logo.png',
    apple: '/racunai-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
