export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">

        <h1 className="text-6xl font-bold leading-tight">
          Find Jobs.
          <br />
          Get Hired.
          <br />
          Faster.
        </h1>

        <p className="mt-6 text-xl max-w-xl text-gray-200">
          HireX helps candidates connect with verified companies and
          employers hire quality talent faster.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
            Find Jobs
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Post a Job
          </button>

        </div>

      </div>
    </section>
  );
}