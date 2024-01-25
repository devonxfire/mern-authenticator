import hero from "../assets/hero.jpg";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaReact, FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-6 sm:px-4  max-w-4xl py-6 min-h-screen mx-auto text-gray-600 font-extralight ">
      <h1 className="text-lg sm:text-3xl font-bold my-8 text-slate-700 text-center sm:text-start">
        Welcome to my Authenication App!
      </h1>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Utilising the latest versions of React, MongoDB, Node.js, and Express,
        this robust yet simple authentication application will let users sign
        up, sign in, sign out, delete and update their profile.{" "}
      </p>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Please play around with the application by clicking on the 'Sign Up'
        button below, or read below for more details on how this application was
        built.{" "}
      </p>
      <Link to="/sign-up">
        <div className="flex justify-center mb-8 gap-4 items-center">
          <FaRegArrowAltCircleRight className="text-3xl text-green-500 hover:opacity-80  " />
          <button className="bg-slate-700 uppercase text-white rounded-lg p-3 hover:opacity-95  font-light w-[25%] text-sm sm:text-lg">
            Sign Up
          </button>
        </div>
      </Link>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Below is an overview of the tech stack and integration of the
        application:
      </p>
      <h4>1. Frontend</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Setup: Installation of React.js was done using the Vite toolkit. Next up
        was installing and integrating the Tailwind CSS library. The React
        Router Dom package was installed to establish a robust routing system
        and create authentication pages that lay the groundwork for the
        application.
      </p>
      <h4>2. Authentication</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Our application supports email and password authentication via JSON Web
        Tokens, delivering secure user experiences. Additionally, the
        integration of Google OAuth was integrated in order to let users sign up
        or sign in via their Google account. This process utilised Firebase
        authentication.
      </p>
      <h4>3. Efficient State Management with Redux Toolkit</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Redux Toolkit was used for streamlined state management, enabling the
        app to effortlessly maintain global states.
      </p>
      <h4>4. Profile Pages</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Certain pages, such as the profile page, receive dual layers of
        protection both on the client and backend sides ensuring the utmost
        security of the application.
      </p>
      <h4>5. Dynamic Profile Management</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Authenticated users can update their profiles, encompassing usernames,
        emails, and passwords. Firebase storage was also implemented in order to
        allow image profile updates.
      </p>
      <h4>6.Account Deletion</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Users can safely delete their accounts, complete with checks for JSON
        Web Token cookies.
      </p>
      <h4>7. CRUD Operations</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        API operations such as Create, Read, Update, and Delete (CRUD)
        operations using MongoDB, enabling a seamless communication with the
        MongoDB database.
      </p>
      <h4>8. Deployment and Sharing</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Render was used to deploy the full-stack authentication app. Thank you
        for taking the time to review my app!
      </p>
      <div className="flex justify-between max-w-[60%] sm:text-4xl text-2xl mx-auto p-6 mt-12  rounded-lg ">
        <SiMongodb className="text-green-500" />
        <SiExpress className="text-yellow-400" />
        <FaReact className="text-blue-500" />
        <FaNodeJs className="text-green-500" />
      </div>
    </div>
  );
}
