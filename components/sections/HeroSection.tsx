import "material-symbols/outlined.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Hero Title */}
        <h1 className="text-5xl  font-bold leading-tight mb-8">
          <span className="text-gray-100">The </span>
          <span className="text-black">Customer Experience</span>
          <br />
          <span className="text-black">Platform </span>
          <span className="text-gray-100">You Need, To Turn Your</span>
          <br />
          <span className="bg-gradient-to-r from-pink-900 to-pink-750 bg-clip-text text-transparent">
            Business{" "}
          </span>
          <span className="text-gray-100">Into a </span>
          <span className="bg-gradient-to-b from-pink-950 to-pink-700 text-white px-4 py-2 rounded-lg inline-block">
            Big Name
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-black-100 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors">
            Start Free Trail
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
            Get a Demo
          </button>
        </div>
      </div>

      {/* Floating Icons */}
      {/* Email Icon - Top Left */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-orange rounded-2xl flex items-center justify-center"
        initial={{ x: "calc(50vw - 50% - 5rem)", y: "calc(50vh - 50% - 5rem)" }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <span className="material-symbols-outlined text-white text-2xl">
          mail
        </span>
      </motion.div>

      {/* WhatsApp Icon - Right */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-green rounded-2xl flex items-center justify-center"
        initial={{
          x: "calc(-50vw + 50% + 5rem)",
          y: "calc(50vh - 50% - 5rem)",
        }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="material-symbols-outlined text-white text-2xl">
          chat
        </span>
      </motion.div>

      {/* Instagram Icon - Bottom Left */}
      <motion.div
        className="absolute bottom-40 left-20 w-16 h-16 bg-pink-700 rounded-2xl flex items-center justify-center"
        initial={{
          x: "calc(50vw - 50% - 5rem)",
          y: "calc(-50vh + 50% + 10rem)",
        }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="material-symbols-outlined text-white text-2xl">
          photo_camera
        </span>
      </motion.div>

      {/* Inventory Icon - Top Center */}
      <motion.div
        className="absolute top-32 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow rounded-2xl flex items-center justify-center"
        initial={{ x: 0, y: "calc(50vh - 50% - 8rem)" }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="material-symbols-outlined text-white text-2xl">
          inventory_2
        </span>
      </motion.div>

      {/* Analytics Icon - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue rounded-2xl flex items-center justify-center"
        initial={{
          x: "calc(-50vw + 50% + 5rem)",
          y: "calc(-50vh + 50% + 5rem)",
        }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="material-symbols-outlined text-white text-2xl">
          analytics
        </span>
      </motion.div>

      {/* Additional decorative elements */}
      {/* Small arrows for each icon */}

      {/* Arrow for Email Icon */}
      <div className="absolute top-16 left-40">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_right
        </span>
      </div>
      <div className="absolute top-28 left-12">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_left
        </span>
      </div>

      {/* Arrow for WhatsApp Icon */}
      <div className="absolute top-16 right-40">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_right
        </span>
      </div>
      <div className="absolute top-28 right-12">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_left
        </span>
      </div>

      {/* Arrow for Instagram Icon */}
      <div className="absolute bottom-48 left-40">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_left
        </span>
      </div>
      <div className="absolute bottom-32 left-12">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_right
        </span>
      </div>

      {/* Arrow for Inventory Icon */}
      <div className="absolute top-24 left-1/2 transform -translate-x-8">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_left
        </span>
      </div>
      <div className="absolute top-24 left-1/2 transform translate-x-8">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_right
        </span>
      </div>

      {/* Arrow for Analytics Icon */}
      <div className="absolute bottom-28 right-40">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_right
        </span>
      </div>
      <div className="absolute bottom-12 right-12">
        <span className="material-symbols-outlined text-gray-400 text-xl">
          arrow_left
        </span>
      </div>
    </div>
  );
}
