import {
  FaSearch,
} from "react-icons/fa";

import CompanyCard from "./CompanyCard";

function CompanyGrid({
  companies = [],
  selectedCompanyId,
  onSelectCompany,
}) {
  if (!Array.isArray(companies) || companies.length === 0) {
    return (
      <div className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
          <FaSearch />
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-slate-900">
          No companies found
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Try another company name, industry or location.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          {...company}
          isSelected={selectedCompanyId === company.id}
          onSelect={() => onSelectCompany(company)}
        />
      ))}
    </div>
  );
}

export default CompanyGrid;