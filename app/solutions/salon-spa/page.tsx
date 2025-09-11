import SolutionPageTemplate from "../../../components/sections/SolutionPageTemplate";

export default function SalonSpaPage() {
  const heroImage =
    "/Solutions-teams/for salon & Spa owners/For salon & Spa Owners- hero section.png";

  const contentSections = [
    {
      image:
        "/Solutions-teams/for salon & Spa owners/Keep your calendar and client in sync.png",
      title: "Keep your calendar and clients in sync.",
      description:
        "Manage appointments, staff schedules, and client preferences seamlessly. Never double-book again with our intelligent scheduling system that keeps everything perfectly coordinated."
    },
    {
      image:
        "/Solutions-teams/for salon & Spa owners/reach clients where they are.png",
      title: "Reach clients where they are.",
      description:
        "Connect with your clients through their preferred communication channels. Send appointment reminders, promotional offers, and follow-ups via SMS, email, or social media."
    },
    {
      image:
        "/Solutions-teams/for salon & Spa owners/Run your business not your stockroom.png",
      title: "Run your business, not your stockroom.",
      description:
        "Focus on providing exceptional beauty services while our platform manages inventory, tracks supplies, and automates reordering. Spend more time with clients, less time on admin."
    },
    {
      image:
        "/Solutions-teams/for salon & Spa owners/For salon & Spa Owners- grow together with insights.png",
      title: "Grow together with insights.",
      description:
        "Access comprehensive business analytics to understand peak hours, popular services, client retention rates, and revenue trends that help you make informed decisions for growth."
    }
  ];

  return (
    <SolutionPageTemplate
      heroTitle="Ownership made effortless — without sacrificing control."
      heroSubtitle="Take complete control of your salon or spa operations with comprehensive management tools designed specifically for beauty and wellness businesses."
      heroImage={heroImage}
      heroBackgroundImage="/Solutions-teams/bg/1 (3).png"
      contentSections={contentSections}
    />
  );
}
