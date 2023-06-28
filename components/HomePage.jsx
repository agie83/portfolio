import Link from "next/link";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ConnectBox from "./ConnectBox";
import Image from "next/image";
import aaePic from "../public/assets/me.jpg";
import ConnectButton from "./ConnectButton";

const HomePage = () => {
  const icons = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/agnes-edina-agocs/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/agie83",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      url: "/#contact",
    },
  ];
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center py-8 pt-20 md:py-auto">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            <Image
              className="rounded-full"
              src={aaePic}
              alt=""
              width="200"
              height="200"
            />
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-main-color"> Agi</span>
          </h1>
          {/* <p className="uppercase">A Fullstack Web Developer</p> */}

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive web applications.
          </p>
          <div className="flex items-center justify-evenly max-w-[330px] m-auto py-4">
            {/* <ConnectBox
              iconList={[FaLinkedinIn, FaGithub, MdOutlineAlternateEmail]}
            /> */}
            {icons.map((iconItem, index) => (
              <div
                key={index}
                className="flex w-full sm:w-[80%] justify-center items-center my-4 text-[#d9379a]"
              >
                <a
                  href={iconItem.url}
                  target={iconItem.url.indexOf("#") === -1 ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex flex-row gap-2 items-center justify-center"
                >
                  <ConnectButton icon={iconItem.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
