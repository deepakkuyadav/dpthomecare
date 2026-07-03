import type { Product, Category } from "./types";

export const categories: Category[] = [
  { name: "Floor Care", nameHi: "फ्लोर केयर", slug: "floor-care", description: "Deep-cleaning floor cleaners and phenyl for sparkling, disinfected floors.", descriptionHi: "चमकते, कीटाणु-मुक्त फर्श के लिए दमदार फ्लोर क्लीनर और फिनाइल।", icon: "Sparkles" },
  { name: "Bathroom & Toilet", nameHi: "बाथरूम व टॉयलेट", slug: "bathroom-toilet", description: "Powerful acid and surface cleaners for germ-free bathrooms.", descriptionHi: "कीटाणु-मुक्त बाथरूम के लिए शक्तिशाली एसिड और सरफेस क्लीनर।", icon: "ShowerHead" },
  { name: "Kitchen & Dishwash", nameHi: "किचन व डिशवॉश", slug: "kitchen-dishwash", description: "Grease-cutting dishwash and kitchen cleaners that are tough on grime.", descriptionHi: "चिकनाई काटने वाले डिशवॉश और किचन क्लीनर — मैल पर सख्त।", icon: "UtensilsCrossed" },
  { name: "Glass & Surface", nameHi: "ग्लास व सरफेस", slug: "glass-surface", description: "Streak-free glass and versatile multi-surface cleaners.", descriptionHi: "बेदाग शीशे और हर सतह के लिए मल्टी-सरफेस क्लीनर।", icon: "SprayCan" },
  { name: "Fabric Care", nameHi: "फैब्रिक केयर", slug: "fabric-care", description: "Liquid detergents and conditioners for bright, soft, fresh clothes.", descriptionHi: "चमकदार, मुलायम और ताज़े कपड़ों के लिए लिक्विड डिटर्जेंट और कंडीशनर।", icon: "Shirt" },
  { name: "Personal Care", nameHi: "पर्सनल केयर", slug: "personal-care", description: "Gentle hand wash, liquid soap and sanitizers for daily hygiene.", descriptionHi: "रोज़ाना स्वच्छता के लिए सौम्य हैंड वॉश, लिक्विड सोप और सैनिटाइज़र।", icon: "HandHeart" },
  { name: "Air Care", nameHi: "एयर केयर", slug: "air-care", description: "Long-lasting room fresheners for a welcoming home.", descriptionHi: "स्वागत करते घर के लिए देर तक टिकने वाले रूम फ्रेशनर।", icon: "Wind" },
  { name: "Auto Care", nameHi: "ऑटो केयर", slug: "auto-care", description: "High-foam car shampoo for a showroom shine.", descriptionHi: "शोरूम जैसी चमक के लिए हाई-फोम कार शैम्पू।", icon: "Car" },
];

const commonSafety = [
  "Keep out of reach of children.",
  "Avoid contact with eyes; in case of contact, rinse thoroughly with water.",
  "Store in a cool, dry place away from direct sunlight.",
  "Do not mix with other chemical cleaners.",
];

export const products: Product[] = [
  {
    slug: "floor-cleaner",
    name: "Floor Cleaner",
    category: "Floor Care",
    tagline: "Sparkling floors, lasting freshness",
    shortDescription:
      "A concentrated disinfectant floor cleaner that removes dirt, grime and germs while leaving behind a long-lasting fragrance.",
    description:
      "DPT Floor Cleaner is a premium, concentrated formula engineered for daily floor care across homes, hotels, hospitals and offices. It lifts away tough dirt, oily footmarks and stubborn stains from marble, tiles, granite, ceramic and vitrified surfaces while leaving them disinfected and fresh. A little goes a long way: one capful in a bucket of water leaves your floors visibly clean, streak-free and fragrant for hours.",
    image: "/products/floor-cleaner.png",
    fragrance: "Available in Floral, Citrus, Jasmine and Lavender",
    featured: true,
    benefits: [
      "Disinfects and removes germs and bacteria",
      "Long-lasting fragrance for hours",
      "Safe on marble, tiles, granite and vitrified floors",
      "Highly concentrated — economical per wash",
      "Leaves a streak-free, glossy finish",
    ],
    features: [
      "Advanced disinfectant + surfactant blend",
      "Non-corrosive, pH-balanced formula",
      "Cuts through grease and oily footmarks",
      "Quick drying with no sticky residue",
    ],
    specifications: [
      { label: "Form", value: "Liquid concentrate" },
      { label: "Fragrance", value: "Floral / Citrus / Jasmine / Lavender" },
      { label: "Dilution", value: "1 capful in 1 litre of water" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Add one capful of DPT Floor Cleaner to a bucket of water (approx. 1 litre).",
      "Dip a mop, wring out the excess and wipe the floor evenly.",
      "For heavily soiled areas, use undiluted on the stain and mop after a minute.",
      "No need to rinse — allow the floor to dry naturally.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    faqs: [
      { question: "Can I use it on wooden floors?", answer: "Use a heavily diluted solution and wipe with a well-wrung mop. Avoid excess water on wooden surfaces." },
      { question: "Does it need rinsing?", answer: "No. DPT Floor Cleaner is designed to be no-rinse and dries without leaving a sticky residue." },
      { question: "Is it safe for pets and children?", answer: "Once the floor is dry it is safe. Keep the concentrate away from children and pets." },
    ],
    keywords: ["floor cleaner", "disinfectant floor cleaner", "tile cleaner", "marble cleaner", "phenyl alternative"],
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Bathroom & Toilet",
    tagline: "Thick power against tough stains",
    shortDescription:
      "A powerful, thick-liquid toilet cleaner that clings to surfaces, dissolves hard water stains and eliminates germs and odour.",
    description:
      "DPT Toilet Cleaner is a heavy-duty acid formula that clings to the toilet bowl to dissolve limescale, hard-water stains, rust and yellow deposits. Its thick consistency ensures maximum contact time for a deep, hygienic clean that removes stains and destroys odour-causing bacteria — leaving your washroom sparkling and fresh.",
    image: "/products/toilet-cleaner.png",
    fragrance: "Fresh Pine",
    featured: true,
    benefits: [
      "Removes hard water stains and limescale",
      "Eliminates odour-causing germs and bacteria",
      "Thick gel clings for deeper cleaning",
      "Dissolves rust and yellow deposits",
      "Leaves a fresh, long-lasting fragrance",
    ],
    features: [
      "Extra-thick clinging formula",
      "Powerful stain-dissolving action",
      "Angled-neck bottle for under-the-rim reach",
      "Effective in hard-water regions",
    ],
    specifications: [
      { label: "Form", value: "Thick liquid" },
      { label: "Fragrance", value: "Fresh Pine" },
      { label: "Application", value: "Ready to use" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Lift the toilet seat and squeeze the cleaner around the rim.",
      "Ensure the liquid coats the inner sides of the bowl.",
      "Leave for 5–10 minutes for tough stains.",
      "Scrub with a toilet brush and flush.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: [
      "Contains acid — handle with care and wear gloves for prolonged use.",
      ...commonSafety,
    ],
    faqs: [
      { question: "Can it remove old yellow stains?", answer: "Yes, for stubborn stains leave the cleaner for 10–15 minutes before scrubbing." },
      { question: "Is it safe for the septic tank?", answer: "Used as directed and in normal quantities, it is suitable for standard septic systems." },
    ],
    keywords: ["toilet cleaner", "toilet bowl cleaner", "hard water stain remover", "washroom cleaner"],
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass & Surface",
    tagline: "Crystal-clear, streak-free shine",
    shortDescription:
      "A fast-acting glass and mirror cleaner that removes fingerprints, dust and smudges to deliver a brilliant, streak-free finish.",
    description:
      "DPT Glass Cleaner gives windows, mirrors, glass tables and display cases a crystal-clear, streak-free shine in seconds. Its quick-evaporating formula cuts through fingerprints, dust, grease and water spots without leaving smears — ideal for homes, showrooms, hotels and retail stores where a spotless look matters.",
    image: "/products/glass-cleaner.png",
    fragrance: "Fresh Mint",
    featured: true,
    benefits: [
      "Streak-free, crystal-clear finish",
      "Removes fingerprints, dust and grease",
      "Quick-drying, no residue",
      "Anti-static shine that repels dust",
      "Multi-use on glass, mirrors and acrylic",
    ],
    features: [
      "Fine-mist trigger spray",
      "Fast-evaporating solvent blend",
      "Ammonia-balanced, gentle formula",
      "Safe on tinted and coated glass",
    ],
    specifications: [
      { label: "Form", value: "Liquid spray" },
      { label: "Fragrance", value: "Fresh Mint" },
      { label: "Application", value: "Ready to use" },
      { label: "Finish", value: "Streak-free" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Spray directly onto the glass surface from 15–20 cm.",
      "Wipe with a clean, dry microfibre cloth or newspaper.",
      "For large windows, work top to bottom in an S-motion.",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre refill"],
    safety: commonSafety,
    faqs: [
      { question: "Can I use it on my car windshield?", answer: "Yes, it works well on automotive glass, both inside and out." },
      { question: "Will it work on LED/LCD screens?", answer: "Do not spray directly on electronic screens; spray on a cloth first and wipe gently." },
    ],
    keywords: ["glass cleaner", "mirror cleaner", "streak free glass cleaner", "window cleaner"],
  },
  {
    slug: "dish-wash-liquid",
    name: "Dish Wash Liquid",
    category: "Kitchen & Dishwash",
    tagline: "Tough on grease, soft on hands",
    shortDescription:
      "A concentrated, lemon-powered dishwash liquid that cuts through oil and grease, leaving utensils squeaky clean and shining.",
    description:
      "DPT Dish Wash Liquid is a high-performance, lemon-fortified formula that dissolves stubborn grease and dried-on food in seconds. Rich, long-lasting foam means fewer squeezes per wash, while the gentle, skin-friendly base protects your hands. It rinses off cleanly to leave your utensils, glassware and cookware spotless and shining.",
    image: "/products/dish-wash-liquid.png",
    fragrance: "Lemon",
    featured: true,
    benefits: [
      "Cuts through tough grease and oil fast",
      "Rich, long-lasting lather — more washes per bottle",
      "Leaves no residue or smell on utensils",
      "Gentle and skin-friendly formula",
      "Added shine for glassware and steel",
    ],
    features: [
      "Concentrated active-cleaning agents",
      "Real lemon extract for grease-cutting",
      "Fast-rinse, low-residue base",
      "Works in hard and soft water",
    ],
    specifications: [
      { label: "Form", value: "Liquid gel" },
      { label: "Fragrance", value: "Lemon" },
      { label: "Dilution", value: "A few drops per wash / can be diluted" },
      { label: "Foam", value: "High, long-lasting" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Apply a few drops onto a wet scrub or sponge.",
      "Work into a lather and clean utensils.",
      "Rinse thoroughly with clean water.",
      "For soaking, add a capful to a basin of water.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    faqs: [
      { question: "Is it safe for non-stick cookware?", answer: "Yes, it is gentle on non-stick coatings when used with a soft sponge." },
      { question: "Can restaurants use it in bulk?", answer: "Absolutely — our 5L and 20L packs are made for commercial kitchens and restaurants." },
    ],
    keywords: ["dish wash liquid", "dishwashing liquid", "utensil cleaner", "grease remover", "lemon dishwash"],
  },
  {
    slug: "liquid-detergent",
    name: "Liquid Detergent",
    category: "Fabric Care",
    tagline: "Brilliant clean in every wash",
    shortDescription:
      "A powerful liquid detergent for machine and hand wash that removes tough stains and keeps colours bright — with no powder residue.",
    description:
      "DPT Liquid Detergent dissolves instantly to penetrate deep into fabric fibres, lifting away tough stains, sweat, dirt and odour. Unlike powders, it leaves no white residue on clothes or in your machine, and its colour-guard formula keeps whites bright and colours vivid, wash after wash. Suitable for both top-load and front-load machines as well as hand wash.",
    image: "/products/liquid-detergent.png",
    fragrance: "Spring Fresh",
    featured: false,
    benefits: [
      "Removes tough stains and body odour",
      "No powder residue on clothes or machine",
      "Colour-guard keeps clothes vibrant",
      "Dissolves instantly, even in cold water",
      "Gentle on fabrics and machine parts",
    ],
    features: [
      "Deep-penetrating liquid formula",
      "Suitable for top-load and front-load",
      "Concentrated — small dose per load",
      "Bright-fresh fragrance",
    ],
    specifications: [
      { label: "Form", value: "Liquid" },
      { label: "Fragrance", value: "Spring Fresh" },
      { label: "Compatibility", value: "Top-load, front-load & hand wash" },
      { label: "Dose", value: "1 capful per medium load" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "For machines, pour one capful into the detergent drawer.",
      "For hand wash, dilute one capful in a bucket of water and soak for 15 minutes.",
      "Increase the dose slightly for heavily soiled loads.",
    ],
    packingSizes: ["500 ml", "1 Litre", "2 Litre", "5 Litre"],
    safety: commonSafety,
    faqs: [
      { question: "Is it safe for front-load machines?", answer: "Yes, it is low-foam and fully compatible with front-load and top-load machines." },
      { question: "Can it be used for delicate clothes?", answer: "Yes, dilute well and hand wash gently for delicates and woollens." },
    ],
    keywords: ["liquid detergent", "laundry liquid", "washing machine detergent", "fabric wash"],
  },
  {
    slug: "hand-wash",
    name: "Hand Wash",
    category: "Personal Care",
    tagline: "Germ protection with a soft touch",
    shortDescription:
      "A moisturising liquid hand wash that removes germs and dirt while keeping hands soft, smooth and beautifully fragranced.",
    description:
      "DPT Hand Wash combines effective germ protection with skin-loving care. The rich, creamy lather cleans away dirt and germs, while added moisturisers and glycerine keep your hands soft, not dry. Perfect for homes, offices, hotels, restaurants and hospitals where frequent hand hygiene matters.",
    image: "/products/hand-wash.png",
    fragrance: "Available in Rose, Lemon, Aloe Vera and Sea Breeze",
    featured: true,
    benefits: [
      "Effective germ protection",
      "Moisturisers keep hands soft",
      "Rich, creamy lather",
      "Gentle, non-drying formula",
      "Long-lasting fresh fragrance",
    ],
    features: [
      "Glycerine + moisturiser enriched",
      "pH-balanced for daily use",
      "Pump dispenser for controlled use",
      "Refill packs available",
    ],
    specifications: [
      { label: "Form", value: "Liquid" },
      { label: "Fragrance", value: "Rose / Lemon / Aloe Vera / Sea Breeze" },
      { label: "Application", value: "Ready to use" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Wet hands with water.",
      "Dispense one pump of hand wash onto palms.",
      "Rub for at least 20 seconds, covering all areas.",
      "Rinse thoroughly with clean water.",
    ],
    packingSizes: ["250 ml pump", "500 ml pump", "1 Litre refill", "5 Litre refill"],
    safety: commonSafety,
    faqs: [
      { question: "Is it suitable for sensitive skin?", answer: "Yes, the Aloe Vera variant is specially formulated for gentle, everyday use." },
      { question: "Do you offer refill packs?", answer: "Yes, economical 1L and 5L refills help reduce plastic and cost." },
    ],
    keywords: ["hand wash", "liquid hand wash", "germ protection hand wash", "moisturising hand wash"],
  },
  {
    slug: "phenyl",
    name: "Phenyl (White & Black)",
    category: "Floor Care",
    tagline: "Classic disinfectant, modern strength",
    shortDescription:
      "A concentrated white/black phenyl disinfectant that cleans, deodorises and disinfects floors, drains and large surface areas.",
    description:
      "DPT Phenyl is a powerful concentrated disinfectant for floors, corridors, drains and washrooms. Available in classic white (emulsion) and black variants, it destroys germs, controls odour and leaves a fresh, sanitised environment. Ideal for institutions, hospitals, schools, factories and large housing complexes where economical, high-strength disinfection is essential.",
    image: "/products/phenyl.png",
    fragrance: "Classic Phenyl / Floral",
    featured: false,
    benefits: [
      "Strong disinfectant and deodoriser",
      "Highly concentrated and economical",
      "Ideal for large floor areas and drains",
      "Controls odour at the source",
      "Available in white and black variants",
    ],
    features: [
      "High-strength active phenolic content",
      "Milky-white stable emulsion (white variant)",
      "Long-lasting sanitised fragrance",
      "Made for institutional use",
    ],
    specifications: [
      { label: "Form", value: "Emulsion / liquid concentrate" },
      { label: "Variants", value: "White & Black" },
      { label: "Dilution", value: "1 part phenyl to 20–40 parts water" },
      { label: "Use", value: "Floors, drains, washrooms" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Dilute as per the soiling level (1:20 to 1:40 with water).",
      "Mop floors or pour into drains for deodorising.",
      "Allow contact time for full disinfection.",
    ],
    packingSizes: ["1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    faqs: [
      { question: "What is the difference between white and black phenyl?", answer: "White phenyl is a refined milky emulsion for indoor floors; black phenyl is a stronger disinfectant often used for drains and outdoor areas." },
      { question: "Is it good for institutions?", answer: "Yes, our bulk packs are widely used by hospitals, schools and factories." },
    ],
    keywords: ["phenyl", "white phenyl", "black phenyl", "floor disinfectant", "drain cleaner"],
  },
  {
    slug: "fabric-conditioner",
    name: "Fabric Conditioner",
    category: "Fabric Care",
    tagline: "Soft, fresh and long-lasting",
    shortDescription:
      "A premium fabric conditioner that makes clothes irresistibly soft, reduces wrinkles and locks in a fresh fragrance for days.",
    description:
      "DPT Fabric Conditioner wraps each fibre in a protective layer of softness, making your clothes feel luxurious against the skin. It reduces wrinkles for easier ironing, protects fabric from wear, controls static and infuses garments with a long-lasting freshness that lingers wash after wash.",
    image: "/products/fabric-conditioner.png",
    fragrance: "Available in Blossom, Morning Fresh and Baby Soft",
    featured: false,
    benefits: [
      "Makes clothes irresistibly soft",
      "Long-lasting fragrance for days",
      "Reduces wrinkles and eases ironing",
      "Controls static cling",
      "Protects fabric fibres and colour",
    ],
    features: [
      "Advanced fibre-softening technology",
      "Concentrated — small cap per load",
      "Suitable for all machine types",
      "Skin-friendly, dermatologically mild",
    ],
    specifications: [
      { label: "Form", value: "Liquid" },
      { label: "Fragrance", value: "Blossom / Morning Fresh / Baby Soft" },
      { label: "Use stage", value: "Final rinse cycle" },
      { label: "Dose", value: "1 capful per load" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "After washing, add one capful during the final rinse.",
      "For hand wash, dilute in the last bucket of rinse water.",
      "Do not pour directly on dry clothes.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: commonSafety,
    faqs: [
      { question: "When should I add fabric conditioner?", answer: "Always add it during the final rinse, after the detergent has been washed out." },
      { question: "Is it safe for baby clothes?", answer: "Yes, the Baby Soft variant is specially made for delicate skin." },
    ],
    keywords: ["fabric conditioner", "fabric softener", "clothes softener", "laundry conditioner"],
  },
  {
    slug: "bathroom-cleaner",
    name: "Bathroom Cleaner",
    category: "Bathroom & Toilet",
    tagline: "Deep shine for every corner",
    shortDescription:
      "A tough surface cleaner that removes soap scum, hard-water marks and stains from tiles, taps, sinks and bathroom fittings.",
    description:
      "DPT Bathroom Cleaner tackles the toughest bathroom grime — soap scum, hard-water spots, mineral deposits and dirt — on tiles, wash basins, taps, showers and fittings. Its powerful yet surface-safe formula restores the original shine of your bathroom while leaving a hygienic, fresh finish.",
    image: "/products/bathroom-cleaner.png",
    fragrance: "Ocean Fresh",
    featured: false,
    benefits: [
      "Removes soap scum and hard-water marks",
      "Restores shine to tiles and fittings",
      "Kills germs for a hygienic bathroom",
      "Safe on ceramic, chrome and steel",
      "Fresh, clean fragrance",
    ],
    features: [
      "Powerful surface-active formula",
      "Trigger-spray for even coverage",
      "Non-abrasive, fitting-safe",
      "Works on tiles, glass and metal",
    ],
    specifications: [
      { label: "Form", value: "Liquid spray" },
      { label: "Fragrance", value: "Ocean Fresh" },
      { label: "Application", value: "Ready to use" },
      { label: "Surfaces", value: "Tiles, basins, taps, showers" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Spray directly onto the wet surface.",
      "Leave for 2–3 minutes to dissolve grime.",
      "Scrub lightly and rinse with water.",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre"],
    safety: commonSafety,
    faqs: [
      { question: "Can it be used on shower glass?", answer: "Yes, it removes water spots from shower glass and leaves it clear." },
      { question: "Is it safe on chrome taps?", answer: "Yes, it is non-corrosive and safe for chrome and steel fittings." },
    ],
    keywords: ["bathroom cleaner", "tile cleaner", "soap scum remover", "washroom cleaner"],
  },
  {
    slug: "kitchen-cleaner",
    name: "Kitchen Cleaner",
    category: "Kitchen & Dishwash",
    tagline: "Degrease. Clean. Shine.",
    shortDescription:
      "A degreasing kitchen cleaner that removes oil, grease and food stains from platforms, chimneys, tiles and gas stoves.",
    description:
      "DPT Kitchen Cleaner is a heavy-duty degreaser designed for the toughest kitchen messes. It dissolves baked-on oil, grease splatter and food residue from countertops, tiles, chimneys, gas stoves and sinks — quickly and without hard scrubbing — leaving your kitchen hygienic, shining and food-safe.",
    image: "/products/kitchen-cleaner.png",
    fragrance: "Citrus Zest",
    featured: false,
    benefits: [
      "Cuts through baked-on oil and grease",
      "Removes food stains and splatter",
      "Food-contact-safe when rinsed",
      "Restores shine to platforms and tiles",
      "Fresh citrus fragrance",
    ],
    features: [
      "Powerful degreasing agents",
      "Trigger-spray application",
      "Safe on granite, steel and tiles",
      "Quick action, minimal scrubbing",
    ],
    specifications: [
      { label: "Form", value: "Liquid spray" },
      { label: "Fragrance", value: "Citrus Zest" },
      { label: "Application", value: "Ready to use" },
      { label: "Surfaces", value: "Countertops, chimney, stove, tiles" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Spray onto the greasy surface.",
      "Leave for 1–2 minutes for heavy grease.",
      "Wipe with a damp cloth or sponge.",
      "Rinse food-contact surfaces with water after cleaning.",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre"],
    safety: commonSafety,
    faqs: [
      { question: "Can it clean a kitchen chimney?", answer: "Yes, it is highly effective on chimney filters and oily surfaces." },
      { question: "Is it safe near food?", answer: "Rinse food-contact surfaces with clean water after cleaning for full safety." },
    ],
    keywords: ["kitchen cleaner", "degreaser", "oil stain remover", "chimney cleaner"],
  },
  {
    slug: "multi-purpose-cleaner",
    name: "Multi Purpose Cleaner",
    category: "Glass & Surface",
    tagline: "One cleaner for the whole home",
    shortDescription:
      "A versatile all-surface cleaner that cleans, disinfects and shines floors, walls, doors, furniture and more.",
    description:
      "DPT Multi Purpose Cleaner is your all-in-one hygiene solution. From floors and walls to doors, furniture, plastic, glass and painted surfaces, it cleans, disinfects and deodorises in a single step. Its balanced formula is tough on dirt yet gentle on surfaces — the smart, economical choice for busy homes and businesses.",
    image: "/products/multi-purpose-cleaner.png",
    fragrance: "Fresh Lily",
    featured: true,
    benefits: [
      "Cleans almost every washable surface",
      "Disinfects and deodorises in one step",
      "Saves money — replaces multiple cleaners",
      "Gentle on surfaces, tough on dirt",
      "Pleasant, fresh fragrance",
    ],
    features: [
      "Versatile multi-surface formula",
      "Dilutable concentrate",
      "Antibacterial action",
      "Streak-free finish",
    ],
    specifications: [
      { label: "Form", value: "Liquid concentrate" },
      { label: "Fragrance", value: "Fresh Lily" },
      { label: "Dilution", value: "As needed — light to heavy soiling" },
      { label: "Surfaces", value: "Floors, walls, wood, plastic, glass" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "For light cleaning, dilute a capful in water and wipe.",
      "For tough dirt, use undiluted on a cloth.",
      "Suitable for mopping, wiping and spray cleaning.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    faqs: [
      { question: "Which surfaces can I use it on?", answer: "Almost any washable surface — floors, walls, doors, furniture, plastic and glass." },
      { question: "Is it antibacterial?", answer: "Yes, it disinfects surfaces while cleaning." },
    ],
    keywords: ["multi purpose cleaner", "all purpose cleaner", "surface cleaner", "disinfectant cleaner"],
  },
  {
    slug: "room-freshener",
    name: "Room Freshener",
    category: "Air Care",
    tagline: "Instant freshness, lasting mood",
    shortDescription:
      "A long-lasting air freshener that instantly neutralises odours and fills your space with a premium, welcoming fragrance.",
    description:
      "DPT Room Freshener does more than mask smells — it neutralises odour molecules and fills the air with a rich, long-lasting fragrance. A few sprays transform living rooms, bedrooms, washrooms, offices and cars into fresh, welcoming spaces. Available in a range of premium fragrances to match every mood.",
    image: "/products/room-freshener.png",
    fragrance: "Available in Lavender, Citrus Bloom, Rose and Ocean",
    featured: false,
    benefits: [
      "Neutralises odour, doesn't just mask it",
      "Long-lasting premium fragrance",
      "Perfect for rooms, cars and washrooms",
      "Fine mist spreads evenly",
      "Multiple fragrance options",
    ],
    features: [
      "Concentrated fragrance oils",
      "Non-staining fine mist",
      "Odour-neutralising technology",
      "Compact, portable bottle",
    ],
    specifications: [
      { label: "Form", value: "Aerosol / pump spray" },
      { label: "Fragrance", value: "Lavender / Citrus Bloom / Rose / Ocean" },
      { label: "Application", value: "Ready to use" },
      { label: "Use", value: "Home, office, washroom, car" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Hold upright and spray 2–3 times into the air.",
      "Direct away from face, food and flames.",
      "Re-apply as needed for continuous freshness.",
    ],
    packingSizes: ["250 ml", "500 ml"],
    safety: [
      "Do not spray near flames or while smoking (aerosol variant).",
      ...commonSafety,
    ],
    faqs: [
      { question: "How long does the fragrance last?", answer: "Depending on room size and ventilation, freshness typically lasts several hours." },
      { question: "Can I use it in my car?", answer: "Yes, a couple of sprays keep your car fresh without overpowering." },
    ],
    keywords: ["room freshener", "air freshener", "odour neutraliser", "home fragrance"],
  },
  {
    slug: "sanitizer",
    name: "Hand Sanitizer",
    category: "Personal Care",
    tagline: "70% alcohol, 100% confidence",
    shortDescription:
      "An alcohol-based hand sanitizer that kills germs in seconds without water, keeping hands protected on the go.",
    description:
      "DPT Hand Sanitizer offers instant, water-free protection wherever you are. Its 70% alcohol formula kills germs and viruses in seconds, while added moisturisers prevent the dryness typical of sanitizers. Compact and quick-drying, it's ideal for homes, offices, hospitals, schools and travel.",
    image: "/products/sanitizer.png",
    fragrance: "Neutral / Mild fragrance",
    featured: false,
    benefits: [
      "Kills germs in seconds",
      "70% alcohol — effective protection",
      "No water needed",
      "Moisturisers prevent dryness",
      "Quick-drying, non-sticky",
    ],
    features: [
      "70% v/v alcohol content",
      "Enriched with glycerine",
      "Available in gel and liquid",
      "Portable pocket sizes",
    ],
    specifications: [
      { label: "Form", value: "Gel / liquid" },
      { label: "Alcohol", value: "70% v/v" },
      { label: "Application", value: "Ready to use" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Apply a coin-sized amount to your palm.",
      "Rub over both hands, covering all surfaces.",
      "Continue until dry — no rinsing required.",
    ],
    packingSizes: ["100 ml", "250 ml", "500 ml pump", "5 Litre refill"],
    safety: [
      "Flammable — keep away from fire and heat.",
      "For external use only.",
      ...commonSafety,
    ],
    faqs: [
      { question: "Does it dry out hands?", answer: "No, added glycerine and moisturisers keep hands soft with regular use." },
      { question: "Is 70% alcohol effective?", answer: "Yes, 70% alcohol is the recommended concentration for effective germ protection." },
    ],
    keywords: ["hand sanitizer", "alcohol sanitizer", "germ protection", "hand rub"],
  },
  {
    slug: "car-shampoo",
    name: "Car Shampoo",
    category: "Auto Care",
    tagline: "Showroom shine at home",
    shortDescription:
      "A high-foam, pH-neutral car shampoo that lifts dirt gently, protects paint and delivers a streak-free, glossy finish.",
    description:
      "DPT Car Shampoo gives your vehicle a showroom-quality shine without harming the paint or wax coat. Its thick, high-foam formula gently lifts road grime, dust and bird droppings, while the pH-neutral base protects the clear coat. Rinses off cleanly for a spotless, streak-free, glossy finish every time.",
    image: "/products/car-shampoo.png",
    fragrance: "Fresh Auto",
    featured: false,
    benefits: [
      "Rich, thick foam lifts dirt gently",
      "pH-neutral — safe on paint and wax",
      "Streak-free, glossy finish",
      "Economical — concentrated formula",
      "Works on cars, bikes and more",
    ],
    features: [
      "High-foam surfactant blend",
      "Wax-and-paint-safe pH balance",
      "Added gloss agents",
      "Concentrated — dilute per wash",
    ],
    specifications: [
      { label: "Form", value: "Liquid concentrate" },
      { label: "Fragrance", value: "Fresh Auto" },
      { label: "Dilution", value: "1 capful in a bucket of water" },
      { label: "Use", value: "Cars, bikes, vehicles" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Rinse the vehicle to remove loose dust.",
      "Add one capful to a bucket of water and mix to a foam.",
      "Wash with a sponge or mitt, top to bottom.",
      "Rinse and dry with a microfibre cloth.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: commonSafety,
    faqs: [
      { question: "Will it remove wax coating?", answer: "No, it is pH-neutral and preserves existing wax and polish." },
      { question: "Can I use it in a foam gun?", answer: "Yes, it produces excellent foam in pressure washers and foam guns." },
    ],
    keywords: ["car shampoo", "car wash liquid", "vehicle cleaner", "foam car wash"],
  },
  {
    slug: "liquid-soap",
    name: "Liquid Soap",
    category: "Personal Care",
    tagline: "Everyday cleansing, everyday care",
    shortDescription:
      "A gentle, economical liquid soap ideal for hand washing and body cleansing across homes and high-traffic institutions.",
    description:
      "DPT Liquid Soap is a versatile, mild cleanser perfect for high-usage settings such as schools, offices, hospitals and public washrooms, as well as everyday home use. It produces a rich lather that cleanses effectively, rinses easily and leaves skin fresh and cared for — available in bulk for cost-effective hygiene at scale.",
    image: "/products/liquid-soap.png",
    fragrance: "Available in Classic, Rose and Lemon",
    featured: false,
    benefits: [
      "Rich, effective cleansing lather",
      "Gentle and skin-friendly",
      "Economical for high-traffic use",
      "Rinses off cleanly",
      "Available in multiple fragrances",
    ],
    features: [
      "Mild, pH-balanced base",
      "Bulk refill options",
      "Compatible with all dispensers",
      "Pleasant, fresh scent",
    ],
    specifications: [
      { label: "Form", value: "Liquid" },
      { label: "Fragrance", value: "Classic / Rose / Lemon" },
      { label: "Application", value: "Ready to use / dispenser" },
      { label: "Use", value: "Home, institutions, washrooms" },
      { label: "Shelf life", value: "24 months" },
    ],
    usage: [
      "Fill dispensers directly from the refill pack.",
      "Dispense onto wet hands and lather.",
      "Rinse thoroughly with water.",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    faqs: [
      { question: "Can it be used in soap dispensers?", answer: "Yes, it is designed to work with all standard wall and counter dispensers." },
      { question: "Is bulk packing available?", answer: "Yes, 5L and 20L packs are ideal for institutions and offices." },
    ],
    keywords: ["liquid soap", "hand soap", "bulk liquid soap", "institutional soap"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  const sameCategory = products.filter(
    (p) => p.category === current.category && p.slug !== slug
  );
  const others = products.filter(
    (p) => p.category !== current.category && p.slug !== slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export const featuredProducts = products.filter((p) => p.featured);
