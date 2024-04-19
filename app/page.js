
"use client"
import { useEffect } from "react";
import FAQ from "./components/FAQ";
import { HeroSection } from "./components/HeroSection";
import LeftImg from "./components/LeftImg";
import Location from "./components/Location";
import RightImg from "./components/RightImg";
import Specification from "./components/Specification";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
 useEffect(() => {
   const cursor = document.querySelector(".cursor");

   const handleMouseMove = (e) => {
     cursor.setAttribute(
       "style",
       "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
     );
   };

   const handleClick = () => {
     cursor.classList.add("expand");
     setTimeout(() => {
       cursor.classList.remove("expand");
     }, 500);
   };

   document.addEventListener("mousemove", handleMouseMove);
   document.addEventListener("click", handleClick);

   return () => {
     document.removeEventListener("mousemove", handleMouseMove);
     document.removeEventListener("click", handleClick);
   };
 }, []);
  return (
    <main>
      <div className="cursor"></div>

      <GoogleAnalytics gaId="G-JTJP41290P" />
      <HeroSection />
      <Specification />
      <RightImg />
      <LeftImg />
      <FAQ />
      <Location />
    </main>
 );
}
