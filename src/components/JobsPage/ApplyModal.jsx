import { useEffect, useState } from "react";

import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaFileUpload,
  FaPaperPlane,
  FaCheckCircle,
  FaBriefcase,
} from "react-icons/fa";

function ApplyModal({
  isOpen,
  onClose,
  job,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !job) {
    return null;
  }

  const updateField = (field, value) => {
    setFormData((previousState) => ({
      ...previousState,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
    });

    setResume(null);
    setIsSubmitted(false);
  };

  const resetAndClose = () => {
    resetForm();
    onClose();
  };

  const handleResumeChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload only PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Resume file size must be below 5 MB.");
      event.target.value = "";
      return;
    }

    setResume(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    setIsSubmitted(true);

    setTimeout(() => {
      resetAndClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-end justify-center p-0 sm:items-center sm:p-5">
      {/* Overlay */}
      <button
        type="button"
        onClick={resetAndClose}
        aria-label="Close application modal"
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 flex max-h-[94vh] w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:max-w-2xl sm:rounded-[28px]">
        {/* Mobile Handle */}
        <div className="flex justify-center pb-1 pt-3 sm:hidden">
          <div className="h-1.5 w-14 rounded-full bg-slate-300"></div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 pb-5 pt-4 sm:px-7 sm:py-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-10 w-10 object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Job Application
              </p>

              <h2 className="mt-1 truncate text-xl font-extrabold text-slate-900 sm:text-2xl">
                Apply for {job.title}
              </h2>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <FaBriefcase className="text-blue-600" />
                {job.company}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close modal"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {isSubmitted ? (
            <div className="flex min-h-[470px] flex-col items-center justify-center px-6 py-12 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
                <FaCheckCircle />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                Application Submitted!
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                Your application for {job.title} at {job.company} has been
                submitted successfully.
              </p>

              <div className="mt-6 rounded-2xl bg-blue-50 px-5 py-4 text-sm font-semibold text-blue-700">
                You can track your application from your dashboard.
              </div>
            </div>
          ) : (
            <form
              id="job-application-form"
              onSubmit={handleSubmit}
              className="space-y-5 px-5 py-6 sm:px-7"
            >
              <FormField
                label="Full Name"
                icon={<FaUser />}
              >
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                />
              </FormField>

              <FormField
                label="Email Address"
                icon={<FaEnvelope />}
              >
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                />
              </FormField>

              <FormField
                label="Phone Number"
                icon={<FaPhoneAlt />}
              >
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value)
                  }
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9+\-\s]{8,15}"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                />
              </FormField>

              {/* Resume */}
              <div>
                <label className="text-sm font-bold text-slate-800">
                  Upload Resume
                </label>

                <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-7 text-center transition hover:border-blue-500 hover:bg-blue-50">
                  <FaFileUpload className="text-3xl text-blue-600" />

                  <p className="mt-3 break-all text-sm font-bold text-slate-800">
                    {resume
                      ? resume.name
                      : "Click to upload your resume"}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    PDF, DOC or DOCX — maximum 5 MB
                  </p>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  htmlFor="cover-letter"
                  className="text-sm font-bold text-slate-800"
                >
                  Cover Letter
                </label>

                <textarea
                  id="cover-letter"
                  rows="5"
                  value={formData.coverLetter}
                  onChange={(event) =>
                    updateField("coverLetter", event.target.value)
                  }
                  placeholder="Write a short message to the recruiter..."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Agreement */}
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-500">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                />

                <span>
                  I confirm that the provided information is correct and I
                  agree to HireX&apos;s application terms.
                </span>
              </label>
            </form>
          )}
        </div>

        {/* Footer */}
        {!isSubmitted && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={resetAndClose}
                className="rounded-xl border border-slate-300 px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                form="job-application-form"
                className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Submit Application
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  icon,
  children,
}) {
  return (
    <div>
      <label className="text-sm font-bold text-slate-800">
        {label}
      </label>

      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-4 py-4 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
        <span className="shrink-0 text-blue-600">
          {icon}
        </span>

        {children}
      </div>
    </div>
  );
}

export default ApplyModal;