import { AnimatePresence , motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router';

const RouteAnimation = ({ children }) => {
    const location = useLocation();
    return (
          <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    );
};

export default RouteAnimation;