import { useEffect, useRef, useState } from "react";

function HeroStat({ number, suffix, label, icon }) {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentStat = statRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 1800;
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

    if (currentStat) {
      observer.observe(currentStat);
    }

    return () => {
      if (currentStat) {
        observer.unobserve(currentStat);
      }
    };
  }, [number]);

  return (
    <div ref={statRef} className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
        {icon}
      </div>

      <div>
        <h3 className="text-white text-3xl font-bold">
          {count.toLocaleString("en-IN")}
          {suffix}
        </h3>

        <p className="text-blue-100">
          {label}
        </p>
      </div>
    </div>
  );
}

export default HeroStat;