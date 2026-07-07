import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA] min-h-[90vh]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

    </section>
  );
}

export default Hero;