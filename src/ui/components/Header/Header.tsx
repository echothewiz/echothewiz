import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { DarkModeToggle } from "../../../@echouix/components/DarkModeToggle/src";
import { IconButton } from "../../../@echouix/components/IconButton/src";
import { IconLink } from "../../../@echouix/components/IconLink/src";
import { useNavCTX } from "../../../context/nav-ctx";
import { navLinks } from "../../../lib/navLinks";

import CubeSVG from "../../../assets/SVGs/CubeSVG";

import clsx from "clsx";

interface HeaderProps {
  children?: string | React.ReactNode;
  className?: string;
  openFunc?: () => void;
}

const Header = ({ children, className, openFunc }: HeaderProps) => {
  const location = useLocation();
  const ctx = useNavCTX();

  return (
    <header
      className={clsx(
        "flex w-full h-[10%] border-b border-isabelline",
        className
      )}
    >
      <section className="flex justify-between items-center w-[80%] h-full pl-5 md:w-[50%]">
        <h1 className="font-bold">{children}</h1>

        <AnimatePresence>
          {location.pathname !== "/" && (
            <motion.div
              animate={{ x: ["-100%", "0%"], opacity: [0, 1] }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <DarkModeToggle
                state={ctx?.state}
                className="hidden m-10 md:block"
                toggleFunc={ctx?.handler}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="flex justify-center items-center w-[20%] h-full md:w-[50%]">
        <IconButton
          icon={CubeSVG}
          className="w-[40%] h-[60%] shadow-md hover:scale-110 transition-transform md:hidden"
          onClick={openFunc}
        />
        {/* Large screens navigation links. */}
        <div className="hidden flex-1 w-full h-full md:flex">
          {navLinks.map((item, index) => (
            <IconLink
              key={index}
              icon={item.icon!}
              text={item.name}
              fontAwesomeIconSize="lg"
              ghost
              path={item.path}
              currentPathColor="#49C0CB"
              className="w-full h-full text-sm rounded-none"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
