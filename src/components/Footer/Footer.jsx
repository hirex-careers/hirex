import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const companyLinks = [
  "About Us",
  "Careers",
  "Blog",
  "Press",
];

const jobSeekerLinks = [
  "Find Jobs",
  "Resume Builder",
  "Career Advice",
  "AI Resume Review",
];

const socialLinks = [
  {
    label: "Facebook",
    icon: <FaFacebookF />,
    href: "#",
  },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "#",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "#",
  },
];

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#07142E] text-white">
      {/* Top Footer */}
      <div className="mx-auto w-full max-w-[1500px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10 xl:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Hire<span className="text-cyan-400">X</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              India&apos;s modern AI-powered hiring platform connecting
              students, professionals and recruiters.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-lg sm:h-12 sm:w-12 sm:text-base"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold sm:text-xl">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-blue-100 sm:mt-6 sm:space-y-4 sm:text-base">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-lg font-bold sm:text-xl">
              Job Seekers
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-blue-100 sm:mt-6 sm:space-y-4 sm:text-base">
              {jobSeekerLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition hover:text-cyan-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold sm:text-xl">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-blue-100 sm:mt-6 sm:space-y-5 sm:text-base">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-400" />

                <span>
                  Noida, India
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-cyan-400" />

                <a
                  href="mailto:hirex.careers@gmail.com"
                  className="break-all transition hover:text-cyan-400"
                >
                  hirex.careers@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-cyan-400" />

                <a
                  href="tel:+918967452314"
                  className="transition hover:text-cyan-400"
                >
                  +91 8967452314
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-blue-100 sm:px-6 sm:text-sm md:flex-row md:text-left lg:px-8 xl:px-12">
          <p>
            © {new Date().getFullYear()} HireX. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:justify-end">
            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
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