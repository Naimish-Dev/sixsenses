import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { MdHeight, MdOutlineDeveloperBoard } from "react-icons/md";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { MdOutlineArchitecture } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { SiInstructure } from "react-icons/si";

const Specification = () => {
  return (
    <div className=" py-14 px-2 ">
      <h2 className="text-3xl text-black font-semibold text-center mb-10">
        BUILDING SPECIFICATIONS
      </h2>

      <div className="grid gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="shadow-lg ">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <GrOverview />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-sm">
                Six Senses Residences Dubai Marina is a 125-storey residential
                building under development in Dubai Marina, Dubai.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <MdOutlineDeveloperBoard />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">The Developer </h3>
              <p className="text-sm">
                The project is being developed by Select Group.
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <MdHeight />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Height Of The Tower</h3>
              <p className="text-sm">516 metres (1,693 feet)</p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <TfiLayoutSliderAlt />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Units Layouts</h3>
              <p className="text-sm">
                Six Senses Residences Dubai Marina will comprise a mix of two- ,
                three- and four-bedroom apartments as well as penthouses,
                duplexes and triplexes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-1 h-fit flex items-center justify-center">
              <VscDebugBreakpointData className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Units</h3>
              <p className="text-sm">
                The development will contain an estimated 251 units.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <MdOutlineArchitecture />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">The Architect</h3>
              <p className="text-sm">
                The architect of record is WSP Parsons Brinckerhoff, the
                architectural consultant is Woods Bagot United Arab Emirates and
                the design architect is Aedas Ltd.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <GiSofa />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Interiors</h3>
              <p className="text-sm">
                The interior design is being handled by Mitchell & Eades.
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-lg">
          <div className="flex gap-4 p-4">
            <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
              <SiInstructure />
            </div>
            <div>
              <h3 className="text-xl  font-semibold">Structure</h3>
              <p className="text-sm">
                The substructure contains six basement levels which are used for
                parking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
