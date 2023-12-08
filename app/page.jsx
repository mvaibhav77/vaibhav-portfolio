import { Kiwi_Maru, Inconsolata } from "next/font/google";
import Image from "next/image";
import Photo from "./assets/Photo.jpg";

const kiwi = Kiwi_Maru({ subsets: ["latin"], weight: "400" });
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="h-screen md:h-fit w-full absolute top-0 left-0 bg-cover bg-no-repeat bg-top-right bg-center overflow-hidden bg-blend-screen  bg-[url('/bg-static.png')] z-0 p-8 pt-28 md:flex md:flex-col grid grid-cols-2 gap-4">
      <div
        className={`${inconsolata.className} info flex flex-col w-4/5 mx-auto md:ml-2 `}
      >
        <div className="code-secondary text-gray-400">
          <div>{"<html>"}</div>
          <div className="pl-6">{"<body>"}</div>
          <div className="mt-8 mb-0 pl-12">{"<h1>"}</div>
        </div>
        <h1 className="code-primary text-[5em]  md:text-[3em] p-0 m-0 flex flex-col">
          <div className="p-2 pt-0 pl-20 pb-0">Hi,</div>
          <div className="p-2 pl-20 pt-0">
            I&apos;m <span className="font-bold">Vaibhav.</span>
          </div>
          <div className="p-2 pl-20 text-[0.6em]">Full Stack Developer</div>
        </h1>
        <div className="code-secondary text-gray-400 mt-0">
          <div className="mb-0 pl-[34rem] md:pl-64">{"</h1>"}</div>
          <div className="pl-12">
            {"<p>"}
            <br />
            <span className="pl-6 font-bold text-white text-[2em] md:text-xl whitespace-nowrap">
              Let me take you ahead.
            </span>
            <br />
            <span className="pl-[20rem] md:pl-60">{"</p>"}</span>
          </div>
          <div className="pl-6 mt-8">{"</body>"}</div>
          <div className="">{"</html>"}</div>
        </div>
      </div>
      <div className="profile-pic border-4 border-[#6a4692] rounded-full p-2 h-fit w-fit mx-auto my-auto">
        <div className="photo-container h-fit w-fit border-4 border-[#6a4692] rounded-full overflow-hidden">
          <Image
            src={Photo}
            alt="Vaibhav Shukla"
            className="max-h-[400px] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
