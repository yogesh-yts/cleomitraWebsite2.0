import "material-symbols/outlined.css";
import { motion } from "framer-motion";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";

// Reusable Icon with Arrows Component
interface IconWithArrowsProps {
  icon: string;
  bgColor: string;
  position: string;
  initial: Record<string, number | string>;
  delay: number;
  showArrows?: {
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
  };
}

const IconWithArrows = ({
  icon,
  bgColor,
  position,
  initial,
  delay,
  showArrows = { left: true, right: true, top: true, bottom: true },
}: IconWithArrowsProps) => {
  return (
    <motion.div
      className={`absolute ${position} w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center z-1`}
      initial={initial}
      whileInView={{ x: 0, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {/* Main Icon */}
      <span className="material-symbols-outlined text-white text-2xl">
        {icon}
      </span>

      {/* Conditional Arrows positioned relative to the icon */}
      {/* Left Arrow */}
      {showArrows.left && (
        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
          <span className="material-symbols-outlined text-gray-400 text-xl">
            arrow_left
          </span>
        </div>
      )}

      {/* Right Arrow */}
      {showArrows.right && (
        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
          <span className="material-symbols-outlined text-gray-400 text-xl">
            arrow_right
          </span>
        </div>
      )}

      {/* Top Arrow */}
      {showArrows.top && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <span className="material-symbols-outlined text-gray-400 text-xl">
            arrow_drop_up
          </span>
        </div>
      )}

      {/* Bottom Arrow */}
      {showArrows.bottom && (
        <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2">
          <span className="material-symbols-outlined text-gray-400 text-xl">
            arrow_drop_down
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default function HeroSection() {
  return (
    <div className="container-responsive relative  min-h-140 flex items-center justify-center bg-white overflow-hidden sec">
      {/* Main Content */}
      <div className=" z-10 text-center max-w-7xl mx-auto ">
        {/* Hero Title */}
        <div className="relative z-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-normal leading-relaxed  md:leading-tight mb-8 z-5">
            <span className="text-gray-100">The </span>
            <span className="text-black font-bold">Customer Experience</span>
            <br />
            <span className="text-black font-bold">Platform </span>
            <span className="text-gray-100">You Need, To Turn Your</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-pink-900 to-pink-750 bg-clip-text text-transparent">
              Business{" "}
            </span>
            <span className="text-gray-100">Into a </span>
            <span className="bg-gradient-to-b from-pink-950 to-pink-700 text-white font-bold px-4 py-2 rounded-lg inline-block">
              Big Name
            </span>
          </h1>

          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
            <span className="material-symbols-outlined text-gray-400 text-3xl">
              arrow_left
            </span>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
            <span className="material-symbols-outlined text-gray-400 text-3xl">
              arrow_right
            </span>
          </div>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <StartFreeTrialButton />
          <GetDemoButton />
        </div>{" "}
        <IconWithArrows
          icon="mail"
          bgColor="bg-orange"
          position="top-12 left-1/2 transform -translate-x-116" // Left side of content area
          initial={{
            x: "calc(50vw - 50% - 5rem)",
            y: "calc(50vh - 50% - 5rem)",
          }}
          delay={0.1}
          showArrows={{ left: true, right: true, top: false, bottom: false }}
        />
        <IconWithArrows
          icon="chat"
          bgColor="bg-green"
          position="top-12 left-1/2 transform translate-x-96" // Right side of content area
          initial={{
            x: "calc(-50vw + 50% + 5rem)",
            y: "calc(50vh - 50% - 5rem)",
          }}
          delay={0.2}
          showArrows={{ left: true, right: false, top: false, bottom: true }}
        />
        <IconWithArrows
          icon="photo_camera"
          bgColor="bg-pink-700"
          position="top-60 left-30"
          initial={{ x: 0, y: "calc(50vh - 50% - 8rem)" }}
          delay={0.3}
          showArrows={{ left: false, right: true, top: true, bottom: true }}
        />
        <IconWithArrows
          icon="inventory_2"
          bgColor="bg-yellow"
          position="bottom-22 left-1/2 transform -translate-x-80" // Bottom-left of content
          initial={{
            x: "calc(50vw - 50% - 5rem)",
            y: "calc(-50vh + 50% + 10rem)",
          }}
          delay={0.4}
          showArrows={{ left: true, right: false, top: true, bottom: false }}
        />
        <IconWithArrows
          icon="analytics"
          bgColor="bg-blue"
          position="bottom-22 left-1/2 transform translate-x-66" // Bottom-right of content
          initial={{
            x: "calc(-50vw + 50% + 5rem)",
            y: "calc(-50vh + 50% - 5rem)",
          }}
          delay={0.5}
          showArrows={{ left: false, right: true, top: true, bottom: false }}
        />
      </div>
    </div>
  );
}
