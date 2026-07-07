import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Categories from "./components/Categories/Categories";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import CompanySlider from "./components/CompanySlider/CompanySlider";
import FeatureStrip from "./components/FeatureStrip/FeatureStrip";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
      <FeaturedJobs />
      <CompanySlider />
      <FeatureStrip />
    </>
  );
}

export default App;