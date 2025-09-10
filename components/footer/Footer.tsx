"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonWithArrow from "../ui/ButtonWithArrow";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";
import "material-symbols/outlined.css";
import {
  navigationData,
  solutionsTeams,
  resourcesData,
  companyData,
} from "../../data/nav";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-responsive pt-40 pb-6">
        {/* CTA Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight px-4">
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

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
            <StartFreeTrialButton className="bg-background text-black hover:bg-gray-100 hover:text-black px-6 sm:px-8 py-3 w-full sm:w-auto text-center" />
            <GetDemoButton className="text-background bg-black border border-gray-600 hover:bg-white hover:text-black hover:bg-opacity-10 px-6 sm:px-8 py-3 w-full sm:w-auto text-center" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Menu Sections Group */}
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-20 flex-1">
            {/* Products */}
            <div className="flex-auto min-w-[200px]">
              <h4 className="font-semibold mb-4 text-white">
                {navigationData[0].title}
              </h4>
              <div className="flex flex-row gap-4 sm:gap-8 lg:gap-10">
                {/* Features column */}
                <div className="flex-1">
                  <div className="text-sm text-white/40 mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {navigationData[0].subtitle}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {navigationData[0].items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-white transition-colors whitespace-nowrap"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engage with clients column */}
                <div className="flex-1">
                  <div className="text-sm text-white/40 mb-3 cursor-default whitespace-nowrap overflow-hidden text-ellipsis">
                    {navigationData[1].subtitle}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {navigationData[1].items.map((item, index) => (
                      <li key={index}>
                        <span className="cursor-default whitespace-nowrap">
                          {item.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="flex-auto min-w-[160px]">
              <h4 className="font-semibold mb-4 text-white">
                {navigationData[1].title}
              </h4>
              <div className="text-sm text-white/40 mb-3 whitespace-nowrap">
                {solutionsTeams.title}
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                {solutionsTeams.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex-col min-w-[160px]  max-w-[200px]">
              <h4 className="font-semibold mb-4 text-white">
                {resourcesData.title}
              </h4>
              {resourcesData.subtitle && (
                <div className="text-sm text-white/40 mb-3 whitespace-nowrap">
                  {resourcesData.subtitle}
                </div>
              )}
              <ul className="space-y-2 text-sm text-gray-400">
                {resourcesData.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex-auto min-w-[160px]">
              <h4 className="font-semibold mb-4 text-white">
                {companyData.title}
              </h4>
              {companyData.subtitle && (
                <div className="text-sm text-white/40 mb-3 whitespace-nowrap">
                  {companyData.subtitle}
                </div>
              )}
              <ul className="space-y-2 text-sm text-gray-400">
                {companyData.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Have Questions Section */}
          <div className="flex-1 min-w-[280px] max-w-[350px] w-full lg:w-auto ">
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
              className="w-full inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium justify-center"
            >
              <span>Email Us Today</span>
              <span className="bg-black/20 rounded-full p-1.5 inline-flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Profile Image - positioned at bottom right */}
        <div className="flex justify-end mb-8 -mt-24 md:-mt-28">
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
        <div className="pt-6  flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-1 text-center md:text-left">
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

          <div className="flex flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-center gap-4">
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
