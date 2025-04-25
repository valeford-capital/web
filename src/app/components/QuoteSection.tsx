"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const QuoteSection = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Photo - positioned on the left side, faded */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 filter grayscale opacity-80"
          >
            <Image
              src="/images/coco-chanel.jpg"
              alt="Coco Chanel"
              fill
              className="object-cover rounded-full"
            />
          </motion.div>

          {/* Quote content */}
          <div className="flex-1">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-gray-800">
                &quot;Simplicity is the keynote of all true elegance.&quot;
              </p>
              <footer className="mt-4 text-gray-500 text-base md:text-lg font-light">
                — Coco Chanel
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
