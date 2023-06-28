import Image from "next/image";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ConnectBox from "./ConnectBox";
import NavList from "./NavList";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-[100] bg-[#fefefe]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <img src="/assets/aeweb-logo.png" alt="" width="125" height="67" />
        <div>
          <NavList
            ulStyle="hidden md:flex"
            liStyle="ml-10 text-sm uppercase hover:text-[#d9379a]"
            x="3"
            setNav={setNav}
          />
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#efefef] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Link href="/">
                <Image
                  src="/assets/aeweb-logo.png"
                  width="85"
                  height="46"
                  alt=""
                />
              </Link>
              <div
                className="rounded-full p-3 shadow-lg shadow-grey-400 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Some text here...</p>
            </div>
          </div>
          <div>
            <NavList
              ulStyle="flex flex-col py-4 uppercase"
              liStyle="py-4 text-sm"
              setNav={setNav}
            />
            <div className="mt-20">
              <p className="uppercase text-main-color">Let&apos;s connect</p>
              <div className="flex w-full sm:w-[80%] justify-between items-center my-4">
                <ConnectBox
                  iconList={[FaLinkedinIn, FaGithub, MdOutlineAlternateEmail]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
