import { useLocation } from "@tanstack/react-router";
import { Building2, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "PROJECTS",
    href: "/projects",
    dropdown: [
      { label: "Completed", href: "/projects?filter=completed" },
      { label: "Ongoing", href: "/projects?filter=upcoming" },
      { label: "Proposed", href: "/projects?filter=proposed" },
    ],
  },
  { label: "TESTIMONIALS", href: "/testimonials" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Rajprabha Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 bg-navy rounded-sm flex items-center justify-center">
              <Building2 className="w-5 h-5 text-gold" />
            </div>
            <div>
              <span className="font-heading font-bold text-navy text-base leading-none block tracking-wide">
                RAJPRABHA
              </span>
              <span className="font-heading font-semibold text-gold text-xs tracking-widest block">
                ASSOCIATES
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 font-heading font-semibold text-xs tracking-widest transition-colors ${
                      currentPath === link.href
                        ? "text-navy"
                        : "text-gray-600 hover:text-navy"
                    }`}
                    data-ocid="nav.projects.toggle"
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded shadow-card z-50"
                      >
                        <a
                          href="/projects"
                          className="block px-4 py-2.5 font-body text-sm text-gray-700 hover:bg-gray-50 hover:text-navy"
                          data-ocid="nav.projects.all.link"
                        >
                          All Projects
                        </a>
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2.5 font-body text-sm text-gray-700 hover:bg-gray-50 hover:text-navy"
                            data-ocid={`nav.projects.${sub.label.toLowerCase()}.link`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-heading font-semibold text-xs tracking-widest transition-colors ${
                    currentPath === link.href
                      ? "text-navy border-b-2 border-gold pb-0.5"
                      : "text-gray-600 hover:text-navy"
                  }`}
                  data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          {/* Right: Sainath Foundations logo */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <img
                src="/assets/generated/sainath-foundations-logo-transparent.dim_200x80.png"
                alt="Sainath Foundations"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.mobile_menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {/* Sister concern logo in mobile menu */}
              <div className="flex items-center gap-2 pb-3 mb-1 border-b border-gray-100">
                <img
                  src="/assets/generated/sainath-foundations-logo-transparent.dim_200x80.png"
                  alt="Sainath Foundations"
                  className="h-8 w-auto object-contain"
                />
              </div>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className="block py-2.5 font-heading font-semibold text-xs tracking-widest text-gray-700 hover:text-navy"
                      onClick={() => setMobileOpen(false)}
                      data-ocid="nav.projects.mobile.link"
                    >
                      {link.label}
                    </a>
                    {link.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block pl-4 py-2 font-body text-sm text-gray-600 hover:text-navy"
                        onClick={() => setMobileOpen(false)}
                        data-ocid={`nav.projects.${sub.label.toLowerCase()}.mobile.link`}
                      >
                        — {sub.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-2.5 font-heading font-semibold text-xs tracking-widest text-gray-700 hover:text-navy"
                    onClick={() => setMobileOpen(false)}
                    data-ocid={`nav.${link.label.toLowerCase().replace(/ /g, "_")}.mobile.link`}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
