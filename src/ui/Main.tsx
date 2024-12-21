import { useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ProfileCard } from "../@echouix/components/ProfileCard/src";
import { RouterLink } from "./components/RouterLink";
import { DarkModeToggle } from "../@echouix/components/DarkModeToggle/src";
import { GridPattern } from "./components/GridPattern";
import { useNavCTX } from "../context/nav-ctx";

export default function Main() {
  const location = useLocation();
  const ctx = useNavCTX();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.key}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full h-[90%]"
      >
        {location.pathname === "/" ? (
          <div className="w-full h-full   md:flex md:flex-row-reverse">
            <div className="flex justify-center items-center w-full h-[70%] md:w-[30%] md:h-full">
              <ProfileCard
                imageUrl="/IMGs/echo_v3.png"
                imageAlt="Echo."
                profileName="EchoTheWiz"
                profileJob="Front-end Developer"
                className="w-[75%] h-[90%] bg-night rounded-2xl rounded-ss-none shadow-lg md:h-[80%] md:rounded-ss-2xl"
                imageClassName="rounded-2xl rounded-ss-none brightness-90 md:rounded-ss-2xl"
              />
            </div>

            <div className="w-full h-[30%] md:w-[70%] md:h-full">
              <section className="flex items-center w-full h-1/2 p-5 md:flex-col md:justify-evenly md:items-start">
                <h3>
                  <p className="font-bold md:text-4xl">
                    Hey, I am Echo the Robot, a self-taught Front-end Developer.
                  </p>
                  <p className="text-xs md:text-xl">
                    Currently engining for work.
                  </p>
                </h3>

                <DarkModeToggle
                  state={ctx?.state}
                  className="hidden ml-5 md:block"
                  toggleFunc={ctx?.handler}
                />
              </section>

              <div className="flex justify-evenly items-center w-full h-1/2 md:items-start md:pt-10">
                <RouterLink
                  path="/contact_me"
                  className="font-bold text-black bg-robbinBlue p-2.5 shadow-md hover:scale-105 md:text-xl transition-transform"
                >
                  <p>Contact Me</p>
                </RouterLink>

                <RouterLink
                  path="/about_me"
                  ghost
                  className="flex items-center gap-2 font-bold p-2.5 hover:scale-105 md:text-xl transition-transform"
                >
                  <p>More about Me</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </RouterLink>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}

        <GridPattern
          width={100}
          height={100}
          strokeDasharray="10"
          squares={[[1, 5]]}
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] skew-x-6"
        />
      </motion.main>
    </AnimatePresence>
  );
}
