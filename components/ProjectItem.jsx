/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, place }) => {
  const imgPath = "/assets/projects/";
  const fontSize = place === "menuPage" ? "text-lg" : "text-2xl";
  const buttonTextSize = place === "menuPage" ? "text-sm" : "text-lg";
  const buttonPadding = place === "menuPage" ? "py-2" : "py-3";
  const hoverTextareaWidth = place === "menuPage" ? "w-[80%]" : "";

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-sm group gradient-bg">
      <img
        className="rounded-sm group-hover:opacity-10"
        src={imgPath + backgroundImg}
        alt="/"
      />
      <div
        className={`hidden ${hoverTextareaWidth} group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        <h3 className={`${fontSize} text-white tracking-wider text-center`}>
          {title}
        </h3>
        <p className="pb-4 pt-2 text-sm text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p
            className={`text-center ${buttonPadding} ${buttonTextSize} rounded-lg bg-white text-gray-700 font-bold  cursor-pointer`}
          >
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
