import React, { createContext, useState, useContext } from "react";

// Create the Songs context
const SongsContext = createContext();

export const useSongs = () => {
  const { songs } = useContext(SongsContext);
  return songs;
};

export const useUpdateSongs = () => {
  const { updateSong } = useContext(SongsContext);
  return updateSong;
};

// Create a provider component for Songs
export const SongsProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  // Function to add a song to the context
  const updateSong = (song) => {
    setSongs([...songs, song]);
  };

  // Value object to be provided by the context
  const value = {
    songs,
    updateSong,
  };

  return (
    <SongsContext.Provider value={value}>{children}</SongsContext.Provider>
  );
};

// Create the Mood context
const MoodContext = createContext();

export const useMood = () => {
  const { mood } = useContext(MoodContext);
  return mood;
};

export const useUpdateMood = () => {
  const { updateMood } = useContext(MoodContext);
  return updateMood;
};

// Create a provider component for Mood
export const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState("");

  // Function to update the mood in the context
  const updateMood = (newMood) => {
    setMood(newMood);
  };

  // Value object to be provided by the context
  const value = {
    mood,
    updateMood,
  };

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
};
