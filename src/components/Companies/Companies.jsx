const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
];

function Companies() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-center text-gray-500 text-lg font-medium mb-8">
          Trusted by leading companies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="border rounded-xl py-6 flex justify-center items-center shadow-sm hover:shadow-lg transition"
            >
              <span className="text-lg font-semibold text-gray-700">
                {company}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Companies;