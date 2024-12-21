import { useState } from "react";
import { Link } from "react-router-dom";
import { Img } from "react-image";
import { motion, AnimatePresence } from "framer-motion";

import clsx from "clsx";

interface PortfolioItemProps {
  name?: string;
  imageUrl?: string;
  imageAlt?: string;
  borderRadius?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  className?: string;
  textClassName?: string;
}

const PortfolioItem = ({
  name,
  imageUrl,
  imageAlt,
  borderRadius,
  className,
  textClassName,
}: PortfolioItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/portfolio/${name?.toLowerCase().replace(" ", "")}`}
      className={clsx(
        "relative cursor-pointer hover:scale-105 transition-transform duration-300",
        className
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Img
        src={imageUrl!}
        alt={imageAlt}
        className={`w-full h-full object-cover rounded-${borderRadius} shadow-md`}
      />

      <AnimatePresence>
        {hover && (
          <motion.div
            animate={{
              width: ["0%", "100%"],
              opacity: [0, 1],
            }}
            exit={{ width: "0%", opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-0 left-0 flex justify-center items-center h-full bg-absoluteBlack bg-opacity-30 rounded-${borderRadius}`}
          >
            <p
              className={clsx(
                "font-medium text-lg text-white whitespace-nowrap",
                textClassName
              )}
            >
              {name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default PortfolioItem;
