import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import GiftsSection from '@/components/sections/GiftsSection';
import AboutSection from '@/components/sections/AboutSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import Footer from '@/components/layout/Footer';

export default function App() {
  return (
    <div className="landing-root">
      <Navbar />
      <HeroSection />
      <GiftsSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
