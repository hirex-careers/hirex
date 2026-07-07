import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CompanySlider() {

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Swiggy",
    "Tata",
    "Infosys",
    "Wipro",
    "Deloitte",
    "Zoho",
  ];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-3xl font-bold mb-10">
          Trusted by Top Companies
        </h2>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
        >

          {companies.map((company) => (

            <SwiperSlide key={company}>

              <div className="bg-white rounded-xl shadow p-8 text-center font-semibold">

                {company}

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default CompanySlider;