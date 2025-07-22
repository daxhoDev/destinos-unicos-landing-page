import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import GiftsSection from "@/components/GiftsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import HeroSection from "@/components/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
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
