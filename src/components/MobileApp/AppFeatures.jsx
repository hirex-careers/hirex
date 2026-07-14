import { FaCheckCircle } from "react-icons/fa";

const features = [
  "One Click Apply",
  "AI Job Recommendation",
  "Daily Job Alerts",
  "Track Every Application",
];

function AppFeatures() {
  return (
    <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:mx-0 lg:mt-10">
      {features.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 text-white"
        >
          <FaCheckCircle className="shrink-0 text-lg text-cyan-300 sm:text-xl" />

          <span className="text-sm font-medium sm:text-base lg:text-lg">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AppFeatures;