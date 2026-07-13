import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#38BDF8] min-h-screen">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl"></div>

        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="absolute top-1/2 right-40 w-40 h-40 rounded-full border border-white/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </div>
    </section>
  );
}

export default Hero;