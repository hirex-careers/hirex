import AppFeatures from "./AppFeatures";
import DownloadButtons from "./DownloadButtons";
import MobilePhone from "./MobilePhone";

function MobileApp() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#07142E] via-[#1743B3] to-[#2A67FF]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[140px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-5 py-2 rounded-full text-cyan-300 font-semibold">

              📱 HireX Mobile App

            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-white">

              Find Your

              <br />

              Dream Job

              <br />

              <span className="text-cyan-300">

                Anywhere.

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-blue-100 max-w-xl">

              Search jobs, apply instantly, receive AI powered
              recommendations and track every application from your phone.

            </p>

            <AppFeatures />

            <DownloadButtons />

          </div>

          {/* RIGHT */}

          <MobilePhone />

        </div>

      </div>

    </section>
  );
}

export default MobileApp;