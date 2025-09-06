"use client";
import { motion } from "framer-motion";

export default function MobileAppPage() {
  const appIcons = [
    { name: "Google", icon: "🎯" },
    { name: "Chrome", icon: "🌐" },
    { name: "Cleomitra", icon: "💼" },
    { name: "Gmail", icon: "✉️" },
    { name: "Notion", icon: "📝" },
  ];

  const features = [
    {
      badge: "Developer",
      color: "bg-green-500",
    },
    {
      badge: "Marketer",
      color: "bg-yellow-500",
    },
    {
      badge: "Designer",
      color: "bg-red-500",
    },
    {
      badge: "Product",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Icons Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-8 mb-16">
          {appIcons.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl hover:shadow-lg transition-shadow cursor-pointer"
            >
              {app.icon}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Download Cleomitra
              <br />
              for Mobile
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The Cleomitra app you love, on your mobile, with less modules but
              even faster
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Download Mobile App
            </motion.button>
          </motion.div>

          {/* Feature Section */}
          <div className="mt-24 p-8 border border-dashed border-gray-300 rounded-3xl">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`${feature.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {feature.badge}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Discover cleomitra a customer
                <br />
                experience platform, made by 15+
                <br />
                passionate people
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
