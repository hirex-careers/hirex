import HeroSearch from "./HeroSearch";

function HeroContent() {
  return (
    <div className="relative z-20">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8">

        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          NEW
        </span>

        <span className="text-white text-sm">
          India's Emerging Job Portal
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-white font-extrabold leading-tight text-6xl lg:text-7xl">

        Find Jobs.

        <br />

        Get Hired.

        <span className="block mt-2 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent">
          Faster.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-8 text-blue-100 text-xl leading-9 max-w-xl">

        Verified Jobs. Trusted Companies.
        Better Careers.

      </p>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-10">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
            💼
          </div>

          <div>
            <h3 className="text-white text-3xl font-bold">
              10,000+
            </h3>

            <p className="text-blue-100">
              Active Jobs
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
            🏢
          </div>

          <div>

            <h3 className="text-white text-3xl font-bold">
              2,500+
            </h3>

            <p className="text-blue-100">
              Companies
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
            👥
          </div>

          <div>

            <h3 className="text-white text-3xl font-bold">
              50,000+
            </h3>

            <p className="text-blue-100">
              Job Seekers
            </p>

          </div>

        </div>

      </div>

      {/* Search Bar */}
      <div className="mt-12 w-[200%]">
  <HeroSearch />
</div>

    </div>
  );
}

export default HeroContent;