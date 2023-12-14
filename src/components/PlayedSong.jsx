const PlayedSong = ({ currentSong }) => {
  return (
    <div className="card flex items-start bg-[#10368395] rounded-md px-6 py-6 text-left">
      {currentSong ? (
        <>
          <img
            src={currentSong.images.coverarthq}
            alt="Song Cover"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="flex flex-col px-8 gap-1 text-left">
            <h4 className="font-poppins text-white text-xl font-medium">
              {currentSong.title}
            </h4>
            <h5 className="font-poppins text-white text-sm font-normal">
              {currentSong.subtitle}
            </h5>
          </div>
        </>
      ) : (
        <div className="flex flex-col px-8 gap-1 text-left">
          <h4 className="font-poppins text-white text-xl font-medium">
            No Song's Playing
          </h4>
        </div>
      )}
    </div>
  );
};

export default PlayedSong;
