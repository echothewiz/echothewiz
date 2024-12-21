import { ComponentType, SVGProps } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import clsx from "clsx";

interface IconButtonProps {
  icon?: ComponentType<SVGProps<SVGSVGElement>> | IconDefinition;
  fontAwesomeIconSize?: "xs" | "sm" | "lg" | "xl" | "2xl";
  ghost?: boolean;
  className?: string;
  SVGIconProps?: SVGProps<SVGSVGElement>;
  SVGClassName?: string;
  onClick?: () => void;
}

const IconButton = ({
  icon: Icon,
  fontAwesomeIconSize,
  ghost,
  className,
  SVGIconProps,
  SVGClassName,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-lg",
        ghost &&
          "hover:bg-absoluteBlack hover:bg-opacity-25 dark:hover:bg-white dark:hover:bg-opacity-25",
        className
      )}
    >
      {Icon &&
        (typeof Icon === "object" ? (
          // If icon is FontAwesomeIcon (IconDefinition).
          <FontAwesomeIcon icon={Icon} size={fontAwesomeIconSize} />
        ) : (
          // If icon is an SVG component.
          <Icon
            width="100%"
            height="100%"
            className={SVGClassName}
            {...SVGIconProps}
          />
        ))}
    </button>
  );
};

export default IconButton;
