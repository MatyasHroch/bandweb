import React from 'react';
import { records } from '@/data/recordsData'; // Importujeme data o nahrávkách
import { CalendarIcon, MapPinIcon, ArrowDownTrayIcon, AlbumIcon } from '@heroicons/react/20/solid';

const RecordList: React.FC<{ filter?: Function }> = ({ filter = (item) => true }) => {
    const filteredRecords = records.filter(filter);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecords.map((record) => (
                <div
                    key={record.id}
                    className="bg-background-secondary p-6 rounded-lg shadow-lg transform transition duration-300"
                    aria-labelledby={`record-${record.id}`}
                >
                    <h3 id={`record-${record.id}`} className="text-2xl font-bold mb-4 text-accent">
                        {record.name}
                    </h3>

                    {/* Datum vydání */}
                    <div className="flex items-center space-x-4 mb-4" aria-label={`Datum vydání: ${record.releaseDate}`}>
                        <CalendarIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-foreground">{record.releaseDate}</span>
                    </div>

                    {/* Místo nahrávání */}
                    {/* <div className="flex items-center space-x-4 mb-4" aria-label={`Místo nahrávání: ${record.location}`}>
                        <MapPinIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-foreground">{record.location}</span>
                    </div> */}

                    {/* Název alba */}
                    {/* <div className="flex items-center space-x-4 mb-4" aria-label={`Místo nahrávání: ${record.location}`}>
                        <AlbumIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        <span className="text-foreground">{record.location}</span>
                    </div> */}



                    {/* Tlačítka pro stažení */}
                    <div className="flex space-x-4">
                        <a
                            href={record.mp3Link}
                            className="bg-accent text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition duration-300 flex items-center"
                            download
                        >
                            <ArrowDownTrayIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                            MP3
                        </a>
                        {/* <a
                            href={record.wavLink}
                            className="bg-accent text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition duration-300 flex items-center"
                            download
                        >
                            <ArrowDownTrayIcon className="h-6 w-6 mr-2" aria-hidden="true" />
                            WAV
                        </a> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecordList;
