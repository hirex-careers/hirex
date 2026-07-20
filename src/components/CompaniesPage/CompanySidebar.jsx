import { useState } from "react";

import {
  FaBookmark,
  FaRegBookmark,
  FaBriefcase,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaShareAlt,
  FaStar,
  FaThumbsUp,
  FaUserTie,
} from "react-icons/fa";

function CompanySidebar({ company }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const handleShare = async () => {
    const shareData = {
      title: `${company.name} on HireX`,
      text: `Explore ${company.name} and its open job opportunities on HireX.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("Link copied");

      setTimeout(() => {
        setShareMessage("");
      }, 1800);
    } catch {
      setShareMessage("");
    }
  };

  return (
    <div className="space-y-5 lg:sticky lg:top-24">
      {/* Rating */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Company Rating
        </p>

        <div className="mt-4 flex items-end gap-3">
          <span className="text-5xl font-black text-slate-900">
            {company.rating}
          </span>

          <div className="pb-1">
            <div className="flex gap-1 text-amber-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Based on 12,345 reviews
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <RatingRow label="Work-Life Balance" value="4.5" width="90%" />
          <RatingRow label="Salary & Benefits" value="4.3" width="86%" />
          <RatingRow label="Career Growth" value="4.4" width="88%" />
          <RatingRow label="Company Culture" value="4.6" width="92%" />
        </div>
      </section>

      {/* Employee Sentiment */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-extrabold text-slate-900">
          Employee Sentiment
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <SentimentCard
            icon={<FaThumbsUp />}
            value="92%"
            label="Recommend"
          />

          <SentimentCard
            icon={<FaUserTie />}
            value="89%"
            label="CEO Approval"
          />
        </div>
      </section>

      {/* Hiring */}
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaBriefcase />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
              Actively Hiring
            </p>

            <h3 className="mt-1 text-xl font-extrabold text-slate-900">
              {company.openJobs} Open Jobs
            </h3>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
          <p className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Verified job opportunities
          </p>

          <p className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Multiple departments hiring
          </p>

          <p className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Fresher and experienced roles
          </p>
        </div>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
        >
          View Open Jobs
          <FaExternalLinkAlt className="text-xs" />
        </button>
      </section>

      {/* Actions */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <button
          type="button"
          onClick={() => setIsFollowing((previous) => !previous)}
          className={`w-full rounded-xl px-5 py-3.5 font-extrabold transition ${
            isFollowing
              ? "border border-blue-600 bg-blue-50 text-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isFollowing ? "Following Company" : "Follow Company"}
        </button>

        <div className="relative mt-3 grid grid-cols-2 gap-3">
          {shareMessage && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white">
              {shareMessage}
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsSaved((previous) => !previous)}
            className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-bold transition ${
              isSaved
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-slate-300 text-slate-700 hover:border-blue-500"
            }`}
          >
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            {isSaved ? "Saved" : "Save"}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
          >
            <FaShareAlt />
            Share
          </button>
        </div>
      </section>
    </div>
  );
}

function RatingRow({ label, value, width }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs font-bold">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          style={{ width }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
        ></div>
      </div>
    </div>
  );
}

function SentimentCard({ icon, value, label }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>

      <p className="mt-3 text-xl font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default CompanySidebar;