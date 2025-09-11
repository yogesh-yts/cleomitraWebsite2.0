"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface MetricsSectionProps {
  statistics?: {
    revenue: string;
    bookings: string;
    sales: string;
  };
}

interface AnimatedCounterProps {
  value: string;
  delay: number;
}

const AnimatedCounter = ({ value, delay }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);

  // Extract numeric value from string (e.g., "20%" -> 20)
  const numericValue = parseInt(value.replace(/[^\d]/g, "")) || 0;
  const suffix = value.replace(/\d/g, ""); // Get the non-numeric part (%, etc.)

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [motionValue, numericValue, isInView]);

  return (
    <div ref={ref}>
      <motion.div
        className="text-6xl font-bold text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
    </div>
  );
};

const MetricsSection = ({ statistics }: MetricsSectionProps) => {
  const defaultStats = {
    revenue: "20%",
    bookings: "18%",
    sales: "32%",
  };

  const stats = statistics || defaultStats;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 whitespace-normal md:whitespace-pre-line">
            Cleomitra is your complete solution for{"\n"}
            running a seamless and efficient business.
          </h2>
        </motion.div>

        <motion.div
          className="border-2 border-dashed border-black/40 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter value={stats.revenue} delay={0.3} />
              <div className="text-lg text-black">More Revenue</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter value={stats.bookings} delay={0.4} />
              <div className="text-lg text-black">Bookings Increased</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatedCounter value={stats.sales} delay={0.5} />
              <div className="text-lg text-black">Sales Increased</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection;
