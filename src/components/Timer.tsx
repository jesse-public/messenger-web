import { FC, useEffect, useState } from "react";

interface TimerProps {
  readonly text: string;
}

const Timer: FC<TimerProps> = ({ text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step: FrameRequestCallback = (timestamp) => {
      setCount(timestamp);

      animationFrame = window.requestAnimationFrame(step);
    };

    let animationFrame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const countSeconds = Math.floor(count / 1000);
  const decimal = Math.floor(count % 1000);
  const decimalPlaces = 3;
  const decimalPadding = "0".repeat(decimalPlaces - `${decimal}`.length);
  const paddedDecimal = `${decimal}${decimalPadding}`;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {text}
      <div>
        {countSeconds}.{paddedDecimal}s
      </div>
    </div>
  );
};

export default Timer;
