import Navigation from "./Navigation";
import NowPlaying from "./NowPlaying";
import Controls from "../components/MusicPlayer/Controls";

const MusicPlayer = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mx-5">
      <div className="col-span-1">
        <Navigation />
      </div>
      <div className="col-span-3">
        <NowPlaying />
      </div>
      <div className="col-span-4">
        <Controls />
      </div>
    </div>
  );
};

export default MusicPlayer;
