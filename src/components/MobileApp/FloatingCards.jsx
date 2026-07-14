function FloatingCards() {
  return (
    <>
      {/* Rating */}
      <div className="absolute left-0 top-16 z-30 rounded-xl bg-white px-3 py-3 shadow-2xl sm:-left-2 sm:top-20 sm:rounded-2xl sm:px-4 sm:py-4 lg:-left-10">
        <h4 className="text-xs font-bold text-blue-600 sm:text-sm lg:text-base">
          ⭐ 4.9 Rating
        </h4>

        <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
          50K+ Reviews
        </p>
      </div>

      {/* Jobs */}
      <div className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-xl bg-white px-3 py-3 shadow-2xl sm:-right-2 sm:rounded-2xl sm:px-4 sm:py-4 lg:-right-12">
        <h4 className="text-xs font-bold text-orange-500 sm:text-sm lg:text-base">
          💼 10K+
        </h4>

        <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
          Jobs Daily
        </p>
      </div>

      {/* Downloads */}
      <div className="absolute bottom-2 right-4 z-30 rounded-xl bg-white px-3 py-3 shadow-2xl sm:bottom-8 sm:right-0 sm:rounded-2xl sm:px-4 sm:py-4 lg:-right-10 lg:bottom-20">
        <h4 className="text-xs font-bold text-green-600 sm:text-sm lg:text-base">
          📥 500K+
        </h4>

        <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
          Downloads
        </p>
      </div>
    </>
  );
}

export default FloatingCards;