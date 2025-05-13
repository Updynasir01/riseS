import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import UnlockingPotentialSection from "./components/UnlockingPotentialSection";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import ITSolutionsSection from "./components/ITSolutionsSection";
import VideoSection from "./components/VideoSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";
import BottomFooterBar from "./components/BottomFooterBar";

// Tailwind custom animation classes
// In your global CSS (e.g., index.css), add:
// @keyframes slide-in-left { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
// @keyframes slide-in-right { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
// .animate-slide-in-left { animation: slide-in-left 1s ease-out; }
// .animate-slide-in-right { animation: slide-in-right 1s ease-out; }

// Helper for animated counter
export function useCountUp(to, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = typeof to === 'number' ? to : parseInt(to);
    let isPercent = typeof to === 'string' && to.includes('%');
    let startTime = null;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [to, duration]);
  return typeof to === 'string' && to.includes('%') ? `${count}%` : count;
}

// Animated ProgressBar component
export function AnimatedProgressBar({ value }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    let timeout;
    setWidth(0);
    timeout = setTimeout(() => setWidth(value), 100);
    const loop = setInterval(() => {
      setWidth(0);
      setTimeout(() => setWidth(value), 100);
    }, 2000);
    return () => {
      clearInterval(loop);
      clearTimeout(timeout);
    };
  }, [value]);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <HeroSection />
      <UnlockingPotentialSection />
      <StatsSection />
      <TeamSection />
      <ITSolutionsSection />
      <VideoSection />
      <TestimonialSection />
      <FooterSection />
      <BottomFooterBar />
    </div>
  );
}

export default App;