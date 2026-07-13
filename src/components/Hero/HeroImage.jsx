import heroPerson from "../../assets/images/hero/hero-person.png";
import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div className="relative hidden lg:flex items-center justify-center h-[700px]">

      {/* Main Glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-purple-500/20 blur-3xl"></div>

      {/* Outer Ring */}
      <div className="absolute w-[560px] h-[560px] rounded-full border border-white/10"></div>

      {/* Middle Ring */}
      <div className="absolute w-[470px] h-[470px] rounded-full border border-white/10"></div>

      {/* Small Ring */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-white/10"></div>

      {/* Decorative H */}
      <h1 className="absolute left-0 top-5 text-[300px] font-black text-blue-500/10 select-none">
        H
      </h1>

      {/* Decorative Dot */}
      <div className="absolute top-14 right-12 w-5 h-5 rounded-full bg-cyan-300"></div>

      {/* Decorative Circle */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-dashed border-blue-400/40 rounded-full"></div>

      {/* Hero Image */}
      <img
  src={heroPerson}
  alt="Hero"
  className="
    relative
    z-20
    w-[650px]
    -translate-y-24
    object-contain
    drop-shadow-[0_40px_90px_rgba(0,0,0,0.5)]
  "
/>

      {/* Floating Card */}
      <div className="absolute z-30 right-[-60px] top-[260px]">
        <FloatingCard />
      </div>

    </div>
  );
}

export default HeroImage;