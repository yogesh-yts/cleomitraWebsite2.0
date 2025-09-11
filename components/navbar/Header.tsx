"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigationData, navbarSections, solutionsTeams } from "../../data/nav";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [submenuStyle, setSubmenuStyle] = useState<React.CSSProperties>({});
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateSubmenuPosition = () => {
    const headerElement = document.querySelector("header");
    if (headerElement) {
      const headerRect = headerElement.getBoundingClientRect();
      setSubmenuStyle({
        position: "fixed",
        top: headerRect.bottom,
        left: 0,
        width: "100%",
        zIndex: 50,
      });
    }
  };

  const handleMouseEnter = (itemTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemTitle);
    updateSubmenuPosition();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (activeDropdown) {
        updateSubmenuPosition();
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the very top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100 &&
        !isMobileMenuOpen
      ) {
        // Scrolling down and past 100px - hide navbar (but not if mobile menu is open)
        setIsVisible(false);
        setActiveDropdown(null); // Close any open dropdowns
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeDropdown, lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    if (activeDropdown) {
      updateSubmenuPosition();
    }
  }, [activeDropdown]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 bg-white  "
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => {
          setActiveDropdown(null);
        }, 200);
      }}
      onMouseEnter={() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }}
    >
      <header className="container-responsive py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Cleomitra"
              width={32}
              height={32}
              className="w-8 h-8"
              quality={100}
            />
            <span className="text-xl font-bold text-foreground">Cleomitra</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navbarSections.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-600 hover:text-foreground transition-colors">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            ))}

            <Link
              href="/pricing"
              className="text-gray-600 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:block ">
            <Link
              href="/contact"
              className="block w-full text-left text-gray-600 hover:text-foreground py-2 mr-4"
            >
              Get A Demo
            </Link>
          </div>
          <Link
            href="https://www.cleomitra.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block text-gray-600 hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <div className="hidden lg:block">
            <StartFreeTrialButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-foreground transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Debug indicator */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 right-4 bg-red-500 text-white p-2 rounded z-50 lg:hidden">
          Mobile menu is open
        </div>
      )}

      {/* Submenu Panel - Positioned to match navbar width */}
      {activeDropdown && (
        <motion.div
          style={submenuStyle}
          className="overflow-hidden transition-all duration-200 ease-out"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Invisible bridge to prevent gaps */}
          <div className="h-2 w-full" />
          <div className="container-responsive">
            <div
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-4"
              onMouseEnter={handleSubmenuMouseEnter}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              {activeDropdown === "Products" && (
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm text-gray-500 pb-1 mb-1">
                      {navigationData[0].subtitle}
                    </div>
                    <div className="space-y-0">
                      {navigationData[0].items.map((feature, index) => (
                        <Link
                          key={index}
                          href={feature.href}
                          className="block p-2 text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="font-medium text-foreground mb-1 whitespace-nowrap">
                            {feature.title}
                          </div>
                          {feature.description && (
                            <div className="text-sm text-gray-500">
                              {feature.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 pb-1 mb-1">
                      {navigationData[1].subtitle}
                    </div>
                    <div className="space-y-0">
                      {navigationData[1].items.map((clientItem, index) => (
                        <div
                          key={index}
                          className="block p-3 text-gray-600 cursor-default"
                        >
                          <div className="font-medium text-foreground whitespace-nowrap">
                            {clientItem.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeDropdown === "Solutions" && (
                <div>
                  <div className="text-sm text-gray-500 pb-2 mb-2">
                    {solutionsTeams.title}
                  </div>
                  <div className="grid grid-cols-1 gap-0">
                    {solutionsTeams.items.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className="block p-3 text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                      >
                        <div className="font-medium text-foreground">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <div className="text-sm text-gray-500 mt-1">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeDropdown === "Resources" && (
                <div>
                  <div className="text-sm text-gray-500 pb-2 mb-2">
                    {
                      navbarSections.find((item) => item.title === "Resources")
                        ?.subtitle
                    }
                  </div>
                  <div className="grid grid-cols-1 gap-0">
                    {navbarSections
                      .find((item) => item.title === "Resources")
                      ?.items.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="block p-2 text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors rounded-md"
                        >
                          <div className="font-medium text-foreground mb-1">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg fixed top-[64px] left-0 right-0 bottom-0 z-50 overflow-y-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-responsive pt-4 flex flex-col min-h-[calc(100vh-80px)]">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {navbarSections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <div className="font-medium text-foreground text-lg">
                    {section.title}
                  </div>
                  {section.title === "Products" && (
                    <div className="space-y-1 pl-4">
                      {navigationData[0].items.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  {section.title === "Solutions" && (
                    <div className="space-y-1 pl-4">
                      {solutionsTeams.items.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  {section.title === "Resources" && (
                    <div className="space-y-1 pl-4">
                      {section.items?.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/pricing"
                className="block font-medium text-foreground text-lg py-2 mb-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 flex flex-row mt-auto">
              <Link
                href="/contact"
                className="block w-full text-left text-gray-600 hover:text-foreground py-2 flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get A Demo
              </Link>
              <Link
                href="https://www.cleomitra.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-gray-600 hover:text-foreground py-2 flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <StartFreeTrialButton
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
