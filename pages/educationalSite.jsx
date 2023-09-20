import React from "react";
import educationalWebsiteProject from "../public/assets/projects/educationalWebsiteProject.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const educationalSite = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[48vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={educationalWebsiteProject}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Educational Website</h2>
          <h3>HTML,CSS,JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            A responsive educational website created using HTML, CSS, and
            JavaScript is designed to provide an optimal user experience on
            various devices and screen sizes, such as desktop computers,
            tablets, and smartphones. It combines the power of these three
            technologies to deliver engaging and interactive educational content
          </p>
          <Link href="">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Sama-Liyanage/Car-Rental-System-Full-Project">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default educationalSite;
