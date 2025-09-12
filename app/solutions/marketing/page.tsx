import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function MarketingPage() {
  const heroImage = "/Solutions-teams/For marketing/for marketing hero section.png";

  return (
    <SolutionPageTemplate
      heroTitle="Marketing made effortless — with every channel in one place"
      heroSubtitle="Streamline your marketing efforts with automated campaigns, multi-channel messaging, and performance analytics that drive real results for your business."
      heroImage={heroImage}
      heroBackgroundImage="/Solutions-teams/bg/1 (1).png"
    />
  );
}