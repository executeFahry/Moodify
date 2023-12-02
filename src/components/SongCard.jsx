const SongCard = () => {
  return (
    <div className="card flex items-start bg-[#10368395] rounded-md px-6 py-6">
      <img
        src="https://placehold.co/200x200"
        alt="Album Artwork"
        className="w-32 h-32 rounded-md object-cover"
      />
      <div className="flex flex-col items-start px-8 gap-1">
        <h4 className="font-poppins text-white text-xl font-medium">
          SONG TITLE
        </h4>
        <h5 className="font-poppins text-white text-sm font-normal">ARTIST</h5>
        <p className="font-poppins text-white text-xs font-normal text-left mt-2">
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, sed
          repellendus minima atque exercitationem, possimus amet optio, omnis
          quam magni est veniam porro ex magnam quos natus adipisci laboriosam
          sapiente unde fugit ut. Ipsam, perspiciatis itaque quas tempore
          expedita doloremque rem alias hic aspernatur consequuntur quisquam
          dicta pariatur adipisci repellendus! Error commodi dolorem, saepe
          optio, quidem ex aut enim unde quas consequuntur illum architecto.
          Ratione fugiat voluptas, repellat alias iste accusamus earum
          reiciendis accusantium, a commodi qui adipisci vitae laudantium."
        </p>
      </div>
    </div>
  );
};

export default SongCard;
