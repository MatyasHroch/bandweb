import React from 'react';
import Head from 'next/head';
// import ConcertList from '@/components/ConcertList'; // Importujeme komponentu
// import { concerts } from '../data/concertsData';

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
        @import url(`&apos;`https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`&apos;`);
      </style>

      <div className="text-secondary">
        <h1 className="text-3xl font-bold text-accent hidden">
          Vítejte na stránkách kapely Lesanten!
        </h1>

        <div className="mt-4">
          <img src="/img/lesantenCover.webp" alt="Fotka kapely" className="h-auto md:h-[75vh] object-cover rounded-lg shadow-lg" />
        </div>

        <h2 className="text-3xl font-bold text-accent mt-8 my-4">
          Koncert v Českém rozhlase
        </h2>

        <iframe src="https://www.youtube.com/embed/4kenlzokWwY?si=zmWQBt2ioWRh97iO" title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
          className="w-full lg:w-1/2 h-auto shadow-lg aspect-video"
        >
        </iframe>

        {/* <h2 className="mt-4 text-3xl font-bold mb-8 text-accent">
          {concerts && concerts.length && concerts.map((concert) => Date.now < concert.date) .length ? "Nadcházející koncerty" : ""}
        </h2> */}
        {/* <ConcertList upcomingOnly={true} />  */}
      </div >
    </>
  );
};

export default HomePage;
