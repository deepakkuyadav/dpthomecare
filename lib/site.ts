export const site = {
  name: "DPT Home Care",
  legalName: "DPT Home Care",
  tagline: "Power of Hygiene",
  subTagline: "Deep Protection Technology",
  shortDesc:
    "DPT Home Care is a trusted manufacturer and supplier of premium household and institutional cleaning products, built on the promise of hygiene, safety and everyday freshness.",
  domain: "dpthomecare.com",
  url: "https://dpthomecare.com",
  logo: "/logo-v2.png",
  ogImage: "/logo-v2.png",
  phone: "9451900062",
  phoneDisplay: "+91 94519 00062",
  phoneIntl: "+919451900062",
  whatsapp: "919451900062",
  email: "info@dpthomecare.com", // placeholder — replace with your business email
  address: {
    line1: "Ambedkar Tiraha",
    city: "Jaunpur",
    state: "Uttar Pradesh",
    stateShort: "UP",
    pincode: "222002",
    country: "India",
    full: "Ambedkar Tiraha, Jaunpur, Uttar Pradesh 222002, India",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  founded: 2016,
  social: {
    facebook: "https://facebook.com/", // placeholder
    instagram: "https://instagram.com/", // placeholder
    linkedin: "https://linkedin.com/", // placeholder
    youtube: "https://youtube.com/", // placeholder
    whatsapp: "https://wa.me/919451900062",
  },
  stats: {
    products: 15,
    clients: 1200,
    citiesServed: 45,
    yearsExperience: new Date().getFullYear() - 2016,
  },
} as const;

export function whatsappLink(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : `?text=${encodeURIComponent(
        "Hello DPT Home Care, I would like to know more about your cleaning products."
      )}`;
  return `https://wa.me/${site.whatsapp}${text}`;
}

export function telLink() {
  return `tel:${site.phoneIntl}`;
}
