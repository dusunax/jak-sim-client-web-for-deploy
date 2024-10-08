import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ReactNode } from 'react';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
});

const nimbusSans = localFont({
  src: '../assets/fonts/NimbusSansBeckerPBla.woff2',
  variable: '--font-nimbus-sans',
  weight: 'normal',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={` ${pretendard.className} ${nimbusSans.variable} antialiased`}>
        <div className={'flex flex-col max-w-[400px] m-auto h-screen'}>{children}</div>
      </body>
    </html>
  );
}
