import '@/styles/globals.css';
import type { Metadata } from 'next';

import { Nav } from '@/components';
import { MovieProvider } from '@/store';

export const metadata: Metadata = {
  title: 'Popular Movies — The Movie Database (TMDB)',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MovieProvider>
          <Nav />
          <main className="flex w-full justify-center">{children}</main>
        </MovieProvider>
      </body>
    </html>
  );
}
