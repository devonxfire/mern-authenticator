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
        {" "}
        Setup: We commence by installing React.js and seamlessly integrating
        Tailwind CSS. Delve into the power of React Router Dom's newest release
        to establish a robust routing system and create authentication pages
        that lay the groundwork for our feature-rich application.
      </p>{" "}
      <h4>2. Authentication Mastery</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Our application supports email and password authentication via JSON Web
        Tokens, delivering secure user experiences. Additionally, we'll explore
        the integration of Google OAuth for seamless sign-ins.
      </p>
      <h4>3. Efficient State Management with Redux Toolkit</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Discover the convenience of Redux Toolkit for streamlined state
        management, enabling you to effortlessly maintain global states.
      </p>
      <h4>4. Ironclad Profile Pages</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        Certain pages, such as the profile page, receive dual layers of
        protection both on the client and backend sides ensuring the utmost
        security for your application.
      </p>
      <h4>5. Dynamic Profile Management</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        {" "}
        Unleash the power to update user profiles, encompassing usernames,
        emails, and passwords. We'll even delve into image profile updates
        utilising Firebase Storage.
      </p>
      <h4>6.Account Deletion</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        {" "}
        Learn the art of safely deleting user accounts, complete with checks for
        JSON Web Token cookies.
      </p>
      <h4>7. Masterful CRUD Operations</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        {" "}
        Dive into the intricacies of Create, Read, Update, and Delete (CRUD)
        operations using MongoDB, enabling you to interact effectively with your
        database.
      </p>
      <h4>8. Deployment and Sharing</h4>
      <p className="mb-4  text-xs sm:text-sm leading-relaxed">
        {" "}
        Finally, we'll harness Render to deploy your full-stack authentication
        app, all without cost. Share it with others or add it to your portfolio
        to showcase your newly acquired skills. The prerequisites for this
        course are simple: a basic understanding of JavaScript and React. If
        your excitement matches ours in building this dynamic application, let's
        embark on your journey toward becoming a full-stack authentication
        expert!
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
