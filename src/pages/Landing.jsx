import Main from "@/components/Main";
import GiftsSection from "@/components/GiftsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import HeroSection from "@/components/HeroSection";

export default function Landing() {
  return (
    <Main>
      <HeroSection />
      <GiftsSection />
      <AboutSection />
      <ReviewsSection />
    </Main>
  );
}
