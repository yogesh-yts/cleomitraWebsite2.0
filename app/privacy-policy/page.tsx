'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="container-responsive py-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Last updated: January 15, 2025
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container-responsive pb-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Cleomitra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our customer experience platform and related services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Name, email address, phone number, and business information</li>
                    <li>Account credentials and profile information</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences and settings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Usage Information</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Device information, IP address, and browser type</li>
                    <li>Usage patterns, feature utilization, and platform interactions</li>
                    <li>Log files and technical data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Business Data</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Customer information you input into our system</li>
                    <li>Appointment and booking data</li>
                    <li>Communications and messages sent through our platform</li>
                    <li>Inventory and business analytics data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process payments and manage your account</li>
                <li>Send important notifications and updates</li>
                <li>Provide customer support and technical assistance</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale</li>
                <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, regular security audits, and access controls. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your personal data at any time, subject to certain legal requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings, though this may affect platform functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Email:</strong> privacy@cleomitra.com</li>
                  <li><strong>Website:</strong> <a href="http://cleomitra.com" className="text-primary hover:underline">http://cleomitra.com</a></li>
                  <li><strong>Address:</strong> [Your Business Address]</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}