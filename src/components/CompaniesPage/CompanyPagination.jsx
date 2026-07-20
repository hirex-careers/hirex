import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function CompanyPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 42;

  const changePage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 border-t border-slate-100 pb-2 pt-6 sm:gap-2">
      {/* Previous */}
      <button
        type="button"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition sm:h-10 sm:w-10 ${
          currentPage === 1
            ? "cursor-not-allowed text-slate-300"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {/* Page Numbers */}
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => changePage(page)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition sm:h-10 sm:w-10 sm:text-sm ${
            currentPage === page
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          {page}
        </button>
      ))}

      <span className="px-1 text-sm text-slate-500 sm:px-2">
        ...
      </span>

      <button
        type="button"
        onClick={() => changePage(totalPages)}
        className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-bold transition sm:h-10 sm:min-w-10 sm:text-sm ${
          currentPage === totalPages
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        {totalPages}
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition sm:h-10 sm:w-10 ${
          currentPage === totalPages
            ? "cursor-not-allowed text-slate-300"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <FaChevronRight className="text-xs" />
      </button>
    </div>
  );
}

export default CompanyPagination;