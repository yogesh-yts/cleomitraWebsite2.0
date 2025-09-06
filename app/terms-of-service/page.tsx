'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
            Terms of Service
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Cleomitra's customer experience platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cleomitra provides a comprehensive customer experience platform that includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Customer relationship management tools</li>
                <li>Appointment scheduling and calendar management</li>
                <li>Multi-channel communication capabilities</li>
                <li>Inventory management and tracking</li>
                <li>Marketing and messaging automation</li>
                <li>Business analytics and reporting</li>
                <li>Payment processing and billing features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Account Registration and Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To use our Service, you must create an account and provide accurate information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations in your use of the Service</li>
                <li>Transmit spam, malware, or any harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Subscription and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Subscription Plans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our Service is offered through various subscription plans. Pricing, features, and billing cycles are detailed on our website and may be updated from time to time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Payment Terms</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Subscriptions are billed in advance on a recurring basis</li>
                    <li>All fees are non-refundable except as expressly stated</li>
                    <li>You authorize us to charge your payment method automatically</li>
                    <li>Failed payments may result in service suspension</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Free Trial</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may offer free trial periods. At the end of the trial, you will be charged unless you cancel before the trial expires.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data and Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your privacy is important to us. Our data practices are governed by our Privacy Policy. By using the Service, you agree that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You own all data you input into the Service</li>
                <li>We may access your data to provide support and improve the Service</li>
                <li>You are responsible for backing up your important data</li>
                <li>We will implement reasonable security measures to protect your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Cleomitra and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You may not copy, modify, or distribute our content without permission</li>
                <li>You retain rights to your data and content uploaded to the Service</li>
                <li>You grant us a license to use your content to provide the Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                We strive to maintain high availability of our Service, but we cannot guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Termination by You</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may terminate your account at any time by contacting us or using the account deletion feature in your dashboard.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Termination by Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may suspend or terminate your account if you violate these Terms, fail to pay fees, or engage in prohibited activities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Effect of Termination</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upon termination, your right to use the Service ceases immediately. We may delete your account and data after a reasonable notice period.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers and Limitations</h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 font-semibold mb-2">IMPORTANT LEGAL NOTICE:</p>
                <p className="text-gray-600 leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Cleomitra shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless Cleomitra, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these Terms or your use of the Service will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Service. Your continued use after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Email:</strong> legal@cleomitra.com</li>
                  <li><strong>Website:</strong> <a href="http://cleomitra.com" className="text-primary hover:underline">http://cleomitra.com</a></li>
                  <li><strong>Address:</strong> [Your Business Address]</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-gray-500 text-sm leading-relaxed">
                These Terms of Service constitute the entire agreement between you and Cleomitra regarding the use of the Service and supersede all prior agreements and understandings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}