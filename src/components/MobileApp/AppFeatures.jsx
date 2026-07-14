import { FaCheckCircle } from "react-icons/fa";

const features = [
  "One Click Apply",
  "AI Job Recommendation",
  "Daily Job Alerts",
  "Track Every Application",
];

function AppFeatures() {
  return (
    <div className="mt-10 space-y-5">
      {features.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 text-white"
        >
          <FaCheckCircle className="text-cyan-300 text-xl" />

          <span className="text-lg font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AppFeatures;