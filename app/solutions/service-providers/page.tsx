import SolutionPageTemplate from '../../../components/sections/SolutionPageTemplate';

export default function ServiceProvidersPage() {
  const heroImages = [
    "/Solutions-teams/For Service Providers/for service providers-hero section-1.png",
    "/Solutions-teams/For Service Providers/for service providers-hero section02.png", 
    "/Solutions-teams/For Service Providers/for service providers-hero section-3.png"
  ];

  const contentSections = [
    {
      image: "/Solutions-teams/For Service Providers/Keep your calendar and client in sync.png",
      title: "Keep your calendar and clients in sync.",
      description: "Streamline your service delivery with unified scheduling and client management. Keep track of appointments, service history, and client preferences all in one place."
    },
    {
      image: "/Solutions-teams/For Service Providers/reach clients where they are.png",
      title: "Reach clients where they are.",
      description: "Meet your clients on their preferred platforms. Whether through mobile apps, web portals, or direct communication, ensure seamless service delivery wherever they are."
    },
    {
      image: "/Solutions-teams/For Service Providers/Run your business not your stockroom.png",
      title: "Run your business, not your stockroom.",
      description: "Focus on delivering exceptional service while our platform handles the backend operations. Automate workflows, manage resources, and optimize your service delivery."
    },
    {
      image: "/Solutions-teams/For Service Providers/For salon & Spa Owners- grow together with insights.png",
      title: "Grow together with insights.",
      description: "Make informed decisions with comprehensive analytics on service performance, client satisfaction, and business growth opportunities that drive your success forward."
    }
  ];


  return (
    <SolutionPageTemplate
      heroTitle="Service made simple — without losing connection."
      heroSubtitle="Deliver exceptional service experiences while maintaining personal connections with your clients through streamlined management tools."
      heroImages={heroImages}
      heroBackgroundImage="/Solutions-teams/bg/1 (4).png"
      contentSections={contentSections}
    />
  );
}