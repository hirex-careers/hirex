import { useEffect, useRef, useState } from "react";

function StatCard({ number, suffix, title, icon }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentCard = cardRef.current;
    let counter;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const totalSteps = 60;
          const increment = number / totalSteps;
          const intervalTime = duration / totalSteps;

          let currentValue = 0;

          counter = setInterval(() => {
            currentValue += increment;

            if (currentValue >= number) {
              setCount(number);
              clearInterval(counter);
            } else {
              setCount(Math.floor(currentValue));
            }
          }, intervalTime);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }

      if (counter) {
        clearInterval(counter);
      }
    };
  }, [number]);

  return (
    <div
      ref={cardRef}
      className="group relative flex h-[230px] w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[260px] sm:p-6 lg:h-[285px] lg:p-7 xl:h-[300px] xl:p-8"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xl text-white shadow-lg sm:h-14 sm:w-14 sm:text-2xl lg:h-16 lg:w-16 lg:text-3xl">
          {icon}
        </div>

        {/* Number and title */}
        <div className="mt-auto">
          <h3 className="break-words text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
            {count.toLocaleString("en-IN")}
            {suffix}
          </h3>

          <p className="mt-2 min-h-[40px] text-sm font-medium leading-5 text-gray-500 sm:mt-3 sm:text-base lg:text-lg">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;