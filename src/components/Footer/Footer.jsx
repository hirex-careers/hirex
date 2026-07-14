import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#07142E] text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Logo */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">
              Hire<span className="text-cyan-400">X</span>
            </h2>

            <p className="mt-6 text-blue-100 leading-8 max-w-md">
              India's modern AI-powered hiring platform connecting
              students, professionals and recruiters.
            </p>

            <div className="flex gap-4 mt-8">

              <a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <FaFacebookF />
              </a>

              <a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <FaInstagram />
              </a>

              <a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <FaLinkedinIn />
              </a>

              <a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-4 mt-6 text-blue-100">

              <li className="hover:text-cyan-400 cursor-pointer">About Us</li>

              <li className="hover:text-cyan-400 cursor-pointer">Careers</li>

              <li className="hover:text-cyan-400 cursor-pointer">Blog</li>

              <li className="hover:text-cyan-400 cursor-pointer">Press</li>

            </ul>

          </div>

          {/* Job Seekers */}

          <div>

            <h3 className="text-xl font-bold">
              Job Seekers
            </h3>

            <ul className="space-y-4 mt-6 text-blue-100">

              <li className="hover:text-cyan-400 cursor-pointer">Find Jobs</li>

              <li className="hover:text-cyan-400 cursor-pointer">Resume Builder</li>

              <li className="hover:text-cyan-400 cursor-pointer">Career Advice</li>

              <li className="hover:text-cyan-400 cursor-pointer">AI Resume Review</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 mt-6 text-blue-100">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <span>Noida, India</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1" />
                <span>support@hirex.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1" />
                <span>+91 9876543210</span>
              </div>

            </div>

          </div>

        </div>

      </div>

            {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">

          <p>
            © {new Date().getFullYear()} HireX. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Cookie Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;