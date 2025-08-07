import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Home Automation with Computer VisionIn",
    description:
      "8.53Welcome to the future of home automation powered by computer vision. With camerasstrategically placed door will be automatically open – Arduino UNO, Camera, Diodes, LED,Sensor, Resistor.",
    image:
      "https://content.instructables.com/FQV/MXPH/HRH0XYQZ/FQVMXPHHRH0XYQZ.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024",
  },
  {
    title: "Smart Home PI",
    description:
      "VisionIn the room, the light, fan and any electronics equipment will be on/off automatically bydetecting your voice – Raspberry Pi, Diodes, LED, Edge Impulse, Resistor.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpg7n3UHhp_Ux6e9F8S0FJ4FHQUZPtxC1lVg&s",
  },
  {
    title: "Web-based-calculator",
    description:
      "A web-based calculator is a calculator application accessible through a web browser, allowing users to perform mathematical calculations directly in their browser without needing to download or install any software. ",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Calculator_Solve.PNG",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#061013] to-[#040b17] py-16 px-8 text-white">
      <motion.div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f1a24] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200/0f1a24/ffffff?text=No+Image";
                }}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
