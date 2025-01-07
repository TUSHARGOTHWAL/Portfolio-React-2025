import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Navbar from './Navbar';
import userImage from '../assets/user-image.png';
import MovingLogos from './MovingLogos';

const greetings = [
  {
    text: "Hello",
    language: "English",
    languageCode: "en"
  },
  {
    text: "Hola",
    language: "Spanish",
    languageCode: "es"
  },
  {
    text: "नमस्ते",
    language: "Hindi",
    languageCode: "hi"
  },
  {
    text: "Bonjour",
    language: "French",
    languageCode: "fr"
  },
  {
    text: "こんにちは",
    language: "Japanese",
    languageCode: "ja"
  },
  {
    text: "Ciao",
    language: "Italian",
    languageCode: "it"
  },
  {
    text: "Olá",
    language: "Portuguese",
    languageCode: "pt"
  },
  {
    text: "Привет",
    language: "Russian",
    languageCode: "ru"
  },
  {
    text: "مرحبا",
    language: "Arabic",
    languageCode: "ar"
  },
  {
    text: "Hallo",
    language: "German",
    languageCode: "de"
  }
];

const Home = () => {
  const [greeting, setGreeting] = useState(0);
  const color = useMotionValue("#1E67C6");
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  useEffect(() => {
    const timer = setInterval(() => {
      setGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => clearInterval(timer);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(155% 180% at 50% 0%, #000000 50%, ${color})`;

  return (
      <>
    <motion.div
      style={{
          backgroundImage,
        }}
      className="relative w-full min-h-screen overflow-hidden bg-gray-950 text-gray-200"
    >
  <MovingLogos />


      <div className="relative z-10 flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4 md:px-8 mb-8 md:mb-0">
            <motion.div
              className="text-4xl font-bold flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={greeting}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  className="flex flex-col items-center py-4  w-48 "
                >
                  <motion.h1 className="text-2xl font-bold ">
                    {greetings[greeting].text}
                  </motion.h1>
                </motion.div>
              </AnimatePresence>
              <span className="text-4xl mt-40 text-center">Welcome to my portfolio</span>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center relative my-8 md:my-0">
            <div
              style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  maxWidth: "400px",
                  maxHeight: "400px",
                  background: "radial-gradient(circle, rgba(255, 255, 200, 0.5) 0%, rgba(255, 200, 150, 0.2) 40%, rgba(0, 0, 0, 0) 80%)",
                zIndex: 1,
                borderRadius: "50%",
                filter: "blur(50px)",
                pointerEvents: "none",
            }}
            ></div>
            
            <motion.img
              src={userImage}
              alt="Portfolio"
              className="py-8 md:py-16"
              style={{
                  margin: "auto",
                  width: "60%",
                  maxWidth: "300px",
                  position: "relative",
                  zIndex: 2,
                }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
            />
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-4 md:px-8 mb-8 md:mb-0">
            <motion.h1
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
            >
              Hi, I'm Tushar Gothwal
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-center text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
            >
              Web Developer & Designer
            </motion.p>
            <div className="buttoContainer flex flex-row justify-center gap-4">
            <motion.button drag className=' border-red-300 py-2 px-6 mt-10 border-4 rounded-full hover:bg-red-300 hover:text-black' 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
                }}
               >
                 <p>
                Resume
                </p>
                <span style={{fontSize:10 }}> Drag me!!🤫</span>
               
            </motion.button>
            <motion.button drag className='border-red-300 py-2 px-6 mt-10 border-4 rounded-full hover:bg-red-300 hover:text-black' 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
                }}
               >
                 <p>
                Resume
                </p>
                <span style={{fontSize:10 }}> Drag me!!🤫</span>
               
            </motion.button>


            </div>
          </div>
        </div>
      </div>

    </motion.div>
  
        </>
  );
};

export default Home;

