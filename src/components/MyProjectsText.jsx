import React from 'react';
import { motion } from 'framer-motion';
import DivOrigami from './DivOrigami';



const MyProjectsText = () => {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-evenly items-center">
      <motion.h2
        className="text-5xl md:text-7xl font-bold text-center mb-8 md:mb-12 text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        MY PROJECTS?
      </motion.h2>
      <DivOrigami />
    </div>
  </section>
  );
};

export default MyProjectsText;
