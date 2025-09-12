"use client";

import React from "react";
import { motion } from "framer-motion";
import StatisticsSection from "@/components/sections/StatisticsSection";
import FAQSection from "@/components/sections/FAQSection";

const PricingPage: React.FC = () => {
  const pricingFAQs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
    },
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for all our plans so you can explore all features before committing.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="pricing-title">
        <div className="container-responsive">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="pricing-title" className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Simple, transparent pricing
              <br />
              for every business
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include
              our core features with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection faqs={pricingFAQs} />

      <StatisticsSection />
    </div>
  );
};

export default PricingPage;
