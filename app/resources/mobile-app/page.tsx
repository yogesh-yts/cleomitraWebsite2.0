"use client";
import { motion } from "framer-motion";
import StatisticsSection from "@/components/sections/StatisticsSection";
import Image from "next/image";

export default function MobileAppPage() {
  const appIcons = [
    { name: "App 4", image: "/download mob app/Rectangle 233.png" },
    { name: "App 2", image: "/download mob app/Rectangle 231.png" },
    { name: "App 1", image: "/download mob app/Rectangle 230.png" },
    { name: "App 3", image: "/download mob app/Rectangle 232.png" },
    { name: "App 5", image: "/download mob app/Rectangle 234.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Icons Section */}
      <div className="container-section pt-15 pb-30">
        <div className="w-fit flex justify-center space-x-2 mb-16 outline-1 outline-offset-[-1px] outline-black/10 mx-auto py-2 px-2.5 rounded-2xl">
          {appIcons.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-16 h-16 rounded-2xl  overflow-hidden  cursor-pointer"
            >
              <Image
                src={app.image}
                alt={app.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center  mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-black mb-6">
              Download Cleomitra
              <br />
              for Mobile
            </h1>

            <p className="text-base text-black/50 mb-12  mx-auto">
              The Cleomitra app you love, on <br /> your mobile, with less
              modules <br /> but even faster
            </p>

            <motion.button
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/90 text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-black transition-colors"
            >
              Download Mobile App
            </motion.button>
          </motion.div>
        </div>
      </div>

      <StatisticsSection />
    </div>
  );
}
