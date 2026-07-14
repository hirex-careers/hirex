import {
  FaStar,
  FaQuoteLeft,
  FaLinkedin,
} from "react-icons/fa";

function TestimonialCard({
  name,
  role,
  company,
  salary,
  review,
  linkedin = "#",
}) {
  return (
    <div className="group relative flex h-[430px] w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[450px] sm:p-5 lg:h-[470px] lg:p-6">

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/70 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">
        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${name} on LinkedIn`}
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#0077B5] transition-all duration-300 hover:bg-[#0077B5] hover:text-white sm:h-10 sm:w-10"
        >
          <FaLinkedin className="text-base sm:text-lg" />
        </a>

        {/* Quote Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl">
          <FaQuoteLeft className="text-base sm:text-lg" />
        </div>

        {/* Rating */}
        <div className="mt-5 flex gap-1 text-xs text-yellow-400 sm:text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        {/* Review */}
        <p className="mt-5 min-h-[135px] text-xs italic leading-6 text-gray-600 sm:min-h-[150px] sm:text-sm sm:leading-7 lg:text-base">
          “{review}”
        </p>

        {/* User */}
        <div className="mt-auto border-t border-gray-100 pt-5">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
              {name.charAt(0)}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold text-gray-800 sm:text-base">
                {name}
              </h3>

              <p className="truncate text-xs text-gray-500 sm:text-sm">
                {role}
              </p>

              <p className="truncate text-xs font-medium text-blue-600 sm:text-sm">
                {company}
              </p>
            </div>
          </div>

          {/* Salary */}
          <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-2 text-xs font-semibold text-green-700 sm:text-sm">
            {salary}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;