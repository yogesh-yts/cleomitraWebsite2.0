import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95, 100], // Add all the quality values you are using
  },
  env: {
    // MongoDB Configuration
    MONGODB_URI: process.env.MONGODB_URI,

    // Amazon SES Configuration
    SES_REGION: process.env.SES_REGION,

    // Email Configuration
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,

    // NextAuth Configuration
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
