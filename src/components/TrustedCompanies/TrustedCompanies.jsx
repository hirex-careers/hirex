import microsoft from "../../assets/images/company/microsoft.png";
import google from "../../assets/images/company/google.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const companies = [
  microsoft,
  google,
  amazon,
  swiggy,
  microsoft,
  google,
];

function TrustedCompanies() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-500 font-medium mb-10">
          Trusted by 500+ Companies Worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">

          {companies.map((logo, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl h-24 flex justify-center items-center hover:shadow-lg transition"
            >
              <img
                src={logo}
                alt="company"
                className="h-10 object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;