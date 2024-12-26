'use client'; // Tento komponent je klientský

import ConcertList from '../../components/ConcertList';
import Head from 'next/head';

const Concerts: React.FC = () => {
  return (
    <>
      <Head>
        <title>Všechny koncerty naší kapely</title>
        <meta
          name="description"
          content="Prohlédněte si všechny koncerty naší kapely a připojte se k nám na nadcházejících akcích. Zjistěte více o našich vystoupeních a kde nás můžete vidět."
        />
        <meta
          name="keywords"
          content="koncerty, kapela, všechny koncerty, vystoupení, nadcházející koncerty"
        />
        <meta property="og:title" content="Všechny koncerty naší kapely" />
        <meta
          property="og:description"
          content="Prohlédněte si všechny koncerty naší kapely a připojte se k nám na nadcházejících akcích. Zjistěte více o našich vystoupeních a kde nás můžete vidět."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-background text-foreground">
        <h1 className="text-4xl font-bold text-center mb-8 text-accent">
          Všechny koncerty
        </h1>
        <ConcertList />
      </div>
    </>
  );
};

export default Concerts;
