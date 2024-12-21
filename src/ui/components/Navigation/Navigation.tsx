import { ComponentType, SVGProps } from "react";
import { Img } from "react-image";
import { motion } from "framer-motion";

import { IconButton } from "../../../@echouix/components/IconButton/src";
import { IconLink } from "../../../@echouix/components/IconLink/src";
import { DarkModeToggle } from "../../../@echouix/components/DarkModeToggle/src";
import { RouterLink } from "../RouterLink";
import { useNavCTX } from "../../../context/nav-ctx";
import { navLinks } from "../../../lib/navLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  imageUrl?: string;
  imageAlt?: string;
  names?: string[];
  paths?: string[];
  svgs?: ComponentType<SVGProps<SVGSVGElement>>[];
  closeFunc?: () => void;
}

const Navigation = ({
  imageUrl,
  imageAlt,
  names,
  paths,
  svgs,
  closeFunc,
}: NavigationProps) => {
  const links = names?.map((name, index) => ({
    name: name,
    path: paths![index] || "#",
    icon: svgs![index] || undefined,
  }));

  const ctx = useNavCTX();

  return (
    <Backdrop>
      <motion.nav
        initial={{ transform: "translateX(0px)" }}
        animate={{ transform: "translateX(100%)" }}
        exit={{ transform: "translateX(200%)" }}
        className={"w-1/2 h-full bg-white dark:bg-night"}
      >
        <figure className="flex w-full h-[8%] border-b-2 border-dashed border-isabelline dark:border-black">
          <div className="w-[80%] h-full">
            <Img
              src={imageUrl!}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center w-[20%] h-full ">
            <IconButton
              icon={faClose}
              ghost
              className="py-1-5 px-1.5 border border-isabelline shadow-lg dark:border-black hover:scale-110 transition-transform duration-200"
              onClick={closeFunc}
            />
          </div>
        </figure>

        <div className="w-full h-[92%]">
          {/* Navigation links. */}
          <div className="flex flex-col gap-1.5 w-full h-[60%] p-5 overflow-x-auto ">
            {navLinks.map((item, index) => (
              <IconLink
                key={index}
                icon={item.icon}
                text={item.name}
                fontAwesomeIconSize="lg"
                ghost
                path={item.path}
                currentPathColor="#49C0CB"
                className="w-full h-[50px] active:scale-105 transition-transform"
                onClick={closeFunc}
              />
            ))}
          </div>

          {/* Dark mode toggle. */}
          <div className="flex flex-col justify-end items-center gap-1 w-full h-[20%] px-9">
            <p className="text-xs">dark/light mode</p>
            <DarkModeToggle
              state={ctx?.state}
              className="w-full"
              toggleFunc={ctx?.handler}
            />
          </div>

          {/* Contact me button. */}
          <div className="flex justify-center items-center w-full h-[20%] ">
            <RouterLink
              path="/contact_me"
              className="flex justify-center items-center gap-2 w-[70%] h-[45%] text-white bg-black hover:bg-robbinBlue hover:text-black transition-colors duration-500"
              onClick={closeFunc}
            >
              <b>Reach Me</b>
              <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
            </RouterLink>
          </div>
        </div>
      </motion.nav>
    </Backdrop>
  );
};

const Backdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      className="absolute top-0 left-0 w-full h-full bg-absoluteBlack bg-opacity-75 md:hidden"
    >
      {children}
    </motion.div>
  );
};

export default Navigation;
