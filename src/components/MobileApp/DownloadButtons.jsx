import {
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function DownloadButtons() {
  return (
    <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:mt-12">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-4 rounded-2xl bg-white px-6 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <FaGooglePlay className="text-2xl sm:text-3xl" />

        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider sm:text-xs">
            Get it on
          </p>

          <h4 className="text-base font-bold sm:text-lg">
            Google Play
          </h4>
        </div>
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-4 rounded-2xl border border-white px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
      >
        <FaApple className="text-2xl sm:text-3xl" />

        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider sm:text-xs">
            Download on
          </p>

          <h4 className="text-base font-bold sm:text-lg">
            App Store
          </h4>
        </div>
      </button>
    </div>
  );
}

export default DownloadButtons;