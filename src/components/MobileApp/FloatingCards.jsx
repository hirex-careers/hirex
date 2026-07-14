function FloatingCards() {
  return (
    <>
      {/* Rating */}

      <div className="absolute -left-10 top-24 bg-white rounded-2xl shadow-2xl px-5 py-4">

        <h4 className="font-bold text-blue-600">
          ⭐ 4.9 Rating
        </h4>

        <p className="text-gray-500 text-sm">
          50K+ Reviews
        </p>

      </div>

      {/* Downloads */}

      <div className="absolute -right-12 bottom-24 bg-white rounded-2xl shadow-2xl px-5 py-4">

        <h4 className="font-bold text-green-600">
          📥 500K+
        </h4>

        <p className="text-gray-500 text-sm">
          Downloads
        </p>

      </div>

      {/* Jobs */}

      <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl px-5 py-4">

        <h4 className="font-bold text-orange-500">
          💼 10K+
        </h4>

        <p className="text-gray-500 text-sm">
          Jobs Daily
        </p>

      </div>
    </>
  );
}

export default FloatingCards;