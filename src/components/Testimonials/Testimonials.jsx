import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Microsoft",
    salary: "₹18 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "HireX made my job search easy. I received interview calls within two weeks and landed my dream role.",
  },
  {
    name: "Priya Verma",
    role: "Data Analyst",
    company: "Google",
    salary: "₹16 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "The platform is simple, fast and has genuine job listings. Highly recommended for freshers.",
  },
  {
    name: "Arjun Mehta",
    role: "Frontend Developer",
    company: "Amazon",
    salary: "₹15 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Amazing experience. The application process was smooth and I got multiple interview opportunities.",
  },
  {
    name: "Sneha Kapoor",
    role: "UI/UX Designer",
    company: "Adobe",
    salary: "₹14 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Beautiful platform with quality companies. I got placed much faster than expected.",
  },
  {
    name: "Rohit Singh",
    role: "Backend Developer",
    company: "Infosys",
    salary: "₹10 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Easy to use and very professional. I secured my first software job through HireX.",
  },
  {
    name: "Neha Gupta",
    role: "Business Analyst",
    company: "Deloitte",
    salary: "₹12 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "The filters and recommendations helped me find the perfect opportunity.",
  },
  {
    name: "Aman Yadav",
    role: "Cloud Engineer",
    company: "TCS",
    salary: "₹11 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "One of the best hiring platforms. The interface is clean and the jobs are verified.",
  },
  {
    name: "Karan Patel",
    role: "DevOps Engineer",
    company: "Accenture",
    salary: "₹17 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Excellent experience. I got interview calls within days of creating my profile.",
  },
  {
    name: "Aisha Khan",
    role: "HR Executive",
    company: "Wipro",
    salary: "₹8 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Very user-friendly platform with lots of opportunities across different industries.",
  },
  {
    name: "Vikram Das",
    role: "Product Manager",
    company: "Flipkart",
    salary: "₹22 LPA",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "HireX helped me switch companies smoothly. Definitely one of the best career platforms.",
  },
];

function Testimonials() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Success Stories
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Candidates Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Thousands of professionals have found their dream jobs through
            HireX.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2200,
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="w-full overflow-visible"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={`${item.name}-${index}`}
              className="h-auto"
            >
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;