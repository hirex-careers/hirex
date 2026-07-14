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
    icon: <FaGoogle className="text-red-500 text-5xl" />,
  },
  {
    name: "Microsoft",
    jobs: "280+ Jobs",
    icon: <FaMicrosoft className="text-blue-600 text-5xl" />,
  },
  {
    name: "Amazon",
    jobs: "410+ Jobs",
    icon: <FaAmazon className="text-yellow-500 text-5xl" />,
  },
  {
    name: "Infosys",
    jobs: "220+ Jobs",
    icon: <FaBuilding className="text-cyan-600 text-5xl" />,
  },
  {
    name: "Deloitte",
    jobs: "160+ Jobs",
    icon: <FaBuilding className="text-green-600 text-5xl" />,
  },
  {
    name: "Zoho",
    jobs: "190+ Jobs",
    icon: <FaBuilding className="text-red-600 text-5xl" />,
  },
  {
    name: "TCS",
    jobs: "530+ Jobs",
    icon: <FaBuilding className="text-blue-700 text-5xl" />,
  },
  {
    name: "Wipro",
    jobs: "260+ Jobs",
    icon: <FaBuilding className="text-purple-600 text-5xl" />,
  },
];

function CompanySlider() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Trusted Companies
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Companies Hiring on HireX
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Connect with India's fastest-growing companies.
          </p>

        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {companies.map((company) => (
            <SwiperSlide key={company.name}>

              <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center">

                <div className="flex justify-center mb-6">
                  {company.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  {company.name}
                </h3>

                <p className="text-gray-500 mt-3">
                  {company.jobs}
                </p>

                <button className="mt-6 flex items-center justify-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">

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