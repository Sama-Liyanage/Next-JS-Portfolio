import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-0">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-">About</p>
          <h2>Who I am</h2>
          <p>
            I'm an aspiring frontend developer eagerly setting off on a coding
            journey. Although I'm at the beginning of my adventure, I tackle
            each challenge with boundless enthusiasm and a deep thirst for
            knowledge. My foundation includes HTML, CSS, and JavaScript, and I'm
            excited to explore frameworks like React. I believe that the path to
            mastery is illuminated by curiosity, unwavering dedication, and a
            wholehearted embrace of every learning opportunity that crosses my
            path. I'm thrilled to be on this journey of growth and discovery in
            the dynamic world of technology!
          </p>
          <p>Check out more of my latest projects.</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGxhcHRvcCUyMGZyb250ZW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </div>
  );
};

export default About;
