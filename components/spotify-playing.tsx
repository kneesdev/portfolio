"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SpotifyTrack {
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
    track_id: string;
}

export const SpotifyPlaying = () => {
    const [track, setTrack] = useState<SpotifyTrack | null>(null);

    useEffect(() => {
        const fetchSpotify = async () => {
            const res = await fetch("https://api.lanyard.rest/v1/users/892038814921547898");
            const json = await res.json();
            if (!json.success || !json.data.listening_to_spotify) {
                setTrack(null);
            } else {
                setTrack(json.data.spotify);
            }
        };
        fetchSpotify();

        const interval = setInterval(fetchSpotify, 15000);
        return () => clearInterval(interval);
    }, []);

    if (!track) return null;

    return (
        <motion.a
            href={`https://open.spotify.com/track/${track.track_id}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 15 }}
            className="flex items-center gap-6 border border-transparent bg-zinc-900/30 transition-colors hover:border-border/50 hover:bg-zinc-800/50 p-4 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Image
                src={track.album_art_url}
                alt="Album Art"
                width={72}
                height={72}
                className="rounded-lg"
                draggable={false}
            />
            <div className="flex flex-col">
                <span className="text-white font-semibold text-base">{track.song}</span>
                <span className="text-zinc-200/70 text-sm">{track.artist}</span>
                <span className="text-zinc-300/70 text-xs italic mt-1">{track.album}</span>
            </div>
        </motion.a>
    );
};