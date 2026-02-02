import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ScrollToTopOnLoad from '@/components/ScrollToTopOnLoad';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '손지원 | 프론트엔드',
  description: '프론트엔드 개발자 손지원의 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={roboto.className}>
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
