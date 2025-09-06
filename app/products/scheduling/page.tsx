'use client';

import { motion } from 'framer-motion';
import FeaturesSection from '../../../components/sections/FeaturesSection';
import FAQSection from '../../../components/sections/FAQSection';

export default function SchedulingPage() {
  const schedulingFAQs = [
    {
      question: "How does Cleomitra scheduling help clients?",
      answer: "Cleomitra's scheduling system provides clients with easy booking options, calendar synchronization, and automated reminders to ensure they never miss appointments."
    },
    {
      question: "Can I manage staff and resources easily?",
      answer: "Yes, our scheduling system allows you to manage multiple staff members, resources, and locations from a single dashboard with real-time availability updates."
    },
    {
      question: "How does scheduling connect with other features?",
      answer: "Scheduling integrates seamlessly with customer management, billing, and communication features to provide a complete business management solution."
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
              Scheduling keeps your calendar in<br />
              sync — and your clients on time.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Simplify your daily bookings with a calendar that works for you and your team.
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

            {/* Calendar Preview */}
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
                    <h3 className="text-lg font-semibold">Customer Appointments</h3>
                    <div className="text-sm text-gray-500">September 15, 2024</div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Appointments</div>
                        <div className="space-y-1">
                          {['9:00 AM', '10:30 AM', '2:00 PM'].map((time, i) => (
                            <div key={i} className="text-xs bg-white p-2 rounded border">
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="bg-white p-4 rounded-lg border">
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="text-xs text-center font-medium p-2">
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: 35 }, (_, i) => (
                            <div
                              key={i}
                              className={`h-20 p-1 border border-gray-100 text-xs ${
                                i === 14 ? 'bg-primary text-white' : 
                                [10, 12, 18, 22].includes(i) ? 'bg-green-100' : 
                                'bg-white'
                              }`}
                            >
                              {i > 6 && i < 28 ? i - 6 : ''}
                              {i === 14 && <div className="text-xs mt-1">Today</div>}
                              {[10, 12, 18, 22].includes(i) && (
                                <div className="text-xs text-green-700 mt-1">
                                  {i === 10 ? '9AM' : i === 12 ? '2PM' : i === 18 ? '10AM' : '3PM'}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Appointment Details</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-gray-500">Client:</span> John Edwards</div>
                        <div><span className="text-gray-500">Service:</span> Hair Cut</div>
                        <div><span className="text-gray-500">Duration:</span> 45 minutes</div>
                        <div><span className="text-gray-500">Status:</span> 
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Confirmed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Today's Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Total Appointments:</span>
                          <span className="font-medium">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Available Slots:</span>
                          <span className="font-medium">4</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue Expected:</span>
                          <span className="font-medium text-green-600">$680</span>
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
          {/* Smart Calendar View */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart Calendar View
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Quickly identify available slots and manage appointments with intuitive calendar interface.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Calendar Interface</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Automated Reminders */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Automated Reminders
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Reduce no-shows with automatic email and SMS reminders sent to clients before appointments.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Reminder System</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team Availability Management */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Team Availability Management
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Set individual schedules for team members and manage resource availability across locations.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Team Management</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Integrated Payments & Invoices */}
          <motion.section
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Integrated Payments & Invoices
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Process payments and generate invoices automatically when appointments are completed.
              </p>
              <button className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="lg:order-1 bg-gray-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Payment Processing</span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <FAQSection faqs={schedulingFAQs} />
        </main>
    </div>
  );
}