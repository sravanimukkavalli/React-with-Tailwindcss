import Header from "./Header";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const crewData = [
  {
    id: 0,
    name: "Douglas Hurley",
    role: "Commander",
    imageUrl: "/images/image-douglas-hurley.webp",
    imageUrl2: "/images/image-douglas-hurley.png",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 1,
    role: "Mission Specialist",
    name: "MARK SHUTTLEWORTH",
    imageUrl: "/images/image-mark-shuttleworth.webp",
    imageUrl2: "/images/image-mark-shuttleworth.png",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 2,
    name: "Victor Glover",
    role: "PILOT",
    imageUrl: "/images/image-victor-glover.webp",
    imageUrl2: "/images/image-victor-glover.png",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.  ",
  },
  {
    id: 3,
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    imageUrl: "/images/image-anousheh-ansari.webp",
    imageUrl2: "/images/image-anousheh-ansari.png",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export default function Crew() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items1 = crewData.map((item, index) => (
    <div
      key={index}
      className="flex lg:flex-row flex-col lg:w-[50rem] md:w-[50rem] w-[25rem] h-auto lg:h-[23rem] justify-center items-center lg:ml-[15rem] md:ml-[6rem]"
      data-value="1"
    >
      <div className="flex flex-col justify-center items-center md:mt-[1rem] md:mr-[10rem] mr-[2rem] md:h-[18rem] h-auto">
        <h2 className="font-belle md:text-2xl text-xl pt-5 uppercase text-home-head">
          {item.role}
        </h2>
        <h1 className="font-belle md:text-4xl text-2xl pt-5 uppercase text-white">
          {item.name}
        </h1>
        <p className="text-home-head lg:w-96 md:w-160 w-80 mr-13 md:ml-20 lg:ml-15 font-barlow md:text-md text-sm md:mr-20 pt-5">
          {item.description}
        </p>
      </div>
      <img
        src={`${item.imageUrl}`}
        alt={item.name}
        className="hidden lg:flex mt-[2rem] md:w-[22rem] w-[13rem] md:mr-[10rem] order-[-1] md:order-1 lg:mr-0 lg:w-[20rem] border-b-2 border-gray-400 md:h-[25rem] h-[15rem]"
      />
      <img
        src={`${item.imageUrl2}`}
        alt={item.name}
        className="lg:hidden mt-[2rem] md:w-[22rem] w-[13rem] md:mr-[10rem] order-[-1] md:order-1 lg:mr-0 lg:w-[20rem] border-b-2 border-gray-400 md:h-[25rem] h-[15rem]"
      />
    </div>
  ));

  //   const items = [
  //     <div
  //       className="flex flex-row w-100 h-60 justify-center items-center ml-[8.25rem] mt-[1rem]"
  //       data-value="1"
  //     >
  //       <div className="flex flex-col mt-[6.25rem] mr-[10rem] h-[5.625rem]">
  //         <h2 className="font-barlow text-3xl pt-5 uppercase text-home-head">
  //           {crewData[0].role}
  //         </h2>
  //         <h1 className="font-belle  text-5xl pt-5 uppercase text-white">
  //           {crewData[0].name}
  //         </h1>
  //         <p className="text-home-head w-96 font-barlow pl-3 text-md mr-20 pt-5">
  //           {crewData[0].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[0].imageUrl}`}
  //         alt={crewData[0].name}
  //         className="mt-[8rem] w-[20rem] h-[25rem]"
  //       />
  //     </div>,
  //     <div
  //       className="flex flex-row w-100 h-60 mt-[10.25rem] justify-center items-center ml-[8.25rem]"
  //       data-value="2"
  //     >
  //       <div className="flex flex-col h-[5.625rem] mr-[10rem] mt-[6.25rem]">
  //         <h2 className="font-barlow text-3xl pt-5 uppercase text-home-head">
  //           {crewData[1].role}
  //         </h2>
  //         <h1 className="font-belle text-5xl pt-5 uppercase text-white">
  //           {crewData[1].name}
  //         </h1>
  //         <p className="text-home-head font-barlow w-96 pl-3 text-md mr-20 pt-5">
  //           {crewData[1].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[1].imageUrl}`}
  //         alt={crewData[1].name}
  //         className="mt-[23rem] w-[25.504rem]"
  //       />
  //     </div>,
  //     <div
  //       className="flex flex-row w-100 h-60 mt-[10.25rem] justify-center items-center ml-[8.25rem]"
  //       data-value="3"
  //     >
  //       <div className="flex flex-col h-[5.625rem] mr-[10rem] mt-[6.25rem]">
  //         <h2 className="font-barlow text-3xl pt-5 uppercase text-home-head">
  //           {crewData[2].role}
  //         </h2>
  //         <h1 className="font-belle text-5xl pt-5 uppercase text-white">
  //           {crewData[2].name}
  //         </h1>
  //         <p className="text-home-head font-barlow w-96 pl-3 text-md mr-20 pt-5">
  //           {crewData[2].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[2].imageUrl}`}
  //         alt={crewData[2].name}
  //         className="mt-[15rem] w-[25.504rem]"
  //       />
  //     </div>,
  //     <div className="flex flex-row w-100 justify-center items-center mt-[4.24rem] ml-[8.25rem]">
  //       <div className="flex flex-col h-[5.625rem] mt-[6.25rem] mr-[10rem] ">
  //         <h2 className="font-barlow text-3xl pt-5 uppercase text-home-head">
  //           {crewData[3].role}
  //         </h2>
  //         <h1 className="font-belle text-5xl pt-5 uppercase text-white">
  //           {crewData[3].name}
  //         </h1>
  //         <p className="text-home-head font-barlow w-96 pl-3 text-md mr-20 pt-5">
  //           {crewData[3].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[3].imageUrl}`}
  //         alt={crewData[3].name}
  //         className="mt-[15rem] w-[15rem]"
  //       />
  //     </div>
  //   ];

  //   const items = [
  //     <div
  //       className="item flex flex-row w-100 justify-center items-center ml-[8.25rem] h-90"
  //       data-value="1"
  //     >
  //       <div className="flex flex-col h-64 w-100 items-center">
  //         <h2 className="font-barlow text-xl pt-10 uppercase text-home-head">
  //           {crewData[0].role}
  //         </h2>
  //         <h1 className="font-belle text-2xl pt-5 uppercase text-white">
  //           {crewData[0].name}
  //         </h1>
  //         <p className="text-home-head font-barlow pl-3 text-md mr-20 pt-5">
  //           {crewData[0].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[0].imageUrl}`}
  //         alt={crewData[0].name}
  //         className="w-40 ml-10"
  //       />
  //     </div>,
  //     <div
  //       className="item flex flex-row w-100 justify-center items-center ml-[8.25rem] h-60"
  //       data-value="2"
  //     >
  //       <div className="flex flex-col h-64 w-100 items-center">
  //         <h2 className="font-barlow text-xl pt-10 uppercase text-home-head">
  //           {crewData[1].role}
  //         </h2>
  //         <h1 className="font-belle text-2xl pt-10 uppercase text-white">
  //           {crewData[1].name}
  //         </h1>
  //         <p className="text-home-head font-barlow pl-3 text-md mr-20 pt-10">
  //           {crewData[1].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[1].imageUrl}`}
  //         alt={crewData[1].name}
  //         className="ml-10 w-40"
  //       />
  //     </div>,
  //     <div
  //       className="item flex flex-row w-100 justify-center items-center ml-[8.25rem] h-60"
  //       data-value="3"
  //     >
  //       <div className="flex flex-col h-64 w-100 items-center">
  //         <h2 className="font-barlow text-xl pt-10 uppercase text-home-head">
  //           {crewData[2].role}
  //         </h2>
  //         <h1 className="font-belle text-2xl pt-10 uppercase text-white">
  //           {crewData[2].name}
  //         </h1>
  //         <p className="text-home-head font-barlow pl-3 text-md mr-20 pt-10">
  //           {crewData[2].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[2].imageUrl}`}
  //         alt={crewData[2].name}
  //         className="ml-10 w-40"
  //         data-value="4"
  //       />
  //     </div>,
  //     <div className="item flex flex-row w-100 justify-center items-center ml-[8.25rem] h-60">
  //       <div className="flex flex-col h-64 w-100 items-center">
  //         <h2 className="font-barlow text-xl pt-10 uppercase text-home-head">
  //           {crewData[3].role}
  //         </h2>
  //         <h1 className="font-belle text-2xl pt-10 uppercase text-white">
  //           {crewData[3].name}
  //         </h1>
  //         <p className="text-home-head font-barlow pl-3 text-md mr-20 pt-10">
  //           {crewData[3].description}
  //         </p>
  //       </div>
  //       <img
  //         src={`${crewData[3].imageUrl}`}
  //         alt={crewData[3].name}
  //         className="ml-10 w-40"
  //       />
  //     </div>,
  //   ];

  return (
    <div className="h-screen w-screen overflow-hidden overflow-y-auto flex flex-col justify-start bg-cover bg-no-repeat lg:bg-crew-bg md:bg-crew-tablet bg-crew-mobile">
      <Header />
      <div className="lg:mt-[5rem] mt-[2rem] lg:ml-[19rem] flex flex-col justify-start">
        <h1 className="uppercase text-lg leading-8 tracking-wider ml-12 font-condensed text-white">
          <span className=" mix-blend-normal pr-3 opacity-25 font-condensed">
            02
          </span>
          MEET YOUR CREW
        </h1>
      </div>
      <div className="mt-[0rem]">
        <AliceCarousel
          autoPlay
          infinite
          disableButtonsControls
          mouseTracking
          items={items1}
          responsive={responsive}
        />
      </div>
    </div>
  );
}
