import heroPerson from "../../assets/images/hero/hero-person.png";
import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div className="relative hidden lg:flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute w-[580px] h-[580px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>

      {/* Outer Ring */}
      <div className="absolute w-[540px] h-[540px] rounded-full border border-white/15"></div>

      {/* Inner Ring */}
      <div className="absolute w-[460px] h-[460px] rounded-full border border-white/10"></div>

      {/* Watermark */}
      <div className="absolute left-4 top-16 text-[250px] font-black text-white/5 select-none">
        H
      </div>

      {/* Hero Image */}
      <img
        src={heroPerson}
        alt="Hero"
        className="relative z-20 w-[520px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
      />

      {/* Floating Card */}
      <div className="absolute -right-20 top-44 z-30">
        <FloatingCard />
      </div>

      {/* Curved Dotted Line */}
      <svg
        className="absolute right-32 top-52 w-44 h-44 text-blue-300 opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20 180 C80 120,120 60,180 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative Circle */}
      <div className="absolute top-24 right-8 w-40 h-40 border border-blue-400/40 rounded-full border-dashed"></div>

      {/* Small Glow */}
      <div className="absolute bottom-16 left-10 w-8 h-8 bg-blue-400 rounded-full blur-sm"></div>

    </div>
  );
}

export default HeroImage;