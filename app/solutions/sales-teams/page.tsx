import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function SalesTeamsPage() {
  const heroImage = "/Solutions-teams/for sales team/for sales team-hero section.png";

  const contentSections = [
    {
      image: "/Solutions-teams/for sales team/Keep your calendar and client in sync.png",
      title: "Keep your calendar and clients in sync.",
      description: "Manage your sales pipeline with precision. Track leads, meetings, and follow-ups in one centralized system that keeps your entire sales process organized."
    },
    {
      image: "/Solutions-teams/for sales team/reach clients where they are.png",
      title: "Reach clients where they are.", 
      description: "Connect with prospects through their preferred channels. Whether it's email, phone, or social media, engage leads at the right time with the right message."
    },
    {
      image: "/Solutions-teams/for sales team/Run your business not your stockroom.png",
      title: "Run your business, not your stockroom.",
      description: "Automate routine sales tasks and focus on what matters most - building relationships and closing deals. Let our platform handle the administrative work."
    },
    {
      image: "/Solutions-teams/for sales team/For salon & Spa Owners- grow together with insights.png",
      title: "Grow together with insights.",
      description: "Leverage powerful analytics to understand your sales performance, identify trends, and make data-driven decisions that accelerate your team's growth."
    }
  ];


  return (
    <SolutionPageTemplate
      heroTitle="Selling made seamless — without the pressure"
      heroSubtitle="Empower your sales team with intuitive CRM tools, pipeline management, and performance tracking that drives consistent results."
      heroImage={heroImage}
      heroBackgroundImage="/Solutions-teams/bg/1 (2).png"
      contentSections={contentSections}
    />
  );
}