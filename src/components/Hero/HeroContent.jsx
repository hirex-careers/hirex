import HeroSearch from "./HeroSearch";
function HeroContent() {
  return (
    <div>

      <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium">
        🚀 India's Smart Hiring Platform
      </span>

      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight mt-8">
        Find Jobs.
        <br />
        Get Hired.
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Faster.
        </span>
      </h1>

      <p className="text-blue-100 mt-8 text-lg leading-8 max-w-xl">
        Find verified jobs from India's top companies.
        Build your career faster with HireX.
      </p>
      <HeroSearch />

    </div>
    

  );
}

export default HeroContent;