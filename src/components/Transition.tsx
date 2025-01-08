"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface TransitionProps {
  children: ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-blue-600 top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default Transition;
