import React from 'react';
import Head from 'next/head';
import ConcertList from '@/components/ConcertList'; // Importujeme komponentu

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vítejte na stránkách naší kapely - Nadcházející koncerty</title>
        <meta name="description" content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!" />
        <meta name="keywords" content="kapela, koncerty, nadcházející koncerty, hudba, vystoupení, rocková kapela" />
        <meta property="og:title" content="Vítejte na stránkách naší kapely - Nadcházející koncerty" />
        <meta property="og:description" content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Vítejte na stránkách naší kapely - Nadcházející koncerty" />
        <meta name="twitter:description" content="Objevte nadcházející koncerty a akce naší kapely. Připojte se k nám na našich vystoupeních a zjistěte více o naší hudbě!" />
      </Head>

      <div>
        <h1 className="text-3xl font-bold text-yellow-500">Vítejte na stránkách naší kapely!</h1>
        <p className="mt-4 text-white">Zde najdete všechny informace o našich nadcházejících událostech, koncertech a dalších aktivitách.</p>
        <h2 className="text-3xl font-bold mb-8">Nadcházející koncerty</h2>
        <ConcertList upcomingOnly={true} /> {/* Zobrazíme pouze nadcházející koncerty */}
      </div>
    </>
  );
};

export default HomePage;
