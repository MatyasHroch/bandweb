import React, { useState, useEffect, useRef } from "react";
import { videos } from '../data/videosData';

const VideoList: React.FC = () => {
    const videoPath = "/video/Parnik2024";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {videos.map((video) => (
                <LazyVideo
                    key={video.filename}
                    src={`${videoPath}/${video.filename}`}
                    name={video.name}
                />
            ))}
        </div>
    );
};

const LazyVideo: React.FC<{ src: string; name: string }> = ({ src, name }) => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Přestaneme sledovat, když je viditelné
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={videoRef} className="relative">
            <h3 className="text-2xl text-accent mt-2">{name}</h3>
            {isVisible ? (
                <video
                    className="w-full rounded-lg shadow-lg"
                    controls
                    preload="metadata"
                >
                    <source src={src} type="video/mp4" />
                    Váš prohlížeč nepodporuje přehrávání videí.
                </video>
            ) : (
                <div className="w-full h-48 bg-gray-200 flex justify-center items-center rounded-lg shadow-lg">
                    <p className="text-gray-500">Načítání videa...</p>
                </div>
            )}
        </div>
    );
};

export default VideoList;
