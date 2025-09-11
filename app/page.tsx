"use client";

// import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase, {
  SliderData,
} from "@/components/sections/ProductShowcase";
import StatisticsSection from "@/components/sections/StatisticsSection";
import HeroLg from "@/components/sections/HeroLg";

const HomePage = () => {
  const whatsappSliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/Home page-business opportunity-1.png",
      title: "All messages in a single location.",
      subtitle:
        "Access all your chats from WhatsApp, Instagram, and your contacts seamlessly on a single screen, using any account you prefer.",
      name: "Swathy",
      stars: 5,
      testimonial:
        "Managing WhatsApp business conversations became so much easier with Cleomitra's unified interface.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "WhatsApp Business Automation",
      subtitle:
        "Automate your WhatsApp responses, set up chatbots, and manage multiple WhatsApp accounts from one dashboard.",
      name: "Arjun",
      stars: 5,
      testimonial:
        "Our WhatsApp response time improved by 80% with automated workflows and quick replies.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "WhatsApp Broadcast & Campaigns",
      subtitle:
        "Send targeted WhatsApp broadcasts, create campaigns, and track engagement with detailed analytics.",
      name: "Meera",
      stars: 4,
      testimonial:
        "WhatsApp marketing campaigns through Cleomitra increased our sales conversion by 45%.",
    },
  ];

  const emailSliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/Home page-business opportunity-1.png",
      title: "Smart Email Templates",
      subtitle:
        "Create professional email templates with AI assistance and personalize them for maximum engagement.",
      name: "Rahul",
      stars: 5,
      testimonial:
        "Email templates from Cleomitra helped us maintain consistent branding across all communications.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "Email Campaign Analytics",
      subtitle:
        "Track open rates, click-through rates, and conversions with comprehensive email analytics dashboard.",
      name: "Kavita",
      stars: 4,
      testimonial:
        "Detailed email analytics helped us optimize our campaigns and achieve 60% higher open rates.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "Automated Email Sequences",
      subtitle:
        "Set up drip campaigns, welcome sequences, and follow-up emails that run on autopilot.",
      name: "Vikram",
      stars: 5,
      testimonial:
        "Automated email sequences generated 30% more leads without any manual intervention.",
    },
  ];

  const inventorySliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/Home page-business opportunity-1.png",
      title: "Real-time Inventory Tracking",
      subtitle:
        "Monitor your stock levels in real-time across multiple locations and get alerts for low inventory.",
      name: "Sunita",
      stars: 5,
      testimonial:
        "Never ran out of stock again thanks to Cleomitra's real-time inventory alerts and forecasting.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "Inventory Analytics & Reports",
      subtitle:
        "Generate detailed reports on inventory turnover, best-selling products, and optimize your stock management.",
      name: "Deepak",
      stars: 4,
      testimonial:
        "Inventory analytics helped us identify slow-moving items and optimize our purchasing decisions.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "Multi-location Inventory Management",
      subtitle:
        "Manage inventory across multiple warehouses, stores, and locations from a single dashboard.",
      name: "Anjali",
      stars: 5,
      testimonial:
        "Managing inventory across 5 locations became effortless with Cleomitra's centralized system.",
    },
  ];

  const socialMediaSliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/Home page-business opportunity-1.png",
      title: "Multi-Platform Social Media Management",
      subtitle:
        "Schedule posts, manage multiple social media accounts, and engage with your audience across all platforms.",
      name: "Ravi",
      stars: 5,
      testimonial:
        "Managing our social media presence across platforms became seamless with Cleomitra's unified dashboard.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "Social Media Analytics & Insights",
      subtitle:
        "Track engagement, follower growth, and performance metrics with detailed social media analytics.",
      name: "Pooja",
      stars: 4,
      testimonial:
        "Social media analytics from Cleomitra helped us understand our audience better and improve engagement by 70%.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "Content Calendar & Scheduling",
      subtitle:
        "Plan your social media content in advance with our intuitive content calendar and automated scheduling.",
      name: "Karthik",
      stars: 5,
      testimonial:
        "Content scheduling feature saved us 10 hours per week while maintaining consistent social media presence.",
    },
  ];

  return (
    <div className="bg-background relative">
      {/* <HeroSection /> */}
      <HeroLg />
      <FeaturesSection
        imageAlt="Features Overview"
        imageSrc="/Homepage/Homepage hero sec.png"
      />
      <ProductShowcase
        backgroundColor="bg-green"
        sliderData={whatsappSliderData}
        gradientButtonText="Make every message a business opportunity with Cleomitra"
      />
      <ProductShowcase
        backgroundColor="bg-orange"
        sliderData={emailSliderData}
        reverse={true}
        gradientButtonText="Send Broadcast Emails that actually get customers with Cleomitra"
      />{" "}
      <ProductShowcase
        backgroundColor="bg-blue"
        sliderData={inventorySliderData}
        gradientButtonText="Effectively oversee your inventory and analyse using Cleomitra"
      />{" "}
      <ProductShowcase
        backgroundColor="bg-maroon"
        sliderData={socialMediaSliderData}
        reverse={true}
        gradientButtonText="Communicate effectively with your customers using Cleomitra"
      />
      <StatisticsSection />
    </div>
  );
};

export default HomePage;
