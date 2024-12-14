import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-500">Galerie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo1.jpg)' }}></div>
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo2.jpg)' }}></div>
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo3.jpg)' }}></div>
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo4.jpg)' }}></div>
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo5.jpg)' }}></div>
        <div className="w-full h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/path/to/photo6.jpg)' }}></div>
      </div>
    </div>
  );
};

export default Gallery;
