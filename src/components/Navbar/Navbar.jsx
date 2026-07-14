import { useState } from "react";
import {
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  "Home",
  "Jobs",
  "Companies",
  "Placement Record",
  "Employers",
  "Resources",
  "Contact",
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          type="button"
          onClick={closeMenu}
          className="text-3xl font-extrabold tracking-tight text-gray-900"
        >
          Hire<span className="text-blue-600">X</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 font-medium text-gray-700 xl:flex">
          {menuItems.map((item, index) => (
            <li key={item}>
              <button
                type="button"
                className={`whitespace-nowrap transition hover:text-blue-600 ${
                  index === 0 ? "text-blue-600" : ""
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
          >
            <FaMoon />
          </button>

          <button
            type="button"
            className="rounded-xl border border-blue-600 px-5 py-2.5 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </button>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previousState) => !previousState)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl text-gray-800 transition hover:bg-blue-100 hover:text-blue-600 xl:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={closeMenu}
                  className={`w-full rounded-xl px-4 py-3 text-left font-medium transition ${
                    index === 0
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-5 py-3 font-medium text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
            >
              <FaMoon />
              Dark Mode
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-xl border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;