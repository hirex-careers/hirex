import { useState } from "react";

import PlacementHero from "../components/PlacementRecord/PlacementHero";
import PlacementFilters from "../components/PlacementRecord/PlacementFilters";
import MonthlyPlacementChart from "../components/PlacementRecord/MonthlyPlacementChart";
import DomainPlacementChart from "../components/PlacementRecord/DomainPlacementChart";
import SalaryDistribution from "../components/PlacementRecord/SalaryDistribution";
import RecentlyPlaced from "../components/PlacementRecord/RecentlyPlaced";
import TopHiringCompanies from "../components/PlacementRecord/TopHiringCompanies";
import PlacementTimeline from "../components/PlacementRecord/PlacementTimeline";
import SuccessStories from "../components/PlacementRecord/SuccessStories";
import PlacementTable from "../components/PlacementRecord/PlacementTable";

const initialFilters = {
  keyword: "",
  domain: "All Domains",
  year: "2024",
  month: "All Months",
};

function PlacementRecordPage() {
  const [filterValues, setFilterValues] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);

  const handleFilter = () => {
    setAppliedFilters({
      ...filterValues,
    });
  };

  const handleReset = () => {
    setFilterValues({
      ...initialFilters,
    });

    setAppliedFilters({
      ...initialFilters,
    });
  };

  const handleYearChange = (year) => {
    setFilterValues((previousState) => ({
      ...previousState,
      year,
    }));
  };

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] pb-24 lg:pb-0">
      {/* Placement Hero */}
      <PlacementHero
        year={filterValues.year}
        setYear={handleYearChange}
      />

      {/* Main Content */}
      <section className="w-full py-4 sm:py-6 lg:py-8">
        <div className="mx-auto w-full max-w-[1700px] px-3 sm:px-5 lg:px-8">
          {/* Filters */}
          <PlacementFilters
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            onFilter={handleFilter}
            onReset={handleReset}
          />

          {/* Applied Filter Summary */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-700">
              Showing results for:
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 font-bold text-blue-700">
              {appliedFilters.year}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 font-bold text-blue-700">
              {appliedFilters.month}
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 font-bold text-blue-700">
              {appliedFilters.domain}
            </span>

            {appliedFilters.keyword && (
              <span className="rounded-full bg-blue-50 px-3 py-1.5 font-bold text-blue-700">
                Search: {appliedFilters.keyword}
              </span>
            )}
          </div>

          {/* Placement Dashboard */}
          <div className="mt-6 space-y-6">
            {/* Analytics Charts */}
            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr_0.9fr]">
              <MonthlyPlacementChart />

              <DomainPlacementChart />

              <SalaryDistribution />
            </div>

            {/* Recently Placed Candidates */}
            <RecentlyPlaced />

            {/* Companies and Timeline */}
            <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <TopHiringCompanies />

              <PlacementTimeline />
            </div>

            {/* Candidate Stories */}
            <SuccessStories />

            {/* Complete Placement Records */}
            <PlacementTable />
          </div>
        </div>
      </section>
    </main>
  );
}

export default PlacementRecordPage;