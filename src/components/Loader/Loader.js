import React, { useEffect, useState } from "react";

import "./Loader.css";
export default function Loader({ target = 90 }) {
  const [percentage, setPercentage] = useState(0);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  useEffect(() => {
    let start = 0;

    const animate = () => {
      if (start < target) {
        start += 1;
        setPercentage(start);
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [target]);

  return (
    <div className="loader-container">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="rgba(255,255,255,0.06)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00d4ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="percentage">{percentage}%</div>
    </div>
  );
}