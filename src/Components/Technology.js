import { useState } from "react";
import Header from "./Header";

const technologyData = [
  {
    id: 0,
    type: "LAUNCH VEHICLE",
    imageUrl: "/images/image-launch-vehicle-portrait.jpg",
    imageUrl2: "/images/image-launch-vehicle-landscape.jpg",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 1,
    type: "SPACEPORT",
    imageUrl: "/images/image-spaceport-portrait.jpg",
    imageUrl2: "/images/image-spaceport-landscape.jpg",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 2,
    type: "SPACE CAPSULE",
    imageUrl: "/images/image-space-capsule-portrait.jpg",
    imageUrl2: "/images/image-space-capsule-landscape.jpg",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default function Technology() {
  const [activeTechnology, updateTechnology] = useState(0);
  const technology = technologyData[activeTechnology];

  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-auto flex flex-col bg-cover bg-no-repeat lg:bg-technology-bg md:bg-technology-tablet bg-technology-mobile">
      <Header />
      <div className="h-[382px] lg:mt-[5rem] mt-[4rem] lg:ml-[10rem] left-[15rem] flex flex-col">
        <h1 className="uppercase text-lg leading-8 tracking-wider ml-12 font-condensed text-white">
          <span className=" mix-blend-normal pr-3 opacity-25 font-condensed">
            03
          </span>
          SPACE LAUNCH 101
        </h1>
        <div className="flex lg:flex-row flex-col md:items-center md:mt-7 mt-4">
          <ul className="flex lg:flex-col flex-row justify-center font-condensed mt-4 md:ml-5 text-sm uppercase text-white">
            {technologyData.map((each) => (
              <li key={each.id}>
                <button
                  value={each.id}
                  className="uppercase pt-2 text-xl font-belle text-home-head bg-transparent hover:bg-white hover:text-black lg:mt-4 md:mt-7 md: ml-10 border border-gray-400 rounded-full md:w-20 w-10 h-10 md:h-20 text-center"
                  onClick={(e) => updateTechnology(e.target.value)}
                >
                  {each.id + 1}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center md:ml-20 w-auto md:items-center">
            <h2 className="font-condensed text-md md:text-xl md:pt-8 pt-4 uppercase text-home-head">
              The Terminology...
            </h2>
            <h1 className=" font-belle md:pb-4 pb-3 md:pt-8 pt-3 text-2xl md:text-4xl text-white">
              {technology.type}
            </h1>
            <p className=" text-home-head font-barlow md:text-xl text:md w-[22rem] px-3 md:w-[34rem] lg:w-auto">
              {technology.info}
            </p>
          </div>
          <img
            src={`${technology.imageUrl}`}
            alt={technology.type}
            className="md:w-80 w-90 md:h-100 h-70 md:ml-[6.25rem] hidden lg:flex order-[-1] lg:order-1"
          />
          <img
            src={`${technology.imageUrl2}`}
            alt={technology.type}
            className="w-full lg:hidden h-full order-[-1] lg:order-1"
          />
        </div>
      </div>
    </div>
  );
}
