export default function SearchSection() {
  return (
    <section className="bg-white py-10 shadow-lg rounded-2xl -mt-12 relative z-10 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Job title or keyword"
          className="border rounded-xl p-4 outline-none"
        />

        <input
          type="text"
          placeholder="Location"
          className="border rounded-xl p-4 outline-none"
        />

        <select className="border rounded-xl p-4">
          <option>Experience</option>
          <option>Fresher</option>
          <option>1-2 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        <button className="bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-700">
          Search Jobs
        </button>

      </div>
    </section>
  );
}