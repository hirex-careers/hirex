import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Software Development", jobs: "12,540", icon: "code" },
  { title: "Data Science", jobs: "8,240", icon: "data" },
  { title: "AI / Machine Learning", jobs: "6,800", icon: "ai" },
  { title: "Cyber Security", jobs: "5,200", icon: "security" },
  { title: "Cloud Computing", jobs: "4,950", icon: "cloud" },
  { title: "DevOps", jobs: "3,820", icon: "devops" },
  { title: "UI / UX Design", jobs: "4,580", icon: "design" },
  { title: "Digital Marketing", jobs: "6,120", icon: "marketing" },
  { title: "Sales", jobs: "9,300", icon: "sales" },
  { title: "Finance", jobs: "4,900", icon: "finance" },
  { title: "HR", jobs: "3,600", icon: "hr" },
  { title: "Healthcare", jobs: "7,250", icon: "health" },
];

function Categories() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Browse Categories
          </span>

          <h2 className="mt-3 text-5xl font-bold">
            Explore Career Categories
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Find opportunities across technology and non-technology industries.
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
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.title}>
              <CategoryCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Categories;