"use client";

import { motion } from "framer-motion";
import ButtonWithArrow from "../ui/ButtonWithArrow";

const StatisticsSection = () => {
  return (
    <section className="container-responsive pt-15">
      <div
        className="relative flex justify-center items-center border-2 border-dashed border-black/40 border-b-0 py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8"
        style={{
          borderTopLeftRadius: "var(--radius-20)",
          borderTopRightRadius: "var(--radius-20)",
        }}
      >
        {/* Central Text Box */}
        <motion.div
          className="relative bg-white max-w-4xl text-center z-10 my-6 md:my-8 lg:my-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight px-4 md:px-0">
            Discover <span className="underline decoration-2">cleomitra</span> a
            customer <br className="hidden" />
            experience platform, made by 15+
            <br className="hidden" />
            passionate people
          </h2>

          {/* Developer - Top Left */}
          <motion.div
            className="absolute -top-12 md:-top-16 lg:-top-18 -left-2 md:-left-4 lg:-left-18"
            initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ButtonWithArrow
              text="Developer"
              className="text-white bg-green text-xs"
              cursorColor="text-green"
              arrowPosition="bottom-right"
            />
          </motion.div>

          {/* Marketers - Top Right */}
          <motion.div
            className="absolute -top-12 md:-top-16 lg:-top-18 -right-2 md:-right-4 lg:-right-18"
            initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ButtonWithArrow
              text="Marketers"
              className="text-white bg-yellow text-xs"
              cursorColor="text-yellow"
              arrowPosition="bottom-left"
            />
          </motion.div>

          {/* Designer - Bottom Left */}
          <motion.div
            className="absolute -bottom-12 md:-bottom-18 left-4 md:left-20 lg:left-10"
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ButtonWithArrow
              text="Designer"
              arrowPosition="top-right"
              className="text-white bg-red text-xs"
              cursorColor="text-red"
            />
          </motion.div>

          {/* Product - Bottom Right */}
          <motion.div
            className="absolute -bottom-11 md:-bottom-18 right-4 md:right-20 lg:right-12"
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ButtonWithArrow
              text="Product"
              className="text-white bg-blue text-xs"
              cursorColor="text-blue"
              arrowPosition="top-left"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
