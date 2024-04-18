import FAQ from "./components/FAQ";
import { HeroSection } from "./components/HeroSection";
import LeftImg from "./components/LeftImg";
import Location from "./components/Location";
import RightImg from "./components/RightImg";
import Specification from "./components/Specification";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <main>
      <GoogleAnalytics gaId="G-JTJP41290P" />
      <HeroSection />
      <Specification />
      <RightImg />
      <LeftImg />
      <FAQ />
      <Location />
    </main>
    // </GoogleAnalytics>
  );
}
