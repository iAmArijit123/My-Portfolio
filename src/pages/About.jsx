import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "HTML", src: "/tech/html.png" },
  { name: "CSS", src: "/tech/CSS3.png" },
  { name: "C", src: "/tech/C.png" },
  { name: "C++", src: "/tech/C++.png" },
  { name: "Figma", src: "/tech/Figma.png" },
  { name: "vscode", src: "/tech/vscode.png" },
  { name: "Embedded C", src: "/tech/Embedded C.png" },
  { name: "Bootstrap", src: "/tech/Bootstrap.png" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#061013] to-[#040b17] text-white px-6 py-16 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-10"
      >
        About Me
      </motion.h1>

      <div className="max-w-4xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed"
        >
          I'm <span className="font-semibold text-white">Arijit Sasmal</span>,a
          dedicated and{" "}
          <span className="text-cyan-400">detail-oriented engineer </span> with
          a strong foundation in the field of electronics and communication. I
          skilled in designing, problem-solving, and optimizing systems for
          real-world applications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed"
        >
          I love working with modern web technologies and constantly improving
          my skills to build products that users love and developers admire.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 w-full max-w-6xl"
      >
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-2"
            >
              <img src={tech.src} alt={tech.name} className="w-16 h-16" />
              <span className="text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
