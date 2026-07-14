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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Success Stories
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Candidates Say
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Thousands of professionals have found their dream jobs through HireX.
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
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;