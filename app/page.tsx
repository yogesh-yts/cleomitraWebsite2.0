"use client";

// import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductShowcase, {
  SliderData,
} from "@/components/sections/ProductShowcase";
import StatisticsSection from "@/components/sections/StatisticsSection";
import HeroLg from "@/components/sections/HeroLg";
import Seo from "@/components/Seo";

const HomePage = () => {
  const whatsappSliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/homepage-conversation-1.png",
      title: "All messages in a single location.",
      subtitle:
        "Access all your chats from WhatsApp, Instagram, and your contacts seamlessly on a single screen, using any account you prefer.",
      name: "Swathy",
      stars: 5,
      testimonial:
        "Increased customer engagement by utilizing targeted email templates recommended by Cleomitra.",
    },
    {
      id: 2,
      image: "/Homepage/homepage-conversation-2.png",
      title: "Automation and quick replies",
      subtitle:
        "Implement automations designed to enhance client experiences based on specific trigger conditions, allowing you to focus on other priorities without worrying about customer interactions.",
      name: "Arjun",
      stars: 5,
      testimonial:
        "The Cleomitra email template helps you snag more customers effortlessly—just pick it and send it out, and watch the results roll in!",
    },

    {
      id: 3,
      image: "/Homepage/homepage-conversation-3.png",
      title: "Whatsapp Templates",
      subtitle:
        "Whatsapp templates for your business, Approved templates that covers marketing, utility and verifications.",
      name: "Meera",
      stars: 4,
      testimonial:
        "I can totally tweak the email template to match our brand colors and throw in some personalized images that really grab customers' attention!",
    },
  ];

  const emailSliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/home page-email marketing-1.png",
      title: "Write & personalize emails",
      subtitle:
        "Choose from high-open-rate email templates or  write your initial draft. Add personalized touches at scale, such as automatically including custom picture in your email.",
      name: "Rahul",
      stars: 5,
      testimonial:
        "Increased customer engagement by utilizing targeted email templates recommended by Cleomitra.",
    },
    {
      id: 2,
      image: "/Homepage/home page-email marketing -2.png",
      title: "Templates that get results",
      subtitle:
        "Select beautiful, targeted emails that get results. Stay connected with your audience through promotions, newsletters, and smart follow-ups.",
      name: "Kavita",
      stars: 4,
      testimonial:
        "The Cleomitra email template helps you snag more customers effortlessly—just pick it and send it out, and watch the results roll in!",
    },
    {
      id: 3,
      image: "/Homepage/home page-email marketing -3.png",
      title: "Customizable Email Templates",
      subtitle:
        "Choose a template and tailor it to your specifications, incorporating your desired content, styling, and images. Deliver it to your customers in the format you prefer.",
      name: "Vikram",
      stars: 5,
      testimonial:
        "I can totally tweak the email template to match our brand colors and throw in some personalized images that really grab customers' attention!",
    },
  ];

  const inventorySliderData: SliderData[] = [
    {
      id: 1,
      image: "/Homepage/homepage-inventory-1.png",
      title: "Track every product with ease",
      subtitle:
        "Stay updated on stock levels in real time. Know exactly what’s selling, what’s running low, and what needs restocking — without manual checks.",
      name: "Sunita",
      stars: 5,
      testimonial:
        "Increased customer engagement by utilizing targeted email templates recommended by Cleomitra.",
    },
    {
      id: 2,
      image: "/Homepage/homepage-inventory-2.png",
      title: "Smarter stock management",
      subtitle:
        "Set low-stock alerts, manage suppliers, and track product usage against services. Save time and avoid running out of essentials.",
      name: "Deepak",
      stars: 4,
      testimonial:
        "The Cleomitra email template helps you snag more customers effortlessly—just pick it and send it out, and watch the results roll in!s",
    },
    {
      id: 3,
      image: "/Homepage/homepage-inventory-3.png",
      title: "Insights that boost profits",
      subtitle:
        "Get detailed reports on product sales and usage trends. Optimize purchasing decisions and reduce waste to maximize your revenue.",
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
      title: "Send Messages to Clients",
      subtitle:
        "Communicate effectively with customers by assigning team members to handle specific messages. Ensure that conversations remain organized and that all customer needs are met.",
      name: "Ravi",
      stars: 5,
      testimonial:
        "Cleomitra's team assignment feature helped us organize customer conversations and respond 50% faster.",
    },
    {
      id: 2,
      image: "/Homepage/Home page-business opportunity-2.png",
      title: "Access all your client information",
      subtitle:
        "Access all your clients' information on a single screen, enabling you to assist their needs seamlessly and efficiently.",
      name: "Pooja",
      stars: 4,
      testimonial:
        "Having all client information in one place helped us personalize every interaction and boost satisfaction rates.",
    },
    {
      id: 3,
      image: "/Homepage/Home page-business opportunity-3.png",
      title: "In-App messages",
      subtitle:
        "Engage with your customers directly through in-app chat. Ensure seamless communication by delivering instant responses and support.",
      name: "Karthik",
      stars: 5,
      testimonial:
        "In-app messaging transformed our customer support with instant responses and seamless real-time communication.",
    },
  ];

  return (
    <>
      <Seo
        title="Cleomitra - Best CRM Software in India"
        description="Best CRM in India for salon management, spa, and service providers. All-in-one CRM with WhatsApp integration, inventory management, billing, email marketing & scheduling."
        keywords="best crm in india, top crm solutions, affordable crm, best crm for salon, salon management crm, crm with whatsapp integration, crm with inventory management, crm for franchise management"
        url="https://www.cleomitra.com"
        siteName="Cleomitra"
      />
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
    </>
  );
};

export default HomePage;
