"use client";
import { Kiwi_Maru, Inconsolata } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";

const kiwi = Kiwi_Maru({ subsets: ["latin"], weight: "400" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  const handleNavbarToggle = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`${inconsolata.className} container m-auto p-6 px-6 md:px-16 flex flex-row items-center justify-between w-100 text-xl  border-b-2  border-gray-600	`}
    >
      <div className={`${kiwi.className} brand text-2xl`}>
        <a href="/home">{" <Vaibhav.io> "} </a>
      </div>

      <div className="navbar">
        <button className="openNav pt-2 md:hidden" onClick={handleNavbarToggle}>
          <AiOutlineMenu size={28} />
        </button>
        <div className="navbar-content hidden md:block">
          <div className="links flex flex-row gap-8">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/" className="hover:underline">
              Projects
            </a>
            <a href="/" className="hover:underline">
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
  );
};
