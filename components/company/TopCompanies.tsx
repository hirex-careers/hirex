const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Accenture",
  "Wipro",
  "IBM",
];

export default function TopCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Trusted By Top Companies
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Thousands of companies hire through HireX
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition text-center font-bold text-xl"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}