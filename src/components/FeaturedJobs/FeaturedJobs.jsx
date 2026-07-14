import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import JobCard from "./JobCard";

import microsoft from "../../assets/images/company/microsoft.png";
import google from "../../assets/images/company/google.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const jobs = [
  {
    logo: microsoft,
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
    experience: "0-2 Years",
    type: "Full Time",
    skills: ["React", "Next.js"],
    posted: "2 Days Ago",
  },
  {
    logo: google,
    company: "Google",
    title: "Product Manager",
    location: "Hyderabad",
    salary: "₹18 - ₹30 LPA",
    experience: "3-5 Years",
    type: "Full Time",
    skills: ["Product", "Agile"],
    posted: "1 Day Ago",
  },
  {
    logo: amazon,
    company: "Amazon",
    title: "Software Engineer",
    location: "Pune",
    salary: "₹15 - ₹25 LPA",
    experience: "2-4 Years",
    type: "Hybrid",
    skills: ["Java", "AWS"],
    posted: "Today",
  },
  {
    logo: swiggy,
    company: "Swiggy",
    title: "Business Analyst",
    location: "Bangalore",
    salary: "₹8 - ₹14 LPA",
    experience: "1-3 Years",
    type: "Remote",
    skills: ["Excel", "SQL"],
    posted: "3 Days Ago",
  },
  {
    logo: microsoft,
    company: "Microsoft",
    title: "Backend Developer",
    location: "Noida",
    salary: "₹10 - ₹15 LPA",
    experience: "2-4 Years",
    type: "Full Time",
    skills: ["Node", "MongoDB"],
    posted: "Today",
  },
  {
    logo: google,
    company: "Google",
    title: "UI / UX Designer",
    location: "Remote",
    salary: "₹9 - ₹16 LPA",
    experience: "1-3 Years",
    type: "Remote",
    skills: ["Figma", "Adobe XD"],
    posted: "Today",
  },
  {
    logo: amazon,
    company: "Amazon",
    title: "DevOps Engineer",
    location: "Hyderabad",
    salary: "₹18 LPA",
    experience: "3-6 Years",
    type: "Hybrid",
    skills: ["AWS", "Docker"],
    posted: "Yesterday",
  },
  {
    logo: swiggy,
    company: "Swiggy",
    title: "HR Executive",
    location: "Delhi",
    salary: "₹5 - ₹8 LPA",
    experience: "0-2 Years",
    type: "Full Time",
    skills: ["Hiring", "Excel"],
    posted: "Today",
  },
  {
    logo: microsoft,
    company: "Microsoft",
    title: "QA Engineer",
    location: "Pune",
    salary: "₹7 - ₹11 LPA",
    experience: "1-3 Years",
    type: "Hybrid",
    skills: ["Manual", "Automation"],
    posted: "Today",
  },
  {
    logo: google,
    company: "Google",
    title: "Data Analyst",
    location: "Bangalore",
    salary: "₹12 - ₹20 LPA",
    experience: "2-4 Years",
    type: "Full Time",
    skills: ["SQL", "Power BI"],
    posted: "Today",
  },
];

function FeaturedJobs() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Latest Opportunities
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Featured Jobs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Explore premium opportunities from India&apos;s fastest-growing
            companies.
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
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full overflow-visible"
        >
          {jobs.map((job, index) => (
            <SwiperSlide
              key={`${job.company}-${job.title}-${index}`}
              className="h-auto"
            >
              <JobCard {...job} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default FeaturedJobs;