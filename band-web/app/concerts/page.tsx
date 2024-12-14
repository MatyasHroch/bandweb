import React from 'react';

const Concerts: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-500">Nadcházející koncerty</h1>
      <ul className="mt-8 space-y-4 text-lg text-gray-300">
        <li className="flex justify-between">
          <span>📍 Praha</span>
          <span className="text-gray-400">1. ledna 2025</span>
        </li>
        <li className="flex justify-between">
          <span>📍 Brno</span>
          <span className="text-gray-400">15. ledna 2025</span>
        </li>
        <li className="flex justify-between">
          <span>📍 Ostrava</span>
          <span className="text-gray-400">30. ledna 2025</span>
        </li>
      </ul>
      <div className="mt-8 text-center">
        <a href="https://www.ticketmaster.com" className="text-yellow-400 underline">
          Koupit lístky
        </a>
      </div>
    </div>
  );
};

export default Concerts;
