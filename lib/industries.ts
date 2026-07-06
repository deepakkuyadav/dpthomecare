import { IMG } from "./images";
import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "households",
    name: "Homes & Households",
    nameHi: "घर और परिवार",
    icon: "Home",
    description:
      "Everyday cleaning essentials that keep family spaces spotless, germ-free and beautifully fragrant.",
    descriptionHi:
      "रोज़ाना की सफाई के ज़रूरी प्रोडक्ट्स, जो घर को बेदाग, कीटाणु-मुक्त और महकता हुआ रखते हैं।",
    points: ["Floor, kitchen & bathroom care", "Gentle hand wash for the family", "Long-lasting freshness"],
    pointsHi: ["फर्श, किचन और बाथरूम की देखभाल", "परिवार के लिए जेंटल हैंड वॉश", "देर तक टिकने वाली ताज़गी"],
    image: IMG.family,
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    nameHi: "होटल और हॉस्पिटैलिटी",
    icon: "BedDouble",
    description:
      "Premium finishes that impress guests — spotless glass, sparkling bathrooms and welcoming fragrance.",
    descriptionHi:
      "मेहमानों को प्रभावित करने वाली प्रीमियम सफाई — बेदाग शीशे, चमकते बाथरूम और स्वागत करती खुशबू।",
    points: ["Streak-free glass & mirrors", "Hygienic bathroom care", "Consistent bulk supply"],
    pointsHi: ["बेदाग शीशे और आईने", "हाइजीनिक बाथरूम केयर", "लगातार भरोसेमंद बल्क सप्लाई"],
    image: IMG.hotelBed,
  },
  {
    slug: "hospitals",
    name: "Hospitals & Clinics",
    nameHi: "हॉस्पिटल और क्लीनिक",
    icon: "Stethoscope",
    description:
      "Hospital-grade disinfectants and sanitizers engineered for infection control and patient safety.",
    descriptionHi:
      "संक्रमण नियंत्रण और मरीज़ों की सुरक्षा के लिए हॉस्पिटल-ग्रेड डिसइन्फेक्टेंट और सैनिटाइज़र।",
    points: ["High-strength phenyl & disinfectants", "70% alcohol sanitizers", "Reliable, on-time bulk delivery"],
    pointsHi: ["हाई-स्ट्रेंथ फिनाइल और डिसइन्फेक्टेंट", "70% अल्कोहल सैनिटाइज़र", "भरोसेमंद, समय पर बल्क डिलीवरी"],
    image: IMG.hospital,
  },
  {
    slug: "restaurants",
    name: "Restaurants & Cafés",
    nameHi: "रेस्टोरेंट और कैफे",
    icon: "UtensilsCrossed",
    description:
      "Grease-cutting kitchen and dishwash solutions that keep commercial kitchens food-safe and shining.",
    descriptionHi:
      "चिकनाई काटने वाले किचन और डिशवॉश समाधान, जो कमर्शियल किचन को फूड-सेफ और चमकदार रखते हैं।",
    points: ["High-foam dish wash", "Heavy-duty degreasers", "Bulk economy packs"],
    pointsHi: ["हाई-फोम डिशवॉश", "हेवी-ड्यूटी डिग्रीज़र", "किफायती बल्क पैक"],
    image: "/brand/home-essentials-v3.jpg",
  },
  {
    slug: "schools",
    name: "Schools & Institutions",
    nameHi: "स्कूल और संस्थान",
    icon: "GraduationCap",
    description:
      "Safe, effective and economical hygiene for high-traffic classrooms, corridors and washrooms.",
    descriptionHi:
      "व्यस्त क्लासरूम, गलियारों और वॉशरूम के लिए सुरक्षित, असरदार और किफायती स्वच्छता।",
    points: ["Child-safe liquid soap", "Floor disinfectants", "Cost-effective bulk supply"],
    pointsHi: ["बच्चों के लिए सुरक्षित लिक्विड सोप", "फ्लोर डिसइन्फेक्टेंट", "किफायती बल्क सप्लाई"],
    image: IMG.disinfectRoom,
  },
  {
    slug: "offices",
    name: "Offices & Corporates",
    nameHi: "ऑफिस और कॉर्पोरेट",
    icon: "Building2",
    description:
      "Complete workplace hygiene — from sparkling floors and glass to sanitizers at every desk.",
    descriptionHi:
      "वर्कप्लेस की संपूर्ण स्वच्छता — चमकते फर्श और शीशों से लेकर हर डेस्क पर सैनिटाइज़र तक।",
    points: ["Multi-purpose cleaners", "Desk & surface sanitizers", "Fresh, professional spaces"],
    pointsHi: ["मल्टी-परपज़ क्लीनर", "डेस्क और सरफेस सैनिटाइज़र", "ताज़ा, प्रोफेशनल माहौल"],
    image: IMG.ppeDisinfect,
  },
  {
    slug: "retail-stores",
    name: "Retail Stores",
    nameHi: "रिटेल स्टोर",
    icon: "Store",
    description:
      "Fast-moving, trusted cleaning brands with premium packaging that sells off your shelves.",
    descriptionHi:
      "तेज़ बिकने वाले, भरोसेमंद क्लीनिंग ब्रांड — प्रीमियम पैकेजिंग के साथ जो शेल्फ से खुद बिकते हैं।",
    points: ["Attractive retail packing", "Strong repeat demand", "Healthy retailer margins"],
    pointsHi: ["आकर्षक रिटेल पैकिंग", "मज़बूत रिपीट डिमांड", "रिटेलर के लिए अच्छे मार्जिन"],
    image: IMG.cleaningProducts,
  },
  {
    slug: "wholesalers-distributors",
    name: "Wholesalers & Distributors",
    nameHi: "होलसेलर और डिस्ट्रीब्यूटर",
    icon: "Truck",
    description:
      "A profitable partnership with dependable stock, competitive pricing and business growth support.",
    descriptionHi:
      "भरोसेमंद स्टॉक, प्रतिस्पर्धी कीमतों और बिज़नेस ग्रोथ सपोर्ट के साथ एक फायदेमंद साझेदारी।",
    points: ["Competitive wholesale pricing", "Reliable stock availability", "Territory support"],
    pointsHi: ["प्रतिस्पर्धी होलसेल कीमतें", "भरोसेमंद स्टॉक उपलब्धता", "टेरिटरी सपोर्ट"],
    image: IMG.warehouse,
  },
  {
    slug: "cleaning-agencies",
    name: "Cleaning Agencies",
    nameHi: "क्लीनिंग एजेंसियां",
    icon: "SprayCan",
    description:
      "Professional-grade cleaning chemicals that deliver consistent, reliable results for your clients.",
    descriptionHi:
      "प्रोफेशनल-ग्रेड क्लीनिंग केमिकल, जो आपके क्लाइंट्स के लिए हर बार भरोसेमंद नतीजे देते हैं।",
    points: ["Institutional-strength formulas", "Consistent batch quality", "Bulk & refill options"],
    pointsHi: ["इंस्टीट्यूशनल-स्ट्रेंथ फॉर्मूले", "हर बैच में एक जैसी क्वालिटी", "बल्क और रीफिल विकल्प"],
    image: IMG.moppingBeige,
  },
];
