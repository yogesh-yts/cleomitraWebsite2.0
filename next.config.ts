import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95, 100], // Add all the quality values you are using
  },
  async redirects() {
    return [
      // Legacy feature pages to new product pages
      {
        source: "/features/manage-your-clients",
        destination: "/products/customer-management",
        permanent: true,
      },
      {
        source: "/features/manage-your-business",
        destination: "/products/dashboard",
        permanent: true,
      },
      {
        source: "/features/market-your-business",
        destination: "/products/marketing-messaging",
        permanent: true,
      },
      // Legacy salon software page to new solution page
      {
        source: "/salon-software",
        destination: "/solutions/salon-spa",
        permanent: true,
      },
      // Legacy contact page
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  env: {
    // MongoDB Configuration
    MONGODB_URI: process.env.MONGODB_URI,

    // Email Service Configuration
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,

    // SMTP Configuration
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_TLS: process.env.SMTP_TLS,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,

    // NextAuth Configuration
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
