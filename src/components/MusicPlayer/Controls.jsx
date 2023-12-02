import PlayController from "./PlayController";
import SeekBar from "./SeekBar";
const Controls = () => {
  return (
    <div className="controller flex flex-col items-center justify-center bg-slate-300 bg-opacity-40 rounded-md px-2 py-4 gap-3 h-full">
      <PlayController />
      <SeekBar />
    </div>
  );
};

export default Controls;
