import { useState } from "react";
import {
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

const pageLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Companies",
    path: "/companies",
  },
  {
    name: "Placement Record",
    path: "/placement-record",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 250);

      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[100] w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl"
          >
            Hire<span className="text-blue-600">X</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 text-[16px] font-bold text-gray-700 xl:flex xl:gap-8">
            {pageLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `whitespace-nowrap transition duration-300 hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => handleSectionNavigation("faq")}
                className="whitespace-nowrap font-bold text-gray-700 transition hover:text-blue-600"
              >
                FAQ
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => handleSectionNavigation("contact")}
                className="whitespace-nowrap font-bold text-gray-700 transition hover:text-blue-600"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Desktop Right */}
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
              className="rounded-xl border-2 border-blue-600 px-6 py-3 text-[15px] font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </button>

            <button
              type="button"
              className="rounded-xl bg-blue-600 px-7 py-3 text-[15px] font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((previousState) => !previousState)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl text-gray-800 transition hover:bg-blue-100 hover:text-blue-600 xl:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile and Tablet Menu */}
      <div
        className={`fixed left-0 right-0 top-20 z-[90] overflow-hidden border-b border-gray-200 bg-white shadow-xl transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "max-h-[750px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 lg:px-10">
          <ul className="space-y-2">
            {pageLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block w-full rounded-xl px-4 py-3 text-left text-base font-bold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => handleSectionNavigation("faq")}
                className="w-full rounded-xl px-4 py-3 text-left text-base font-bold text-gray-700 transition hover:bg-gray-50 hover:text-blue-600"
              >
                FAQ
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => handleSectionNavigation("contact")}
                className="w-full rounded-xl px-4 py-3 text-left text-base font-bold text-gray-700 transition hover:bg-gray-50 hover:text-blue-600"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-5 py-3 font-bold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
            >
              <FaMoon />
              Dark Mode
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-xl border-2 border-blue-600 px-5 py-3 font-bold text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </button>

            <button
              type="button"
              onClick={closeMenu}
              className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;