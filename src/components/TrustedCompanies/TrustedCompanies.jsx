import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import microsoft from "../../assets/images/company/microsoft.png";
import google from "../../assets/images/company/google.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const companies = [
  { logo: microsoft, name: "Microsoft" },
  { logo: google, name: "Google" },
  { logo: amazon, name: "Amazon" },
  { logo: swiggy, name: "Swiggy" },
  { logo: microsoft, name: "Microsoft" },
  { logo: google, name: "Google" },
  { logo: amazon, name: "Amazon" },
  { logo: swiggy, name: "Swiggy" },
  { logo: microsoft, name: "Microsoft" },
  { logo: google, name: "Google" },
  { logo: amazon, name: "Amazon" },
  { logo: swiggy, name: "Swiggy" },
];

function TrustedCompanies() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <span className="text-blue-600 uppercase tracking-widest font-semibold block text-center">
          Trusted Companies
        </span>

        <h2 className="text-4xl font-bold text-center mt-3">
          Trusted by India's Top Companies
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          More than <span className="font-bold text-blue-600">2500+</span>
          {" "}companies hire through HireX.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {companies.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white border border-gray-100 rounded-2xl h-28 flex justify-center items-center shadow-sm hover:shadow-xl transition duration-300">

                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default TrustedCompanies;