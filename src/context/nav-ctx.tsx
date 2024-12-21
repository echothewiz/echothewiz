import { createContext, useContext, useState, useEffect } from "react";

type NavCTXType = {
  state: boolean;
  handler: () => void;
};

const navCTX = createContext<NavCTXType | undefined>(undefined);

export default function NavCTXProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState(false);

  const toggler = () => {
    setMode(!mode);

    if (!mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("theme");

    if (storage === "dark") {
      document.documentElement.classList.add("dark");
      setMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setMode(false);
    }
  }, [mode]);

  return (
    <navCTX.Provider value={{ state: mode, handler: toggler }}>
      {children}
    </navCTX.Provider>
  );
}

export const useNavCTX = () => useContext(navCTX);
