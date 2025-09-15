import SolutionPageTemplate from "../../../components/sections/SolutionPageTemplate";
import Seo from "../../../components/Seo";

export default function ServiceProvidersPage() {
  const heroImages = [
    "/Solutions-teams/For Service Providers/sp1.svg",
    "/Solutions-teams/For Service Providers/sp2.svg",
    "/Solutions-teams/For Service Providers/sp3.png",
  ];

  return (
    <>
      <Seo
        title="CRM for Service Providers & Client Management - Cleomitra"
        description="Complete CRM solution for service providers. Client management, appointment scheduling, service tracking, billing. Best service provider CRM in India."
        keywords="crm for service providers, service business management, client management software, service provider crm, professional services crm, service business software"
        url="https://www.cleomitra.com/solutions/service-providers"
        siteName="Cleomitra"
      />
      <SolutionPageTemplate
        heroTitle="Service made simple — without losing connection."
        heroSubtitle="Deliver exceptional service experiences while maintaining personal connections with your clients through streamlined management tools."
        heroImages={heroImages}
        heroBackgroundImage="/Solutions-teams/bg/1 (4).png"
      />
    </>
  );
}
