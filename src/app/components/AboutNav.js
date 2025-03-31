import React, { useState } from "react";

const AboutNav = () => {
  const [selected, setSelected] = useState(0);
  return (
    <ul>
      <li className={`${selected === 0 ? "border-white border-l-2" : ""}`}>
        <a
          className="group flex items-center py-3 m-2 cursor-pointer"
          onClick={() => setSelected(0)}
        >
          <span
            className={`mr-4 h-px transition-all motion-reduce:transition-none bg-slate ${
              selected === 0
                ? "w-16 bg-slate-200"
                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
            }`}
          />
          <span
            className={` group-hover:text-green ${
              selected === 0 ? "text-green" : "text-slate"
            }`}
          >
            About
          </span>
        </a>
      </li>
      <li className={`${selected === 1 ? "border-white border-l-2" : ""}`}>
        <a
          className="group flex items-center py-3 m-2 cursor-pointer"
          onClick={() => setSelected(1)}
        >
          <span
            className={`mr-4 h-px transition-all motion-reduce:transition-none bg-slate ${
              selected === 1
                ? "w-16 bg-slate-200"
                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
            }`}
          />
          <span
            className={` group-hover:text-green ${
              selected === 1 ? "text-green" : "text-slate"
            }`}
          >
            Experience
          </span>
        </a>
      </li>
      <li className={`${selected === 2 ? "border-white border-l-2" : ""}`}>
        <a
          className="group flex items-center py-3 m-2 cursor-pointer"
          onClick={() => setSelected(2)}
        >
          <span
            className={`mr-4 h-px transition-all motion-reduce:transition-none bg-slate ${
              selected === 2
                ? "w-16 bg-slate-200"
                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
            }`}
          />
          <span
            className={` group-hover:text-white ${
              selected === 2 ? "text-green" : "text-slate"
            }`}
          >
            Education
          </span>
        </a>
      </li>
    </ul>
  );
};

export default AboutNav;
