import React from "react";
import { AnimatedProgressBar } from "../About";
import T3 from "../images/T3.jpg";
import T4 from "../images/T4.jpg";
import T5 from "../images/T5.jpg";

const progressItems = [
  { label: 'IT Solution & Management', value: 90 },
  { label: 'Website & App Development', value: 75 },
  { label: 'SEO & Digital Marketing', value: 82 },
];

const ITSolutionsSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-16">
    {/* Left: Image Grid */}
    <div className="flex-1 flex flex-col md:flex-row gap-6 items-center justify-center">
      <div className="flex flex-col gap-6">
        <img src={T3} alt="Main" className="rounded-3xl w-80 h-80 object-cover" />
      </div>
      <div className="flex flex-col gap-6 ml-0 md:ml-6">
        <img src={T4} alt="Small1" className="rounded-2xl w-56 h-36 object-cover" />
        <img src={T5} alt="Small2" className="rounded-2xl w-56 h-36 object-cover" />
      </div>
    </div>
    {/* Right: Content */}
    <div className="flex-1 max-w-xl">
      <span className="text-blue-600 font-semibold text-lg">Why Choose Us</span>
      <h2 className="text-4xl font-bold leading-tight mb-4">IT Solutions Designed To Drive Results</h2>
      <p className="text-gray-600 mb-8">
        IT solutions are the backbone of modern businesses, enabling them to adapt to changing technologies and market demands. Whether you're a small business or a large enterprise, investing in the right IT solutions can drive growth, innovation, and long-term success.
      </p>
      {/* Progress Bars */}
      {progressItems.map((item) => (
        <div key={item.label} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-lg">{item.label}</span>
            <span className="font-bold text-lg">{item.value}%</span>
          </div>
          <AnimatedProgressBar value={item.value} />
        </div>
      ))}
    </div>
  </section>
);

export default ITSolutionsSection; 