'use client'; // Tento komponent je klientský

import React from 'react';
import VideoList from '../../components/VideoList';

const Videos: React.FC = () => {
    return (
        <div className="bg-background text-foreground">
            <h1 className="text-4xl font-bold text-center mb-8 text-accent">
                Videa
            </h1>
            <h2 className="text-foreground text-3xl font-bold my-8 text-start">
                Parník 2024
            </h2>
            <VideoList />
        </div>
    );
};

export default Videos;
