import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Header } from "./ui/components/Header";
import { Navigation } from "./ui/components/Navigation";
import { useNavCTX } from "./context/nav-ctx";

import Main from "./ui/Main";

import clsx from "clsx";

export default function Home() {
  const [navState, setNavState] = useState(false);

  const ctx = useNavCTX();

  return (
    <div className="w-full h-screen md:flex md:justify-center md:items-center overflow-hidden">
      <div
        className={clsx(
          "relative w-full h-full bg-white shadow-lg ",
          "md:w-[100%] md:h-[100%]",
          "dark:bg-black dark:text-white"
        )}
      >
        <Header openFunc={() => setNavState(true)}>
          Hello, it's <b className="text-robbinBlue">EchoTheWiz</b>!
        </Header>

        <Main />

        <AnimatePresence>
          {navState && (
            <Navigation
              imageUrl={
                ctx?.state
                  ? "/IMGs/logo_dark_mode.png"
                  : "/IMGs/logo_light_mode.png"
              }
              imageAlt="EchoTheWiz Logo."
              closeFunc={() => setNavState(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
