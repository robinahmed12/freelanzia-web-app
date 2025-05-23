
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Animation = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default Animation;
