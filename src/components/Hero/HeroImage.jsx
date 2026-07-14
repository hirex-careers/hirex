import heroPerson from "../../assets/images/hero/hero-person.png";
import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:h-[700px] lg:min-h-0">

      {/* Main Glow */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/20 blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[650px] lg:w-[650px]"></div>

      {/* Responsive Rings */}
      <div className="absolute h-[280px] w-[280px] rounded-full border border-white/10 sm:h-[390px] sm:w-[390px] lg:h-[560px] lg:w-[560px]"></div>

      <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10 sm:h-[320px] sm:w-[320px] lg:h-[470px] lg:w-[470px]"></div>

      <div className="absolute hidden h-[360px] w-[360px] rounded-full border border-white/10 lg:block"></div>

      {/* Decorative H */}
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[170px] font-black text-blue-500/10 sm:text-[230px] lg:left-0 lg:top-5 lg:translate-x-0 lg:translate-y-0 lg:text-[300px]">
        H
      </h2>

      {/* Decorative Dot */}
      <div className="absolute right-[18%] top-[8%] h-3 w-3 rounded-full bg-cyan-300 sm:h-4 sm:w-4 lg:right-12 lg:top-14 lg:h-5 lg:w-5"></div>

      {/* Decorative Dashed Circle */}
      <div className="absolute right-[8%] top-[10%] h-24 w-24 rounded-full border border-dashed border-blue-400/40 sm:h-32 sm:w-32 lg:right-20 lg:top-20 lg:h-40 lg:w-40"></div>

      {/* Hero Image */}
      <img
        src={heroPerson}
        alt="Professional using a laptop"
        className="
          relative
          z-20
          w-[330px]
          translate-y-3
          object-contain
          drop-shadow-[0_30px_65px_rgba(0,0,0,0.45)]
          sm:w-[440px]
          sm:translate-y-5
          lg:w-[650px]
          lg:-translate-y-24
          lg:drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]
        "
      />

      {/* Floating Card */}
      <div className="absolute bottom-3 right-1/2 z-30 translate-x-1/2 sm:bottom-10 lg:bottom-auto lg:right-[-40px] lg:top-[260px] lg:translate-x-0 xl:right-[-60px]">
        <FloatingCard />
      </div>
    </div>
  );
}

export default HeroImage;