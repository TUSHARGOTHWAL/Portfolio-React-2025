import React from 'react';
import { motion } from 'framer-motion';
import Safari from './Safari';
import RainbowButton from './RainbowButton';

function Projects() {
    const projects = [
        {
          id: 1,
          title: "Resume-AI",
          description: "An AI-powered platform that assists HR professionals by evaluating resumes and providing insights using OpenAI and LangChain.",
          url: "resume-ai.com",
          imageSrc: "https://i.ibb.co/qrPzw6p/resume-ai.png",
          tech: ["React", "Node.js", "MongoDB", "OpenAI", "Tailwind CSS"]
        },

        

        {
          id: 2,
          title: "DevSource Community",
          description: "A community-driven platform for developers to share knowledge, resources, and collaborate on projects. Features include real-time messaging, project sharing, and resource management.",
          url: "devsource.com",
          imageSrc: "https://i.ibb.co/c8BSpqz/devsource.png",
          tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"]
        },
        {
          id: 3,
          title: "ChatItOut",
          description: "A real-time chat application for seamless team collaboration, featuring media sharing, emoji support, and Firebase integration.",
          url: "chatitout.com",
          imageSrc: "https://i.ibb.co/YWZVw2K/cio.png",
          tech: ["React", "Firebase", "TypeScript", "Next.js", "AWS"]
        },
        {
          id: 4,
          title: "BloodChain",
          description: "A blockchain-based blood donation platform that enables secure donor connections and decentralized identity management.",
          url: "bloodchain.com",
          imageSrc: "https://i.ibb.co/qnkbKnD/bc.png",
          tech: ["React", "Node.js", "Blockchain", "Smart Contracts", "Tailwind CSS"]
        }
      ];
      
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className="w-full min-h-screen space-y-40 mb-36"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project, index) => (
        <motion.div 
          key={project.id} 
          className={`flex flex-col lg:flex-row items-start justify-between gap-12 px-8 ${
            index === 0 ? 'mt-20' : ''
          }`}
          variants={itemVariants}
        >
          {/* Project content - alternating layout */}
          <motion.div 
            className={`w-full lg:w-3/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Safari 
              url={project.url} 
              className="w-full h-full object-cover"
              
              imageSrc={project.imageSrc}
            />
          </motion.div>

          {/* Text content */}
          <motion.div 
            className={`w-full lg:w-2/5 space-y-6 pt-8 ${
              index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h2 
              className="text-5xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {project.description}
            </motion.p>
            
            {/* Tech tags */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {project.tech.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
                
              ))}
            </motion.div>
            <RainbowButton onClick={() => window.location.href = projects.url}>
  Click Me
</RainbowButton>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;

