"use client";

import { motion } from "framer-motion";

interface ProductHeroProps {
  title: string;
  description: string;
}

const ProductHero = ({ title, description }: ProductHeroProps) => {
  return (
    <section className="container-responsive section-spacing">
      <div className="text-center  mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-foreground text-background px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
            Start Free Trial
          </button>
          <button className="text-gray-600 hover:text-foreground transition-colors font-medium">
            Get a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
