import PreviousButton from "../../assets/images/icons/previous.svg";
import PlayButton from "../../assets/images/icons/play.svg";
import NextButton from "../../assets/images/icons/next.svg";

const PlayController = () => {
  return (
    <div className="container flex items-center justify-center gap-8">
      <button className="w-5">
        <img src={PreviousButton} alt="Previous" />
      </button>
      <button className="w-10">
        <img src={PlayButton} alt="Play" />
      </button>
      <button className="w-5">
        <img src={NextButton} alt="Next" />
      </button>
    </div>
  );
};
export default PlayController;
