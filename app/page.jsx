import { Kiwi_Maru, Inconsolata } from "next/font/google";

const kiwi = Kiwi_Maru({ subsets: ["latin"], weight: "400" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className=" h-screen w-full  absolute top-0 left-0 bg-cover bg-no-repeat bg-top-right md:bg-center overflow-x-hidden	bg-blend-screen  bg-[url('/bg-static.png')] z-0 p-8 pt-36 flex flex-col md:flex-col">
      <div
        className={`${inconsolata.className} info flex flex-col w-4/5 mx-auto`}
      >
        <div className="code-secondary">
          <span>{"<html>"}</span>
          <br />
          <span className="p-4 pl-6">{"<body>"}</span>
        </div>
        <div className="code-primary text-[5em]">
          <span className="p-2 pl-20">Hi,</span>
          <br />
          <span className="p-2 pl-20">{"I'm Vaibhav!"}</span>
        </div>
      </div>
      <div className="profile-pic"></div>
    </div>
  );
}
