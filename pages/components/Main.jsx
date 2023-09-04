import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">From wireframes to web pages, I bring dreams to the digital realm</p>
            <h1 className="py-4 text-gray-700">Hii, I'm <span className="text-[#5651e5]">Samadhi</span> </h1>
            <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">I'm a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive front-end applications while learning back-end technologies. </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin/>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsPersonLinesFill />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
