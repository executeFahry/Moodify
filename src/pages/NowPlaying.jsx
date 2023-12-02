import React, { useState } from "react";
import SongCard from "../components/SongCard";
import SongList from "../components/SongList";
import { useMood, useSongs } from "../services/store";

const NowPlaying = () => {
  const songs = useSongs();
  const mood = useMood();

  return (
    <div className="container flex flex-col text-center bg-slate-300 bg-opacity-40 rounded-md px-2 py-4 gap-3 h-full">
      <h1 className="font-poppins text-white text-2xl md:text-3xl font-extrabold">
        NOW PLAYING
      </h1>
      <SongCard />
      <p className="text-left font-poppins text-white text- font-semibold">
        Next From: {mood}
      </p>
      {songs[0].map((song, i) => (
        <SongList song={song} key={i} />
      ))}
    </div>
  );
};

export default NowPlaying;
