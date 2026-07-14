import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl transition-all duration-300 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;