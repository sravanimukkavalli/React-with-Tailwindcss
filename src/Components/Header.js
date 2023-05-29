import { Link } from "react-router-dom";
import { useState } from "react";

const Links = [
  { name: "home" },
  { name: "destination" },
  { name: "crew" },
  { name: "technology" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-auto w-auto lg:mt-4 mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="48"
        className="fixed mt-20 ml-5 lg:mt-0"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <img
        src={open ? "" : "/images/icon-hamburger.svg"}
        alt=""
        className="z-10 fixed right-5 top-6 cursor-pointer md:hidden"
        onClick={() => setOpen(!open)}
      />
      <hr className=" lg:w-[30rem] lg:ml-[7rem] h-[0.063rem] top-[6rem] z-2 border border-gray-400" />

      <ul
        className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 lg:w-[60rem] z-10 md:static fixed top-0 md:h-[5rem] lg:h-auto h-screen duration-500 ease-linear ${
          !open ? "right-[-100%]" : "right-0"
        }`}
      >
        <img
          src={open && "/images/icon-close.svg"}
          onClick={() => setOpen(!open)}
          alt="closeIcon"
          className="md:hidden fixed right-5 top-5 cursor-pointer"
        />
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6"
          >
            <Link
              to={`/${link.name}`}
              className="text-white text-sm md:py-5 py-3 inline-block font-normal uppercase"
            >
              <span className="font-bold mr-1.5">
                0{index} {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // <div className="left-[3.438rem] flex flex-row md:items-center items-start justify-center mt-[2rem] ml-[4rem] md:ml-[0rem]">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="100"
    //     height="48"
    //     className="md:ml-[1rem] md:mr-[3rem]"
    //   >
    //     <g fill="none" fill-rule="evenodd">
    //       <circle cx="24" cy="24" r="24" fill="#FFF" />
    //       <path
    //         fill="#0B0D17"
    //         d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
    //       />
    //     </g>
    //   </svg>
    //   <hr className=" lg:w-[30rem] h-[0.063rem] top-[6rem] z-1 border border-gray-400" />
    //   <div className="lg:w-[62.5rem] w-[10rem] h-[7rem] lg:h-[5.375rem] lg:top-[1.125rem] hidden pl-[2rem] md:pl-[0rem] md:w-[60rem] bg-light-black md:flex flex-row justify-start items-center backdrop-filter bg-opacity-4 backdrop-blur-lg">
    //     <ul className="w-[38rem] h-[1.188rem] top-[1.875rem] text-md text-white flex md:flex-row flex-col justify-center items-center">
    //       {Links.map((item, index) => (
    //         <li key={index}>
    //           <Link to={`/${item.name}`}>
    //             <p className="pl-[2rem] tracking-wider font-condensed uppercase pt-[1rem] md:inline-block border-b-2 border-transparent hover:border-white border-spacing-3 duration-300">
    //               <span className="font-bold pr-[0.25rem]">0{index}</span>
    //               {item.name}
    //             </p>
    //           </Link>
    //         </li>
    //       ))}
    //   </ul>
    // </div>
    // </div>
    /* <Link to="/"> 
            <p className="pl-[2rem] tracking-wider font-condensed">
              <span className="font-bold pr-[0.25rem]">00</span> Home
            </p>
          </Link>
          <Link to="/destination">
            <p className="pl-[3.5rem] tracking-wider font-condensed">
              <span className="font-bold pr-[0.25rem]">01</span> Destination
            </p>
          </Link>
          <Link to="/crew">
            <p className="pl-[3.5rem] tracking-wider font-condensed">
              <span className="font-bold pr-[0.25rem]">02</span> Crew
            </p>
          </Link>
          <Link to="/technology">
            <p className="pl-[3.5rem] tracking-wider font-condensed">
              <span className="font-bold pr-[0.25rem]">03</span> Technology
            </p>
          </Link> */
  );
}
