import { Link, useLocation } from "react-router-dom";

import clsx from "clsx";

interface RouterLinkProps {
  ghost?: boolean;
  path?: string;
  currentPathColor?: string;
  currentPathBackgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const RouterLink = ({
  ghost,
  path,
  currentPathColor,
  currentPathBackgroundColor,
  children,
  className,
  onClick,
}: RouterLinkProps) => {
  const location = useLocation();

  return (
    <Link
      to={path!}
      onClick={onClick}
      className={clsx(
        "rounded-lg",
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
      {children}
    </Link>
  );
};

export default RouterLink;
