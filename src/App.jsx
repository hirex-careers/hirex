import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Categories from "./components/Categories/Categories";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
      <FeaturedJobs />
    </>
  );
}

export default App;