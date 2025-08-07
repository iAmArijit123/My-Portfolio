import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    try {
      const response = await fetch("https://getform.io/f/bllqjzpb", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919083948893",
      name: "WhatsApp",
      color: "#25D366",
    },
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/arijit.sasmal.3762",
      name: "Facebook",
      color: "#1877F2",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/iAmArijit123",
      name: "GitHub",
      color: "#333",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/arijit-sasmal-97369b247/",
      name: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/arijit_sasmal_15/",
      name: "Instagram",
      color: "#E4405F",
    },
  ];

  const renderInput = (field) => {
    const isEmail = field === "email";
    const isMessage = field === "message";

    return (
      <motion.div
        key={field}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col"
      >
        <label htmlFor={field} className="mb-2 text-gray-300 capitalize">
          {field === "message"
            ? "Message"
            : field.charAt(0).toUpperCase() + field.slice(1)}
        </label>
        {isMessage ? (
          <textarea
            id={field}
            name={field}
            required
            rows={5}
            aria-label="Message"
            placeholder="Your message here..."
            className="rounded-md bg-[#06121b] border border-cyan-400 text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
          />
        ) : (
          <input
            type={isEmail ? "email" : "text"}
            id={field}
            name={field}
            required
            aria-label={field}
            placeholder={isEmail ? "you@example.com" : ""}
            className="rounded-md bg-[#06121b] border border-cyan-400 text-white px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#061013] to-[#040b17] flex items-center justify-center px-6 py-16 text-white">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#0a1a24] rounded-xl shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="md:w-2/3 p-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-cyan-400 mb-8 text-center md:text-left"
          >
            Contact Me
          </motion.h2>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-semibold text-center md:text-left"
            >
              Thanks for reaching out! I will get back to you soon.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {["name", "email", "message"].map(renderInput)}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-cyan-300 cursor-not-allowed"
                    : "bg-cyan-400 hover:bg-cyan-500"
                } text-[#040b17] font-semibold py-3 rounded-md shadow-md transition`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </div>

        {/* Social Section */}
        <div className="md:w-1/3 bg-[#08141f] p-8 flex flex-col items-center justify-center gap-6">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold text-cyan-300 mb-4"
          >
            Connect With Me
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map(({ icon, url, name, color }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-3xl transition-transform transform hover:scale-125"
                style={{ color }}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
