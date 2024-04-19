import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const LeftImg = () => {
  return (
    <div className=" py-14 px-2 " id="overview">
      <h2 className="text-3xl text-black font-semibold text-center mb-10 ">
        CONNECTED LIVING
      </h2>
      <div className="flex flex-wrap  gap-4  items-center justify-between">
        <div className="flex flex-col w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(40%_-_17px)] gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap order-2 lg:order-1">
          <p className="break-all">
            Explore unparalleled luxury at Select Six Senses Residences Dubai
            Marina, a masterpiece brought to life through the visionary
            collaboration of Six Senses and Select Group. As the{" "}
            <span className="font-semibold">
              world's tallest residential tower
            </span>
            , it sets a new standard for ultra-luxurious living with its
            cutting-edge wellness facilities, superb location, and architectural
            grandeur. Immerse yourself in the pinnacle of refinement and a
            dynamic lifestyle in the heart of Dubai Marina.
          </p>
          <p className="break-all">
            Architectural Brilliance: A fusion of innovative design and{" "}
            <span className="font-semibold">eco-friendly construction</span>{" "}
            practices.
          </p>
          <p className="break-all">
            Seamless Connectivity: Ideally{" "}
            <span className="font-semibold">situated in Dubai Marina </span>,
            providing effortless access to Dubai's iconic landmarks
            and lifestyle hubs
          </p>
        </div>

        <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  order-1 lg:order-2">
          <img
            src={"/assets/building/pentominium-6581_xl2.jpg"}
            className="object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftImg;
