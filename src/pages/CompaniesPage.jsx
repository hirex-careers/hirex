import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";

import CompaniesHero from "../components/CompaniesPage/CompaniesHero";
import CompaniesToolbar from "../components/CompaniesPage/CompaniesToolbar";
import CompanyFilterSidebar from "../components/CompaniesPage/CompanyFilterSidebar";
import CompanyGrid from "../components/CompaniesPage/CompanyGrid";
import CompanyPagination from "../components/CompaniesPage/CompanyPagination";
import MobileCompanyFilter from "../components/CompaniesPage/MobileCompanyFilter";
import CompanyDetails from "../components/CompaniesPage/CompanyDetails";
import EmployeeReviews from "../components/CompaniesPage/EmployeeReviews";
import CompanyOpenJobs from "../components/CompaniesPage/CompanyOpenJobs";
import HiringProcess from "../components/CompaniesPage/HiringProcess";
import CompanyGallery from "../components/CompaniesPage/CompanyGallery";
import CompanyBenefits from "../components/CompaniesPage/CompanyBenefits";
import CompanyAwards from "../components/CompaniesPage/CompanyAwards";
import CompanyStats from "../components/CompaniesPage/CompanyStats";
import SimilarCompanies from "../components/CompaniesPage/SimilarCompanies";

import google from "../assets/images/company/google.png";
import microsoft from "../assets/images/company/microsoft.png";
import amazon from "../assets/images/company/amazon.png";
import swiggy from "../assets/images/company/swiggy.png";

const createInitialFilters = () => ({
  industry: [],
  companySize: [],
  location: [],
  rating: [],
  hiringStatus: [],
});

const companies = [
  {
    id: 1,
    name: "Google",
    logo: google,
    industry: "Technology, Internet",
    industryFilter: "Technology",
    location: "Bangalore, India",
    locationFilter: "Bangalore",
    rating: 4.6,
    openJobs: 234,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "1998",
    headquarters: "Bangalore",
    presence: "Global",
    hiringStatus: "Actively Hiring",
    popularityOrder: 1,
  },
  {
    id: 2,
    name: "Microsoft",
    logo: microsoft,
    industry: "Technology, Software",
    industryFilter: "Technology",
    location: "Hyderabad, India",
    locationFilter: "Hyderabad",
    rating: 4.5,
    openJobs: 198,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "1975",
    headquarters: "Hyderabad",
    presence: "Global",
    hiringStatus: "Actively Hiring",
    popularityOrder: 2,
  },
  {
    id: 3,
    name: "Amazon",
    logo: amazon,
    industry: "E-commerce",
    industryFilter: "E-commerce",
    location: "Bangalore, India",
    locationFilter: "Bangalore",
    rating: 4.4,
    openJobs: 312,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "1994",
    headquarters: "Bangalore",
    presence: "Global",
    hiringStatus: "Actively Hiring",
    popularityOrder: 3,
  },
  {
    id: 4,
    name: "Swiggy",
    logo: swiggy,
    industry: "Food Delivery",
    industryFilter: "E-commerce",
    location: "Bangalore, India",
    locationFilter: "Bangalore",
    rating: 4.3,
    openJobs: 168,
    employees: "5,000+",
    companySizeFilter: "500+ employees",
    founded: "2014",
    headquarters: "Bangalore",
    presence: "India",
    hiringStatus: "Actively Hiring",
    popularityOrder: 4,
  },
  {
    id: 5,
    name: "Tata Consultancy",
    logo: microsoft,
    industry: "Technology, IT Services",
    industryFilter: "Technology",
    location: "Mumbai, India",
    locationFilter: "Mumbai",
    rating: 4.2,
    openJobs: 278,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "1968",
    headquarters: "Mumbai",
    presence: "Global",
    hiringStatus: "Actively Hiring",
    popularityOrder: 5,
  },
  {
    id: 6,
    name: "Infosys",
    logo: google,
    industry: "Technology, IT Services",
    industryFilter: "Technology",
    location: "Pune, India",
    locationFilter: "Pune",
    rating: 4.1,
    openJobs: 189,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "1981",
    headquarters: "Bangalore",
    presence: "Global",
    hiringStatus: "Hiring Soon",
    popularityOrder: 6,
  },
  {
    id: 7,
    name: "Zomato",
    logo: swiggy,
    industry: "Food Technology",
    industryFilter: "Technology",
    location: "Gurugram, India",
    locationFilter: "Delhi NCR",
    rating: 4.2,
    openJobs: 201,
    employees: "5,000+",
    companySizeFilter: "500+ employees",
    founded: "2008",
    headquarters: "Gurugram",
    presence: "India",
    hiringStatus: "Actively Hiring",
    popularityOrder: 7,
  },
  {
    id: 8,
    name: "Flipkart",
    logo: amazon,
    industry: "E-commerce",
    industryFilter: "E-commerce",
    location: "Bangalore, India",
    locationFilter: "Bangalore",
    rating: 4.3,
    openJobs: 143,
    employees: "10,000+",
    companySizeFilter: "500+ employees",
    founded: "2007",
    headquarters: "Bangalore",
    presence: "India",
    hiringStatus: "Hiring Soon",
    popularityOrder: 8,
  },
];

function CompaniesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [selectedCompanyId, setSelectedCompanyId] = useState(
    companies[0].id
  );

  const [searchValues, setSearchValues] = useState({
    keyword: "",
    industry: "All Industries",
    location: "",
  });

  const [appliedSearch, setAppliedSearch] = useState({
    keyword: "",
    industry: "All Industries",
    location: "",
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
      industry: [...draftFilters.industry],
      companySize: [...draftFilters.companySize],
      location: [...draftFilters.location],
      rating: [...draftFilters.rating],
      hiringStatus: [...draftFilters.hiringStatus],
    });

    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setDraftFilters(createInitialFilters());
    setAppliedFilters(createInitialFilters());
  };

  const filteredCompanies = useMemo(() => {
    const keyword = appliedSearch.keyword
      .trim()
      .toLowerCase();

    const location = appliedSearch.location
      .trim()
      .toLowerCase();

    let result = companies.filter((company) => {
      const matchesKeyword =
        !keyword ||
        company.name.toLowerCase().includes(keyword) ||
        company.industry.toLowerCase().includes(keyword);

      const matchesSearchLocation =
        !location ||
        company.location.toLowerCase().includes(location) ||
        company.headquarters.toLowerCase().includes(location);

      const matchesSearchIndustry =
        appliedSearch.industry === "All Industries" ||
        company.industry
          .toLowerCase()
          .includes(appliedSearch.industry.toLowerCase());

      const matchesIndustryFilter =
        appliedFilters.industry.length === 0 ||
        appliedFilters.industry.includes(
          company.industryFilter
        );

      const matchesCompanySize =
        appliedFilters.companySize.length === 0 ||
        appliedFilters.companySize.includes(
          company.companySizeFilter
        );

      const matchesLocationFilter =
        appliedFilters.location.length === 0 ||
        appliedFilters.location.includes(
          company.locationFilter
        );

      const matchesHiringStatus =
        appliedFilters.hiringStatus.length === 0 ||
        appliedFilters.hiringStatus.includes(
          company.hiringStatus
        );

      const matchesRating =
        appliedFilters.rating.length === 0 ||
        appliedFilters.rating.some((ratingOption) => {
          if (ratingOption === "4.5 & above") {
            return company.rating >= 4.5;
          }

          if (ratingOption === "4.0 & above") {
            return company.rating >= 4;
          }

          if (ratingOption === "3.5 & above") {
            return company.rating >= 3.5;
          }

          if (ratingOption === "3.0 & above") {
            return company.rating >= 3;
          }

          return true;
        });

      return (
        matchesKeyword &&
        matchesSearchLocation &&
        matchesSearchIndustry &&
        matchesIndustryFilter &&
        matchesCompanySize &&
        matchesLocationFilter &&
        matchesHiringStatus &&
        matchesRating
      );
    });

    if (sortBy === "Most Popular") {
      result = [...result].sort(
        (firstCompany, secondCompany) =>
          firstCompany.popularityOrder -
          secondCompany.popularityOrder
      );
    }

    if (sortBy === "Highest Rated") {
      result = [...result].sort(
        (firstCompany, secondCompany) =>
          secondCompany.rating - firstCompany.rating
      );
    }

    if (sortBy === "Most Open Jobs") {
      result = [...result].sort(
        (firstCompany, secondCompany) =>
          secondCompany.openJobs - firstCompany.openJobs
      );
    }

    return result;
  }, [appliedSearch, appliedFilters, sortBy]);

  const selectedCompany = useMemo(() => {
    const matchingCompany = filteredCompanies.find(
      (company) => company.id === selectedCompanyId
    );

    return matchingCompany || filteredCompanies[0] || null;
  }, [filteredCompanies, selectedCompanyId]);

  const selectCompany = (company) => {
    setSelectedCompanyId(company.id);

    setTimeout(() => {
      document
        .getElementById("company-details")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] pb-24 lg:pb-0">
      <CompaniesHero
        searchValues={searchValues}
        setSearchValues={setSearchValues}
        onSearch={handleSearch}
      />

      <section className="w-full py-4 sm:py-6 lg:py-8">
        <div className="mx-auto w-full max-w-[1700px] px-3 sm:px-5 lg:px-8">
          {/* Company Listing */}
          <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
            <CompaniesToolbar
              resultCount={filteredCompanies.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
              openFilters={() => setIsFilterOpen(true)}
            />

            <div className="flex items-start">
              {/* Desktop Filters */}
              <aside className="hidden w-[280px] shrink-0 border-r border-slate-200 lg:block">
                <CompanyFilterSidebar
                  filters={draftFilters}
                  setFilters={setDraftFilters}
                  onApply={applyFilters}
                  onClear={clearFilters}
                />
              </aside>

              {/* Company Cards */}
              <div className="min-w-0 flex-1 p-3 sm:p-4 lg:p-5">
                <CompanyGrid
                  companies={filteredCompanies}
                  selectedCompanyId={selectedCompany?.id}
                  onSelectCompany={selectCompany}
                />

                {filteredCompanies.length > 0 && (
                  <CompanyPagination />
                )}
              </div>
            </div>
          </div>

          {/* Selected Company Sections */}
          {selectedCompany && (
            <div
              id="company-details"
              className="mt-6 scroll-mt-24 space-y-6"
            >
              <CompanyDetails company={selectedCompany} />

              <CompanyOpenJobs company={selectedCompany} />

              <HiringProcess company={selectedCompany} />

              <CompanyGallery company={selectedCompany} />

              <EmployeeReviews company={selectedCompany} />

              <CompanyBenefits company={selectedCompany} />

              <CompanyAwards company={selectedCompany} />

              <CompanyStats company={selectedCompany} />

              <SimilarCompanies 
              currentCompany={selectedCompany}
              onSelectCompany={selectCompany}/>

            </div>
          )}
        </div>
      </section>

      {/* Mobile Filter Button */}
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

      {/* Mobile Filter Drawer */}
      <MobileCompanyFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={draftFilters}
        setFilters={setDraftFilters}
        onApply={applyFilters}
        onClear={clearFilters}
      />
    </main>
  );
}

export default CompaniesPage;