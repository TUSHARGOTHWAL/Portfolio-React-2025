import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function ProjectModal({ closeModal, project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <motion.div
        className="bg-neutral-950 border-2 border-white text-gray-200 rounded-lg shadow-lg max-w-4xl w-full h-[90vh] md:flex relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
          onClick={closeModal}
        >
          &times;
        </button>

        {/* Scrollable Content */}
        <motion.div
          ref={containerRef}
          className="flex flex-col md:flex-row h-full overflow-y-scroll scrollbar-hide"
        >
          {/* Left Section: Project Image */}
          <div className="md:w-1/2 h-full flex justify-center items-center p-6">
            {project.imageSrc && (
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Right Section: Project Details */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-gray-400 text-sm">
              Tech Stack: {project.tech && project.tech.join(", ")}
            </p>

            <p className="leading-relaxed">{project.imgDes}</p>

            {/* Visit Project Button */}
            
          </div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.div>
    </div>
  );
}

export default ProjectModal;
