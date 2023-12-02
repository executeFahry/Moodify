import Home from "../assets/images/icons/home.svg";

const HomeBar = () => {
  return (
    <button className="flex items-center bg-gradient-to-tr min-w-full p-2 p rounded-lg gap-6">
      <img src={Home} alt="Home" />
      <h1 className="font-poppins font-semibold text-white">HOME</h1>
    </button>
  );
};
export default HomeBar;
