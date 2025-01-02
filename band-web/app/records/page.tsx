import React from 'react';
import RecordList from '../../components/RecordList';
import { Record } from '../../data/recordsData';
import { IconLink } from '../../components/icons/IconLink';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Records: React.FC = () => {
    return (
        <div className="bg-background text-foreground">
            <h1 className="text-4xl font-bold text-start md:text-center mb-8 text-accent">
                Nahrávky
            </h1>
            <h2 className="text-foreground text-3xl font-bold my-8 text-start flex items-center">
                <IconLink href="https://open.spotify.com/album/4DDxT2CDitBvQF3Xiz49eF?si=u16hBpd3QF6irPspgL8HMQ" >
                    <FontAwesomeIcon className="fill-foreground p-0 h-12 w-12" icon={faSpotify} />
                </IconLink>
                Lesanten (2024)
            </h2>
            <RecordList filter={(record: Record) => record.album == "Lesanten"} />
            <h2 className="text-foreground text-3xl font-bold my-8 text-start flex items-center">
                <IconLink href="https://open.spotify.com/album/3vENEMs8lrfouP3COsjqAg?si=OjbP858NRf25icX-AEaWaw" >
                    <FontAwesomeIcon className="fill-foreground p-0 h-12 w-12" icon={faSpotify} />
                </IconLink>
                Na Jabloni (2003)
            </h2>
            <RecordList filter={(record: Record) => record.album == "Na Jabloni"} />
        </div>
    );
};

export default Records;
