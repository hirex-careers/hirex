import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <button
        type="button"
        onClick={() => setIsOpen((previousState) => !previousState)}
        className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-gray-900">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-blue-600 text-white"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          <FaChevronDown />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-gray-100 px-6 py-5 leading-7 text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;