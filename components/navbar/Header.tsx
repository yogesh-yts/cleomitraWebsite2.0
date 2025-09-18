"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navigationData, navbarSections, solutionsTeams } from "../../data/nav";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import "material-symbols/outlined.css";

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [submenuStyle, setSubmenuStyle] = useState<React.CSSProperties>({});
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to get Material Symbol icon for menu items
  const getMenuIcon = (title: string): string => {
    const iconMap: { [key: string]: string } = {
      // Products
      Scheduling: "calendar_month",
      "Customer Management": "people",
      "Marketing and Messaging": "campaign",
      Dashboard: "dashboard",
      Integrations: "extension",
      Billing: "receipt",
      Inventory: "inventory_2",
      // Solutions - Teams
      "For Salon & Spa Owners": "spa",
      "For Service Providers": "business_center",
      "For Sales Teams": "trending_up",
      "For Marketing": "ads_click",
      // Resources
      "Cleomitra Tutorials": "school",
      "Download Mobile App": "smartphone",
      // Other
      Pricing: "payments",
    };
    return iconMap[title] || "circle";
  };

  // Check if current path matches section
  const isActiveSection = (sectionTitle: string) => {
    if (sectionTitle === "Products" && pathname.startsWith("/products"))
      return true;
    if (sectionTitle === "Solutions" && pathname.startsWith("/solutions"))
      return true;
    if (sectionTitle === "Resources" && pathname.startsWith("/resources"))
      return true;
    if (sectionTitle === "Pricing" && pathname === "/pricing") return true;
    return false;
  };

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
    setHoveredItem(itemTitle);
    updateSubmenuPosition();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 300);
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
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

          <nav
            className="hidden lg:flex items-center space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {navbarSections.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className={`flex items-center space-x-1 relative px-3 py-2 rounded-t-lg transition-colors ${
                    isActiveSection(item.title)
                      ? "text-main"
                      : "text-gray-600 hover:text-foreground"
                  }`}
                  aria-expanded={activeDropdown === item.title}
                  aria-haspopup="true"
                  aria-label={`${item.title} menu`}
                >
                  {/* Morphing Top Shape */}
                  {(hoveredItem === item.title ||
                    isActiveSection(item.title)) && (
                    <motion.div
                      className="absolute -top-0.5 left-0 right-0 h-0.5 bg-main rounded-t-lg"
                      layoutId="navbar-indicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span>{item.title}</span>
                  <motion.div
                    animate={{
                      rotate: activeDropdown === item.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </motion.div>
                </motion.button>
              </div>
            ))}

            <div
              className="relative hidden"
              onMouseEnter={() => setHoveredItem("Pricing")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href="/pricing"
                className={`relative px-3 py-2 rounded-t-lg transition-colors ${
                  isActiveSection("Pricing")
                    ? "text-main"
                    : "text-gray-600 hover:text-foreground"
                }`}
              >
                {/* Morphing Top Shape for Pricing */}
                {(hoveredItem === "Pricing" || isActiveSection("Pricing")) && (
                  <motion.div
                    className="absolute -top-0.5 left-0 right-0 h-0.5 bg-main rounded-t-lg"
                    layoutId="navbar-indicator"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                Pricing
              </Link>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:block ">
            <Link
              href="/contact"
              className="relative flex items-center justify-center text-gray-600 hover:text-foreground py-2 mr-4 group transition-colors w-[100px] h-[40px] overflow-hidden"
            >
              <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-300 ease-in-out whitespace-nowrap text-sm">
                Get a Demo
              </span>
              <span className="absolute inset-0 opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl text-gray-600 block leading-none">
                    play_circle
                  </span>
                </div>
              </span>
            </Link>
          </div>
          <Link
            href="https://www.cleomitra.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block text-gray-600 hover:text-foreground transition-colors"
            aria-label="Login (opens in new tab)"
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
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

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
                          onClick={() => setActiveDropdown(null)}
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
                    <div className="text-sm text-gray-500 pb-1 mb-1 cursor-text">
                      {navigationData[1].subtitle}
                    </div>
                    <div className="space-y-0">
                      {navigationData[1].items.map((clientItem, index) => (
                        <div
                          key={index}
                          className="block p-3 text-gray-600 cursor-text"
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
                        onClick={() => setActiveDropdown(null)}
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
                          onClick={() => setActiveDropdown(null)}
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
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div
            className="container-responsive pt-4 flex flex-col"
            style={{ minHeight: "var(--height-mobile-menu)" }}
          >
            {/* Mobile Navigation Links */}
            <div className="space-y-4 pb-10">
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
                          className="flex items-center space-x-3 text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            aria-hidden="true"
                          >
                            {getMenuIcon(item.title)}
                          </span>
                          <span>{item.title}</span>
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
                          className="flex items-center space-x-3 text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            aria-hidden="true"
                          >
                            {getMenuIcon(item.title)}
                          </span>
                          <span>{item.title}</span>
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
                          className="flex items-center space-x-3 text-gray-600 hover:text-foreground py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            aria-hidden="true"
                          >
                            {getMenuIcon(item.title)}
                          </span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* <Link
                href="/pricing"
                className="flex items-center space-x-3 font-medium text-foreground text-lg py-2 mb-6 "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  aria-hidden="true"
                >
                  {getMenuIcon("Pricing")}
                </span>
                <span>Pricing</span>
              </Link> */}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 pb-4 lg:pb-0 border-t border-gray-200 flex flex-row mt-auto">
              <Link
                href="/contact"
                className="flex items-center space-x-2 w-full text-left text-gray-600 hover:text-foreground py-2 flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span
                  className="material-symbols-outlined text-lg"
                  aria-hidden="true"
                >
                  play_circle
                </span>
                <span>Get a Demo</span>
              </Link>
              <Link
                href="https://www.cleomitra.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 w-full text-left text-gray-600 hover:text-foreground py-2 flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Login (opens in new tab)"
              >
                <span
                  className="material-symbols-outlined text-lg"
                  aria-hidden="true"
                >
                  login
                </span>
                <span>Login</span>
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
