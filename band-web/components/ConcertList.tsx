import React from 'react';
import { concerts } from '@/data/concertsData'; // Importujeme data o koncertech
import { ClockIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid';

const ConcertList: React.FC<{ upcomingOnly?: boolean }> = ({ upcomingOnly = false }) => {
    // Získání aktuálního data
    const currentDate = new Date();

    // Filtrace koncertů na základě data
    const filteredConcerts = concerts.filter((concert) => {
        const concertDate = new Date(concert.date);
        return upcomingOnly ? concertDate >= currentDate : true; // Pokud je 'upcomingOnly', zobrazíme pouze nadcházející koncerty
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcerts.map((concert, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300">
                    {/* Název koncertu jako titulek */}
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4">{concert.name}</h3>

                    {/* Čas koncertu */}
                    <div className="flex items-center space-x-4 mb-4">
                        <ClockIcon className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">{concert.time}</span>
                    </div>

                    {/* Datum koncertu */}
                    <div className="flex items-center space-x-4 mb-4">
                        <CalendarIcon className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">{concert.date}</span>
                    </div>

                    {/* Místo koncertu */}
                    <div className="flex items-center space-x-4">
                        <MapPinIcon className="h-6 w-6 text-yellow-400" />
                        <span className="text-white">{concert.location}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ConcertList;
