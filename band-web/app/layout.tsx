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
      <body className="bg-background text-foreground">
        <header className="p-4 px-8 fixed top-0 left-0 w-full z-10 bg-background sm:px-12">
          <nav className="flex items-center justify-between boll">
            {/* Logo vlevo */}
            <div className="flex items-center space-x-4">
              <Link href="/" onClick={closeMenu}>
                <img
                  src="/img/logo.png"
                  alt="Logo Kapely"
                  className="h-10"
                />
              </Link>
            </div>

            {/* Tlačítko hamburger menu */}
            <button
              onClick={toggleMenu}
              className="block md:hidden text-4xl focus:outline-none text-accent"
            >
              &#9776; {/* Unicode pro větší hamburger ikonu */}
            </button>

            {/* Navigační odkazy */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} text-xl px-0 p-4 bg-background md:flex md:items-center md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-header-bg md:bg-transparent`}>
              {/* <Link href="/" onClick={closeMenu}>
                <span className="block text-center py-2 text-accent ">
                  Domů
                </span>
              </Link> */}
              <Link href="/concerts" onClick={closeMenu}>
                <span className="block text-center py-2 text-accent ">
                  Koncerty
                </span>
              </Link>
              <Link href="/gallery" onClick={closeMenu}>
                <span className="block text-center py-2 text-accent ">
                  Galerie
                </span>
              </Link>
              <Link href="/records" onClick={closeMenu}>
                <span className="block text-center py-2 text-accent ">
                  Nahrávky
                </span>
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                <span className="block text-center py-2 text-accent ">
                  Kontakt
                </span>
              </Link>
            </div>
          </nav>
        </header>

        {/* Obsah stránky */}
        <main className="p-8 mt-20 sm:px-12">{children}</main>

        {/* Footer */}
        <footer className="p-4 text-center bg-footer-bg text-footer-text">
          <p>Stránky jsou stále v procesu vývoje.</p>
          <p>&copy; {new Date().getFullYear()} M.H.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
