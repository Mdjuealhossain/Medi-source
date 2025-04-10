// CircularProgress.js
import React from "react";

const CircularProgress = ({ percentage }) => {
    const radius = 15.9155; // Radius of the circle
    const stroke = 2.8; // Stroke width
    const normalizedRadius = radius - stroke * 0.5; // Adjusted radius
    const circumference = normalizedRadius * 2 * Math.PI; // Circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset based on percentage

    return (
        <div className="flex items-center justify-center w-48 h-48">
            <svg className="transform -rotate-90" width="100" height="100">
                <circle stroke="#e6e6e6" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx="50" cy="50" />
                <circle
                    stroke="#ffa500" // Orange color
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="50"
                    cy="50"
                    strokeDasharray={circumference + " " + circumference}
                    strokeDashoffset={strokeDashoffset}
                    transition="stroke-dashoffset 0.5s ease"
                />
            </svg>
            <div className="absolute text-lg font-bold text-gray-800">{percentage}%</div>
        </div>
    );
};

export default CircularProgress;
