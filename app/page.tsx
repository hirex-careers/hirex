import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import SearchSection from "@/components/home/SearchSection";
import TopCompanies from "@/components/company/TopCompanies";
import Stats from "@/components/home/Stats";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <Stats />
      <Categories />
      <TopCompanies />

    </>
  );
}