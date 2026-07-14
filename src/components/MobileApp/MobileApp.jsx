import AppFeatures from "./AppFeatures";
import DownloadButtons from "./DownloadButtons";
import MobilePhone from "./MobilePhone";

function MobileApp() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#07142E] via-[#1743B3] to-[#2A67FF] py-16 sm:py-20 lg:py-24">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px] sm:h-[450px] sm:w-[450px]"></div>

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-[140px] sm:h-[500px] sm:w-[500px]"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-lg sm:px-5">
              📱 HireX Mobile App
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <br />
              Dream Job
              <br />
              <span className="text-cyan-300">
                Anywhere.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg lg:mx-0 lg:mt-8">
              Search jobs, apply instantly, receive AI-powered
              recommendations and track every application from your phone.
            </p>

            <AppFeatures />
            <DownloadButtons />
          </div>

          {/* Right Phone */}
          <MobilePhone />
        </div>
      </div>
    </section>
  );
}

export default MobileApp;