import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'abi.lol',
  description: 'View Smart Contract ABIs as Readable Documentation.',
  openGraph: {
    type: 'website',
    url: 'https://abi.lol/',
    title: 'abi.lol',
    description: 'View Smart Contract ABIs as Readable Documentation.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@0xJudith',
    site: '@0xJudith',
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
