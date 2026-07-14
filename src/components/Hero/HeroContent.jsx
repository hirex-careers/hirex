import HeroStat from "./HeroStat";

function HeroContent() {
  return (
    <div className="relative z-20 pt-6 text-center lg:pt-0 lg:text-left">
      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
        <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
          NEW
        </span>

        <span className="text-xs text-white sm:text-sm">
          India's Emerging Job Portal
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
        Find Jobs.
        <br />
        Get Hired.

        <span className="mt-2 block bg-gradient-to-r from-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent">
          Faster.
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg lg:mx-0 lg:mt-8 lg:text-xl">
        Verified Jobs. Trusted Companies. Better Careers.
      </p>

      {/* Stats */}
      <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3 lg:mx-0 lg:mt-10 lg:max-w-none lg:gap-6">
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
    </div>
  );
}

export default HeroContent;