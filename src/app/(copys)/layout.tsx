import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../globals.css';

const notoSansLocal = localFont({
  src: [
    {
      path: '../fonts/NotoSansKR-Thin.woff2',
    },
    {
      path: '../fonts/NotoSansKR-Black.woff2',
    },
    {
      path: '../fonts/NotoSansKR-Bold.woff2',
    },
    {
      path: '../fonts/NotoSansKR-DemiLight.woff2',
    },
    {
      path: '../fonts/NotoSansKR-Light.woff2',
    },
    {
      path: '../fonts/NotoSansKR-Medium.woff2',
    },
    {
      path: '../fonts/NotoSansKR-Regular.woff2',
    },
  ],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'Main',
  description: 'Main Page',
};

export default function CopyRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansLocal.variable} scroll-smooth`}>
      <body className="font-sans min-h-[100dvh] h-[100dvh] max-h-[100dvh] overflow-y-auto overflow-x-hidden scroll-smooth">
        {/* <Header /> */}
        {children}
        {/* <Sidebar /> */}
      </body>
    </html>
  );
}
