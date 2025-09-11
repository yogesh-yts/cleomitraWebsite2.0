"use client";

import { motion } from "framer-motion";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";

interface ProductHeroProps {
  title: string;
  description: string;
}

const ProductHero = ({ title, description }: ProductHeroProps) => {
  return (
    <section className="container-responsive section-spacing">
      <div className="text-center  mx-auto ">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight whitespace-normal md:whitespace-pre-wrap "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto whitespace-normal md:whitespace-pre-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-row gap-4 items-center justify-center  mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StartFreeTrialButton />
          <GetDemoButton />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
