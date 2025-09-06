"use client";

import { motion } from "framer-motion";
import FeaturesSection from "../../../components/sections/FeaturesSection";
import FAQSection from "../../../components/sections/FAQSection";

export default function IntegrationsPage() {
  const integrationsFAQs = [
    {
      question: "How many integrations does Cleomitra support?",
      answer:
        "Cleomitra supports over 100+ popular integrations including payment processors, email services, social media platforms, and business tools.",
    },
    {
      question: "How long does it take to set up integrations?",
      answer:
        "Most integrations can be set up in seconds with our one-click connection system. Complex integrations typically take just a few minutes.",
    },
    {
      question: "Can I create custom integrations?",
      answer:
        "Yes, we provide API access and webhook support to create custom integrations tailored to your specific business needs.",
    },
  ];

  return (
    <div className="bg-background">
      <main>
        <section className="container-responsive section-spacing">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Connect everything you use
              <br />
              in seconds, not hours.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Integrations you can connect to cleomitra in seconds with our
              extensive library of business tools.
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
                View All Integrations
              </button>
            </motion.div>
          </div>
        </section>

        <FeaturesSection />
        <FAQSection faqs={integrationsFAQs} />
      </main>
    </div>
  );
}
