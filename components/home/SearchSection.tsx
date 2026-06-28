export default function SearchSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white shadow-2xl rounded-2xl p-6 -mt-24 relative z-20">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Job Title"
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              className="border rounded-xl px-4 py-3 outline-none"
            />

            <select className="border rounded-xl px-4 py-3">
              <option>Experience</option>
              <option>Fresher</option>
              <option>1+ Years</option>
              <option>2+ Years</option>
            </select>

            <button className="bg-blue-600 text-white rounded-xl">
              Search Jobs
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}