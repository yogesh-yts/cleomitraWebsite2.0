"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonWithArrow from "../ui/ButtonWithArrow";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import "material-symbols/outlined.css";
import {
  navigationData,
  solutionsTeams,
  resourcesData,
  companyData,
} from "../../data/nav";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="container-responsive pt-10 pb-6">
        {/* CTA Section */}
        <section
          className="text-center py-20 md:py-30"
          aria-label="Call to action"
        >
          <div className="relative mb-8">
            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight"
              id="footer-cta-heading"
            >
              <span className="relative inline-block">
                <span className="relative">R</span>
                <motion.div
                  className="absolute -top-12 md:-top-16 -left-4 md:-left-16"
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <ButtonWithArrow
                    text="You"
                    className="bg-blue text-white"
                    arrowPosition="bottom-right"
                    cursorColor="text-blue"
                    aria-label="Decorative button"
                  />
                </motion.div>
              </span>
              eady to elevate your business
              <br />
              with Cleomitra and experience
              <br />
              unparalleled growth?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <StartFreeTrialButton className="bg-background text-black hover:bg-gray-100 hover:text-black px-6 sm:px-8 py-3 w-full sm:w-auto text-center" />
            <GetDemoButton className="text-background bg-black border border-gray-600 hover:bg-white hover:text-black hover:bg-opacity-10 px-6 sm:px-8 py-3 w-full sm:w-auto text-center" />
          </div>
        </section>

        {/* Footer Links - All sections in rows */}
        <div className="mb-12">
          {/* Mobile and Tablet: Two columns layout */}
          <div className="lg:hidden space-y-10">
            {/* Menu Sections */}
            <nav aria-label="Footer navigation">
              {/* All Menu Items in 2 columns */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {/* Products - Features */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {navigationData[0].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {navigationData[0].subtitle}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {navigationData[0].items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products - Engage with clients */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-transparent">
                    {navigationData[0].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {navigationData[1].subtitle}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {navigationData[1].items.map((item, index) => (
                      <li key={index}>
                        <span className="cursor-text">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {navigationData[1].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {solutionsTeams.title}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {solutionsTeams.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {resourcesData.title}
                  </h4>
                  {resourcesData.subtitle && (
                    <div className="text-sm font-normal text-white/40 mb-3">
                      {resourcesData.subtitle}
                    </div>
                  )}
                  <ul className="space-y-2 text-base text-gray-400">
                    {resourcesData.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {companyData.title}
                  </h4>
                  {companyData.subtitle && (
                    <div className="text-sm font-normal text-white/40 mb-3">
                      {companyData.subtitle}
                    </div>
                  )}
                  <ul className="space-y-2 text-base text-gray-400">
                    {companyData.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty slot for better alignment if needed */}
                <div></div>
              </div>
            </nav>

            {/* Have Questions Section - Separate on mobile/tablet */}
            <div className="max-w-md">
              <h4 className="text-lg font-bold mb-4 text-white">
                Have Questions? We&apos;re Here to Help!
              </h4>
              <p className="text-base font-normal text-gray-400 mb-6">
                Our team is ready to assist you with any inquiries. Reach out to
                us, and let&apos;s discuss how Cleomitra can transform your
                salon experience.
              </p>
              <ButtonWithIcon
                text="Email Us Today"
                href="mailto:info@cleomitra.com"
              />
            </div>
          </div>

          {/* Large screens: All in rows */}
          <div className="hidden lg:block">
            <nav aria-label="Footer navigation">
              {/* First Row: Products (2 columns) + Solutions + Have Questions */}
              <div
                className="grid gap-8 mb-10"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr minmax(360px, 1fr)",
                }}
              >
                {/* Products - Features */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {navigationData[0].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {navigationData[0].subtitle}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {navigationData[0].items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products - Engage with clients */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-black">
                    {navigationData[0].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {navigationData[1].subtitle}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {navigationData[1].items.map((item, index) => (
                      <li key={index}>
                        <span className="cursor-text">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {navigationData[1].title}
                  </h4>
                  <div className="text-sm font-normal text-white/40 mb-3">
                    {solutionsTeams.title}
                  </div>
                  <ul className="space-y-2 text-base text-gray-400">
                    {solutionsTeams.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Have Questions Section - In the first row on lg */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white min-w-[300px]">
                    Have Questions? We&apos;re Here to Help!
                  </h4>
                  <p className="text-base font-normal text-gray-400 mb-6">
                    Our team is ready to assist you with any inquiries. Reach
                    out to us, and let&apos;s discuss how Cleomitra can
                    transform your salon experience.
                  </p>
                  <ButtonWithIcon
                    text="Email Us Today"
                    href="mailto:info@cleomitra.com"
                  />
                </div>
              </div>

              {/* Second Row: Resources + Company */}
              <div
                className="grid grid-cols-4 gap-8"
                style={{
                  gridTemplateColumns: "1fr 1fr 1fr minmax(360px, 1fr)",
                }}
              >
                {/* Resources */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {resourcesData.title}
                  </h4>
                  {resourcesData.subtitle && (
                    <div className="text-sm font-normal text-white/40 mb-3">
                      {resourcesData.subtitle}
                    </div>
                  )}
                  <ul className="space-y-2 text-base text-gray-400">
                    {resourcesData.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-white">
                    {companyData.title}
                  </h4>
                  {companyData.subtitle && (
                    <div className="text-sm font-normal text-white/40 mb-3">
                      {companyData.subtitle}
                    </div>
                  )}
                  <ul className="space-y-2 text-base text-gray-400">
                    {companyData.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Empty columns for alignment */}
                <div></div>
                <div></div>
              </div>
            </nav>
          </div>
        </div>

        {/* Profile Image - positioned at bottom right */}
        <div className="flex justify-end mb-8 -mt-27 lg:-mt-27">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Cleomitra"
              width={128}
              height={128}
              quality={100}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6  flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-center md:text-left">
            <span className="text-sm text-gray-400">© 2025</span>
            <Link
              href="http://cleomitra.com/"
              target="_blank"
              className="text-sm text-white hover:text-gray-300 transition-colors underline"
            >
              Cleomitra
            </Link>
            <span className="text-sm text-gray-400">
              . All rights reserved. Developed by
            </span>
            <Link
              href="https://www.yakriatech.com/"
              target="_blank"
              className="text-sm text-white hover:text-gray-300 transition-colors underline"
            >
              Yakria Tech
            </Link>
          </div>

          <div className="flex flex-row gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
