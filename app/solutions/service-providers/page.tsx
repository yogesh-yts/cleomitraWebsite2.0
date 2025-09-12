import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function ServiceProvidersPage() {
  const heroImages = [
    "/Solutions-teams/For Service Providers/for service providers-hero section-1.png",
    "/Solutions-teams/For Service Providers/for service providers-hero section02.png", 
    "/Solutions-teams/For Service Providers/for service providers-hero section-3.png"
  ];

  return (
    <SolutionPageTemplate
      heroTitle="Service made simple — without losing connection."
      heroSubtitle="Deliver exceptional service experiences while maintaining personal connections with your clients through streamlined management tools."
      heroImages={heroImages}
      heroBackgroundImage="/Solutions-teams/bg/1 (4).png"
    />
  );
}