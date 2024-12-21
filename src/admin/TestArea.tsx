import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestArea() {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <main className="w-full h-screen bg-red">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ opacity: 0.25 }}
        className="w-40 h-10 bg-black text-white rounded-lg"
        onClick={handleState}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => alert("hey, finished")}
      >
        {state && <Modal onClose={handleState} text="hey" />}
      </AnimatePresence>
    </main>
  );
}

export const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const Modal = ({
  onClose,
  text,
}: {
  onClose: () => void;
  text: string;
}) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={onClose}>
      <motion.div
        className="w-[50%] h-[50%] bg-orange-600 rounded-lg"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>

        <button onClick={onClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
};
