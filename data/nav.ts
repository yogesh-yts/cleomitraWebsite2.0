export interface NavItem {
  title: string;
  href: string;
  isClickable?: boolean;
  description?: string;
}

export interface NavSection {
  title: string;
  subtitle?: string;
  items: NavItem[];
  isClickable?: boolean;
}

export const navigationData: NavSection[] = [
  {
    title: "Products",
    subtitle: "Features",
    items: [
      { 
        title: "Scheduling", 
        href: "/products/scheduling",
        description: "Simplify your daily bookings with a calendar that works for you and your team."
      },
      { 
        title: "Customer Management", 
        href: "/products/customer-management",
        description: "Maintain customer details organized and accessible."
      },
      { 
        title: "Marketing and Messaging", 
        href: "/products/marketing-messaging",
        description: "Send bulk messages, email campaigns, and get replies."
      },
      { 
        title: "Dashboard", 
        href: "/products/dashboard",
        description: "Analyze your sales funnel and get business insights."
      },
      { 
        title: "Integrations", 
        href: "/products/integrations",
        description: "Integrations you can connect to cleomitra in seconds."
      },
      { 
        title: "Billing", 
        href: "/products/billing",
        description: "Professional invoicing with built-in tracking and flexibility."
      },
      { 
        title: "Inventory", 
        href: "/products/inventory",
        description: "Oversee your inventory and track performance."
      },
    ],
  },
  {
    title: "Solutions",
    subtitle: "Engage with clients",
    isClickable: false,
    items: [
      { title: "WhatsApp", href: "/solutions/whatsapp", isClickable: false },
      { title: "Email", href: "/solutions/email", isClickable: false },
      { title: "Instagram", href: "/solutions/instagram", isClickable: false },
      { title: "Calls", href: "/solutions/calls", isClickable: false },
    ],
  },
];

export const solutionsTeams: NavSection = {
  title: "Teams",
  isClickable: false,
  items: [
    { title: "For Salon & Spa Owners", href: "/solutions/salon-spa" },
    { title: "For Service Providers", href: "/solutions/service-providers" },
    { title: "For Sales Teams", href: "/solutions/sales-teams" },
    { title: "For Marketing", href: "/solutions/marketing" },
  ],
};

export const resourcesData: NavSection = {
  title: "Resources",
  subtitle: "More from us",
  items: [
    { 
      title: "Cleomitra Tutorials", 
      href: "/resources/tutorials",
      description: "Master the use of all modules in Cleomitra with our tutorials."
    },
    { 
      title: "Download Mobile App", 
      href: "/resources/mobile-app",
      description: "Download our cleomitra app for Android."
    },
  ],
};

export const companyData: NavSection = {
  title: "Company",
  subtitle: "Informations",
  items: [
    { title: "Contact", href: "/contact" },
    { title: "Get a Demo", href: "/contact" },
    // { title: "Pricing", href: "/pricing" }, // Temporarily hidden
  ],
};

export const footerSections = [
  navigationData[0], // Products
  {
    ...navigationData[1], // Solutions
    additionalSection: solutionsTeams,
  },
  resourcesData,
  companyData,
];

// Navbar specific data
export const navbarSections = [
  navigationData[0], // Products
  {
    title: "Solutions",
    subtitle: "Teams", 
    items: solutionsTeams.items,
  },
  resourcesData,
];