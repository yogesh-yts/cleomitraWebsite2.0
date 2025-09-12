import SolutionPageTemplate from "../../../components/sections/SolutionPageTemplate";
import Seo from "../../../components/Seo";

export default function SalonSpaPage() {
  const heroImage =
    "/Solutions-teams/for salon & Spa owners/For salon & Spa Owners- hero section.png";

  return (
    <>
      <Seo
        title="Best CRM for Salon & Spa Management - Cleomitra"
        description="Complete salon & spa management software. Best CRM for salon owners in India with appointment scheduling, inventory, billing & customer management."
        keywords="best crm for salon, salon management software, spa management system, salon crm india, beauty salon software, spa booking system"
        url="https://www.cleomitra.com/solutions/salon-spa"
        siteName="Cleomitra"
      />
      <SolutionPageTemplate
        heroTitle="Ownership made effortless — without sacrificing control."
        heroSubtitle="Take complete control of your salon or spa operations with comprehensive management tools designed specifically for beauty and wellness businesses."
        heroImage={heroImage}
        heroBackgroundImage="/Solutions-teams/bg/1 (3).png"
      />
    </>
  );
}
