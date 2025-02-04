"use client";
import { useState } from "react";

const TimeRecorder = () => {
    const [times, setTimes] = useState([null, null, null, null]);

    const recordTime = (index) => {
        const currentTime = new Date().toLocaleTimeString();
        const newTimes = [...times];
        newTimes[index] = currentTime;
        setTimes(newTimes);
    };

    return (
        <div>
            <button onClick={() => recordTime(0)}>Button 1</button>
            <button onClick={() => recordTime(1)}>Button 2</button>
            <button onClick={() => recordTime(2)}>Button 3</button>
            <button onClick={() => recordTime(3)}>Button 4</button>

            <div>
                <p>Button 1 Time: {times[0]}</p>
                <p>Button 2 Time: {times[1]}</p>
                <p>Button 3 Time: {times[2]}</p>
                <p>Button 4 Time: {times[3]}</p>
            </div>
        </div>
    );
};

export default TimeRecorder;
