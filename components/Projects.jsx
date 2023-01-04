import Image from "next/image";
import Link from "next/link";
import React from "react";
// import propertyImg from '../public/assets/projects/helife.jpg';
// import cryptoImg from '../public/assets/projects/viragoutlet.jpg'
// import netflixImg from '../public/assets/projects/tuningkereskedes.jpg'
// import twitchImg from '../public/assets/projects/universumhus.jpg'
import ProjectItem from "./ProjectItem";
import { projectList } from "../lib/projectList";

const Projects = () => {
  const mainPageProjectList = projectList.filter(({ id }) => id < 5);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8 pt-16 md:py-20">
        <p className="text-xl tracking-widest uppercase text-main-color mt-5">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <p className="pb-6 px-2">
          <Link className="text-gray-700" href="/projects">
            View more
          </Link>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {mainPageProjectList.map(
            ({ title, projectUrl, bgImg, technologies }) => (
              <div key={title}>
                <ProjectItem
                  title={title}
                  backgroundImg={bgImg}
                  projectUrl={`projects/${projectUrl}`}
                  tech={technologies.join(", ")}
                  place="inFullpage"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
