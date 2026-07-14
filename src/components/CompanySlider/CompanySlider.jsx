import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const companies = [
  {
    name: "Google",
    jobs: "320+ Jobs",
    icon: <FaGoogle />,
    iconColor: "text-red-500",
  },
  {
    name: "Microsoft",
    jobs: "280+ Jobs",
    icon: <FaMicrosoft />,
    iconColor: "text-blue-600",
  },
  {
    name: "Amazon",
    jobs: "410+ Jobs",
    icon: <FaAmazon />,
    iconColor: "text-yellow-500",
  },
  {
    name: "Infosys",
    jobs: "220+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-cyan-600",
  },
  {
    name: "Deloitte",
    jobs: "160+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-green-600",
  },
  {
    name: "Zoho",
    jobs: "190+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-red-600",
  },
  {
    name: "TCS",
    jobs: "530+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-blue-700",
  },
  {
    name: "Wipro",
    jobs: "260+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-purple-600",
  },
  {
    name: "Accenture",
    jobs: "240+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-indigo-600",
  },
  {
    name: "Capgemini",
    jobs: "210+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-sky-600",
  },
  {
    name: "Cognizant",
    jobs: "295+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-blue-500",
  },
  {
    name: "Oracle",
    jobs: "180+ Jobs",
    icon: <FaBuilding />,
    iconColor: "text-red-500",
  },
];

function CompanySlider() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Trusted Companies
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Companies Hiring on HireX
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Connect with India&apos;s fastest-growing companies.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={14}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 18,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          className="w-full overflow-visible"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.name} className="h-auto">
              <div className="group flex h-[260px] w-full flex-col items-center justify-between rounded-3xl border border-gray-100 bg-white p-5 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[275px] sm:p-6">

                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-4xl shadow-sm transition-all duration-300 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-5xl ${company.iconColor}`}
                >
                  {company.icon}
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
                    {company.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-500 sm:text-base">
                    {company.jobs}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-5 sm:py-3"
                >
                  View Jobs
                  <FaArrowRight />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default CompanySlider;