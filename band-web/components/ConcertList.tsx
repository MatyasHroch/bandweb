import React from 'react';
import { concerts } from '@/data/concertsData'; // Importujeme data o koncertech
import { ClockIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid';

const ConcertList: React.FC<{ upcomingOnly?: boolean, pastOnly?: boolean }> = ({ upcomingOnly = false, pastOnly = false }) => {
    // Získání aktuálního data
    const currentDate = new Date();

    // Filtrace koncertů na základě data
    const filteredConcerts = concerts.filter((concert) => {
        const concertDate = new Date(concert.date);
        if (upcomingOnly && pastOnly) return false; // Pokud jsou nastaveny oba filtry, nezobrazíme žádný koncert

        if (pastOnly) {
            return concertDate < currentDate; // Pokud je 'pastOnly', zobrazíme pouze minulé koncerty
        }
        if (upcomingOnly) {
            return concertDate >= currentDate; // Pokud je 'upcomingOnly', zobrazíme pouze nadcházející koncerty
        }

        return true; // Pokud nejsou nastaveny žádné filtry, zobrazíme všechny koncerty
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcerts.map((concert) => (
                <div
                    key={concert.id}
                    className="bg-background-secondary p-6 rounded-lg shadow-lg transform transition duration-300"
                    aria-labelledby={`concert-${concert.id}`}
                >
                    <h3 id={`concert-${concert.id}`} className="text-2xl font-bold text-accent mb-4">
                        {concert.name}
                    </h3>

                    {/* Čas koncertu */}
                    <div className="flex items-center space-x-4 mb-4" aria-label={`Čas koncertu: ${concert.time}`}>
                        <ClockIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-white">{concert.time}</span>
                    </div>

                    {/* Datum koncertu */}
                    <div className="flex items-center space-x-4 mb-4" aria-label={`Datum koncertu: ${concert.date}`}>
                        <CalendarIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-white">{concert.date}</span>
                    </div>

                    {/* Místo koncertu */}
                    <div className="flex items-center space-x-4" aria-label={`Místo koncertu: ${concert.location}`}>
                        <MapPinIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-white">{concert.location}</span>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ConcertList;
