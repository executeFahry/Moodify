import Home from "../assets/images/icons/search.svg";

const SearchBar = () => {
  return (
    <button className="flex items-center bg-gradient-to-tr min-w-full p-2 rounded-lg gap-6">
      <img src={Home} alt="Home" />
      <h1 className="font-poppins font-semibold text-white">SEARCH</h1>
    </button>
  );
};
export default SearchBar;
