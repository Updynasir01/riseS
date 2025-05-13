import React from "react";
import { useCountUp } from "../App";

const stats = [
  { value: 12, label: 'Years Experience' },
  { value: '97%', label: 'Retention Rate' },
  { value: 8000, label: 'Project Completed' },
  { value: 19000, label: 'Happy Clients' },
];

const StatsSection = () => (
  <section className="w-full flex justify-center items-center py-16 bg-white">
    <div className="flex items-end justify-center gap-8 max-w-7xl w-full relative mx-auto">
      {stats.map((stat, idx) => {
        const animatedValue = useCountUp(stat.value);
        return (
          <div key={stat.label} className="relative flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-blue-400 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-blue-50 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-black mb-2">{animatedValue}</div>
                <div className="text-xl text-black text-center font-medium">{stat.label}</div>
              </div>
            </div>
            {/* Blue Dot Accent */}
            <span className="absolute left-1/2 top-0 mt-32 w-6 h-6 -translate-x-1/2 -translate-y-1/2 z-10 animate-orbit">
              <span className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  </section>
);

export default StatsSection; 