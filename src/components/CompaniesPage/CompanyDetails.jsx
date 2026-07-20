import CompanyOverview from "./CompanyOverview";
import CompanySidebar from "./CompanySidebar";

function CompanyDetails({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="bg-[#F8FAFC]">
      <div className="grid gap-6 xl:grid-cols-[1.6fr_420px]">
        {/* LEFT */}
        <div>
          <CompanyOverview company={company} />
        </div>

        {/* RIGHT */}
        <div>
          <CompanySidebar company={company} />
        </div>
      </div>
    </section>
  );
}

export default CompanyDetails;