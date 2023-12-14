import { useEffect, useRef, useState } from "react";
import PlayController from "./PlayController";
import { useSongs } from "../../services/store";

const Controls = () => {
  const [songs, setSongs] = useSongs();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0].hub?.actions[1]);

  const audioElement = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElement.current.duration;
    const currentTime = audioElement.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };
  return (
    <div className="controller flex flex-col items-center justify-center bg-slate-300 bg-opacity-40 rounded-md px-2 py-4 gap-3 h-full">
      <audio
        src={currentSong.uri}
        ref={audioElement}
        onTimeUpdate={onPlaying}
      ></audio>
      <PlayController
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElement={audioElement}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default Controls;
