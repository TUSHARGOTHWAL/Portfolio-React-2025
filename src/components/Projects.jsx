import React from 'react';
import { motion } from 'framer-motion';
import Safari from './Safari';
import RainbowButton from './RainbowButton';
import { useState } from 'react';
import { useEffect } from 'react';
import ProjectModal from './ProjectModal';

function Projects() {

  const[eventsModal, setEventsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);  


 const projects = [
        {
          id: 1,
          title: "Resume-AI",
          description: "An AI-powered platform that assists HR professionals by evaluating resumes and providing insights using OpenAI and LangChain.",
          url: "resume-ai.com",
          imageSrc: "https://i.ibb.co/qrPzw6p/resume-ai.png",
          tech: ["React", "Node.js", "MongoDB", "OpenAI", "Tailwind CSS"],
          imgDes:"This project presents an AI-enhanced resume evaluation platform designed to streamline the hiring process by integrating advanced natural language processing (NLP) and conversational AI models. With a frontend developed in React TypeScript and secure user management through Clerk, the system provides an interactive, user-friendly interface for HR professionals to analyze resumes efficiently. The backend, powered by Convex, enables structured data management, supporting seamless resume parsing and retrieval. A key component of this platform is the integration of LangChain, enabling a conversational interface that allows HR professionals to interact with the system dynamically and receive instant insights on candidate profiles. Additionally, the project leverages OpenAI's capabilities to assess resume content, focusing on candidate skills, experiences, and job fit. Through comprehensive functional testing, this platform demonstrates improvements in parsing accuracy and response time,aiming to reduce human bias and enhance objectivity in candidate evaluations. Ultimately, the system contributes to a more efficient recruitment process by automating routine assessments, thereby allowing HR teams to focus on strategic hiring decisions. This report documents the platform's development, methodologies, and evaluation metrics, along with proposed future enhancements to expand its capabilities and improve AI-based resume analysis in recruitment. "
        },

        

        {
          id: 2,
          title: "DevSource Community",
          description: "A community-driven platform for developers to share knowledge, resources, and collaborate on projects. Features include real-time messaging, project sharing, and resource management.",
          url: "devsource.com",
          imageSrc: "https://i.ibb.co/c8BSpqz/devsource.png",
          tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
          imgDes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet. sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.sicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet. ",

        },
        {
          id: 3,
          title: "ChatItOut",
          description: "A real-time chat application for seamless team collaboration, featuring media sharing, emoji support, and Firebase integration.",
          url: "chatitout.com",
          imageSrc: "https://i.ibb.co/YWZVw2K/cio.png",
          tech: ["React", "Firebase", "TypeScript", "Next.js", "AWS"],
          imgDes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.",

        },
        {
          id: 4,
          title: "BloodChain",
          description: "A blockchain-based blood donation platform that enables secure donor connections and decentralized identity management.",
          url: "bloodchain.com",
          imageSrc: "https://i.ibb.co/qnkbKnD/bc.png",
          tech: ["React", "Node.js", "Blockchain", "Smart Contracts", "Tailwind CSS"],
          imgDes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque ducimus dolor perspiciatis consequuntur atque quod itaque, aut fugit amet quas in temporibus accusantium dolorem! Illum, eligendi, cum aut repellat est dolorem aliquam veniam magni totam suscipit assumenda sapiente quam labore ipsam nobis? Sint nihil odio ipsa in dolore eveniet.",

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
  const openModal = (project) => {
    setSelectedProject(project); // Set the selected project
    setEventsModal(true);
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
            <RainbowButton onClick={() => openModal(project)}>

  Click Me
</RainbowButton>
          </motion.div>
        </motion.div>
      ))}
            {eventsModal && <ProjectModal closeModal={() => setEventsModal(false)}  project={selectedProject} />}

    </motion.div>
  );
}

export default Projects;

