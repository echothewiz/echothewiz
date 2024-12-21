import { useEffect, useState } from "react";

import clsx from "clsx";

interface TypingTextProps {
  textArray?: Array<string>;
  typingSpeed?: number;
  pauseBetweenWords?: number;
  loop?: boolean;
  className?: string;
}

const TypingText = ({
  textArray,
  typingSpeed = 50,
  pauseBetweenWords = 100,
  loop,
  className,
}: TypingTextProps) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typing logic: all characters of the current word are typed
    if (charIndex === textArray![wordIndex].length) {
      if (!loop && wordIndex === textArray!.length - 1) {
        // If looping is disabled and the last word is typed, stop.
        setShowCursor(false); // Hide the cursor.
        setCurrentText(textArray![0]);
        return;
      }

      const pauseTimeout = setTimeout(() => {
        setCharIndex(0); // Reset character index.
        setWordIndex((prev) =>
          loop
            ? (prev + 1) % textArray!.length
            : Math.min(prev + 1, textArray!.length - 1)
        );
      }, pauseBetweenWords);

      return () => clearTimeout(pauseTimeout);
    }

    const typingTimeout = setTimeout(() => {
      setCurrentText((prev) => prev + textArray![wordIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [textArray, wordIndex, charIndex, typingSpeed, pauseBetweenWords]);

  useEffect(() => {
    setCurrentText("");
  }, [wordIndex]);

  return (
    <div
      className={clsx(
        "overflow-hidden whitespace-nowrap",
        showCursor && "border-r-2 border-black",
        className
      )}
    >
      <b>{currentText}</b>
    </div>
  );
};

export default TypingText;
