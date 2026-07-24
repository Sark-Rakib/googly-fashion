import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MapPinned,
  Play,
  Apple,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

const linkClass =
  "text-gray-400 hover:text-white transition-all duration-300 text-sm leading-relaxed";
const headingClass = "text-white font-semibold text-sm tracking-wide mb-5";

const Footer = () => {
  const { t } = useTranslation();

  const topColumns = [
    {
      title: t("footer.getToKnowUs"),
      links: [
        { label: t("footer.aboutGooglyFashion"), to: "/about" },
        { label: t("footer.ourStory"), to: "/our-story" },
        { label: t("footer.careers"), to: "/careers" },
        { label: t("footer.pressReleases"), to: "/press-releases" },
        { label: t("footer.investorRelations"), to: "/investor-relations" },
        { label: t("footer.sustainability"), to: "/sustainability" },
      ],
    },
    {
      title: t("footer.makeMoneyWithUs"),
      links: [
        { label: t("footer.sellOnPlatform"), to: "/sell-on-googly" },
        { label: t("footer.becomeSupplier"), to: "/become-supplier" },
        { label: t("footer.wholesaleProgram"), to: "/wholesale-program" },
        { label: t("footer.affiliateProgram"), to: "/affiliate-program" },
        { label: t("footer.brandRegistry"), to: "/brand-registry" },
        { label: t("footer.fulfillmentServices"), to: "/fulfillment-services" },
      ],
    },
    {
      title: t("footer.customerService"),
      links: [
        { label: t("footer.contactUs"), to: "/contact" },
        { label: t("footer.helpCenter"), to: "/help-center" },
        { label: t("footer.shippingInformation"), to: "/shipping-information" },
        { label: t("footer.returnRefundPolicy"), to: "/return-refund-policy" },
        { label: t("footer.orderTracking"), to: "/order-tracking" },
        { label: t("footer.faqs"), to: "/faqs" },
      ],
    },
    {
      title: t("footer.paymentAndOffers"),
      links: [
        { label: t("footer.paymentServices"), to: "/payment-services" },
        { label: t("footer.giftCards"), to: "/gift-cards" },
        { label: t("footer.installmentPayment"), to: "/installment-payment" },
        { label: t("footer.offersDiscounts"), to: "/offers-discounts" },
        { label: t("footer.rewardsProgram"), to: "/rewards-program" },
      ],
    },
    {
      title: t("footer.policies"),
      links: [
        { label: t("footer.termsConditions"), to: "/terms-conditions" },
        { label: t("footer.privacyPolicy"), to: "/privacy-policy" },
        { label: t("footer.cookiePolicy"), to: "/cookie-policy" },
        { label: t("footer.intellectualPropertyPolicy"), to: "/intellectual-property-policy" },
        { label: t("footer.antiCounterfeitPolicy"), to: "/anti-counterfeit-policy" },
        { label: t("footer.compliance"), to: "/compliance" },
      ],
    },
    {
      title: t("footer.warehouseNetwork"),
      links: [
        { label: t("footer.warehouseCumilla"), to: "/warehouses/cumilla", icon: MapPin },
        { label: t("footer.warehouseDhaka"), to: "/warehouses/dhaka", icon: MapPin },
        { label: t("footer.warehouseChittagong"), to: "/warehouses/chittagong", icon: MapPin },
        { label: t("footer.warehouseRajshahi"), to: "/warehouses/rajshahi", icon: MapPin },
        { label: t("footer.warehouseKhulna"), to: "/warehouses/khulna", icon: MapPin },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
      name: "Instagram",
      href: "#",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    },
    {
      name: "YouTube",
      href: "#",
      path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
      name: "LinkedIn",
      href: "#",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "TikTok",
      href: "#",
      path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    },
  ];

  const paymentBadges = [
    { name: "Visa", class: "bg-[#1A1F71] text-white", text: "VISA" },
    {
      name: "Mastercard",
      class: "bg-gradient-to-r from-[#FF5F00] to-[#F79E1B] text-white",
      text: "MC",
    },
    { name: "Amex", class: "bg-[#2E77BC] text-white", text: "AMEX" },
    { name: "bKash", class: "bg-[#E2136E] text-white", text: "bKash" },
    { name: "Nagad", class: "bg-[#F48221] text-white", text: "Nagad" },
    { name: "SSL", class: "bg-[#28A745] text-white", text: "SSL" },
  ];

  const bottomPolicyLinks = [
    { label: t("footer.termsConditions"), to: "/terms-conditions" },
    { label: t("footer.privacyPolicy"), to: "/privacy-policy" },
    { label: t("footer.cookiePolicy"), to: "/cookie-policy" },
    { label: t("footer.returnPolicy"), to: "/return-refund-policy" },
    { label: t("footer.shippingPolicy"), to: "/shipping-information" },
    { label: t("footer.sitemap"), to: "/sitemap" },
  ];

  return (
    <footer>
      <div className="bg-linear-to-b from-[#091F32] via-[#102B45] to-[#1F3A63]">
        <div className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
            {topColumns.map((col) => (
              <div key={col.title}>
                <h3 className={headingClass}>{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className={`${linkClass} flex items-center gap-2`}
                      >
                        {link.icon && (
                          <link.icon className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold tracking-tight text-white">
                    GOOGLY
                  </span>
                  <span className="text-2xl font-light ml-1 text-white">
                    FASHION
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("footer.companyDescription")}
                </p>
              </div>

              <div>
                <h3 className={headingClass}>{t("footer.warehouseInfo")}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPinned className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t("footer.address")}
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Cumilla+Industrial+Zone+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#EF394E] hover:text-[#d63244] transition-colors font-medium"
                  >
                    <MapPinned className="w-4 h-4" />
                    {t("footer.viewOnMap")}
                  </a>
                </div>
              </div>

              <div>
                <h3 className={headingClass}>{t("footer.customerSupport")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500">
                        {t("footer.phoneLabel")}
                      </p>
                      <a
                        href="tel:+8801700000000"
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {t("footer.phone")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500">
                        {t("footer.emailLabel")}
                      </p>
                      <a
                        href="mailto:support@googlyfashion.com"
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {t("footer.email")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500">
                        {t("footer.businessHours")}
                      </p>
                      <p className="text-sm text-gray-300">
                        {t("footer.businessHoursValue")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={headingClass}>{t("footer.followUs")}</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      title={social.name}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-white/10"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={headingClass}>{t("home.downloadOurApp")}</h3>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group">
                    <Play className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400">
                        {t("footer.getItOn")}
                      </p>
                      <p className="text-xs font-semibold text-gray-200 group-hover:text-white">
                        {t("home.googlePlay")}
                      </p>
                    </div>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 group">
                    <Apple className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <div className="text-left">
                      <p className="text-[9px] text-gray-400">
                        {t("footer.downloadOn")}
                      </p>
                      <p className="text-xs font-semibold text-gray-200 group-hover:text-white">
                        {t("home.appStore")}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {bottomPolicyLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-x-6">
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < bottomPolicyLinks.length - 1 && (
                    <span className="text-gray-600 select-none">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#040f1a]/50">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} {t("footer.copyright")}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {paymentBadges.map((badge) => (
                  <span
                    key={badge.name}
                    className={`${badge.class} text-[10px] font-bold px-3 py-1.5 rounded-md tracking-wider`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
