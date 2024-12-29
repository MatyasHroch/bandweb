import React from 'react';
import Head from 'next/head';
import ConcertList from '@/components/ConcertList'; // Importujeme komponentu

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vítejte na stránkách naší kapely - Nadcházející koncerty</title>
        <meta
          name="description"
          content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!"
        />
        <meta
          name="keywords"
          content="kapela, koncerty, nadcházející koncerty, hudba, vystoupení, rocková kapela"
        />
        <meta property="og:title" content="Vítejte na stránkách naší kapely - Nadcházející koncerty" />
        <meta
          property="og:description"
          content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Vítejte na stránkách naší kapely - Nadcházející koncerty" />
        <meta
          name="twitter:description"
          content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!"
        />
      </Head>
      {/* FONTS */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style>

      <div className="text-secondary">
        <h1 className="text-3xl font-bold text-accent">
          Vítejte na stránkách kapely Lesanten!
        </h1>

        {/* Přidání obrázku */}
        <div className="mt-4">
          <img src="/img/lesantenCover.webp" alt="Fotka kapely" className="h-[70vh] object-cover rounded-lg shadow-lg" />
        </div>

        <p className="mt-4 text-secondary">
          Zde najdete všechny informace o našich nadcházejících událostech, koncertech a dalších aktivitách.
        </p>
        <h2 className="mt-4 text-3xl font-bold mb-8 text-accent">
          Nadcházející koncerty
        </h2>
        <ConcertList upcomingOnly={true} /> {/* Zobrazíme pouze nadcházející koncerty */}
      </div>
    </>
  );
};

export default HomePage;
