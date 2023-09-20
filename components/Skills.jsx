import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/java.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="data:image/png;base64,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"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="data:image/png;base64,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"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/js.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next Js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nodejs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node Js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/spring.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Spring</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/jquery.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JQuery</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/bootstrap.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mui.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MUI</h3>
              </div>
            </div>
          </div>


          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/ant.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ANT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Skills;
