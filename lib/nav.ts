export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  {
    label: "Company",
    href: "/why-choose-us",
    children: [
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Our Process", href: "/our-process" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Gallery", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { label: "Distributor", href: "/become-distributor" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Our Process", href: "/our-process" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
  ],
  company: [
    { label: "Become a Distributor", href: "/become-distributor" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
