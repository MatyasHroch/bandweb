import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import './globals.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="cs">
      <head>
        <title>Web Kapely</title>
      </head>
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Logo Kapely"
                className="h-12 w-12"
              />
              <span className="text-white text-xl font-bold">Kapela</span>
            </div>

            <div className="space-x-8">
              <Link href="/" className="text-yellow-500 text-lg">Domů</Link>
              <Link href="/concerts" className="text-yellow-500 text-lg">Koncerty</Link>
              <Link href="/contact" className="text-yellow-500 text-lg">Kontakt</Link>
              <Link href="/gallery" className="text-yellow-500 text-lg">Galerie</Link>
            </div>
          </nav>
        </header>

        <main className="p-8 pt-24">
          {children}
        </main>

        <footer className="bg-gray-800 p-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kapela</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
