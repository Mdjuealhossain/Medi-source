import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CircularProgress = ({ percentage }) => {
    const stroke = 6;
    const radius = 36; // adjusted for 82px total
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let current = 0;
            const step = percentage / 30;
            const interval = setInterval(() => {
                current += step;
                if (current >= percentage) {
                    setProgress(percentage);
                    clearInterval(interval);
                } else {
                    setProgress(Math.ceil(current));
                }
            }, 16);
        }
    }, [inView, percentage]);

    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div ref={ref} className="relative flex items-center justify-center w-[82px] h-[82px]">
            <svg className="transform -rotate-90" width="82" height="82">
                <circle stroke="#e6e6e6" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx="41" cy="41" />
                <circle stroke="#ffa500" fill="transparent" strokeWidth={stroke} strokeLinecap="round" r={normalizedRadius} cx="41" cy="41" strokeDasharray={`${circumference} ${circumference}`} strokeDashoffset={strokeDashoffset} style={{ transition: "stroke-dashoffset 0.3s ease" }} />
            </svg>
            <div className="absolute font-bold text-gray-800">{progress}%</div>
        </div>
    );
};

export default CircularProgress;
