import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="px-6 sm:px-2 py-6 max-w-2xl mx-auto mt-6">
      <h1 className="text-3xl font-bold my-8 text-slate-700 ">About Me</h1>
      <img
        src="https://avatars.githubusercontent.com/u/33515210?v=4"
        alt="about-me-pic"
        className="sm:w-[140px] w-[90px] rounded-full  mb-6 border-slate-200 border-2 shadow-xl mx-auto"
      />

      <div className="bg-slate-100 text-gray-600 font-extralight rounded-lg p-4 shadow-xl">
        <p className="mb-4  text-sm leading-relaxed">
          Hi there! My name is Devon Martindale, and I am a full stack developer
          specialising in the MERN stack. I love the challenge of building
          applications to satisfy both the client facing UI and functionality,
          as well as the behind the scenes backend integration.
        </p>
        <p className="mb-4  text-sm leading-relaxed">
          After the covid pandemic I decided to make make some changes to my
          life, and started coding. I had always had a keen interest in
          development and so I enrolled in a software engineering course setup
          by Hyperion Development. I decided to branch more into the frontend
          side and learnt frameworks and libraries such as React and Tailwind
          CSS, bringing life into my APIs and NodeJS applications.
        </p>
        <p className="mb-4  text-sm leading-relaxed">
          I am a creative person who enjoys creating music with my band. I live
          in sunny Cape Town South Africa with my wife and 4 furry friends, and
          I am partial to a round of golf!
        </p>
      </div>

      <p className="mb-4 text-slate-500 text-sm  font-light leading-relaxed mt-10">
        Please feel free to reach out to me for any of your development needs
        at:{" "}
        <a href="mailto:devonmartindale@gmail.com?subject=Interested in Development">
          devonmartindale@gmail.com
        </a>
        <br />
        <br />
        Or checkout my GitHub profile below:
        <br />
        <br />
        <Link
          to="https://github.com/devonxfire"
          target="_blank"
          className="flex items-center gap-2 hover:opacity-90 bg-slate-600 p-2 rounded-lg w-[50%] text-white mx-auto sm:mx-0"
        >
          <FaGithub className="w-8 h-8 " />
          <p>My GitHub Portfolio</p>
        </Link>
        <br />
        Thank you! <br />
        Devon
      </p>
    </div>
  );
}
