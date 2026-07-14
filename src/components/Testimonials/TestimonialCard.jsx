import { FaStar, FaQuoteLeft, FaLinkedin } from "react-icons/fa";

function TestimonialCard({
  name,
  role,
  company,
  salary,
  review,
  linkedin = "#",
}) {
  return (
    <div className="group relative h-full bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

      {/* LinkedIn */}
      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-blue-50 hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300"
      >
        <FaLinkedin className="text-[#0077B5] hover:text-white text-xl" />
      </a>

      {/* Quote Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6">
        <FaQuoteLeft size={22} />
      </div>

      {/* Rating */}
      <div className="flex gap-1 text-yellow-400 mb-5">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-7 min-h-[140px] italic">
        "{review}"
      </p>

      {/* User */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">

        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg">
            {name.charAt(0)}
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800">
              {name}
            </h3>

            <p className="text-sm text-gray-500">
              {role}
            </p>

            <p className="text-blue-600 font-medium text-sm">
              {company}
            </p>
          </div>

        </div>

        {/* Salary */}
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
          {salary}
        </div>

      </div>

    </div>
  );
}

export default TestimonialCard;