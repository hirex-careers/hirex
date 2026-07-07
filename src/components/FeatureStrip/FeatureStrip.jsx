import {
  FaBriefcase,
  FaShieldAlt,
  FaComments,
  FaUserGraduate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBriefcase size={30} />,
    title: "Find Jobs",
    description: "Discover verified job opportunities that match your skills.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Verified Companies",
    description: "Apply confidently to trusted companies.",
  },
  {
    icon: <FaComments size={30} />,
    title: "100% Response",
    description: "Receive faster responses from recruiters.",
  },
  {
    icon: <FaUserGraduate size={30} />,
    title: "Career Support",
    description: "Resume review, interview tips and career guidance.",
  },
];

function FeatureStrip() {
  return (
    <section className="max-w-7xl mx-auto my-16">
      <div className="bg-gradient-to-r from-[#0B1F56] to-[#1E3A8A] rounded-3xl p-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="text-white flex gap-5 items-start"
            >
              <div className="w-16 h-16 rounded-full bg-blue-600 flex justify-center items-center">
                {item.icon}
              </div>

              <div>

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm leading-6">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeatureStrip;