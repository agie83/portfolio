import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="w-full max-w-[1240px] m-auto px-2  py-8 pt-16 md:py-20 ">
        <p className="text-xl tracking-widest uppercase text-main-color mt-5">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full p-2">
            <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-sm hover:scale-105 ease-in duration-300 ">
              <Image src={ContactImg} alt="/" />
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto lg:p-4 text-center">
            <p className="pt-4">
              I am available for freelance or full-time positions.
            </p>
            <p className="py-4">
              If you are interested in hiring me for your project
              <br /> please send me an email or contact me via linkedin.
            </p>
            <div className="flex flex-col items-center py-4 mt-5 gap-6 w-56 mx-auto">
              <a
                href="https://www.linkedin.com/in/agnes-edina-agocs/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 items-center self-start"
              >
                <span className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 w-[40px] h-[40px]">
                  <FaLinkedinIn className="text-main-color" />
                </span>
                <span>agnes-edina-agocs</span>
              </a>
              <div className="flex flex-row gap-2 items-center self-start">
                <span className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 w-[40px] h-[40px]">
                  <MdOutlineAlternateEmail className="text-main-color" />
                </span>
                <span>agnes.agocs@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
