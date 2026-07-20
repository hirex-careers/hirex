import { useState } from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaCamera,
  FaCheckCircle,
  FaExpandAlt,
  FaLaptopCode,
  FaTimes,
  FaUsers,
  FaGlassCheers,
} from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Modern Workspace",
    description:
      "A comfortable workspace designed for collaboration, productivity and innovation.",
    icon: <FaLaptopCode />,
    gradient:
      "from-[#071A55] via-[#123B9A] to-[#2869E8]",
    size: "large",
  },
  {
    id: 2,
    title: "Team Collaboration",
    description:
      "Cross-functional teams work together to solve meaningful problems.",
    icon: <FaUsers />,
    gradient:
      "from-violet-600 via-purple-600 to-indigo-700",
    size: "small",
  },
  {
    id: 3,
    title: "Events & Celebrations",
    description:
      "Regular team events, achievements and festival celebrations.",
    icon: <FaGlassCheers />,
    gradient:
      "from-orange-500 via-rose-500 to-pink-600",
    size: "small",
  },
  {
    id: 4,
    title: "Learning Sessions",
    description:
      "Workshops, mentoring and development sessions for employees.",
    icon: <FaBriefcase />,
    gradient:
      "from-emerald-500 via-teal-500 to-cyan-600",
    size: "small",
  },
  {
    id: 5,
    title: "Innovation Culture",
    description:
      "Employees experiment, build and contribute to new ideas.",
    icon: <FaCheckCircle />,
    gradient:
      "from-blue-600 via-cyan-500 to-teal-500",
    size: "small",
  },
];

const cultureHighlights = [
  {
    value: "92%",
    label: "Employees Recommend",
  },
  {
    value: "4.6/5",
    label: "Culture Rating",
  },
  {
    value: "50+",
    label: "Annual Events",
  },
  {
    value: "24/7",
    label: "Learning Access",
  },
];

function CompanyGallery({ company }) {
  const [selectedItem, setSelectedItem] = useState(null);

  if (!company) {
    return null;
  }

  return (
    <>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Heading */}
        <div className="flex flex-col gap-5 border-b border-slate-200 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-7">
          <div>
            <div className="flex items-center gap-2 text-blue-600">
              <FaCamera />

              <p className="text-xs font-bold uppercase tracking-[0.18em]">
                Office Gallery
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Life at {company.name}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Explore the workplace, people, events and employee culture at{" "}
              {company.name}.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedItem(galleryItems[0])}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-600 px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50 sm:w-auto"
          >
            View All Photos
            <FaArrowRight />
          </button>
        </div>

        {/* Gallery */}
        <div className="p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Large Featured Card */}
            <GalleryCard
              item={galleryItems[0]}
              company={company}
              onOpen={() => setSelectedItem(galleryItems[0])}
              isLarge
            />

            {/* Right Small Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {galleryItems.slice(1).map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  company={company}
                  onOpen={() => setSelectedItem(item)}
                />
              ))}
            </div>
          </div>

          {/* Culture Highlights */}
          <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] p-5 text-white sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Culture Highlights
                </p>

                <h3 className="mt-2 text-2xl font-extrabold">
                  A Workplace Built for Growth
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                  Employees receive opportunities to learn, collaborate,
                  innovate and build long-term careers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[600px]">
                {cultureHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-lg"
                  >
                    <p className="text-xl font-extrabold sm:text-2xl">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[10px] font-semibold leading-4 text-blue-100 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            aria-label="Close gallery preview"
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:bg-white"
            >
              <FaTimes />
            </button>

            <div
              className={`relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br ${selectedItem.gradient} p-8 text-center text-white sm:min-h-[520px]`}
            >
              {/* Decorations */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10"></div>

                <div className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full border border-white/10"></div>

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl backdrop-blur-lg">
                  {selectedItem.icon}
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  {company.name}
                </p>

                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  {selectedItem.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div>
                <h4 className="font-extrabold text-slate-900">
                  {selectedItem.title}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Life and culture at {company.name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function GalleryCard({
  item,
  company,
  onOpen,
  isLarge = false,
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative w-full overflow-hidden rounded-3xl bg-gradient-to-br text-left text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        item.gradient
      } ${
        isLarge
          ? "min-h-[360px] sm:min-h-[460px]"
          : "min-h-[220px]"
      }`}
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10"></div>

        <div className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      {/* Expand Button */}
      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-lg transition group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600">
        <FaExpandAlt />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-7">
        <div
          className={`flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg ${
            isLarge
              ? "h-16 w-16 text-2xl"
              : "h-12 w-12 text-lg"
          }`}
        >
          {item.icon}
        </div>

        <p className="mt-5 text-xs font-bold uppercase tracking-[0.17em] text-white/70">
          {company.name}
        </p>

        <h3
          className={`mt-2 font-extrabold ${
            isLarge
              ? "text-3xl sm:text-4xl"
              : "text-xl"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`mt-3 leading-6 text-white/80 ${
            isLarge
              ? "max-w-lg text-sm sm:text-base"
              : "text-xs sm:text-sm"
          }`}
        >
          {item.description}
        </p>
      </div>
    </button>
  );
}

export default CompanyGallery;