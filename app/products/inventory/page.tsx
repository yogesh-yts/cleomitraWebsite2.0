'use client';

import { motion } from 'framer-motion';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';

export default function InventoryPage() {
  const inventoryFAQs = [
    {
      question: "How does real-time inventory tracking work?",
      answer: "Our system automatically updates inventory levels in real-time as sales are made, products are received, and stock is adjusted across all locations."
    },
    {
      question: "Can I manage multiple locations?",
      answer: "Yes, our inventory system supports multi-location management with individual stock levels, transfers, and reporting for each location."
    },
    {
      question: "What kind of reports can I generate?",
      answer: "Generate detailed reports including stock levels, sales velocity, reorder recommendations, and profitability analysis for informed decision making."
    }
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
              Inventory management that<br />
              keeps your business stocked.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Oversee your inventory and track performance with comprehensive stock management tools.
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

        <FeaturesSection />
        <FAQSection faqs={inventoryFAQs} />
    </div>
  );
}