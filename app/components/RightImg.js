import Image from "next/image";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { MdVerified } from "react-icons/md";

const RightImg = () => {
  return (
    <div className=" py-14 px-2 " id="features">
      <h2 className="text-3xl text-black font-semibold text-center mb-10">
        Select Six Senses Dubai Marina Features
      </h2>
      <div className="flex flex-wrap items-center gap-8">
        <div className="w-full lg:w-1/2 xl:w-[60%]">
          <img
            src={
              "/assets/building/66113799f840660db9f54860_Six-Senses-Dubai-Mar.jpg"
            }
            className="object-cover w-full h-[500px]"
          />
        </div>

        {/* <div className="flex flex-wrap justify-center items-center w-full lg:w-[calc(50%_-_32px)] xl:w-[calc(40%_-_32px)] "> */}
        <div className="grid w-full lg:w-[calc(50%_-_32px)] xl:w-[calc(40%_-_32px)] grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" gap-1 mb-2">
            <div className="shadow-lg ">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <GrLineChart />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    17% Annual Expected Return
                  </h3>
                  <p className="text-sm">
                    Dubai Marina has been increasing at 17% per year for the
                    past 4 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2">
            <div className="shadow-lg ">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaGlobe />
                </div>
                <div>
                  <h3 className="text-lg ">Golden Visa Available</h3>
                  <p className="text-sm">
                    Any purchases above 2m AED will qualify you for the 10-year
                    UAE Golden visa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2  ">
            <div className="shadow-lg ">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <MdVerified />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Simple Booking & Payment
                  </h3>
                  <p className="text-sm">
                    To book a property only a 20% deposit is required.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" gap-1 mb-2">
            <div className="shadow-lg ">
              <div className="flex gap-4 p-4">
                <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Prime Location</h3>
                  <p className="text-sm">
                    Located in Dubai Marina - One of the most popular and
                    highest returning locations in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImg;
