"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const integrationData = [
  {
    name: "WhatsApp",
    description:
      "Send reminders, confirmations, and offers directly through WhatsApp - keeping customers engaged through their preferred messaging platform.",
    image: "/Products-features/integrations/whatsapp.png",
  },
  {
    name: "Instagram",
    description:
      "Manage DMs, reply faster, and connect bookings to your Instagram presence — all within Cleomitra.",
    image: "/Products-features/integrations/instagram.png",
  },
  {
    name: "Exotel",
    description:
      "Handle client calls, track history, and manage follow-ups seamlessly through Exotel integration.",
    image: "/Products-features/integrations/exotel.png",
  },
  {
    name: "Twilio",
    description:
      "Send SMS alerts, confirmations, and updates instantly with Twilio's reliable communication system.",
    image: "/Products-features/integrations/twilio.png",
  },
  {
    name: "Email",
    description:
      "Broadcast promotional emails, notifications, and updates seamlessly through our integrated email system.",
    image: "/Products-features/integrations/gmail.png",
  },
];

export default function IntegrationsGrid() {
  return (
    <section className="py-16">
      <div className="container-responsive mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {integrationData.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="bg-white border-2 border-dashed border-black/40 rounded-lg p-4 md:p-6 hover:border-black/60 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                <motion.div 
                  className="w-20 h-20 md:w-28 md:h-28 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={112}
                    height={112}
                    className="w-20 h-20 md:w-28 md:h-28 object-contain rounded-lg"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1 text-center sm:text-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-sm md:text-base text-black/40 font-normal leading-relaxed">
                    {integration.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
