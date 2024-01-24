import hero from "../assets/hero.jpg";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-6 sm:px-2 py-12 max-w-4xl mx-auto text-gray-600 font-extralight ">
      <h1 className="text-lg sm:text-3xl font-bold my-8 text-slate-700 text-center sm:text-start">
        Welcome to my Authenication App!
      </h1>
      <p className="mb-4  text-sm leading-relaxed">
        Welcome! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Soluta voluptates perspiciatis itaque, eius assumenda velit a quidem
        voluptatum temporibus non consectetur et consequuntur consequatur neque
        fugit, mollitia amet tempora in vero? Deleniti voluptates autem quisquam
        sint fugit placeat, libero, quibusdam repellendus perferendis vitae
        exercitationem explicabo facilis veritatis saepe, tempora dolorem.
      </p>

      <div className="flex justify-between max-w-[40%] text-4xl mx-auto py-4">
        <SiMongodb className="text-green-500" />
        <SiExpress className="text-yellow-400" />
        <FaReact className="text-blue-500" />
        <FaNodeJs className="text-green-500" />
      </div>

      <p className="mb-4  text-sm leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptates perspiciatis itaque, eius assumenda velit a quidem voluptatum
        temporibus non consectetur et consequuntur consequatur neque fugit,
        mollitia amet tempora in vero? Deleniti voluptates autem quisquam sint
        fugit placeat, libero, quibusdam repellendus perferendis vitae
        exercitationem explicabo facilis veritatis saepe, tempora dolorem.
      </p>
      <p className="mb-4  text-sm leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        voluptates perspiciatis itaque, eius assumenda velit a quidem voluptatum
        temporibus non consectetur et consequuntur consequatur neque fugit,
        mollitia amet tempora in vero? Deleniti voluptates autem quisquam sint
        fugit placeat, libero, quibusdam repellendus perferendis vitae
        exercitationem explicabo facilis veritatis saepe, tempora dolorem.
      </p>
    </div>
  );
}
