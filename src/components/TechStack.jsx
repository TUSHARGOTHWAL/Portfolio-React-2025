import React from 'react';
import { motion } from 'framer-motion';
import DivOrigami from './DivOrigami';



const TechStack = () => {
  return (
    <section className="py-16 zt">
      <div className="container mx-auto px-4 flex flex-row justify-evenly">
        <motion.h2 
          className="text-9xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WHO AM I?
        </motion.h2>
        <DivOrigami/>
      </div>
    </section>
  );
};

export default TechStack;
