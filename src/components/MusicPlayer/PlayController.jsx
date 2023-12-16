import { useRef } from "react";
import {
  BiPlayCircle,
  BiPauseCircle,
  BiSkipPreviousCircle,
  BiSkipNextCircle,
} from "react-icons/bi";
import SeekBar from "./SeekBar";

const PlayController = ({
  audioElement,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    if (!clickRef.current) return;

    let width = clickRef.current.clientWidth; // width
    let clickX = e.nativeEvent.offsetX; // offset

    let divProgress = (clickX / width) * 100; // percentage
    audioElement.current.currentTime = (divProgress * currentSong.length) / 100; // current time
  };

  const previousSong = () => {
    const index = songs.findIndex(
      (x) => x.hub?.actions[1].uri == currentSong.uri
    );
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1].hub?.actions[1]);
    } else {
      setCurrentSong(songs[index - 1].hub?.actions[1]);
    }
    audioElement.current.currentTime = 0;

    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const nextSong = () => {
    const index = songs.findIndex(
      (x) => x.hub?.actions[1].uri == currentSong.uri
    );
    if (index == songs.length - 1) {
      setCurrentSong(songs[0].hub?.actions[1]);
    } else {
      setCurrentSong(songs[index + 1].hub?.actions[1]);
    }
    audioElement.current.currentTime = 0;

    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="controls container flex items-center justify-center gap-5">
        <BiSkipPreviousCircle
          className="text-white hover:text-[#103783] text-3xl cursor-pointer"
          onClick={previousSong}
        />
        {isPlaying ? (
          <BiPauseCircle
            className="text-white hover:text-[#103783] text-5xl cursor-pointer"
            onClick={playPause}
          />
        ) : (
          <BiPlayCircle
            className="text-white hover:text-[#103783] text-5xl cursor-pointer"
            onClick={playPause}
          />
        )}
        <BiSkipNextCircle
          className="text-white hover:text-[#103783] text-3xl cursor-pointer"
          onClick={nextSong}
        />
      </div>
      <SeekBar
        currentSong={currentSong}
        checkWidth={checkWidth}
        clickRef={clickRef}
      />
    </>
  );
};

export default PlayController;
