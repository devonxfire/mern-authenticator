import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import padlock from "../assets/verified.png";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex items-center gap-2 text-xl">
          {/* <FaLock className="text-2xl text-slate-700" /> */}
          <img src={padlock} alt="logo" className="h-10 w-10 " />
          <h1 className="text-3xl text-slate-500">
            <span className="text-slate-700 font-light">Authenticator</span>
            <span className="font-semibold">App</span>
          </h1>
        </Link>

        <ul className="flex gap-4 text-slate-600">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Me</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
