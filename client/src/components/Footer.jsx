import { FaHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="opacity-50 text-xs text-center  mt-auto  text-slate-400 font-extralight p-2 ">
      <p>Development by Devon Martindale &#169;{new Date().getFullYear()} </p>
      <p>
        Contact me:{" "}
        <a href="mailto:devonmartindale@gmail.com">devonmartindale@gmail.com</a>
      </p>{" "}
      <p className="flex items-center gap-1 pt-2 font-bold justify-center">
        MERN <FaHeart className="text-pink-700" />
      </p>
    </div>
  );
}
