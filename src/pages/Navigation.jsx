import HomeBar from "../components/HomeBar";
import Profile from "../components/Profile";
import SearchBar from "../components/SearchBar";

const Navigation = () => {
  return (
    <div className="card flex flex-col items-center bg-slate-300 bg-opacity-40 rounded-md px-2 py-4 gap-3 h-full">
      <h1 className="font-poppins text-white text-2xl font-extrabold md:text-3xl">
        NAVIGATION
      </h1>
      <Profile />
      <HomeBar />
      <SearchBar />
    </div>
  );
};

export default Navigation;
