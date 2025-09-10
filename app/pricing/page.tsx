"use client";

import React from "react";
import { motion } from "framer-motion";
import StatisticsSection from "@/components/sections/StatisticsSection";
import FAQSection from "@/components/sections/FAQSection";

const PricingPage: React.FC = () => {
  const pricingFAQs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans so you can explore all features before committing."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-responsive">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Simple, transparent pricing
              <br />
              for every business
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container-responsive section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-6">
              $29<span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Up to 100 customers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Basic scheduling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Email support
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-bold mb-6">
              $79<span className="text-lg opacity-75">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Up to 1,000 customers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Advanced scheduling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Marketing automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Priority support
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Get Started
            </button>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">
              $199<span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Unlimited customers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                All features included
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Custom integrations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                24/7 phone support
              </li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      <FAQSection faqs={pricingFAQs} />

      <StatisticsSection />
    </div>
  );
};

export default PricingPage;