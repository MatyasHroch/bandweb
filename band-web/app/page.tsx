import React from 'react';
import ConcertList from '@/components/ConcertList'; // Importujeme komponentu

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-yellow-500">Vítejte na stránkách naší kapely!</h1>
      <p className="mt-4 text-white">Zde najdete všechny informace o našich nadcházejících událostech, koncertech a dalších aktivitách.</p>
      <h2 className="text-3xl font-bold mb-8">Nadcházející koncerty</h2>
      <ConcertList upcomingOnly={true} /> {/* Zobrazíme pouze nadcházející koncerty */}
    </div>
  );
};

export default HomePage;
