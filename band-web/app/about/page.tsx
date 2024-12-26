import React from 'react';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>O nás - Naše kapela</title>
        <meta
          name="description"
          content="Jsme kapela, která vznikla v roce 2020 a od té doby jsme hráli na mnoha místech po celé zemi. Seznamte se s námi!"
        />
        <meta
          name="keywords"
          content="kapela, rocková kapela, hudba, koncerty, historie kapely, O nás"
        />
        <meta property="og:title" content="O nás - Naše kapela" />
        <meta
          property="og:description"
          content="Jsme kapela, která vznikla v roce 2020 a od té doby jsme hráli na mnoha místech po celé zemi. Seznamte se s námi!"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="O nás - Naše kapela" />
        <meta
          name="twitter:description"
          content="Jsme kapela, která vznikla v roce 2020 a od té doby jsme hráli na mnoha místech po celé zemi. Seznamte se s námi!"
        />
      </Head>

      <div className="p-8 bg-primary text-secondary">
        <h1 className="text-4xl font-bold text-center text-accent">
          O nás
        </h1>
        <p className="mt-6 text-lg">
          Jsme kapela, která vznikla v roce 2020 a od té doby jsme hráli na mnoha
          místech po celé zemi...
        </p>
      </div>
    </>
  );
};

export default About;
