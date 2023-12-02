import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { songs } from "../services/fetch";
import { useUpdateSongs, useUpdateMood } from "../services/store";

const Colors = () => {
  const [mood, setMood] = useState("");
  const updateSong = useUpdateSongs();
  const updateMood = useUpdateMood();

  const handleColorClick = (mood) => {
    setMood(mood);
    updateMood(mood);

    // genre decisions based on moods
    let genre = "";

    switch (mood) {
      case "Energetic":
        genre = "Hip-Hop/Rap";
        break;
      case "Optimisitic":
        genre = "Arabic Pop";
        break;
      case "Sad":
        genre = "Pop";
        break;
      case "Pessimistic":
        genre = "Dance";
        break;
      case "Angry":
        genre = "R&B/Soul";
        break;
      default:
        break;
    }

    const filteredSongs = songs.filter((song) => song.genre === genre);
    updateSong(filteredSongs);
  };

  const redirectTo = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 gap-6 xs:grid-cols-3 md:grid-cols-5">
        <button
          className="bg-red-600 hover:bg-red-700 px-10 py-10 rounded-full shadow-xl"
          onClick={() => (
            handleColorClick("Energetic"), redirectTo("/music-player")
          )}
        ></button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 px-10 py-10 rounded-full shadow-xl"
          onClick={() => (
            handleColorClick("Optimisitic"), redirectTo("/music-player")
          )}
        ></button>
        <button
          className="bg-green-500 hover:bg-green-600 px-10 py-10 rounded-full shadow-xl"
          onClick={() => (handleColorClick("Sad"), redirectTo("/music-player"))}
        ></button>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-10 py-10 rounded-full shadow-xl"
          onClick={() => (
            handleColorClick("Pessimistic"), redirectTo("/music-player")
          )}
        ></button>
        <button
          className="bg-[#2E2E2E] hover:bg-black px-10 py-10 rounded-full shadow-xl"
          onClick={() => (
            handleColorClick("Angry"), redirectTo("/music-player")
          )}
        ></button>
      </div>
    </>
  );
};

export default Colors;
