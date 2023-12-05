export default function Home() {
  return (
    <div className="container h-screen w-screen  absolute top-0 left-0 bg-cover bg-no-repeat bg-center overflow-hidden bg-[url('/bg-static.png')] z-0 p-8 pt-36 flex flex-col md:flex-col">
      <div className="info flex flex-col">
        <div className="code-secondary">{"<html> \n \t <body>"}</div>
      </div>
      <div className="profile-pic"></div>
    </div>
  );
}
