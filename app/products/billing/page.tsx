'use client';

import { motion } from 'framer-motion';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';

export default function BillingPage() {
  const billingFAQs = [
    {
      question: "What payment methods are supported?",
      answer: "We support all major payment methods including credit cards, PayPal, bank transfers, and various digital wallets for maximum flexibility."
    },
    {
      question: "Can I automate recurring billing?",
      answer: "Yes, our system supports automated recurring billing for subscriptions, memberships, and regular services with smart retry logic."
    },
    {
      question: "How does invoice tracking work?",
      answer: "Our billing system provides real-time tracking of invoice status, payment confirmations, and automatic follow-ups for overdue payments."
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
              Professional billing with<br />
              built-in tracking and flexibility.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional invoicing with built-in tracking and flexibility to manage all your billing needs.
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
        <FAQSection faqs={billingFAQs} />
    </div>
  );
}