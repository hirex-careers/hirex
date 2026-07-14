import HeroSearch from "./HeroSearch";
import HeroStat from "./HeroStat";

function HeroContent() {
  return (
    <div className="relative z-20">
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8">
        <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          NEW
        </span>

        <span className="text-white text-sm">
          India's Emerging Job Portal
        </span>
      </div>

      <h1 className="text-white font-extrabold leading-tight text-6xl lg:text-7xl">
        Find Jobs.
        <br />
        Get Hired.

        <span className="block mt-2 bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent">
          Faster.
        </span>
      </h1>

      <p className="mt-8 text-blue-100 text-xl leading-9 max-w-xl">
        Verified Jobs. Trusted Companies. Better Careers.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-7">
        <HeroStat
          number={10000}
          suffix="+"
          label="Active Jobs"
          icon="💼"
        />

        <HeroStat
          number={2500}
          suffix="+"
          label="Companies"
          icon="🏢"
        />

        <HeroStat
          number={50000}
          suffix="+"
          label="Job Seekers"
          icon="👥"
        />
      </div>

      <HeroSearch />
    </div>
  );
}

export default HeroContent;