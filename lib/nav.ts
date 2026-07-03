export interface NavLink {
  label: string;
  hi: string;
  href: string;
  children?: { label: string; hi: string; href: string }[];
}

export const mainNav: NavLink[] = [
  { label: "Home", hi: "होम", href: "/" },
  { label: "About", hi: "हमारे बारे में", href: "/about" },
  { label: "Products", hi: "प्रोडक्ट्स", href: "/products" },
  {
    label: "Company",
    hi: "कंपनी",
    href: "/why-choose-us",
    children: [
      { label: "Why Choose Us", hi: "हमें क्यों चुनें", href: "/why-choose-us" },
      { label: "Our Process", hi: "हमारी प्रक्रिया", href: "/our-process" },
      { label: "Industries We Serve", hi: "हमारे सेवा क्षेत्र", href: "/industries" },
      { label: "Gallery", hi: "गैलरी", href: "/gallery" },
      { label: "Testimonials", hi: "ग्राहकों की राय", href: "/testimonials" },
    ],
  },
  { label: "Distributor", hi: "डिस्ट्रीब्यूटर", href: "/become-distributor" },
  { label: "Blog", hi: "ब्लॉग", href: "/blog" },
  { label: "Contact", hi: "संपर्क", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "About Us", hi: "हमारे बारे में", href: "/about" },
    { label: "Why Choose Us", hi: "हमें क्यों चुनें", href: "/why-choose-us" },
    { label: "Our Process", hi: "हमारी प्रक्रिया", href: "/our-process" },
    { label: "Industries We Serve", hi: "हमारे सेवा क्षेत्र", href: "/industries" },
    { label: "Gallery", hi: "गैलरी", href: "/gallery" },
    { label: "Testimonials", hi: "ग्राहकों की राय", href: "/testimonials" },
    { label: "Blog", hi: "ब्लॉग", href: "/blog" },
    { label: "FAQs", hi: "अक्सर पूछे सवाल", href: "/faqs" },
  ],
  company: [
    { label: "Become a Distributor", hi: "डिस्ट्रीब्यूटर बनें", href: "/become-distributor" },
    { label: "Contact Us", hi: "संपर्क करें", href: "/contact" },
    { label: "Privacy Policy", hi: "प्राइवेसी पॉलिसी", href: "/privacy-policy" },
    { label: "Terms & Conditions", hi: "नियम व शर्तें", href: "/terms-conditions" },
  ],
};
