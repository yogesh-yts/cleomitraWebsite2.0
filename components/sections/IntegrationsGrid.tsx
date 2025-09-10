import Image from "next/image";

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
      <div className="container-responsive mx-auto ">
        <div className="flex flex-wrap gap-6 mx-auto">
          {integrationData.map((integration) => (
            <div
              key={integration.name}
              className="flex-1 min-w-[calc(50%-12px)] max-w-[calc(50%-12px)] bg-white border-2 border-dashed border-black/40 rounded-lg p-6 hover:border-black/60 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-28 h-28 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={112}
                    height={112}
                    className="w-28 h-28 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black font-['Lato'] mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-base text-black/40 font-normal font-['Lato'] leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
