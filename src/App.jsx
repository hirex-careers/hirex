import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";
import Categories from "./components/Categories/Categories";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import CompanySlider from "./components/CompanySlider/CompanySlider";
import WhyHireX from "./components/WhyHireX/WhyHireX";
import FeatureStrip from "./components/FeatureStrip/FeatureStrip";
import Testimonials from "./components/Testimonials/Testimonials";
import MobileApp from "./components/MobileApp/MobileApp";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import FAQ from "./components/FAQ/FAQ";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

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
      <MobileApp />
      <StatsCounter />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;