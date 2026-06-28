import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import SearchSection from "../components/home/SearchSection";
import Categories from "../components/home/Categories";
import FeaturedJobs from "../components/home/FeaturedJobs";
import Stats from "../components/home/Stats";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedJobs />
      <Stats />
      <Footer />

    </>
  );
}