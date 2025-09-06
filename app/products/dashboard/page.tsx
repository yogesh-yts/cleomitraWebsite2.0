'use client';

import { motion } from 'framer-motion';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';

export default function DashboardPage() {
  const dashboardFAQs = [
    {
      question: "What analytics are available in the dashboard?",
      answer: "Our dashboard provides comprehensive analytics including sales funnel analysis, customer engagement metrics, revenue tracking, and business performance indicators."
    },
    {
      question: "Can I customize my dashboard view?",
      answer: "Yes, you can customize your dashboard by rearranging widgets, choosing relevant metrics, and creating personalized views for different team members."
    },
    {
      question: "How often is dashboard data updated?",
      answer: "Dashboard data is updated in real-time, ensuring you always have the latest information about your business performance and customer activities."
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
              Dashboard insights that drive<br />
              smarter business decisions.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Analyze your sales funnel and get business insights with comprehensive analytics and reporting tools.
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
                    <h3 className="text-lg font-semibold">Business Analytics</h3>
                    <div className="flex space-x-2">
                      <button className="text-xs bg-white px-3 py-1 rounded border">Today</button>
                      <button className="text-xs bg-primary text-white px-3 py-1 rounded">This Week</button>
                      <button className="text-xs bg-white px-3 py-1 rounded border">This Month</button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Total Revenue</div>
                      <div className="text-2xl font-bold text-primary">$24,567</div>
                      <div className="text-xs text-green-600">+12.5% vs last week</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">New Customers</div>
                      <div className="text-2xl font-bold text-secondary">342</div>
                      <div className="text-xs text-green-600">+8.2% vs last week</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Appointments</div>
                      <div className="text-2xl font-bold text-accent">156</div>
                      <div className="text-xs text-green-600">+15.3% vs last week</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Conversion Rate</div>
                      <div className="text-2xl font-bold text-info">68.4%</div>
                      <div className="text-xs text-red-600">-2.1% vs last week</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Sales Funnel</h4>
                      <div className="space-y-3">
                        {[
                          { stage: 'Leads', count: '1,234', width: 'w-full' },
                          { stage: 'Prospects', count: '856', width: 'w-5/6' },
                          { stage: 'Opportunities', count: '432', width: 'w-2/3' },
                          { stage: 'Customers', count: '234', width: 'w-1/2' }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{item.stage}</span>
                              <span className="font-medium">{item.count}</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded">
                              <div className={`h-full bg-primary rounded ${item.width}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Top Services</h4>
                      <div className="space-y-3">
                        {[
                          { service: 'Hair Cut & Style', revenue: '$8,450', percentage: '34%' },
                          { service: 'Manicure & Pedicure', revenue: '$5,230', percentage: '21%' },
                          { service: 'Massage Therapy', revenue: '$4,120', percentage: '17%' },
                          { service: 'Facial Treatment', revenue: '$3,890', percentage: '16%' }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center text-sm">
                            <div>
                              <div className="font-medium">{item.service}</div>
                              <div className="text-gray-500">{item.revenue}</div>
                            </div>
                            <div className="text-primary font-medium">{item.percentage}</div>
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
          {/* Real-Time Analytics */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real-Time Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Monitor your business performance with live data updates and instant insights into key metrics.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Analytics Dashboard</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Custom Reports */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Custom Reports
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Generate detailed reports tailored to your business needs with flexible filtering and export options.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Report Builder</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Performance Tracking */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Performance Tracking
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Track team performance, service efficiency, and business growth with comprehensive metrics.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Performance Metrics</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Forecasting & Insights */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Forecasting & Insights
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get predictive insights and forecasting to make informed decisions about your business growth.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Forecasting Tools</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <FAQSection faqs={dashboardFAQs} />
        </main>
    </div>
  );
}