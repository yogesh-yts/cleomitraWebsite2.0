"use client";

import { motion } from "framer-motion";
import FAQSection from "./FAQSection";
import StatisticsSection from "./StatisticsSection";
import MetricsSection from "./MetricsSection";
import ScrollScaleImage from "../ui/ScrollScaleImage";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";
import "material-symbols/outlined.css";
import Image from "next/image";

const SocialIconsGrid = () => {
  const socialIcons = [
    { id: "whatsapp", src: "/social/whatsapp.jpg", alt: "WhatsApp" },
    { id: "gmail", src: "/social/gmail.png", alt: "Gmail" },
    { id: "instagram", src: "/social/instagram.jpg", alt: "Instagram" },
  ];

  // Create 9 grid positions
  const gridPositions = Array.from({ length: 9 }, (_, index) => index + 1);

  const getImageForPosition = (position: number) => {
    if (position === 1) {
      return socialIcons[0].src;
    } else if (position === 5) {
      return socialIcons[1].src;
    } else if (position === 9) {
      return socialIcons[2].src;
    }
    return null;
  };

  const getAltForPosition = (position: number) => {
    if (position === 1) return socialIcons[0].alt;
    if (position === 5) return socialIcons[1].alt;
    if (position === 9) return socialIcons[2].alt;
    return "";
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-full h-auto p-2">
      {gridPositions.map((position) => {
        const image = getImageForPosition(position);

        return (
          <div key={position} className="flex items-center justify-center">
            {image ? (
              <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md relative">
                <Image
                  src={image}
                  alt={getAltForPosition(position)}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            ) : (
              <div className="w-20 h-20 bg-transparent rounded-lg "></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface SolutionPageTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  heroImages?: string[];
  heroBackgroundImage?: string;
  contentSections?: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  statistics?: {
    revenue: string;
    bookings: string;
    sales: string;
  };
}

const SolutionPageTemplate = ({
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImages,
  heroBackgroundImage,
  contentSections,
  statistics,
}: SolutionPageTemplateProps) => {
  const displayImages = heroImages || (heroImage ? [heroImage] : []);

  const faqItems = [
    {
      question: "What is Role-Based Access Control and how does it work?",
      answer:
        "Role-Based Access Control allows you to assign different permission levels to your team members. Owners get full access, managers can handle scheduling and reports, while staff can only access their own appointments and client information. This ensures security and proper workflow management.",
    },
    {
      question: "How does Cleomitra help me manage my salon with ease?",
      answer:
        "Cleomitra centralizes all your salon operations in one platform - from appointment scheduling and client management to inventory tracking and staff coordination. Our intuitive dashboard gives you complete visibility and control over your business operations.",
    },
    {
      question:
        "Can I handle booking, payroll, and other operations in one place?",
      answer:
        "Absolutely! Cleomitra combines appointment booking, staff payroll management, inventory tracking, client communications, and payment processing all in one comprehensive platform. No need to juggle multiple software solutions.",
    },
    {
      question:
        "What are the benefits of cloud-based software for seamless access?",
      answer:
        "Our cloud-based platform means you can access your salon management system from anywhere, anytime. Whether you're at home, traveling, or at the salon, you can manage appointments, check reports, and stay connected with your business 24/7 from any device.",
    },
  ];

  const industryTypes = [
    "Beauty Salon",
    "Hair Salon",
    "Spa & Wellness Center",
    "Nail Salon",
    "Barber Shop",
    "Tattoo and Piercing Studio",
  ];
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className="relative pt-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: heroBackgroundImage
            ? `url('${heroBackgroundImage}')`
            : "url('/Solutions-teams/bg/1 (1).png')",
        }}
      >
        <div className="container-responsive">
          <div className="text-center  mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {heroTitle}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroSubtitle}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StartFreeTrialButton className="bg-foreground text-background hover:bg-gray-800 px-8 py-3" />
              <GetDemoButton className="text-gray-600 hover:text-foreground bg-transparent border-none p-0 hover:bg-transparent" />
            </motion.div>
            {displayImages.length > 0 && (
              <div className="w-full flex justify-center items-center">
                {displayImages.length > 1 ? (
                  <div className="flex gap-4 md:gap-8 items-center justify-center w-full max-w-6xl">
                    {displayImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex-1 max-w-xs"
                      >
                        <ScrollScaleImage
                          src={image}
                          alt={`Hero Image ${index + 1}`}
                          width={400}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-lg"
                          wrapperClassName="w-full"
                          priority={index === 0}
                          quality={100}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <ScrollScaleImage
                    src={displayImages[0]}
                    alt="Hero Image"
                    width={1200}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg"
                    wrapperClassName="w-full"
                    priority={true}
                    quality={100}
                  />
                )}
              </div>
            )}{" "}
          </div>{" "}
        </div>
      </section>

      {/* Three Features Section */}
      <section className="pt-20 ">
        <div className="container-responsive">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need to run — and
              <br />
              grow — your business.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: "schedule",
                imageSrc: "/Add Appointment filled.png",
                alt: "Add Appointment",
                title: "Schedule without the stress",
                type: "image",
              },
              {
                id: "engage",
                title: "Engage on every channel",
                type: "social",
              },
              {
                id: "grow",
                imageSrc: "/Frame 2968.png",
                alt: "Business Analytics",
                title: "Grow together with insights",
                type: "image",
              },
            ].map((section, index) => (
              <motion.div
                key={section.id}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 w-96 h-80 bg-transparent rounded-2xl shadow-lg border-2 border-dashed border-gray-300 px-5 pt-5 transition-all duration-300 group-hover:shadow-xl ">
                  {section.type === "image" ? (
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={section.imageSrc!}
                        alt={section.alt!}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        quality={100}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex justify-center items-center -mt-4">
                      <SocialIconsGrid />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {section.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {contentSections && (
        <div className="container-responsive section-spacing space-y-20">
          {contentSections.map((section, index) => (
            <motion.section
              key={index}
              className="flex flex-col lg:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image Section - 60% width */}
              <motion.div
                className={`w-full lg:w-[60%] ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ScrollScaleImage
                  src={section.image}
                  alt={section.title}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg"
                  wrapperClassName="w-full"
                  quality={100}
                />
              </motion.div>

              {/* Content Section - 40% width */}
              <motion.div
                className={`w-full lg:w-[40%] ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                  {section.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {section.description}
                </p>

                <StartFreeTrialButton className="bg-foreground text-background hover:bg-gray-800 px-8 py-3" />
              </motion.div>
            </motion.section>
          ))}
        </div>
      )}

      {/* Metrics Section */}
      <MetricsSection statistics={statistics} />

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Industry Types Section */}
      <section className="">
        <div className="container-responsive pt-15 pb-30">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Complete software solution
              <br />
              tailored for your industry
            </h2>
          </motion.div>

          <motion.div
            className="w-full  rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industryTypes.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-white border-2 border-dashed border-black/40 p-4 rounded-lg text-center hover:border-gray-300 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-700 font-medium">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <StatisticsSection />
      </section>
    </div>
  );
};

export default SolutionPageTemplate;
