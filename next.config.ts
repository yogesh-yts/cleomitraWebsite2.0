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
    
    // Optional SMTP Auth (for non-relay setups)
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
  },
};

export default nextConfig;
