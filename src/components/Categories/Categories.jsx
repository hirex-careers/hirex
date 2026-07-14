import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Software Development", jobs: "12,540", icon: "code" },
  { title: "Data Science", jobs: "8,240", icon: "data" },
  { title: "AI & Machine Learning", jobs: "6,800", icon: "ai" },
  { title: "Cyber Security", jobs: "5,200", icon: "security" },
  { title: "Cloud Computing", jobs: "4,950", icon: "cloud" },
  { title: "DevOps", jobs: "3,820", icon: "devops" },
  { title: "UI / UX Design", jobs: "4,580", icon: "design" },
  { title: "Digital Marketing", jobs: "6,120", icon: "marketing" },
  { title: "Sales", jobs: "9,300", icon: "sales" },
  { title: "Finance", jobs: "4,900", icon: "finance" },
  { title: "Human Resources", jobs: "3,600", icon: "hr" },
  { title: "Healthcare", jobs: "7,250", icon: "health" },
];

function Categories() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Browse Categories
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Career Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Find opportunities across technology and non-technology industries.
          </p>
        </div>

        {/* Responsive Auto Slider */}
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
              slidesPerView: 1.15,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 1.7,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 22,
            },
          }}
          className="w-full overflow-visible"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.title} className="h-auto">
              <CategoryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Categories;