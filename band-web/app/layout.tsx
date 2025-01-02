import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

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
        <main className="p-8 mt-20 sm:px-12">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
