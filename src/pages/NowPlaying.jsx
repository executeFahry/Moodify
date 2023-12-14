import { useState } from "react";
import { useMood, useSongs } from "../services/store";
import SongList from "../components/SongList";
import PlayedSong from "../components/PlayedSong";

const NowPlaying = () => {
  const songs = useSongs();
  const mood = useMood();
  const [currentSong, setCurrentSong] = useState(songs[0].hub?.actions[1]);
  const getSongData = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="container flex flex-col text-center bg-slate-300 bg-opacity-40 rounded-md px-2 py-4 gap-3 h-full">
      <h1 className="font-poppins text-white text-2xl md:text-3xl font-extrabold">
        NOW PLAYING
      </h1>
      <PlayedSong currentSong={currentSong} />
      <p className="text-left font-poppins text-white text- font-semibold">
        Next From: {mood}
      </p>
      {songs[0].map((song, index) => (
        <SongList song={song} key={index} getSongData={getSongData} />
      ))}
    </div>
  );
};

export default NowPlaying;
