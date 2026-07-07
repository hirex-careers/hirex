import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="lg:w-1/2 text-white">

          <p className="uppercase tracking-widest font-semibold text-sm mb-5">
            #1 Job Portal Website
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Find Your
            <br />
            Dream Job
            <br />
            With HireX
          </h1>

          <p className="mt-6 text-lg text-blue-100 leading-8">
            Discover thousands of verified job opportunities from
            top companies across India.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Find Jobs
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
              Post Job
            </button>

          </div>

          <SearchBar />

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0">

          <div className="w-[420px] h-[420px] bg-white/20 rounded-full flex justify-center items-center backdrop-blur-md">

            <div className="w-[320px] h-[320px] bg-white rounded-full shadow-2xl flex justify-center items-center">

              <span className="text-8xl">
                💼
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;