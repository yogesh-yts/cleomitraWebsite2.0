"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollScaleImage from "../ui/ScrollScaleImage";
import "material-symbols/outlined.css";

interface FeaturesSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

const FeaturesSection = ({
  imageSrc = "/Homepage/Homepage hero sec.png",
  imageAlt = "Features Overview",
}: FeaturesSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const features = [
    { icon: "schedule", title: "Scheduling" },
    { icon: "smart_toy", title: "Automation & Quick Replies" },
    { icon: "attach_money", title: "Billing" },
    { icon: "email", title: "Email Marketing" },
    { icon: "receipt", title: "Invoice" },
    { icon: "chat", title: "WhatsApp Broadcast" },
    { icon: "dashboard", title: "Dashboard & Reports" },
    { icon: "message", title: "Messaging" },
    { icon: "inventory", title: "Inventory" },
    { icon: "people", title: "Customer Management" },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="container-responsive py-15">
      {/* Hero Image */}
      <div className="mb-16">
        <ScrollScaleImage
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={600}
          className="mx-auto w-full h-auto"
          priority
          quality={100}
        />
      </div>

      {/* Features Section */}
      <motion.div style={{ y, opacity }} className="text-center mt-30">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          One Tool For All Your Needs
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-full px-6 py-4 group cursor-pointer hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  borderColor: "rgba(99, 102, 241, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-gray-600 group-hover:text-primary transition-colors duration-300"
                    style={{ fontSize: "20px" }}
                  >
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
