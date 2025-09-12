"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import StatisticsSection from "@/components/sections/StatisticsSection";
import VideoPlayer from "@/components/ui/VideoPlayer";

export default function TutorialsPage() {
  const tutorialSections = [
    {
      title: "Get Started (Cleomitra Basics)",
      tutorials: [
        { title: "How to set up your Cleomitra account in minutes", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to onboard your team and assign roles", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "Tips for setting up branches and service providers", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to import your client and service data", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "Appointments & Invoices",
      tutorials: [
        { title: "How to create and manage appointments seamlessly", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "Automating confirmations and payment reminders", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to generate invoices from completed appointments", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to apply discounts and taxes with ease", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to reconcile payments and track revenue", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "Marketing & Messaging",
      tutorials: [
        { title: "How to send appointment reminders via WhatsApp", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to create bulk messages and promotional broadcasts", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to segment clients for targeted campaigns", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to automate follow-ups based on client activity", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to analyze campaign results and engagement rates", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "People Management",
      tutorials: [
        { title: "How to build and manage client profiles", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to track service providers' schedules and earnings", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to sync communication history for each client profile", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "Inventory Management",
      tutorials: [
        { title: "How to set up products and link to services", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to monitor stock levels with real-time tracking", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to configure low-stock alerts and reorder points", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to analyze product usage and sales trends", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "Bulk Messaging & Automation",
      tutorials: [
        { title: "How to create and launch bulk broadcast campaigns", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to schedule automated reminders and follow-ups", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to customize message templates for brand consistency", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to use client segments for targeted messaging", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
        { title: "How to review delivery and response statistics", link: "https://www.youtube.com/watch?v=R2N32Twql5M" },
      ],
    },
    {
      title: "Integrations",
      tutorials: [
        { title: "How to connect WhatsApp and Instagram for messaging", link: "https://www.youtube.com/watch?v=R2N32Twql5M" }
      ],
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="container-responsive py-30 md:py-20" aria-labelledby="tutorials-title">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 id="tutorials-title" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cleomitra Tutorials
            </h1>
            <p className="text-lg md:text-xl text-black/40 mb-8">
              Learn how to set up your cleomitra account and build great
              relationships with Julie&apos;s videos
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VideoPlayer />
          </motion.div>
        </div>
      </section>

      {/* Tutorials Content */}
      <section className="container-responsive pb-20" aria-label="Tutorial categories">
        <div className="mx-auto space-y-12">
          {tutorialSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 id={`section-${sectionIndex}`} className="text-2xl md:text-3xl font-bold text-foreground border-b border-gray-200 pb-4">
                {section.title}
              </h2>

              <div className="space-y-1">
                {section.tutorials.map((tutorial, tutorialIndex) => (
                  <motion.div key={tutorialIndex} whileHover={{ x: 5 }}>
                    <a
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 p-2 md:p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group "
                      aria-label={`Watch tutorial: ${tutorial.title} (opens in new tab)`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 text-black rounded-full flex items-center justify-center text-sm font-medium">
                        {tutorialIndex + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-black text-xl group-hover:text-foreground transition-colors">
                          {tutorial.title}
                        </p>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-5 h-5 text-main" aria-hidden="true" />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <StatisticsSection />
    </div>
  );
}
