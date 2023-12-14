const SongList = ({ song, getSongData }) => {
  return (
    <div
      className="flex items-start bg-[#10368395] rounded-md px-3 py-3 cursor-pointer"
      onClick={() => getSongData(song)}
    >
      <img
        src={song.images?.coverarthq}
        alt="Song Cover"
        className="w-16 h-16 rounded-md object-cover"
      />
      <div className="flex flex-col px-8 gap-1 text-left">
        <h4 className="font-poppins text-white text-xl font-medium">
          {song.title}
        </h4>
        <h5 className="font-poppins text-white text-sm font-normal">
          {song.subtitle}
        </h5>
      </div>
    </div>
  );
};

export default SongList;
