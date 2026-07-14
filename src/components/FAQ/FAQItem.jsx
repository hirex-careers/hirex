import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOpen
          ? "border-blue-200 shadow-xl"
          : "border-gray-200 shadow-sm hover:border-blue-100 hover:shadow-lg"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((previousState) => !previousState)}
        className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
        aria-expanded={isOpen}
      >
        <span className="pr-2 text-sm font-bold leading-6 text-gray-900 sm:text-base lg:text-lg">
          {question}
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 sm:h-10 sm:w-10 ${
            isOpen
              ? "rotate-180 bg-blue-600 text-white shadow-lg"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          <FaChevronDown />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-gray-100 px-4 py-5 text-sm leading-7 text-gray-600 sm:px-6 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;