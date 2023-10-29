import React from "react";

function CircleGraph({ label, value, color, imageSrc }) {
  const radius = 65; // Adjust the radius for a larger circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const patternId = `imagePattern-${label.replace(/\s/g, "")}`;

  return (
    <div className="flex items-center justify-center">
      <svg className="w-40 h-40">
        <circle
          className="text-gray-300"
          strokeWidth="8" // Adjust the stroke width for a thicker circle
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + 10}
          cy={radius + 10}
        />
        <circle
          className="text-blue-600"
          strokeWidth="8" // Adjust the stroke width for a thicker circle
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r={radius}
          cx={radius + 10}
          cy={radius + 10}
        />
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="90%"
            height="90%"
          >
            <image
              xlinkHref={imageSrc}
              x="45"
              y="45"
              width="60"
              height="60"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <circle
          cx={radius + 10}
          cy={radius + 10}
          r={radius - 10}
          fill={`url(#${patternId})`}
        />
      </svg>
      <div className="flex flex-col gap-1 items-start   text-lg">
        <span className=" ">{`${label}`}</span>
        <span className=" font-bold text-2xl ">{`${value}`}</span>

        <span className="text-base ">06, Nov 2022</span>
      </div>
    </div>
  );
}
export default CircleGraph;
