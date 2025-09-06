'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function TutorialsPage() {
  const tutorialSections = [
    {
      title: "Get Started (Cleomitra Basics)",
      tutorials: [
        "How to set up your Cleomitra account in minutes",
        "How to onboard your team and assign roles",
        "Tips for setting up branches and service providers",
        "How to import your client and service data"
      ]
    },
    {
      title: "Appointments & Invoices",
      tutorials: [
        "How to create and manage appointments seamlessly",
        "Automating confirmations and payment reminders",
        "How to generate invoices from completed appointments",
        "How to apply discounts and taxes with ease",
        "How to reconcile payments and track revenue"
      ]
    },
    {
      title: "Marketing & Messaging",
      tutorials: [
        "How to send appointment reminders via WhatsApp",
        "How to create bulk messages and promotional broadcasts",
        "How to segment clients for targeted campaigns",
        "How to automate follow-ups based on client activity",
        "How to analyze campaign results and engagement rates"
      ]
    },
    {
      title: "People Management",
      tutorials: [
        "How to build and manage client profiles",
        "How to track service providers' schedules and earnings",
        "How to sync communication history for each client profile"
      ]
    },
    {
      title: "Inventory Management",
      tutorials: [
        "How to set up products and link to services",
        "How to monitor stock levels with real-time tracking",
        "How to configure low-stock alerts and reorder points",
        "How to analyze product usage and sales trends"
      ]
    },
    {
      title: "Bulk Messaging & Automation",
      tutorials: [
        "How to create and launch bulk broadcast campaigns",
        "How to schedule automated reminders and follow-ups",
        "How to customize message templates for brand consistency",
        "How to use client segments for targeted messaging",
        "How to review delivery and response statistics"
      ]
    },
    {
      title: "Integrations",
      tutorials: [
        "How to connect WhatsApp and Instagram for messaging"
      ]
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="container-responsive py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cleomitra Tutorials
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Master the use of all modules in Cleomitra and 
              build great relationships with Julio's videos.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-60 bg-gray-200 rounded-2xl flex items-center justify-center">
                <button className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutorials Content */}
      <section className="container-responsive pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {tutorialSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.tutorials.map((tutorial, tutorialIndex) => (
                  <motion.div
                    key={tutorialIndex}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium group-hover:bg-primary-dark transition-colors">
                      {tutorialIndex + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 group-hover:text-foreground transition-colors">
                        {tutorial}
                      </p>
                    </div>
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}