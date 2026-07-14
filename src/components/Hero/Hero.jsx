import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSearch from "./HeroSearch";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1535] via-[#163B96] to-[#2D82F7]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute right-10 top-10 h-[550px] w-[550px] rounded-full border border-white/10"></div>

        <div className="absolute right-32 top-32 h-[380px] w-[380px] rounded-full border border-white/10"></div>

        <div className="absolute bottom-16 right-16 h-52 w-52 rounded-full border border-white/10"></div>

        <div className="absolute right-72 top-24 h-5 w-5 rounded-full bg-cyan-300"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-16 lg:px-10 lg:py-10 xl:px-14">
        {/* Main Hero */}
        <div className="grid items-center gap-10 lg:min-h-[650px] lg:grid-cols-2 lg:gap-6">
          <HeroContent />
          <HeroImage />
        </div>

        {/* Full Width Search Bar */}
        <div className="relative z-40 -mt-2 pb-8 lg:-mt-20">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}

export default Hero;