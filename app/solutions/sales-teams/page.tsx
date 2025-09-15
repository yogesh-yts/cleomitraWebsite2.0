import SolutionPageTemplate from "../../../components/sections/SolutionPageTemplate";
import Seo from "../../../components/Seo";

export default function SalesTeamsPage() {
  const heroImage = "/Solutions-teams/for sales team/Product selected.svg";

  return (
    <>
      <Seo
        title="CRM for Sales Teams & Lead Management - Cleomitra"
        description="Powerful CRM for sales teams. Pipeline management, lead tracking, performance analytics. Best sales CRM for teams in India with advanced features."
        keywords="crm for sales teams, sales management software, lead management crm, sales pipeline crm, sales tracking software, best sales crm india"
        url="https://www.cleomitra.com/solutions/sales-teams"
        siteName="Cleomitra"
      />
      <SolutionPageTemplate
        heroTitle="Selling made seamless — without the pressure"
        heroSubtitle="Empower your sales team with intuitive CRM tools, pipeline management, and performance tracking that drives consistent results."
        heroImage={heroImage}
        heroBackgroundImage="/Solutions-teams/bg/1 (2).png"
      />
    </>
  );
}
