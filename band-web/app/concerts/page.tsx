'use client'; // Tento komponent je klientský

import ConcertList from '../../components/ConcertList';


const Concerts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-8">Všechny koncerty</h1>
      <ConcertList />
    </div>
  );
};

export default Concerts;
