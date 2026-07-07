import HeroSearch from "./HeroSearch";

function HeroContent() {
  return (
    <div>
      {/* Badge */}
      <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium">
        🚀 India's Smart Hiring Platform
      </span>

      {/* Heading */}
      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-tight mt-8">
        Find Jobs.
        <br />
        Get Hired.
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Faster.
        </span>
      </h1>

      {/* Description */}
      <p className="text-blue-100 mt-8 text-lg leading-8 max-w-xl">
        Find verified jobs from India's top companies.
        Build your career faster with HireX.
      </p>

      {/* Search Bar */}
      <HeroSearch />

      {/* Popular Searches */}
      <div className="mt-6 flex flex-wrap gap-3">
        {["React", "Java", "Python", "Data Analyst", "UI/UX"].map((item) => (
          <span
            key={item}
            className="bg-white/20 text-white px-4 py-2 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
          Find Jobs
        </button>

        <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
          Post a Job
        </button>
      </div>
    </div>
  );
}

export default HeroContent;