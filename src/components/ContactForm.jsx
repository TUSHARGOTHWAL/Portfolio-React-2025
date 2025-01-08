import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  
  const floatingEffect = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background gradient blobs */}
      <motion.div 
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative w-full max-w-4xl">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-16"
          variants={floatingEffect}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CONTACT ME!
          </motion.h1>
          <motion.div 
            className="mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-6">
            {/* Name Input */}
            <motion.div
              className="relative"
              animate={{
                scale: focusedInput === 'name' ? 1.02 : 1,
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput(null)}
              />
              {focusedInput === 'name' && (
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              animate={{
                scale: focusedInput === 'email' ? 1.02 : 1,
              }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput(null)}
              />
              {focusedInput === 'email' && (
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>

            {/* Message Input */}
            <motion.div
              className="relative"
              animate={{
                scale: focusedInput === 'message' ? 1.02 : 1,
              }}
            >
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput(null)}
              />
              {focusedInput === 'message' && (
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              className="w-full relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur group-hover:blur-xl transition-all" />
              <div className="relative px-6 py-4 bg-black rounded-2xl text-white font-medium flex items-center justify-center gap-2">
                <span>Send Message</span>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;