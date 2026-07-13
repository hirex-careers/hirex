import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1535] via-[#163B96] to-[#2D82F7]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -bottom-40 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute top-10 right-10 w-[550px] h-[550px] rounded-full border border-white/10"></div>

        <div className="absolute top-32 right-32 w-[380px] h-[380px] rounded-full border border-white/10"></div>

        <div className="absolute bottom-16 right-16 w-52 h-52 rounded-full border border-white/10"></div>

        <div className="absolute top-24 right-72 w-5 h-5 rounded-full bg-cyan-300"></div>

      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-14">

        <div className="grid lg:grid-cols-2 items-center min-h-[90vh] gap-6">

          {/* Left */}
          <HeroContent />

          {/* Right */}
          <HeroImage />

        </div>

      </div>

    </section>
  );
}

export default Hero;