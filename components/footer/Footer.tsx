"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ButtonWithArrow from "../ui/ButtonWithArrow";
import {
  navigationData,
  solutionsTeams,
  resourcesData,
  companyData,
} from "../../data/nav";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-responsive pt-40 pb-10">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
              <span className="relative inline-block">
                <span className="relative">R</span>
                <div className="absolute -top-16 -left-19">
                  <ButtonWithArrow
                    text="You"
                    className="bg-blue text-white"
                    arrowPosition="bottom-right"
                    cursorColor="text-blue"
                  />
                </div>
              </span>
              eady to elevate your business
              <br />
              with Cleomitra and experience
              <br />
              unparalleled growth?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-background text-foreground px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
              Start Free Trial
            </button>
            <button className="text-background bg-black border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black hover:bg-opacity-10 transition-colors font-medium">
              Get a Demo
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Menu Sections Group */}
          <div className="flex flex-col md:flex-row flex-wrap gap-8 flex-1">
            {/* Products */}
            <div className="flex-1 min-w-[400px]">
              <h4 className="font-semibold mb-4 text-white">
                {navigationData[0].title}
              </h4>
              <div className="flex gap-8">
                {/* Features column */}
                <div className="flex-1">
                  <div className="text-sm text-white/40 mb-3">
                    {navigationData[0].subtitle}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
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

                {/* Engage with clients column */}
                <div className="flex-1">
                  <div className="text-sm text-white/40 mb-3 cursor-default">
                    {navigationData[1].subtitle}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {navigationData[1].items.map((item, index) => (
                      <li key={index}>
                        <span className="cursor-default">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-semibold mb-4 text-white">
                {navigationData[1].title}
              </h4>
              <div className="text-sm text-white/40 mb-3">
                {solutionsTeams.title}
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
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
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-semibold mb-4 text-white">
                {resourcesData.title}
              </h4>
              {resourcesData.subtitle && (
                <div className="text-sm text-white/40 mb-3">
                  {resourcesData.subtitle}
                </div>
              )}
              <ul className="space-y-2 text-sm text-gray-400">
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
            <div className="flex-1 min-w-[200px]">
              <h4 className="font-semibold mb-4 text-white">
                {companyData.title}
              </h4>
              {companyData.subtitle && (
                <div className="text-sm text-white/40 mb-3">
                  {companyData.subtitle}
                </div>
              )}
              <ul className="space-y-2 text-sm text-gray-400">
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
          </div>

          {/* Have Questions Section */}
          <div className="flex-1 min-w-[280px] max-w-[350px]">
            <h4 className="font-semibold mb-4 text-white">
              Have Questions? We&apos;re Here to Help!
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Our team is ready to assist you with any inquiries. Reach out to
              us, and let&apos;s discuss how Cleomitra can transform your salon
              experience.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              <span>Email Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Profile Image - positioned at bottom right */}
        <div className="flex justify-end mb-8">
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
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
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

          <div className="flex space-x-8">
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
