import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";
import Categories from "./components/Categories/Categories";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import CompanySlider from "./components/CompanySlider/CompanySlider";
import WhyHireX from "./components/WhyHireX/WhyHireX";
import FeatureStrip from "./components/FeatureStrip/FeatureStrip";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Categories />
      <FeaturedJobs />
      <CompanySlider />
      <WhyHireX />
      <FeatureStrip />
      <Testimonials />
    </>
  );
}

export default App;