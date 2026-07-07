import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#38BDF8] min-h-screen">

        {/* Background Circle 1 */}
        <div className="absolute top-10 right-20 w-96 h-96 rounded-full bg-blue-300/10 blur-3xl"></div>
        {/* Background Circle 2 */}
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl"></div>
        {/* Small Circle */}
        <div className="absolute top-1/2 right-40 w-40 h-40 rounded-full border border-white/20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

    </section>
  );
}

export default Hero;