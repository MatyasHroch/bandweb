'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './globals.css';
import Navbar from '../components/Navbar';

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
        <header className="p-4 px-8 fixed top-0 left-0 w-full z-10 bg-background sm:px-12 border-b border-background-secondary">
          <Navbar />
        </header>

        {/* Obsah stránky */}
        <main className="p-8 mt-24 sm:px-12">{children}</main>

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
