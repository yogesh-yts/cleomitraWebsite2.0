import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function MarketingPage() {
  const heroImage = "/Solutions-teams/For marketing/for marketing hero section.png";

  const contentSections = [
    {
      image: "/Solutions-teams/For marketing/Keep your calendar and client in sync.png",
      title: "Keep your calendar and clients in sync.",
      description: "Centralize all your marketing campaigns and client communications in one platform. Track engagement, manage leads, and ensure no opportunity slips through the cracks."
    },
    {
      image: "/Solutions-teams/For marketing/reach clients where they are.png", 
      title: "Reach clients where they are.",
      description: "Connect with your audience across multiple channels - email, social media, SMS, and more. Deliver personalized messages that resonate with your target market."
    },
    {
      image: "/Solutions-teams/For marketing/Run your business not your stockroom.png",
      title: "Run your business, not your stockroom.",
      description: "Automate your marketing workflows and inventory management. Focus on strategy and creativity while our platform handles the operational details."
    },
    {
      image: "/Solutions-teams/For marketing/For salon & Spa Owners- grow together with insights.png",
      title: "Grow together with insights.",
      description: "Access detailed analytics and performance insights that help you optimize campaigns, understand customer behavior, and drive better ROI."
    }
  ];


  return (
    <SolutionPageTemplate
      heroTitle="Marketing made effortless — with every channel in one place"
      heroSubtitle="Streamline your marketing efforts with automated campaigns, multi-channel messaging, and performance analytics that drive real results for your business."
      heroImage={heroImage}
      heroBackgroundImage="/Solutions-teams/bg/1 (1).png"
      contentSections={contentSections}
      statistics={{
        revenue: "20%",
        bookings: "18%", 
        sales: "32%"
      }}
    />
  );
}