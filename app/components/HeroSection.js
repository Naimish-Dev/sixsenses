"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "./CustomModal";
import FromSubmit from "./CustomModal/FromSubmit";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const HeroSection = () => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const [isModel, setIsModel] = useState(false);
  const [isModel2, setIsModel2] = useState(false);

  const CloseModelHandler = () => {
    setIsModel(false);
  };

  const CloseSucessModelHandler = () => {
    setIsModel2(false);
  };

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };
  return (
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-black bg-opacity-50 text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className="text-white flex justify-between  text-3xl bg-black p-2 py-4">
              <Link href={"/"} className="text-center">
                <img src="/assets/logo/sixlogo.png" className="h-14" />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link href={"../#specification"}>
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Specification
                </li>
              </Link>
              <Link href="../#features">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Features
                </li>
              </Link>
              <Link href="../#overview">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Overview
                </li>
              </Link>
              <Link href="../#faq">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  FAQ
                </li>
              </Link>

              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Location
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-white bg-gradient-to-b from-black/75  to-transparent py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/sixlogo.png" className="h-16" />
            <span className="text-[10px] text-white">Marketing Associate</span>
          </Link>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#specification"}
            >
              Specification
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#features"}
            >
              Features
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#overview"}
            >
              Overview
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#faq"}
            >
              FAQ
            </Link>

            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="assets/building/66113799f840660db9f54860_Six-Senses-Dubai-Mar.jpg"
          className="w-screen h-screen object-cover hidden md:block  "
        />
        <img
          src="assets/building/six-senses-residences-dubai-marina_1CDK7_xl.jpg"
          className="w-screen h-screen object-cover block md:hidden  "
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40">
          <div className="text-white  flex gap-4 flex-col">
            <h2 className="text-2xl sm:text-3xl text-center font-bold">
              SIX SENSES RESIDENCES DUBAI MARINA
              <br />- Prices starting from 5.8 Million AED
            </h2>
            <p className="text-md  w-[90%] md:w-[75%] mx-auto  text-center ">
              Six Senses Residences Dubai Marina is a 125-storey residential
              building under development in Dubai Marina, Dubai.
            </p>

            <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
              <button
                onClick={() => {
                  const token = sessionStorage.getItem("Token");
                  if (token) {
                    setIsModel2(true);
                  } else {
                    setIsModel(true);
                  }
                }}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Download Broucher
              </button>
              <button
                onClick={() => setIsModel(true)}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Show your Interest
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModel && !isModel2 && (
        <CustomModal
          CloseModelHandler={CloseModelHandler}
          setIsModel2={setIsModel2}
        ></CustomModal>
      )}

      {!isModel && isModel2 && (
        <FromSubmit
          CloseSucessModelHandler={CloseSucessModelHandler}
        ></FromSubmit>
      )}
    </div>
  );
};
