import { FaMoon, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight">
          Hire<span className="text-blue-600">X</span>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
          <li className="text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 transition">Jobs</li>
          <li className="hover:text-blue-600 transition">Companies</li>
          <li className="hover:text-blue-600 transition">Employers</li>
          <li className="hover:text-blue-600 transition">Resources</li>
          <li className="hover:text-blue-600 transition">Contact</li>
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="hidden md:flex w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-blue-100 transition">
            <FaMoon />
          </button>

          <button className="hidden md:block px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">
            Login
          </button>

          <button className="hidden md:block px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg">
            Get Started
          </button>

          {/* Mobile */}
          <button className="lg:hidden text-2xl">
            <FaBars />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;