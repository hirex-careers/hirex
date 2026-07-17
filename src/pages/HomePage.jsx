import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";
import Categories from "../components/Categories/Categories";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import CompanySlider from "../components/CompanySlider/CompanySlider";
import WhyHireX from "../components/WhyHireX/WhyHireX";
import FeatureStrip from "../components/FeatureStrip/FeatureStrip";
import Testimonials from "../components/Testimonials/Testimonials";
import MobileApp from "../components/MobileApp/MobileApp";
import StatsCounter from "../components/StatsCounter/StatsCounter";
import FAQ from "../components/FAQ/FAQ";
import Newsletter from "../components/Newsletter/Newsletter";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const timer = setTimeout(() => {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main className="w-full">
      <Hero />
      <TrustedCompanies />
      <Categories />
      <FeaturedJobs />
      <CompanySlider />
      <WhyHireX />
      <FeatureStrip />
      <Testimonials />
      <MobileApp />
      <StatsCounter />

      <div id="faq" className="scroll-mt-24">
        <FAQ />
      </div>

      <Newsletter />
    </main>
  );
}

export default HomePage;