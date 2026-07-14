import { useEffect, useRef, useState } from "react";

function StatCard({ number, suffix, title, icon }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentCard = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const totalSteps = 60;
          const increment = number / totalSteps;
          const intervalTime = duration / totalSteps;

          let currentValue = 0;

          const counter = setInterval(() => {
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
        threshold: 0.3,
      }
    );

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [number]);

  return (
    <div
      ref={cardRef}
      className="group relative h-[300px] overflow-hidden bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl shadow-lg">
          {icon}
        </div>

        <div className="mt-auto">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            {count.toLocaleString("en-IN")}
            {suffix}
          </h3>

          <p className="mt-3 text-lg text-gray-500 font-medium">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;