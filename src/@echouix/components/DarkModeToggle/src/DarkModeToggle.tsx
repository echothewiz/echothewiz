import { useState, useEffect } from "react";

import clsx from "clsx";

interface DarkModeToggle {
  state?: boolean;
  className?: string;
  toggleFunc?: () => void;
}

const DarkModeToggle = ({ state, className, toggleFunc }: DarkModeToggle) => {
  return (
    <button
      onClick={toggleFunc}
      className={clsx(
        "pl-1 w-32 h-10 bg-black rounded-3xl",
        "dark:bg-white",
        className
      )}
    >
      <div
        className={clsx(
          "w-[40%] h-[80%] bg-white rounded-full transition-transform duration-300",
          "dark:bg-black",
          state && "translate-x-[145%] rotate-180"
        )}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
