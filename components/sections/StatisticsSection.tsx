"use client";

import { motion } from "framer-motion";
import ButtonWithArrow from "../ui/ButtonWithArrow";

const StatisticsSection = () => {
  return (
    <section className="container-responsive section-spacing">
      <div className="relative flex justify-center items-center min-h-[400px]">
        {/* Central Text Box */}
        <motion.div
          className="relative bg-white  max-w-5xl text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Discover <span className="underline decoration-2">cleomitra</span> a
            customer
            <br />
            experience platform, made by 15+
            <br />
            passionate people
          </h2>
          <div className="absolute -top-18 -left-18 ">
            <ButtonWithArrow
              text="Developer"
              className="text-white bg-green"
              cursorColor="text-green"
              arrowPosition="bottom-right"
            />
          </div>
          {/* Manager - Top Right */}
          <div className="absolute -top-18 -right-18 ">
            <ButtonWithArrow
              text="Marketers"
              className="text-white bg-yellow"
              cursorColor="text-yellow"
              arrowPosition="bottom-left"
            />
          </div>
          {/* Designer - Bottom Left */}
          <div className="absolute -bottom-8 left-8 ">
            <ButtonWithArrow
              text="Designer"
              arrowPosition="top-right"
              className="text-white bg-red"
              cursorColor="text-red"
            />
          </div>
          {/* Product - Bottom Right */}
          <div className="absolute -bottom-8 right-8 ">
            <ButtonWithArrow
              text="Product"
              className="text-white bg-blue"
              cursorColor="text-blue"
              arrowPosition="top-left"
            />
          </div>
        </motion.div>
        {/* ButtonWithArrow Components - Positioned Absolutely */}
        {/* Developer - Top Left */}
      </div>
    </section>
  );
};

export default StatisticsSection;
