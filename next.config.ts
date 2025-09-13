import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95, 100], // Add all the quality values you are using
  },
  env: {
    // MongoDB
    MONGODB_URI: process.env.MONGODB_URI,

    // SMTP Configuration
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_FROM: process.env.SMTP_FROM,
    SMTP_TO: process.env.SMTP_TO,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_TLS: process.env.SMTP_TLS,

    // NextAuth Configuration
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

    // Environment
    NODE_ENV: process.env.NODE_ENV,
  },
};

export default nextConfig;
