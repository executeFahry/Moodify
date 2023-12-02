import Colors from "../components/Colors";

const Home = () => {
  return (
    <div className="container box-border flex flex-col justify-center items-center gap-5 min-w-full font-sans">
      <h1 className="text-white font-extrabold text-3xl xs:text-5xl drop-shadow-2xl mb-3 text-center tracking-wider">
        MOODY
      </h1>
      <h1 className="text-white font-extrabold text-3xl xs:text-5xl drop-shadow-2xl mb-3 text-center">
        MUSIC PLAYER
      </h1>
      <p className="text-white font-extrabold text-xl xs:text-3xl drop-shadow-md mb-10 text-center">
        Choose your mood color here:
      </p>
      <Colors />
    </div>
  );
};

export default Home;
