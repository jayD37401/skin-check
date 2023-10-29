import React from "react";

function CircleGraph({ label, value, color, imageSrc }) {
  const radius = 35; // Adjust the radius for a larger circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const patternId = `imagePattern-${label.replace(/\s/g, "")}`;

  return (
    <div className="flex items-center justify-center">
      <svg className="w-28 h-32">
        <circle
          className="text-gray-300"
          strokeWidth="8" // Adjust the stroke width for a thicker circle
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={radius + 25}
          cy={radius + 25}
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
          cx={radius + 25}
          cy={radius + 25}
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
              width="30"
              height="30"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <circle
          cx={radius + 25}
          cy={radius + 25}
          r={radius}
          fill={`url(#${patternId})`}
        />
      </svg>
      <div className="flex flex-col gap-1 items-start   text-base">
        <span className=" ">{`${label}`}</span>
        <span className=" font-bold text-xl ">{`${value}`}</span>

        <span className="text-sm ">06, Nov 2022</span>
      </div>
    </div>
  );
}
export default CircleGraph;
