import Header from "./Header";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-auto flex flex-col bg-cover bg-no-repeat lg:bg-home-bg md:bg-home-tablet bg-home-mobile">
      <Header />
      <div className="flex lg:flex-row items-center justify-around flex-col">
        <div className="w-[40rem] lg:mr-4 flex flex-col items-center">
          <h2 className="h-[2.125rem] lg:mt-[10rem] mt-[5rem] font-condensed text-[1.25rem] md:text-lg text-sm text-home-head">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h2 className="font-belle md:text-[10rem] lg:text-[8rem] text-[4.5rem] text-white">SPACE</h2>
          <p className="lg:ml-[10rem] text-home-head font-barlow md:text-lg text-md w-[19rem] md:w-[30rem]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience.
          </p>
        </div>
        <div className=" lg:w-[15rem] md:w-[20rem] w-[10rem] lg:h-[15rem] md:h-[20rem] h-[10rem] lg:mt-[13rem] mt-[3rem] md:mt-[5rem] lg:mr-[8rem] bg-white rounded-full items-center flex flex-col justify-center">
          <p className="text-2xl uppercase leading-10 font-belle font-normal tracking-wider text-gray-800">
            Explore
          </p>
        </div>
      </div>
    </div>
  );
}
