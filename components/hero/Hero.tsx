export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Find Your <br />
          <span className="text-yellow-300">Dream Job</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
          Connect with verified companies and get hired faster.
          Trusted by job seekers across India.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Find Jobs
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
            Hire Talent
          </button>
        </div>

      </div>
    </section>
  );
}