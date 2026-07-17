import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const visiblePages = [1, 2, 3, 4, 5];

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 205;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 260,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-1.5 border-t border-slate-100 pb-2 pt-6 sm:gap-2">
      <button
        type="button"
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition sm:h-10 sm:w-10 ${
          currentPage === 1
            ? "cursor-not-allowed text-slate-300"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {visiblePages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => goToPage(page)}
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
        onClick={() => goToPage(totalPages)}
        className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-bold transition sm:h-10 sm:min-w-10 sm:text-sm ${
          currentPage === totalPages
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        {totalPages}
      </button>

      <button
        type="button"
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
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

export default Pagination;