import React, { useState, useEffect } from "react";

const SassTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-16T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval}>
        {interval === "days" && (
          <span className="time days">{timeLeft[interval]} D</span>
        )}
        {interval === "hours" && (
          <span className="time hours">{timeLeft[interval]} H</span>
        )}
        {interval === "minutes" && (
          <span className="time minutes">{timeLeft[interval]} M</span>
        )}
        {interval === "seconds" && (
          <span className="time seconds">{timeLeft[interval]} S</span>
        )}
      </div>
    );
  });

  return (
    <span>
      {timerComponents.length ? timerComponents : <span>Time's End</span>}
    </span>
  );
};

export default SassTimer;
