import { ComponentType, SVGProps } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import clsx from "clsx";

interface IconLinkProps {
  icon: ComponentType<SVGProps<SVGSVGElement>> | IconDefinition;
  text?: string;
  fontAwesomeIconSize?: "xs" | "sm" | "lg" | "xl" | "2xl";
  ghost?: boolean;
  path?: string;
  currentPathColor?: string;
  currentPathBackgroundColor?: string;
  className?: string;
  SVGIconProps?: SVGProps<SVGSVGElement>;
  SVGClassName?: string;
  fontAwesomeClassName?: string;
  onClick?: () => void;
}

const IconLink = ({
  icon: Icon,
  text,
  fontAwesomeIconSize,
  ghost,
  path,
  currentPathColor,
  currentPathBackgroundColor,
  className,
  SVGIconProps,
  SVGClassName,
  fontAwesomeClassName,
  onClick,
}: IconLinkProps) => {
  const location = useLocation();

  return (
    <Link
      to={path!}
      onClick={onClick}
      className={clsx(
        "flex rounded-lg transition-colors duration-500",
        ghost &&
          "hover:bg-absoluteBlack hover:bg-opacity-25 dark:hover:bg-white dark:hover:bg-opacity-25",
        className
      )}
      style={{
        color: location.pathname === path ? currentPathColor : "",
        backgroundColor:
          location.pathname === path ? currentPathBackgroundColor : "",
      }}
    >
      <div
        className={clsx(
          "flex justify-center items-center h-full",
          text ? "w-[25%]" : "w-full"
        )}
      >
        {typeof Icon === "object" ? (
          <FontAwesomeIcon
            icon={Icon}
            size={fontAwesomeIconSize}
            className={fontAwesomeClassName}
          />
        ) : (
          <Icon
            width="100%"
            height="100%"
            className={SVGClassName}
            {...SVGIconProps}
          />
        )}
      </div>

      {text && (
        <div className="flex items-center w-[75%] h-full">
          <b>{text}</b>
        </div>
      )}
    </Link>
  );
};

export default IconLink;
