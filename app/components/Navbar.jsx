"use client";
import { Kiwi_Maru, Inconsolata } from "next/font/google";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const kiwi = Kiwi_Maru({ subsets: ["latin"], weight: "400" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = (e) => {
    e.preventDefault();
    setIsNavbarOpen((prevState) => !prevState);
  };
  return (
    <div
      className={`${inconsolata.className} container relative m-auto p-6 px-6 md:px-16 text-xl border-b-2 border-gray-600	z-20`}
    >
      <div className="main-menu flex flex-row items-center justify-between w-100">
        <div className={`${kiwi.className} brand text-2xl`}>
          <a href="/home">{" <Vaibhav.io> "} </a>
        </div>

        <div className="navbar">
          <button
            className="openNav pt-2 md:hidden"
            onClick={handleNavbarToggle}
          >
            <AiOutlineMenu size={28} />
          </button>
          <div className="navbar-content hidden md:block">
            <div className="links flex flex-row gap-8">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
              <a href="/me" className="hover:underline">
                Who Am I?
              </a>
              <a href="/resume" className="md:hidden">
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="resume underline hover:scale-125 hidden md:block">
          <a href="/resume" className="">
            Resume
          </a>
        </div>
      </div>

      <div
        className={`navbar-collapsed md:hidden ${
          isNavbarOpen ? "block" : "hidden"
        } flex flex-col items-center mt-4`}
      >
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/projects" className="hover:underline">
          Projects
        </a>
        <a href="/me" className="hover:underline">
          Who Am I?
        </a>
        <a href="/resume" className="md:hidden">
          Resume
        </a>
      </div>
    </div>
  );
};
