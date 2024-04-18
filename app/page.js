import { HeroSection } from "./components/HeroSection";
import LeftImg from "./components/LeftImg";
import Location from "./components/Location";
import RightImg from "./components/RightImg";
import Specification from "./components/Specification";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <GoogleAnalytics gaId="G-JTJP41290P">
      <main>
        <HeroSection />
        <Specification />
        <RightImg />
        <LeftImg />
        <Location />
      </main>
    </GoogleAnalytics>
  );
}
