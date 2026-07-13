import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";
import Categories from "./components/Categories/Categories";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import Companies from "./components/Companies/Companies";
import CompanySlider from "./components/CompanySlider/CompanySlider";
import FeatureStrip from "./components/FeatureStrip/FeatureStrip";

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
        <Categories />
        <FeaturedJobs />
        <Companies />
        <CompanySlider />
        <FeatureStrip />
      </main>
    </div>
  );
}

export default App;