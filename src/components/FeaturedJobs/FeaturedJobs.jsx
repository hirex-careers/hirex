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
    title: "UI UX Designer",
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
    salary: "₹5-8 LPA",
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
    salary: "₹7-11 LPA",
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
    salary: "₹12-20 LPA",
    experience: "2-4 Years",
    type: "Full Time",
    skills: ["SQL", "Power BI"],
    posted: "Today",
  },
];

function FeaturedJobs() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Latest Opportunities
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Featured Jobs
          </h2>

          <p className="text-gray-500 mt-4">
            Explore premium opportunities from India's fastest-growing companies.
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

            1024: {
              slidesPerView: 3,
            },

            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {jobs.map((job, index) => (
            <SwiperSlide key={index}>
              <JobCard {...job} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default FeaturedJobs;