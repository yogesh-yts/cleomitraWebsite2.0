'use client';

import { motion } from 'framer-motion';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';

export default function MarketingMessagingPage() {
  const marketingFAQs = [
    {
      question: "How does email campaign automation work?",
      answer: "Our system allows you to set up automated email sequences based on customer behavior, preferences, and lifecycle stages to maximize engagement."
    },
    {
      question: "Can I segment my audience for targeted messaging?",
      answer: "Yes, you can create detailed customer segments based on demographics, behavior, purchase history, and engagement to send highly targeted messages."
    },
    {
      question: "What messaging channels are supported?",
      answer: "We support email, SMS, WhatsApp, social media messaging, and in-app notifications to reach customers on their preferred channels."
    }
  ];

  return (
    <div className="bg-background">
      
      <main>
        {/* Hero Section */}
        <section className="container-responsive section-spacing">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Marketing and messaging that<br />
              converts prospects into customers.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Send bulk messages, email campaigns, and get replies with our comprehensive marketing automation platform.
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

            {/* Marketing Dashboard Preview */}
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
                    <h3 className="text-lg font-semibold">Email Campaign Dashboard</h3>
                    <button className="text-xs bg-primary text-white px-3 py-1 rounded">Create Campaign</button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Total Sent</div>
                      <div className="text-2xl font-bold text-foreground">12,450</div>
                      <div className="text-xs text-green-600">+18% this month</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Open Rate</div>
                      <div className="text-2xl font-bold text-primary">42.3%</div>
                      <div className="text-xs text-green-600">+5.2% avg</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Click Rate</div>
                      <div className="text-2xl font-bold text-secondary">18.7%</div>
                      <div className="text-xs text-green-600">+3.1% avg</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Recent Campaigns</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Summer Sale 2024', status: 'Active', rate: '45.2%' },
                          { name: 'Welcome Series', status: 'Scheduled', rate: '38.1%' },
                          { name: 'Product Launch', status: 'Draft', rate: '52.3%' }
                        ].map((campaign, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <div>
                              <div className="font-medium">{campaign.name}</div>
                              <div className="text-gray-500">{campaign.status}</div>
                            </div>
                            <div className="text-green-600 font-medium">{campaign.rate}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Audience Segments</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'VIP Customers', count: '1,234', growth: '+5%' },
                          { name: 'New Subscribers', count: '2,456', growth: '+12%' },
                          { name: 'Inactive Users', count: '834', growth: '-3%' }
                        ].map((segment, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <div>
                              <div className="font-medium">{segment.name}</div>
                              <div className="text-gray-500">{segment.count} contacts</div>
                            </div>
                            <div className={`font-medium ${segment.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {segment.growth}
                            </div>
                          </div>
                        ))}
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
          {/* Email Campaign Builder */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Email Campaign Builder
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Create beautiful, responsive emails with our drag-and-drop builder and professional templates.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Email Builder Interface</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Multi-Channel Messaging */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Multi-Channel Messaging
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Reach customers through email, SMS, WhatsApp, and social media from a single platform.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Multi-Channel Dashboard</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Automation Workflows */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Automation Workflows
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Set up automated sequences based on customer behavior, preferences, and lifecycle stages.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Automation Builder</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Advanced Analytics */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Track campaign performance with detailed analytics including opens, clicks, conversions, and ROI.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Analytics Dashboard</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <FAQSection faqs={marketingFAQs} />
    </div>
  );
}