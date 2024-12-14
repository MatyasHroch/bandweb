import React from 'react';
import Link from 'next/link';
import './globals.css'; // Pokud používáš globální styly

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="cs">
      <head>
        <title>Web Kapely</title>
      </head>
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 p-4">
          <nav className="flex justify-center space-x-8">
            <Link href="/" className="text-yellow-500 text-lg">Domů</Link>
            <Link href="/concerts" className="text-yellow-500 text-lg">Koncerty</Link>
            <Link href="/contact" className="text-yellow-500 text-lg">Kontakt</Link>
            <Link href="/gallery" className="text-yellow-500 text-lg">Galerie</Link>
          </nav>
        </header>

        <main className="p-8">
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
