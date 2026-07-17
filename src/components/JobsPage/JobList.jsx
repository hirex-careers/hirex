import {
  FaSearch,
  FaUndoAlt,
} from "react-icons/fa";

import JobListCard from "./JobListCard";

function JobList({
  jobs,
  selectedJobId,
  onSelectJob,
}) {
  if (jobs.length === 0) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
          <FaSearch />
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-slate-900">
          No matching jobs found
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
          Try another job title, company, location or job type.
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
        >
          <FaUndoAlt />
          Reset Search
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {jobs.map((job) => (
        <JobListCard
          key={job.id}
          {...job}
          isSelected={selectedJobId === job.id}
          onSelect={() => onSelectJob(job)}
        />
      ))}
    </div>
  );
}

export default JobList;