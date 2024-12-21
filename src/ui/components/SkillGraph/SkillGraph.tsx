import { Img } from "react-image";

import clsx from "clsx";

interface SkillGraphProps {
  skills?: Array<[name: string, percentage: number, imageUrl: string]>;
  strokeWidth?: number;
  className?: string;
  baseCircleClassName?: string;
  progressCircleClassName?: string;
}

const SkillGraph = ({
  skills,
  strokeWidth,
  className,
  baseCircleClassName,
  progressCircleClassName,
}: SkillGraphProps) => {
  const circleRadius = 40;
  const circumference = 2 * Math.PI * circleRadius!;

  return (
    <div
      className={clsx(
        "grid grid-cols-2 gap-2.5 auto-rows-[max(48%)] overflow-x-auto",
        "scrollbar-thin scrollbar-thumb-onyx scrollbar-track-black",
        className
      )}
    >
      {skills?.map(([name, percentage, imageUrl], index) => {
        const offset = circumference - (percentage / 100) * circumference;

        return (
          <div key={index} className="relative w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <circle
                cx="50%"
                cy="50%"
                r={circleRadius}
                strokeOpacity={100}
                strokeWidth={strokeWidth}
                fill="none"
                className={baseCircleClassName}
              />

              <circle
                cx="50%"
                cy="50%"
                r={circleRadius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                fill="none"
                transform="rotate(-90 50 50)"
                strokeLinecap="butt"
                className={progressCircleClassName}
              />
            </svg>

            <b className="absolute flex flex-col gap-1.5 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-center">
              <Img
                src={imageUrl}
                className="w-[35%] h-[35%] object-cover brightness-90"
              />
              <p>{percentage}%</p>
            </b>
          </div>
        );
      })}
    </div>
  );
};

export default SkillGraph;
