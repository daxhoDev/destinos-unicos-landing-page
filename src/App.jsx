import Navbar from "@/components/structure/Navbar";
import Main from "@/components/structure/Main";
import Footer from "@/components/structure/Footer";

import HeroSection from "@/components/sections/HeroSection";
import GiftsSection from "@/components/sections/GiftsSection";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

export default function App() {
  return (
    <div className="landing-root">
      <Navbar />
      <Main>
        <HeroSection />
        <GiftsSection />
        <AboutSection />
        <ReviewsSection />
      </Main>
      <Footer />
    </div>
  );
}
