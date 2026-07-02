import type { QA } from "./types";

export interface FaqGroup {
  category: string;
  items: QA[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Products & Quality",
    items: [
      { question: "What products does DPT Home Care manufacture?", answer: "We manufacture a complete range of household and institutional cleaning products including floor cleaner, toilet cleaner, glass cleaner, dish wash liquid, liquid detergent, hand wash, phenyl, fabric conditioner, bathroom cleaner, kitchen cleaner, multi-purpose cleaner, room freshener, sanitizer, car shampoo and liquid soap." },
      { question: "Are DPT products safe to use at home?", answer: "Yes. Our products are formulated to be effective yet safe for everyday household use when used as directed. Always follow the usage and safety instructions on the label." },
      { question: "Do your cleaners really kill 99.9% of germs?", answer: "Our disinfectant formulas — including floor cleaner, toilet cleaner, hand wash and sanitizer — are designed to eliminate 99.9% of common germs and bacteria when used as directed." },
      { question: "Are the fragrances long-lasting?", answer: "Yes, we use quality fragrance oils that leave a fresh, long-lasting scent. Floor cleaners and fresheners are especially known for their lasting fragrance." },
      { question: "What is the shelf life of your products?", answer: "Most DPT products have a shelf life of 24 months from the date of manufacture when stored in a cool, dry place away from direct sunlight." },
      { question: "Are your products concentrated?", answer: "Many of our cleaners are concentrated formulas, which means you use less per wash — making them more economical over time." },
    ],
  },
  {
    category: "Orders & Packing",
    items: [
      { question: "What pack sizes are available?", answer: "We offer retail sizes (250 ml, 500 ml, 1 Litre) as well as bulk institutional sizes (5 Litre and 20 Litre) for most products." },
      { question: "Do you supply in bulk for businesses?", answer: "Yes, we specialise in bulk supply for hotels, hospitals, restaurants, schools, offices, retailers, wholesalers and cleaning agencies." },
      { question: "What is the minimum order quantity?", answer: "Minimum order quantities depend on the product and pack size. Please contact us or send a WhatsApp enquiry and our team will share the details." },
      { question: "Can I get customised or private-label packing?", answer: "For large-volume distributors and institutions, we can discuss customised packing options. Reach out via our contact form or WhatsApp." },
      { question: "How do I place an order?", answer: "You can enquire through our website enquiry forms, call us on 9451900062, or message us on WhatsApp for the fastest response." },
    ],
  },
  {
    category: "Distributors & Dealers",
    items: [
      { question: "How can I become a DPT distributor?", answer: "Visit our Become a Distributor page and fill out the dealer enquiry form. Our team will review your application and get in touch to discuss the opportunity." },
      { question: "What support do you offer distributors?", answer: "We support our partners with competitive pricing, reliable stock, marketing material, product training and responsive service to help grow their business." },
      { question: "Which areas are open for distribution?", answer: "We are actively expanding across Uttar Pradesh and neighbouring regions. Submit your details and we'll tell you about availability in your area." },
      { question: "Is there an investment required to become a dealer?", answer: "A working investment for initial stock is typically required. The exact amount depends on your territory and business scale — our team will guide you." },
      { question: "Do you offer margins that support profitable resale?", answer: "Yes, our pricing is structured to give dealers and distributors healthy, sustainable margins with strong repeat demand." },
    ],
  },
  {
    category: "Usage & Safety",
    items: [
      { question: "Do floor cleaners need to be rinsed?", answer: "No, our floor cleaner is designed to be no-rinse. Simply mop and let the floor dry naturally without a sticky residue." },
      { question: "Are the products safe for children and pets?", answer: "Once surfaces are cleaned and dry they are safe. Always keep concentrates and bottles out of the reach of children and pets." },
      { question: "Can I mix different cleaners together?", answer: "No. Never mix cleaning chemicals together, as this can create harmful reactions. Use each product on its own as directed." },
      { question: "Is the dish wash liquid safe for hands?", answer: "Yes, it has a gentle, skin-friendly base. For very frequent washing, we recommend using gloves as a general precaution." },
      { question: "Is the sanitizer safe for daily use?", answer: "Yes, our 70% alcohol sanitizer is enriched with moisturisers to prevent dryness and is suitable for regular use. It is for external use only." },
      { question: "What should I do if a product contacts my eyes?", answer: "Rinse immediately with plenty of clean water for several minutes. If irritation persists, seek medical advice." },
    ],
  },
  {
    category: "Company & Delivery",
    items: [
      { question: "Where is DPT Home Care located?", answer: "We are based at Ambedkar Tiraha, Jaunpur, Uttar Pradesh 222002, India." },
      { question: "Do you deliver outside Jaunpur?", answer: "Yes, we serve customers and partners across Uttar Pradesh and nearby regions. Delivery terms depend on order size and location." },
      { question: "How can I contact your team?", answer: "Call us on 9451900062, use the contact form on our website, or send us a message on WhatsApp for a quick reply." },
      { question: "What are your working hours?", answer: "We are open Monday to Saturday, 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 2:00 PM." },
      { question: "Are your manufacturing practices quality-controlled?", answer: "Yes, every batch goes through strict quality checks — from raw material inspection to final packaging — to ensure consistent performance." },
      { question: "Do you provide product samples?", answer: "For serious dealer and institutional enquiries, samples can be arranged. Please mention this in your enquiry." },
    ],
  },
];

export const allFaqs: QA[] = faqGroups.flatMap((g) => g.items);
