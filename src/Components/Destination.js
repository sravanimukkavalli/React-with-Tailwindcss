import Header from "./Header";
import { useState } from "react";

const destinationData = [
  {
    id: 0,
    title: "moon",
    imageUrl: "/images/image-moon.webp",
    imageUrl2: "/images/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    distance: "384,400 KM",
    time: "3 DAYS",
  },
  {
    id: 1,
    title: "mars",
    imageUrl: "/images/image-mars.webp",
    imageUrl2: "/images/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 MONTHS",
  },
  {
    id: 2,
    title: "europa",
    imageUrl: "/images/image-europa.webp",
    imageUrl2: "/images/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 YEARS",
  },
  {
    id: 3,
    title: "titan",
    imageUrl: "/images/image-titan.webp",
    imageUrl2: "/images/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 YEARS",
  },
];

export default function Destination() {
  const [activeDestination, updateDestination] = useState(0);
  const displayDestination = destinationData[activeDestination];
  console.log(activeDestination);
  return (
    <div className="h-screen w-screen overflow-y-auto overflow-hidden flex flex-col bg-cover bg-no-repeat lg:bg-destination-bg md:bg-destination-tablet bg-destination-mobile">
      <Header />
      <div className="h-[23.875rem] top-[12.938rem] lg:left-[15rem] flex flex-col align-center">
        <h1 className="uppercase text-lg leading-8 tracking-wider lg:ml-[18rem] ml-[5rem] lg:mt-20 mt-10 font-condensed text-white">
          <span className=" mix-blend-normal pr-3 opacity-25 font-condensed">
            01
          </span>
          Pick your destination
        </h1>
        <div className="flex lg:flex-row flex-col lg:ml-[10rem] justify-center items-center lg:w-[60rem] md:w-[50rem] w-[25rem]">
          <img
            src={`${displayDestination.imageUrl}`}
            alt={displayDestination.title}
            className="md:w-80 w-40 md:pt-10 pt-3 lg:ml-[6.25rem] lg:mt-10 mt-2 hidden lg:flex"
          />
          <img
            src={`${displayDestination.imageUrl2}`}
            alt={displayDestination.id}
            className="md:w-80 w-40 md:pt-10 pt-3 lg:ml-[6.25rem] lg:mt-10 mt-2 lg:hidden"
          />
          <div className="flex flex-col justify-center items-center lg:ml-[8.25rem] mt-[1.25rem] mb-10">
            <ul className="flex flex-row justify-between md:w-[23.75rem] w-[15rem] font-condensed lg:text-sm text-md uppercase text-white">
              {destinationData.map((each) => (
                <li key={each}>
                  <button
                    className="uppercase  hover:border-b-2 hover:border-white hover:border-spacing-2"
                    onClick={(e) => updateDestination(each.id)}
                  >
                    {each.title}
                  </button>
                </li>
              ))}
            </ul>
            <h1 className="font-belle lg:text-8xl md:text-7xl text-6xl md:pt-10 pt-4 uppercase text-white">
              {displayDestination.title}
            </h1>
            <p className="text-home-head font-barlow md:pl-3 w-[20rem] md:w-[30rem]">
              {displayDestination.description}
            </p>
            <hr className="mt-10 lg:w-[20rem] md:w-[30rem] w-[16rem]" />
            <div className="flex md:flex-row flex-col justify-around items-center md:mt-10 mt-3 md:w-[30rem]">
              <div className="flex flex-col">
                <p className="text-home-head text-xl font-condensed">
                  AVG. Distance
                </p>
                <p className="font-belle md:text-lg text-2xl text-white md:pl-3 pt-2">
                  {displayDestination.distance}
                </p>
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <p className="text-home-head text-xl font-condensed">
                  EST. TRAVEL TIME
                </p>
                <p className="font-belle md:text-lg text-2xl text-white md:pl-5 pl-8 pt-2">
                  {displayDestination.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
