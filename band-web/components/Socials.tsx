import React from "react";
import { IconLink } from './icons/IconLink';
import { faFacebook, faSpotify, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Socials: React.FC = () => {
    return (
        <div className="bg-background">
            <h2 className="text-2xl font-bold text-accent mb-6">Najít nás můžete i zde</h2>
            <div className="flex md:gap-4 gap-2">
                <IconLink href="https://www.youtube.com/watch?v=tFD8BZKMEj0&list=OLAK5uy_l1AoVrZA-dv2VE2OezuAbnSvWit2-NHjM">
                    <FontAwesomeIcon className="fill-foreground p-4 border border-accent rounded-2xl h-8 w-8" icon={faYoutube} />
                </IconLink>
                <IconLink href="https://soundcloud.com/lesanten" >
                    <FontAwesomeIcon className="fill-foreground p-4 border border-accent rounded-2xl h-8 w-8" icon={faSoundcloud} />
                </IconLink>
                <IconLink href="https://open.spotify.com/album/4DDxT2CDitBvQF3Xiz49eF?si=u16hBpd3QF6irPspgL8HMQ" >
                    <FontAwesomeIcon className="fill-foreground p-4 border border-accent rounded-2xl h-8 w-8" icon={faSpotify} />
                </IconLink>
                <IconLink href="https://facebook.com/lesanten" >
                    <FontAwesomeIcon className="fill-foreground p-4 border border-accent rounded-2xl h-8 w-8" icon={faFacebook} />
                </IconLink>
            </div>
        </div>
    );
};

export default Socials;