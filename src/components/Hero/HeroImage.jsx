import heroPerson from "../../assets/images/hero/hero-person.png";
import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Background Glow */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-400/20 blur-3xl"></div>

      {/* Main Image */}
      <img
        src={heroPerson}
        alt="Hero"
        className="relative w-[720px] z-10 drop-shadow-2xl"
      />

      <FloatingCard />

    </div>
  );
}

export default HeroImage;