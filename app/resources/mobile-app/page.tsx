"use client";
import { motion } from "framer-motion";
import StatisticsSection from "@/components/sections/StatisticsSection";
import Image from "next/image";
import Seo from "@/components/Seo";

export default function MobileAppPage() {
  const appIcons = [
    { name: "App 4", image: "/download mob app/Rectangle 233.svg" },
    { name: "App 2", image: "/download mob app/Rectangle 231.svg" },
    { name: "App 1", image: "/download mob app/Rectangle 230.svg" },
    { name: "App 3", image: "/download mob app/Rectangle 232.svg" },
    { name: "App 5", image: "/download mob app/Rectangle 234.svg" },
  ];

  return (
    <>
      <Seo
        title="Download Cleomitra Mobile App - Best CRM on Mobile"
        description="Download Cleomitra mobile app for iOS & Android. Manage your salon, spa business on the go. Best mobile CRM app for service providers in India."
        keywords="cleomitra mobile app, salon management app, spa mobile app, crm mobile app, download cleomitra app, mobile crm india"
        url="https://www.cleomitra.com/resources/mobile-app"
        siteName="Cleomitra"
      />
      <div className="bg-white">
        {/* Top Icons Section */}
        <section
          className="container-section pt-15 pb-30"
          aria-label="Mobile app download"
        >
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
                  alt={`${app.name} mobile app icon`}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  quality={100}
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
              <h1 className="text-5xl font-bold text-black mb-4 whitespace-normal md:whitespace-pre-line">
                Download Cleomitra{"\n"}
                for Mobile
              </h1>

              <p className="text-base text-black/50 mb-10 mx-auto whitespace-normal md:whitespace-pre-line">
                The Cleomitra app you love, on{"\n"}
                your mobile, with less modules{"\n"}
                but even faster
              </p>

              <button className="group relative px-8 py-3 rounded-full font-medium transition-all duration-500 ease-out cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 overflow-hidden bg-black text-white hover:bg-black/90">
                {/* Shimmer/sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                {/* Glow overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative z-10">Download Mobile App</span>
              </button>
            </motion.div>
          </div>
        </section>

        <StatisticsSection />
      </div>
    </>
  );
}
