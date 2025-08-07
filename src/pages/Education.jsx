import React from "react";
import { motion } from "framer-motion";

const educationItems = [
  {
    title: "Madhyamik",
    institution: "Bakhrabad Bharati Vidhyapith",
    year: "2018-2019",
    description:
      "Scored 86.86% in the Madhyamik Examination under WBBSE board.",
  },
  {
    title: "Higher Secondary",
    institution: "Bakhrabad Bharati Vidhyapith",
    year: "2019-2020",
    description:
      "Completed Higher Secondary education in the Science stream with 80.8%.",
  },
  {
    title: "B.Tech in Electronics and Communication Engineering",
    institution: "College of Engineering and Management, Kolaghat (CEMK)",
    year: "2020 - 2024",
    description:
      "Graduated with a CGPA of 8.53 in Electronics and Communication Engineering.",
  },
  {
    title: "Embedded System and IoT",
    institution:
      "IC Design and Fabrication Centre, Jadavpur University, Kolkata",
    year: "2023",
    description:
      "Completed a certified course on Embedded Systems and IoT organized by the IC Design and Fabrication Centre, Jadavpur University.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#061013] to-[#040b17] text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center mb-12"
        >
          Education & Courses
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-[#0a1a24] border border-cyan-500 rounded-xl p-6 shadow-md hover:shadow-cyan-400/40 transition duration-300"
            >
              <h2 className="text-xl font-bold text-cyan-400 mb-1">
                {item.title}
              </h2>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">
                {item.institution}
              </h3>
              <p className="text-xs text-gray-400 italic mb-3">{item.year}</p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
