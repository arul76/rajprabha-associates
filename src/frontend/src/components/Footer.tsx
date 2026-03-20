import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold rounded-sm flex items-center justify-center">
                <Building2 className="w-5 h-5 text-navy" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-base leading-none block">
                  RAJPRABHA
                </span>
                <span className="font-heading font-semibold text-gold text-xs tracking-widest block">
                  ASSOCIATES
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-blue-200 leading-relaxed">
              Building dreams, shaping skylines. Your trusted partner for
              premium residential and commercial construction across
              Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4 text-gold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-blue-200 hover:text-gold transition-colors"
                    data-ocid={`footer.${l.label.toLowerCase().replace(/ /g, "_")}.link`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4 text-gold uppercase">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="font-body text-sm text-blue-200">
                  Office No. 204, Rajprabha Plaza,
                  <br />
                  FC Road, Pune – 411004
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+912012345678"
                  className="font-body text-sm text-blue-200 hover:text-gold"
                >
                  +91 20 1234 5678
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:info@rajprabha.in"
                  className="font-body text-sm text-blue-200 hover:text-gold"
                >
                  info@rajprabha.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-widest mb-4 text-gold uppercase">
              Follow Us
            </h4>
            <div className="flex gap-3 flex-wrap">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com",
                },
                {
                  Icon: Twitter,
                  label: "Twitter",
                  href: "https://www.twitter.com",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-blue-200 hover:border-gold hover:text-gold transition-colors"
                  data-ocid={`footer.${label.toLowerCase()}.link`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-blue-300">
            &copy; {year} Rajprabha Associates. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline"
            >
              caffeine.ai
            </a>
          </p>
          <span
            className="font-body text-xs text-blue-300"
            data-ocid="footer.privacy_policy.link"
          >
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
