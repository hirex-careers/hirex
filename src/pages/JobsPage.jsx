import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

import JobsHero from "../components/JobsPage/JobsHero";
import JobsToolbar from "../components/JobsPage/JobsToolbar";
import FilterSidebar from "../components/JobsPage/FilterSidebar";
import JobList from "../components/JobsPage/JobList";
import JobDetails from "../components/JobsPage/JobDetails";
import MobileFilterDrawer from "../components/JobsPage/MobileFilterDrawer";
import Pagination from "../components/JobsPage/Pagination";

import google from "../assets/images/company/google.png";
import microsoft from "../assets/images/company/microsoft.png";
import amazon from "../assets/images/company/amazon.png";
import swiggy from "../assets/images/company/swiggy.png";

const createInitialFilters = () => ({
  experience: [],
  jobType: [],
  workMode: [],
  datePosted: [],
  company: [],
  salary: 30,
});

const jobs = [
  {
    id: 1,
    logo: swiggy,
    title: "React Developer",
    company: "Airbnb",
    salary: "₹8 - ₹12 LPA",
    maxSalary: 12,
    experience: "3-5 Yrs",
    experienceFilter: "3-5 years",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "2h ago",
    postedDays: 0,
    postedOrder: 1,
    skills: ["React", "JavaScript", "HTML", "CSS", "Redux"],
  },
  {
    id: 2,
    logo: google,
    title: "Frontend Engineer",
    company: "Google",
    salary: "₹10 - ₹18 LPA",
    maxSalary: 18,
    experience: "2-4 Yrs",
    experienceFilter: "1-3 years",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "On-site",
    posted: "5h ago",
    postedDays: 0,
    postedOrder: 2,
    skills: ["React", "TypeScript", "JavaScript", "Testing"],
  },
  {
    id: 3,
    logo: microsoft,
    title: "Software Engineer",
    company: "Microsoft",
    salary: "₹7 - ₹11 LPA",
    maxSalary: 11,
    experience: "1-3 Yrs",
    experienceFilter: "1-3 years",
    location: "Noida, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "1d ago",
    postedDays: 1,
    postedOrder: 3,
    skills: ["Java", "Spring Boot", "SQL", "Azure"],
  },
  {
    id: 4,
    logo: swiggy,
    title: "Product Designer",
    company: "Swiggy",
    salary: "₹9 - ₹15 LPA",
    maxSalary: 15,
    experience: "2-4 Yrs",
    experienceFilter: "1-3 years",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "1d ago",
    postedDays: 1,
    postedOrder: 4,
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
  },
  {
    id: 5,
    logo: amazon,
    title: "Data Analyst",
    company: "Amazon",
    salary: "₹6 - ₹10 LPA",
    maxSalary: 10,
    experience: "1-2 Yrs",
    experienceFilter: "Fresher (0-1 yr)",
    location: "Pune, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "2d ago",
    postedDays: 2,
    postedOrder: 5,
    skills: ["SQL", "Excel", "Power BI", "Python"],
  },
  {
    id: 6,
    logo: google,
    title: "Product Manager",
    company: "Google",
    salary: "₹18 - ₹28 LPA",
    maxSalary: 28,
    experience: "4-7 Yrs",
    experienceFilter: "5+ years",
    location: "Gurugram, India",
    type: "Full Time",
    mode: "On-site",
    posted: "2d ago",
    postedDays: 2,
    postedOrder: 6,
    skills: [
      "Product Strategy",
      "Agile",
      "Analytics",
      "Leadership",
    ],
  },
  {
    id: 7,
    logo: microsoft,
    title: "Backend Developer",
    company: "Microsoft",
    salary: "₹11 - ₹17 LPA",
    maxSalary: 17,
    experience: "2-5 Yrs",
    experienceFilter: "3-5 years",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Remote",
    posted: "3d ago",
    postedDays: 3,
    postedOrder: 7,
    skills: ["Node.js", "MongoDB", "REST API", "Docker"],
  },
  {
    id: 8,
    logo: amazon,
    title: "DevOps Engineer",
    company: "Amazon",
    salary: "₹14 - ₹22 LPA",
    maxSalary: 22,
    experience: "3-6 Yrs",
    experienceFilter: "5+ years",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "3d ago",
    postedDays: 3,
    postedOrder: 8,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 9,
    logo: swiggy,
    title: "Business Analyst",
    company: "Swiggy",
    salary: "₹7 - ₹13 LPA",
    maxSalary: 13,
    experience: "1-4 Yrs",
    experienceFilter: "1-3 years",
    location: "Mumbai, India",
    type: "Full Time",
    mode: "Hybrid",
    posted: "4d ago",
    postedDays: 4,
    postedOrder: 9,
    skills: [
      "Excel",
      "SQL",
      "Business Analysis",
      "Power BI",
    ],
  },
  {
    id: 10,
    logo: google,
    title: "UI / UX Designer",
    company: "Google",
    salary: "₹10 - ₹16 LPA",
    maxSalary: 16,
    experience: "2-4 Yrs",
    experienceFilter: "3-5 years",
    location: "Remote",
    type: "Full Time",
    mode: "Remote",
    posted: "4d ago",
    postedDays: 4,
    postedOrder: 10,
    skills: [
      "Figma",
      "Design Systems",
      "UX Research",
      "Adobe XD",
    ],
  },
];

function JobsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] =
    useState(false);

  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);
  const [sortBy, setSortBy] = useState("Most Relevant");

  const [searchValues, setSearchValues] = useState({
    keyword: "",
    location: "",
    jobType: "All Job Types",
  });

  const [appliedSearch, setAppliedSearch] = useState({
    keyword: "",
    location: "",
    jobType: "All Job Types",
  });

  const [draftFilters, setDraftFilters] = useState(() =>
    createInitialFilters()
  );

  const [appliedFilters, setAppliedFilters] = useState(() =>
    createInitialFilters()
  );

  const handleSearch = () => {
    setAppliedSearch({
      ...searchValues,
    });
  };

  const applyFilters = () => {
    setAppliedFilters({
      ...draftFilters,
      experience: [...draftFilters.experience],
      jobType: [...draftFilters.jobType],
      workMode: [...draftFilters.workMode],
      datePosted: [...draftFilters.datePosted],
      company: [...draftFilters.company],
    });

    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setDraftFilters(createInitialFilters());
    setAppliedFilters(createInitialFilters());
  };

  const filteredJobs = useMemo(() => {
    const keyword = appliedSearch.keyword
      .trim()
      .toLowerCase();

    const location = appliedSearch.location
      .trim()
      .toLowerCase();

    let result = jobs.filter((job) => {
      const matchesKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword);

      const matchesLocation =
        !location ||
        job.location.toLowerCase().includes(location) ||
        job.mode.toLowerCase().includes(location);

      const matchesSearchType =
        appliedSearch.jobType === "All Job Types" ||
        job.type === appliedSearch.jobType ||
        job.mode === appliedSearch.jobType;

      const matchesExperience =
        appliedFilters.experience.length === 0 ||
        appliedFilters.experience.includes(
          job.experienceFilter
        );

      const matchesJobType =
        appliedFilters.jobType.length === 0 ||
        appliedFilters.jobType.includes(job.type);

      const matchesWorkMode =
        appliedFilters.workMode.length === 0 ||
        appliedFilters.workMode.includes(job.mode) ||
        (appliedFilters.workMode.includes(
          "Work From Home"
        ) &&
          job.mode === "Remote");

      const matchesCompany =
        appliedFilters.company.length === 0 ||
        appliedFilters.company.includes(job.company);

      const matchesSalary =
        appliedFilters.salary === 30 ||
        job.maxSalary <= appliedFilters.salary;

      const matchesDate =
        appliedFilters.datePosted.length === 0 ||
        appliedFilters.datePosted.some((date) => {
          if (date === "Last 24 Hours") {
            return job.postedDays <= 1;
          }

          if (date === "Last 3 Days") {
            return job.postedDays <= 3;
          }

          if (date === "Last 7 Days") {
            return job.postedDays <= 7;
          }

          if (date === "Last 30 Days") {
            return job.postedDays <= 30;
          }

          return true;
        });

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesSearchType &&
        matchesExperience &&
        matchesJobType &&
        matchesWorkMode &&
        matchesCompany &&
        matchesSalary &&
        matchesDate
      );
    });

    if (sortBy === "Latest") {
      result = [...result].sort(
        (firstJob, secondJob) =>
          firstJob.postedOrder - secondJob.postedOrder
      );
    }

    if (sortBy === "Salary: High to Low") {
      result = [...result].sort(
        (firstJob, secondJob) =>
          secondJob.maxSalary - firstJob.maxSalary
      );
    }

    return result;
  }, [appliedSearch, appliedFilters, sortBy]);

  /*
   * Current selected job filtered list me na ho,
   * to automatically first available job show hoga.
   * Isme useEffect aur setState ki zarurat nahi hai.
   */
  const selectedJob = useMemo(() => {
    const matchingSelectedJob = filteredJobs.find(
      (job) => job.id === selectedJobId
    );

    return matchingSelectedJob || filteredJobs[0] || null;
  }, [filteredJobs, selectedJobId]);

  const selectJob = (job) => {
    setSelectedJobId(job.id);
    setIsMobileDetailsOpen(true);
  };

  const closeMobileDetails = () => {
    setIsMobileDetailsOpen(false);
  };

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] pb-24 lg:pb-0">
      <JobsHero
        searchValues={searchValues}
        setSearchValues={setSearchValues}
        onSearch={handleSearch}
      />

      <section className="w-full py-4 sm:py-6 lg:py-8">
        <div className="mx-auto w-full max-w-[1700px] px-3 sm:px-5 lg:px-8">
          <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
            <JobsToolbar
              sortBy={sortBy}
              setSortBy={setSortBy}
              openFilters={() => setIsFilterOpen(true)}
              resultCount={filteredJobs.length}
            />

            <div className="flex items-start">
              {/* Desktop Filters */}
              <aside className="hidden w-[280px] shrink-0 border-r border-slate-200 lg:block">
                <FilterSidebar
                  filters={draftFilters}
                  setFilters={setDraftFilters}
                  onApply={applyFilters}
                  onClear={clearFilters}
                />
              </aside>

              {/* Job List */}
              <div className="min-w-0 flex-1 p-3 sm:p-4 xl:max-w-[560px] xl:border-r xl:border-slate-200">
                <JobList
                  jobs={filteredJobs}
                  selectedJobId={selectedJob?.id}
                  onSelectJob={selectJob}
                />

                {filteredJobs.length > 0 && (
                  <Pagination />
                )}
              </div>

              {/* Desktop Job Details */}
              <aside className="sticky top-20 hidden h-[calc(100vh-80px)] min-w-0 flex-1 overflow-y-auto xl:block">
                <JobDetails job={selectedJob} />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Filter Button */}
      {!isMobileDetailsOpen && (
        <div className="fixed bottom-3 left-3 right-3 z-[70] lg:hidden">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,0.4)]"
          >
            <FaFilter />
            Filters
          </button>
        </div>
      )}

      {/* Mobile Filters */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={draftFilters}
        setFilters={setDraftFilters}
        onApply={applyFilters}
        onClear={clearFilters}
      />

      {/* Mobile and Tablet Job Details */}
      <div
        className={`fixed inset-0 z-[140] bg-white transition-transform duration-300 xl:hidden ${
          isMobileDetailsOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto pt-20">
          <JobDetails
            job={selectedJob}
            showBackButton
            onClose={closeMobileDetails}
          />
        </div>
      </div>
    </main>
  );
}

export default JobsPage;