import React from "react";
import AdminPanel from "../../public/assets/projects/AdminPanel.png";
import CarRental from "../../public/assets/projects/CarRental.png"
import educationalWebsiteProject from "../../public/assets/projects/educationalWebsiteProject.png"
import Blog from "../../public/assets/projects/Blog.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8">

        <ProjectItem
          title="Admin Panel"
          backgroundImg={AdminPanel}
          projectUrl="/adminPanel"
        />

        <ProjectItem
          title="Car Rental System"
          backgroundImg={CarRental}
          projectUrl="/carRental"
        />

        <ProjectItem
          title="Educational Website"
          backgroundImg={educationalWebsiteProject}
          projectUrl="/educationalWebSite"
        />

        <ProjectItem
          title="Blog Site"
          backgroundImg={Blog}
          projectUrl="/blogSite"
        />

        
      </div>
    </div>
  );
};

export default Projects;
