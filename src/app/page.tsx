import HeroSection from "@/components/heroSection";
import GiftsSection from "@/components/giftsSection";
import AboutSection from "@/components/aboutSection";
import ReviewsSection from "@/components/home/reviewsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GiftsSection />
      <AboutSection />
      <ReviewsSection />
    </main>
  );
}
