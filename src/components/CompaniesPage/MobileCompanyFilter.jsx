import { useEffect } from "react";

import {
  FaFilter,
  FaTimes,
} from "react-icons/fa";

import CompanyFilterSidebar from "./CompanyFilterSidebar";

function MobileCompanyFilter({
  isOpen,
  onClose,
  filters,
  setFilters,
  onApply,
  onClear,
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[150] lg:hidden ${
        isOpen
          ? "pointer-events-auto"
          : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close company filters"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute bottom-0 left-0 right-0 flex max-h-[90vh] flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_-20px_60px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center bg-white pb-1 pt-3">
          <div className="h-1.5 w-14 rounded-full bg-slate-300"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 pb-4 pt-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaFilter />
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-slate-900">
                Company Filters
              </h2>

              <p className="text-xs text-slate-500">
                Refine your company search
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Filter Content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <CompanyFilterSidebar
            filters={filters}
            setFilters={setFilters}
            onApply={onApply}
            onClear={onClear}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileCompanyFilter;