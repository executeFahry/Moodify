const SeekBar = ({ currentSong, checkWidth, clickRef }) => {
  return (
    <div className="seek_bar w-1/2">
      <div
        className="seek_bar_wrapper min-w-full bg-slate-50 h-1 rounded-lg cursor-pointer"
        ref={clickRef}
        onClick={(e) => checkWidth(e)}
        onMouseMove={(e) => checkWidth(e)}
      >
        <div
          className="seek_bar_progress w-0 h-full rounded-lg bg-blue-500"
          style={{ width: `${currentSong.progress + "%"}` }}
        ></div>
      </div>
    </div>
  );
};

export default SeekBar;
