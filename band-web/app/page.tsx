import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-between font-sans p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-yellow-500 text-shadow-lg">
          Rocková Kapela
        </h1>
        <p className="mt-4 text-2xl italic text-gray-300">
          Vítejte na oficiálních stránkách naší kapely!
        </p>
      </header>

      {/* O nás */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-white">O nás</h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          Jsme energická rocková kapela, která miluje živé koncerty a nezapomenutelné hudební zážitky. Sledujte naše novinky, albumy a nadcházející koncerty!
        </p>
      </section>

      {/* Koncerty */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-yellow-400">Nadcházející koncerty</h2>
        <ul className="mt-4 text-lg text-gray-300">
          <li>📍 Praha - 1. ledna 2025</li>
          <li>📍 Brno - 15. ledna 2025</li>
          <li>📍 Ostrava - 30. ledna 2025</li>
        </ul>
      </section>

      {/* Albumy */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold text-white">Naše Albumy</h2>
        <div className="flex justify-center mt-6 gap-8">
          <div className="w-48 h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/album-cover.jpg)' }}></div>
          <div className="w-48 h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/album-cover2.jpg)' }}></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2024 Rocková Kapela. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
};

export default Home;
