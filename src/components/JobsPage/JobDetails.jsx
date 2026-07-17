import { useState } from "react";

import {
  FaArrowLeft,
  FaBookmark,
  FaRegBookmark,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShareAlt,
  FaUsers,
} from "react-icons/fa";

import ApplyModal from "./ApplyModal";

function JobDetails({
  job,
  onClose,
  showBackButton = false,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  if (!job) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-white p-8 text-center">
        <div>
          <FaBriefcase className="mx-auto text-4xl text-slate-300" />

          <h3 className="mt-4 text-lg font-bold text-slate-900">
            Select a job
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Click any job card to view complete details.
          </p>
        </div>
      </div>
    );
  }

  const skills =
    job.skills || [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "REST API",
    ];

  const responsibilities =
    job.responsibilities || [
      "Build responsive and scalable user interfaces.",
      "Collaborate with product, design and backend teams.",
      "Write clean, reusable and maintainable code.",
      "Review code and improve application performance.",
    ];

  const requirements =
    job.requirements || [
      `${job.experience} of relevant professional experience.`,
      "Strong problem-solving and communication skills.",
      "Good understanding of modern development practices.",
      "Ability to work independently and within a team.",
    ];

  const benefits =
    job.benefits || [
      "Competitive salary package",
      "Health and wellness benefits",
      "Learning and development support",
      "Flexible working environment",
    ];

  const handleShare = async () => {
    const shareData = {
      title: `${job.title} at ${job.company}`,
      text: `Check out this ${job.title} opportunity at ${job.company}.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Link copied!");

      setTimeout(() => {
        setShareMessage("");
      }, 1800);
    } catch {
      setShareMessage("");
    }
  };

  return (
    <>
      <div className="h-full bg-white">
        {/* Header */}
        <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              {showBackButton && (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Go back"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                >
                  <FaArrowLeft />
                </button>
              )}

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Job Details
                </p>

                <h2 className="mt-1 truncate text-lg font-extrabold text-slate-900">
                  {job.title}
                </h2>
              </div>
            </div>

            <div className="relative flex shrink-0 items-center gap-2">
              {shareMessage && (
                <span className="absolute right-12 top-12 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-lg">
                  {shareMessage}
                </span>
              )}

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share job"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600"
              >
                <FaShareAlt />
              </button>

              <button
                type="button"
                onClick={() => setIsSaved((previous) => !previous)}
                aria-label="Save job"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
                  isSaved
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                {isSaved ? (
                  <FaBookmark />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-28 sm:p-6 sm:pb-28">
          {/* Company */}
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-11 w-11 object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                {job.title}
              </h1>

              <div className="mt-1 flex items-center gap-2">
                <p className="font-bold text-blue-600">
                  {job.company}
                </p>

                <FaCheckCircle className="text-sm text-blue-500" />
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Posted {job.posted}
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <InfoBox
              icon={<FaBriefcase />}
              label="Experience"
              value={job.experience}
            />

            <InfoBox
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={job.location}
            />

            <InfoBox
              icon={<FaUsers />}
              label="Work Mode"
              value={job.mode}
            />

            <InfoBox
              icon={<FaClock />}
              label="Job Type"
              value={job.type}
            />
          </div>

          {/* Salary */}
          <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-green-600">
              Salary
            </p>

            <p className="mt-1 text-xl font-extrabold text-slate-900">
              {job.salary}
            </p>
          </div>

          <DetailSection title="Required Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="Job Description">
            <p className="text-sm leading-7 text-slate-600">
              We are looking for a talented {job.title} to join the{" "}
              {job.company} team. You will work with experienced professionals
              to build high-quality solutions and create meaningful impact.
            </p>
          </DetailSection>

          <DetailSection title="Responsibilities">
            <BulletList items={responsibilities} />
          </DetailSection>

          <DetailSection title="Requirements">
            <BulletList items={requirements} />
          </DetailSection>

          <DetailSection title="Benefits">
            <BulletList items={benefits} />
          </DetailSection>

          <DetailSection title="About the Company">
            <div className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center gap-3">
                <FaBuilding className="text-xl text-blue-600" />

                <div>
                  <h4 className="font-extrabold text-slate-900">
                    {job.company}
                  </h4>

                  <p className="text-xs text-slate-500">
                    Verified employer on HireX
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {job.company} is hiring talented professionals to work on
                innovative products, technologies and customer-focused
                solutions.
              </p>
            </div>
          </DetailSection>
        </div>

        {/* Sticky Apply */}
        <div className="sticky bottom-0 z-20 border-t border-slate-200 bg-white/95 p-4 backdrop-blur-xl sm:px-6">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsSaved((previous) => !previous)}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              {isSaved ? (
                <FaBookmark className="text-blue-600" />
              ) : (
                <FaRegBookmark />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsApplyOpen(true)}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        job={job}
      />
    </>
  );
}

function InfoBox({
  icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}

        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-2 break-words text-xs font-bold text-slate-800 sm:text-sm">
        {value}
      </p>
    </div>
  );
}

function DetailSection({
  title,
  children,
}) {
  return (
    <section className="mt-7">
      <h3 className="text-lg font-extrabold text-slate-900">
        {title}
      </h3>

      <div className="mt-3">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
        >
          <FaCheckCircle className="mt-1 shrink-0 text-sm text-green-500" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default JobDetails;