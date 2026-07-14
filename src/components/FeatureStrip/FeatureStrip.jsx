import {
  FaBriefcase,
  FaShieldAlt,
  FaComments,
  FaUserGraduate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBriefcase />,
    title: "Find Jobs",
    description: "Discover verified job opportunities that match your skills.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Companies",
    description: "Apply confidently to trusted companies.",
  },
  {
    icon: <FaComments />,
    title: "100% Response",
    description: "Receive faster responses from recruiters.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Career Support",
    description: "Resume review, interview tips and career guidance.",
  },
];

function FeatureStrip() {
  return (
    <section className="w-full bg-white pt-0 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="rounded-3xl bg-gradient-to-r from-[#0B1F56] via-[#15347C] to-[#1E3A8A] px-5 py-7 shadow-xl sm:px-7 sm:py-8 lg:px-9 lg:py-10">

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 text-white lg:gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeatureStrip;