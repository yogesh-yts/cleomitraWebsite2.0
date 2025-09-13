import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';
import Seo from '../../../components/Seo';

export default function MarketingPage() {
  const heroImage = "/Solutions-teams/For marketing/for marketing hero section.png";

  return (
    <>
      <Seo
        title="Marketing Automation & Campaign Management - Cleomitra CRM"
        description="Complete marketing automation platform. Multi-channel campaigns, email marketing, WhatsApp automation, analytics. Best marketing CRM for businesses in India."
        keywords="marketing automation crm, email marketing software, multi-channel marketing, campaign management crm, marketing analytics, automated marketing india"
        url="https://www.cleomitra.com/solutions/marketing"
        siteName="Cleomitra"
      />
      <SolutionPageTemplate
        heroTitle="Marketing made effortless — with every channel in one place"
        heroSubtitle="Streamline your marketing efforts with automated campaigns, multi-channel messaging, and performance analytics that drive real results for your business."
        heroImage={heroImage}
        heroBackgroundImage="/Solutions-teams/bg/1 (1).png"
      />
    </>
  );
}