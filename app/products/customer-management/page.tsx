"use client";

import { motion } from "framer-motion";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";

const CustomerManagementPage = () => {
  const customerFAQs = [
    {
      question: "How does Cleomitra help me know my clients better?",
      answer:
        "Cleomitra provides comprehensive client profiles with detailed history, preferences, and interaction data to help you understand your clients better and provide personalized service.",
    },
    {
      question: "Can I customize client management features myself?",
      answer:
        "Yes, Cleomitra offers customizable client management features that you can tailor to your business needs and workflow preferences.",
    },
    {
      question: "Can I communicate with clients directly from Cleomitra?",
      answer:
        "Absolutely! Cleomitra provides integrated communication tools that allow you to interact with clients through multiple channels directly from the platform.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="container-responsive section-spacing">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client management keeps every detail in one
            <br />
            place — and every experience personal.
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Maintain customer details organized and accessible with
            comprehensive client management tools.
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

          {/* Dashboard Preview */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Customer Profile</h3>
                  <div className="flex space-x-2">
                    <button className="text-xs bg-white px-3 py-1 rounded border">
                      View
                    </button>
                    <button className="text-xs bg-primary text-white px-3 py-1 rounded">
                      Edit
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">JD</span>
                        </div>
                        <div>
                          <h4 className="font-medium">John Doe</h4>
                          <p className="text-sm text-gray-500">
                            john.doe@example.com
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Phone:</span>
                          <div className="font-medium">+1 (555) 123-4567</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <div className="font-medium">New York, NY</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium mb-3">Recent Activity</h5>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-3 text-sm"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">
                              Service completed
                            </span>
                            <span className="text-gray-400">2 days ago</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Total Spent</h5>
                      <div className="text-2xl font-bold text-primary">
                        $1,250
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Services Used</h5>
                      <div className="text-2xl font-bold text-green-600">
                        12
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Satisfaction</h5>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 bg-yellow-400 rounded-full"
                          ></div>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FeaturesSection />

      {/* Feature Sections */}
      <div className="container-responsive space-y-24">
        {/* Centralized Client Profiles */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Centralized Client Profiles
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Keep all client details — contact info, preferences, notes, and
              appointment history in one centralized location.
            </p>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Client Profile Interface</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Service & Purchase History */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Service & Purchase History
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Track every appointment and product purchase to understand client
              preferences and buying patterns.
            </p>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">
                  Purchase History Interface
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Integrated Communication */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Integrated Communication
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Communicate with clients through various channels directly from
              their profile page.
            </p>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Communication Interface</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Smart Segmentation */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Smart Segmentation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Automatically categorize clients based on behavior, preferences,
              and purchase history for targeted marketing.
            </p>
            <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Start Free Trial
            </button>
          </div>
          <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Segmentation Interface</span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <FAQSection faqs={customerFAQs} />
    </div>
  );
};

export default CustomerManagementPage;
