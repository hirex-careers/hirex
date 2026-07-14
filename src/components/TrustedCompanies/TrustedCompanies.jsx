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
    <section className="w-full overflow-hidden border-y border-gray-100 bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Trusted Companies
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted by India&apos;s Top Companies
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            More than{" "}
            <span className="font-bold text-blue-600">2,500+</span>{" "}
            companies hire through HireX.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={14}
          breakpoints={{
            0: {
              slidesPerView: 1.6,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 2.2,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          className="w-full overflow-visible"
        >
          {companies.map((item, index) => (
            <SwiperSlide key={`${item.name}-${index}`} className="h-auto">
              <div className="group flex h-24 w-full items-center justify-center rounded-2xl border border-gray-100 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:h-28 lg:h-32">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-8 w-auto max-w-[120px] object-contain grayscale transition duration-300 group-hover:grayscale-0 sm:max-h-10 sm:max-w-[140px]"
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