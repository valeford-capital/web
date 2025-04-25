"use client";
import React from "react";
import { motion } from "framer-motion";

const OurApproach = () => {
  const approachPoints = [
    {
      title: "Fast MVP Development",
      description:
        "We rapidly transform ideas into working prototypes, focusing on core functionality to validate market fit quickly.",
    },
    {
      title: "Native Swift Excellence",
      description:
        "Our expertise in Swift ensures high-performance, beautiful iOS applications with seamless user experiences.",
    },
    {
      title: "Data-Driven Scaling",
      description:
        "We use analytics and user feedback to make informed decisions that drive product growth and refinement.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      {/* Subtle background gradient for depth */}
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 opacity-70"></div>

      <div className="container relative z-10 px-8 mx-auto">
        {/* Centered content */}
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Blue line above eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-blue-500 mb-4 mx-auto"
          ></motion.div>

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 uppercase text-xs tracking-widest mb-6 font-medium"
          >
            Our Approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-10"
          >
            Fast. Focused. Scalable.
          </motion.h2>

          {/* Approach points in horizontal cards on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {approachPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-medium">
                  {index + 1}
                </div>
                <h3 className="font-medium text-lg mt-4 mb-3">{point.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
