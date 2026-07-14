import { FaGooglePlay, FaApple } from "react-icons/fa";

function DownloadButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <button className="flex items-center gap-4 bg-white text-black px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">

        <FaGooglePlay className="text-3xl" />

        <div className="text-left">
          <p className="text-xs uppercase tracking-wider">
            Get it on
          </p>

          <h4 className="font-bold text-lg">
            Google Play
          </h4>
        </div>

      </button>

      <button className="flex items-center gap-4 border border-white text-white px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300">

        <FaApple className="text-3xl" />

        <div className="text-left">
          <p className="text-xs uppercase tracking-wider">
            Download on
          </p>

          <h4 className="font-bold text-lg">
            App Store
          </h4>
        </div>

      </button>

    </div>
  );
}

export default DownloadButtons;