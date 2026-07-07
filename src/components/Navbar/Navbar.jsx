import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-3xl font-bold">
          Hire<span className="text-blue-600">X</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Find Jobs
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Companies
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Employers
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Career Resources
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="text-xl">
            <FaMoon />
          </button>

          <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;