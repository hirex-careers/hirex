import heroPerson from "../../assets/images/hero/hero-person.png";
import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl"></div>

      {/* Image */}
      <img
        src={heroPerson}
        alt="Hero"
        className="relative z-10 w-[500px] lg:w-[560px] drop-shadow-2xl"
      />

      {/* Floating Cards */}
      <FloatingCard />

    </div>
  );
}

export default HeroImage;