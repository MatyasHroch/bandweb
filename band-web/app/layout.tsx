'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="cs">
      <head>
        <title>Web Kapely</title>
      </head>
      <body className="bg-gray-900 text-white">
        <header className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
          <nav className="flex items-center justify-between">
            {/* Logo vlevo */}
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Logo Kapely"
                className="h-12 w-12"
              />
              <span className="text-white text-xl font-bold">Kapela</span>
            </div>

            {/* Tlačítko hamburger menu */}
            <button
              onClick={toggleMenu}
              className="block md:hidden text-yellow-500 text-4xl focus:outline-none"
            >
              &#9776; {/* Unicode pro větší hamburger ikonu */}
            </button>

            {/* Navigační odkazy */}
            <div
              className={`${isMenuOpen ? 'block' : 'hidden'
                } md:flex md:items-center md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent`}
            >
              <Link href="/" onClick={closeMenu} className="block py-2 px-4 text-yellow-500">
                Domů
              </Link>
              <Link href="/concerts" onClick={closeMenu} className="block py-2 px-4 text-yellow-500">
                Koncerty
              </Link>
              <Link href="/contact" onClick={closeMenu} className="block py-2 px-4 text-yellow-500">
                Kontakt
              </Link>
              <Link href="/gallery" onClick={closeMenu} className="block py-2 px-4 text-yellow-500">
                Galerie
              </Link>
            </div>
          </nav>
        </header>

        {/* Obsah stránky */}
        <main className="p-8 pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kapela</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
