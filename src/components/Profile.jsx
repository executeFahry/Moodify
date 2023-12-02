import ProfileImage from "../assets/images/icons/profile_account.svg";

const Profile = () => {
  return (
    <div className="flex items-center justify-center md:w-36 sm:w-28 rounded-full bg-gradient-to-tr mt-5 mb-10">
      <img src={ProfileImage} alt="Profile Icon" className="p-7 min-w-full" />
    </div>
  );
};
export default Profile;
