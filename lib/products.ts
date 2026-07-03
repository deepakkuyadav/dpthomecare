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

const commonSafetyHi = [
  "बच्चों की पहुँच से दूर रखें।",
  "आँखों के संपर्क से बचें; संपर्क होने पर पानी से अच्छी तरह धोएँ।",
  "ठंडी, सूखी जगह पर सीधी धूप से दूर रखें।",
  "किसी अन्य केमिकल क्लीनर के साथ न मिलाएँ।",
];

export const products: Product[] = [
  {
    slug: "floor-cleaner",
    name: "Floor Cleaner",
    category: "Floor Care",
    tagline: "Sparkling floors, lasting freshness",
    taglineHi: "चमकते फर्श, देर तक ताज़गी",
    shortDescription:
      "A concentrated disinfectant floor cleaner that removes dirt, grime and germs while leaving behind a long-lasting fragrance.",
    shortDescriptionHi:
      "एक कंसन्ट्रेटेड डिसइन्फेक्टेंट फ्लोर क्लीनर जो धूल-मिट्टी, मैल और कीटाणुओं को हटाकर देर तक टिकने वाली खुशबू छोड़ता है।",
    description:
      "DPT Floor Cleaner is a premium, concentrated formula engineered for daily floor care across homes, hotels, hospitals and offices. It lifts away tough dirt, oily footmarks and stubborn stains from marble, tiles, granite, ceramic and vitrified surfaces while leaving them disinfected and fresh. A little goes a long way: one capful in a bucket of water leaves your floors visibly clean, streak-free and fragrant for hours.",
    descriptionHi:
      "DPT फ्लोर क्लीनर एक प्रीमियम, कंसन्ट्रेटेड फॉर्मूला है, जो घरों, होटलों, अस्पतालों और दफ्तरों में रोज़ाना फर्श की देखभाल के लिए बनाया गया है। यह मार्बल, टाइल्स, ग्रेनाइट, सिरेमिक और विट्रिफाइड सतहों से जिद्दी मैल, तेल भरे पैरों के निशान और पक्के दाग हटाता है और साथ ही उन्हें कीटाणु-मुक्त और तरोताज़ा बनाता है। थोड़ा ही काफी है: बाल्टी भर पानी में बस एक ढक्कन, और आपके फर्श साफ, बेदाग और घंटों महकते रहते हैं।",
    image: "/products/floor-cleaner.png",
    fragrance: "Available in Floral, Citrus, Jasmine and Lavender",
    fragranceHi: "फ्लोरल, सिट्रस, जैस्मिन और लैवेंडर में उपलब्ध",
    featured: true,
    benefits: [
      "Disinfects and removes germs and bacteria",
      "Long-lasting fragrance for hours",
      "Safe on marble, tiles, granite and vitrified floors",
      "Highly concentrated — economical per wash",
      "Leaves a streak-free, glossy finish",
    ],
    benefitsHi: [
      "कीटाणुओं और बैक्टीरिया को खत्म कर डिसइन्फेक्ट करता है",
      "घंटों तक टिकने वाली खुशबू",
      "मार्बल, टाइल्स, ग्रेनाइट और विट्रिफाइड फर्श पर सुरक्षित",
      "हाई कंसन्ट्रेट — हर धुलाई में किफायती",
      "बेदाग, चमकदार फिनिश देता है",
    ],
    features: [
      "Advanced disinfectant + surfactant blend",
      "Non-corrosive, pH-balanced formula",
      "Cuts through grease and oily footmarks",
      "Quick drying with no sticky residue",
    ],
    featuresHi: [
      "एडवांस्ड डिसइन्फेक्टेंट + सर्फेक्टेंट ब्लेंड",
      "नॉन-कोरोसिव, pH-बैलेंस्ड फॉर्मूला",
      "चिकनाई और तेल के निशानों को काट देता है",
      "जल्दी सूखता है, कोई चिपचिपापन नहीं",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid concentrate", valueHi: "लिक्विड कंसन्ट्रेट" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Floral / Citrus / Jasmine / Lavender", valueHi: "फ्लोरल / सिट्रस / जैस्मिन / लैवेंडर" },
      { label: "Dilution", labelHi: "डाइल्यूशन", value: "1 capful in 1 litre of water", valueHi: "1 लीटर पानी में 1 ढक्कन" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Add one capful of DPT Floor Cleaner to a bucket of water (approx. 1 litre).",
      "Dip a mop, wring out the excess and wipe the floor evenly.",
      "For heavily soiled areas, use undiluted on the stain and mop after a minute.",
      "No need to rinse — allow the floor to dry naturally.",
    ],
    usageHi: [
      "एक बाल्टी पानी (लगभग 1 लीटर) में DPT फ्लोर क्लीनर का एक ढक्कन डालें।",
      "पोछा भिगोएँ, अतिरिक्त पानी निचोड़ें और फर्श पर एक समान पोछा लगाएँ।",
      "ज़्यादा गंदे हिस्सों पर बिना घोले सीधे दाग पर लगाएँ और एक मिनट बाद पोछा लगाएँ।",
      "धोने की ज़रूरत नहीं — फर्श को अपने आप सूखने दें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Can I use it on wooden floors?", questionHi: "क्या इसे लकड़ी के फर्श पर इस्तेमाल कर सकते हैं?", answer: "Use a heavily diluted solution and wipe with a well-wrung mop. Avoid excess water on wooden surfaces.", answerHi: "खूब पतला घोल इस्तेमाल करें और अच्छी तरह निचोड़े हुए पोछे से पोंछें। लकड़ी की सतह पर ज़्यादा पानी न लगने दें।" },
      { question: "Does it need rinsing?", questionHi: "क्या इसे पानी से धोना ज़रूरी है?", answer: "No. DPT Floor Cleaner is designed to be no-rinse and dries without leaving a sticky residue.", answerHi: "नहीं। DPT फ्लोर क्लीनर नो-रिंस फॉर्मूला है और बिना चिपचिपाहट छोड़े सूख जाता है।" },
      { question: "Is it safe for pets and children?", questionHi: "क्या यह बच्चों और पालतू जानवरों के लिए सुरक्षित है?", answer: "Once the floor is dry it is safe. Keep the concentrate away from children and pets.", answerHi: "फर्श सूख जाने के बाद यह पूरी तरह सुरक्षित है। कंसन्ट्रेट को बच्चों और पालतू जानवरों से दूर रखें।" },
    ],
    keywords: ["floor cleaner", "disinfectant floor cleaner", "tile cleaner", "marble cleaner", "phenyl alternative"],
  },
  {
    slug: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Bathroom & Toilet",
    tagline: "Thick power against tough stains",
    taglineHi: "जिद्दी दागों पर गाढ़ी ताकत",
    shortDescription:
      "A powerful, thick-liquid toilet cleaner that clings to surfaces, dissolves hard water stains and eliminates germs and odour.",
    shortDescriptionHi:
      "एक दमदार, गाढ़ा टॉयलेट क्लीनर जो सतह पर चिपककर हार्ड वॉटर के दाग घोलता है और कीटाणुओं व बदबू को खत्म करता है।",
    description:
      "DPT Toilet Cleaner is a heavy-duty acid formula that clings to the toilet bowl to dissolve limescale, hard-water stains, rust and yellow deposits. Its thick consistency ensures maximum contact time for a deep, hygienic clean that removes stains and destroys odour-causing bacteria — leaving your washroom sparkling and fresh.",
    descriptionHi:
      "DPT टॉयलेट क्लीनर एक हैवी-ड्यूटी एसिड फॉर्मूला है जो टॉयलेट बाउल पर चिपककर लाइमस्केल, हार्ड वॉटर के दाग, जंग और पीली परत को घोल देता है। इसकी गाढ़ी बनावट सतह पर ज़्यादा देर टिकती है, जिससे गहरी और हाइजीनिक सफाई मिलती है — दाग हटते हैं, बदबू फैलाने वाले बैक्टीरिया खत्म होते हैं और आपका वॉशरूम चमकदार व तरोताज़ा रहता है।",
    image: "/products/toilet-cleaner.png",
    fragrance: "Fresh Pine",
    fragranceHi: "फ्रेश पाइन",
    featured: true,
    benefits: [
      "Removes hard water stains and limescale",
      "Eliminates odour-causing germs and bacteria",
      "Thick gel clings for deeper cleaning",
      "Dissolves rust and yellow deposits",
      "Leaves a fresh, long-lasting fragrance",
    ],
    benefitsHi: [
      "हार्ड वॉटर के दाग और लाइमस्केल हटाता है",
      "बदबू फैलाने वाले कीटाणुओं और बैक्टीरिया को खत्म करता है",
      "गाढ़ा जेल चिपककर गहरी सफाई करता है",
      "जंग और पीली परत को घोल देता है",
      "ताज़ी, देर तक टिकने वाली खुशबू छोड़ता है",
    ],
    features: [
      "Extra-thick clinging formula",
      "Powerful stain-dissolving action",
      "Angled-neck bottle for under-the-rim reach",
      "Effective in hard-water regions",
    ],
    featuresHi: [
      "एक्स्ट्रा-गाढ़ा, चिपकने वाला फॉर्मूला",
      "दाग घोलने वाला दमदार असर",
      "रिम के नीचे तक पहुँचने वाली एंगल्ड-नेक बोतल",
      "हार्ड वॉटर वाले इलाकों में भी असरदार",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Thick liquid", valueHi: "गाढ़ा लिक्विड" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Fresh Pine", valueHi: "फ्रेश पाइन" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Lift the toilet seat and squeeze the cleaner around the rim.",
      "Ensure the liquid coats the inner sides of the bowl.",
      "Leave for 5–10 minutes for tough stains.",
      "Scrub with a toilet brush and flush.",
    ],
    usageHi: [
      "टॉयलेट सीट उठाएँ और रिम के चारों ओर क्लीनर डालें।",
      "ध्यान रखें कि लिक्विड बाउल की अंदरूनी सतह पर अच्छी तरह फैल जाए।",
      "जिद्दी दागों के लिए 5–10 मिनट लगा रहने दें।",
      "टॉयलेट ब्रश से रगड़ें और फ्लश करें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: [
      "Contains acid — handle with care and wear gloves for prolonged use.",
      ...commonSafety,
    ],
    safetyHi: [
      "इसमें एसिड है — सावधानी से इस्तेमाल करें और लंबे इस्तेमाल के लिए दस्ताने पहनें।",
      ...commonSafetyHi,
    ],
    faqs: [
      { question: "Can it remove old yellow stains?", questionHi: "क्या यह पुराने पीले दाग हटा सकता है?", answer: "Yes, for stubborn stains leave the cleaner for 10–15 minutes before scrubbing.", answerHi: "हाँ, जिद्दी दागों के लिए रगड़ने से पहले क्लीनर को 10–15 मिनट लगा रहने दें।" },
      { question: "Is it safe for the septic tank?", questionHi: "क्या यह सेप्टिक टैंक के लिए सुरक्षित है?", answer: "Used as directed and in normal quantities, it is suitable for standard septic systems.", answerHi: "बताए गए तरीके और सामान्य मात्रा में इस्तेमाल करने पर यह आम सेप्टिक सिस्टम के लिए उपयुक्त है।" },
    ],
    keywords: ["toilet cleaner", "toilet bowl cleaner", "hard water stain remover", "washroom cleaner"],
  },
  {
    slug: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass & Surface",
    tagline: "Crystal-clear, streak-free shine",
    taglineHi: "क्रिस्टल-क्लियर, बेदाग चमक",
    shortDescription:
      "A fast-acting glass and mirror cleaner that removes fingerprints, dust and smudges to deliver a brilliant, streak-free finish.",
    shortDescriptionHi:
      "एक तेज़ असर वाला ग्लास और मिरर क्लीनर जो उँगलियों के निशान, धूल और धब्बे हटाकर शानदार, बेदाग चमक देता है।",
    description:
      "DPT Glass Cleaner gives windows, mirrors, glass tables and display cases a crystal-clear, streak-free shine in seconds. Its quick-evaporating formula cuts through fingerprints, dust, grease and water spots without leaving smears — ideal for homes, showrooms, hotels and retail stores where a spotless look matters.",
    descriptionHi:
      "DPT ग्लास क्लीनर खिड़कियों, आईनों, काँच की टेबलों और डिस्प्ले केसों को सेकंडों में क्रिस्टल-क्लियर, बेदाग चमक देता है। इसका जल्दी उड़ने वाला फॉर्मूला उँगलियों के निशान, धूल, चिकनाई और पानी के धब्बों को बिना धारियाँ छोड़े साफ कर देता है — घरों, शोरूम, होटलों और रिटेल स्टोर्स के लिए बिल्कुल सही, जहाँ बेदाग लुक मायने रखता है।",
    image: "/products/glass-cleaner.png",
    fragrance: "Fresh Mint",
    fragranceHi: "फ्रेश मिंट",
    featured: true,
    benefits: [
      "Streak-free, crystal-clear finish",
      "Removes fingerprints, dust and grease",
      "Quick-drying, no residue",
      "Anti-static shine that repels dust",
      "Multi-use on glass, mirrors and acrylic",
    ],
    benefitsHi: [
      "बेदाग, क्रिस्टल-क्लियर फिनिश",
      "उँगलियों के निशान, धूल और चिकनाई हटाता है",
      "जल्दी सूखता है, कोई अवशेष नहीं",
      "एंटी-स्टैटिक चमक जो धूल को दूर रखती है",
      "काँच, आईने और एक्रिलिक — सब पर मल्टी-यूज़",
    ],
    features: [
      "Fine-mist trigger spray",
      "Fast-evaporating solvent blend",
      "Ammonia-balanced, gentle formula",
      "Safe on tinted and coated glass",
    ],
    featuresHi: [
      "फाइन-मिस्ट ट्रिगर स्प्रे",
      "जल्दी उड़ने वाला सॉल्वेंट ब्लेंड",
      "अमोनिया-बैलेंस्ड, सौम्य फॉर्मूला",
      "टिंटेड और कोटेड ग्लास पर सुरक्षित",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid spray", valueHi: "लिक्विड स्प्रे" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Fresh Mint", valueHi: "फ्रेश मिंट" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Finish", labelHi: "फिनिश", value: "Streak-free", valueHi: "बेदाग, स्ट्रीक-फ्री" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Spray directly onto the glass surface from 15–20 cm.",
      "Wipe with a clean, dry microfibre cloth or newspaper.",
      "For large windows, work top to bottom in an S-motion.",
    ],
    usageHi: [
      "काँच की सतह पर 15–20 सेमी की दूरी से सीधे स्प्रे करें।",
      "साफ, सूखे माइक्रोफाइबर कपड़े या अखबार से पोंछें।",
      "बड़ी खिड़कियों के लिए ऊपर से नीचे S-आकार में पोंछें।",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre refill"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Can I use it on my car windshield?", questionHi: "क्या इसे कार की विंडशील्ड पर इस्तेमाल कर सकते हैं?", answer: "Yes, it works well on automotive glass, both inside and out.", answerHi: "हाँ, यह गाड़ी के शीशों पर अंदर और बाहर दोनों तरफ बढ़िया काम करता है।" },
      { question: "Will it work on LED/LCD screens?", questionHi: "क्या यह LED/LCD स्क्रीन पर काम करेगा?", answer: "Do not spray directly on electronic screens; spray on a cloth first and wipe gently.", answerHi: "इलेक्ट्रॉनिक स्क्रीन पर सीधे स्प्रे न करें; पहले कपड़े पर स्प्रे करें और फिर हल्के हाथ से पोंछें।" },
    ],
    keywords: ["glass cleaner", "mirror cleaner", "streak free glass cleaner", "window cleaner"],
  },
  {
    slug: "dish-wash-liquid",
    name: "Dish Wash Liquid",
    category: "Kitchen & Dishwash",
    tagline: "Tough on grease, soft on hands",
    taglineHi: "चिकनाई पर सख्त, हाथों पर नरम",
    shortDescription:
      "A concentrated, lemon-powered dishwash liquid that cuts through oil and grease, leaving utensils squeaky clean and shining.",
    shortDescriptionHi:
      "नींबू की ताकत वाला कंसन्ट्रेटेड डिशवॉश लिक्विड जो तेल और चिकनाई काटकर बर्तनों को एकदम साफ और चमकदार बनाता है।",
    description:
      "DPT Dish Wash Liquid is a high-performance, lemon-fortified formula that dissolves stubborn grease and dried-on food in seconds. Rich, long-lasting foam means fewer squeezes per wash, while the gentle, skin-friendly base protects your hands. It rinses off cleanly to leave your utensils, glassware and cookware spotless and shining.",
    descriptionHi:
      "DPT डिशवॉश लिक्विड एक हाई-परफॉर्मेंस, नींबू-युक्त फॉर्मूला है जो जिद्दी चिकनाई और सूखे खाने के दाग सेकंडों में घोल देता है। गाढ़ा, देर तक टिकने वाला झाग यानी हर धुलाई में कम लिक्विड, और सौम्य, त्वचा के अनुकूल बेस आपके हाथों का ख्याल रखता है। यह आसानी से धुल जाता है और बर्तनों, काँच के सामान और कुकवेयर को बेदाग चमक देता है।",
    image: "/products/dish-wash-liquid.png",
    fragrance: "Lemon",
    fragranceHi: "लेमन",
    featured: true,
    benefits: [
      "Cuts through tough grease and oil fast",
      "Rich, long-lasting lather — more washes per bottle",
      "Leaves no residue or smell on utensils",
      "Gentle and skin-friendly formula",
      "Added shine for glassware and steel",
    ],
    benefitsHi: [
      "जिद्दी चिकनाई और तेल को तेज़ी से काटता है",
      "गाढ़ा, देर तक टिकने वाला झाग — हर बोतल से ज़्यादा धुलाई",
      "बर्तनों पर कोई अवशेष या गंध नहीं छोड़ता",
      "सौम्य और त्वचा के अनुकूल फॉर्मूला",
      "काँच और स्टील के बर्तनों में एक्स्ट्रा चमक",
    ],
    features: [
      "Concentrated active-cleaning agents",
      "Real lemon extract for grease-cutting",
      "Fast-rinse, low-residue base",
      "Works in hard and soft water",
    ],
    featuresHi: [
      "कंसन्ट्रेटेड एक्टिव-क्लीनिंग एजेंट",
      "चिकनाई काटने के लिए असली नींबू का अर्क",
      "जल्दी धुलने वाला, कम-अवशेष बेस",
      "हार्ड और सॉफ्ट दोनों पानी में असरदार",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid gel", valueHi: "लिक्विड जेल" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Lemon", valueHi: "लेमन" },
      { label: "Dilution", labelHi: "डाइल्यूशन", value: "A few drops per wash / can be diluted", valueHi: "हर धुलाई में कुछ बूँदें / घोलकर भी इस्तेमाल कर सकते हैं" },
      { label: "Foam", labelHi: "झाग", value: "High, long-lasting", valueHi: "गाढ़ा, देर तक टिकने वाला" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Apply a few drops onto a wet scrub or sponge.",
      "Work into a lather and clean utensils.",
      "Rinse thoroughly with clean water.",
      "For soaking, add a capful to a basin of water.",
    ],
    usageHi: [
      "गीले स्क्रब या स्पंज पर कुछ बूँदें लगाएँ।",
      "झाग बनाकर बर्तन साफ करें।",
      "साफ पानी से अच्छी तरह धोएँ।",
      "भिगोने के लिए बेसिन भर पानी में एक ढक्कन डालें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Is it safe for non-stick cookware?", questionHi: "क्या यह नॉन-स्टिक बर्तनों के लिए सुरक्षित है?", answer: "Yes, it is gentle on non-stick coatings when used with a soft sponge.", answerHi: "हाँ, नरम स्पंज के साथ इस्तेमाल करने पर यह नॉन-स्टिक कोटिंग पर सौम्य है।" },
      { question: "Can restaurants use it in bulk?", questionHi: "क्या रेस्टोरेंट इसे बल्क में इस्तेमाल कर सकते हैं?", answer: "Absolutely — our 5L and 20L packs are made for commercial kitchens and restaurants.", answerHi: "बिल्कुल — हमारे 5L और 20L पैक कमर्शियल किचन और रेस्टोरेंट के लिए ही बने हैं।" },
    ],
    keywords: ["dish wash liquid", "dishwashing liquid", "utensil cleaner", "grease remover", "lemon dishwash"],
  },
  {
    slug: "liquid-detergent",
    name: "Liquid Detergent",
    category: "Fabric Care",
    tagline: "Brilliant clean in every wash",
    taglineHi: "हर धुलाई में शानदार सफाई",
    shortDescription:
      "A powerful liquid detergent for machine and hand wash that removes tough stains and keeps colours bright — with no powder residue.",
    shortDescriptionHi:
      "मशीन और हाथ धुलाई के लिए दमदार लिक्विड डिटर्जेंट जो जिद्दी दाग हटाता है और रंगों को चमकदार रखता है — बिना पाउडर के अवशेष के।",
    description:
      "DPT Liquid Detergent dissolves instantly to penetrate deep into fabric fibres, lifting away tough stains, sweat, dirt and odour. Unlike powders, it leaves no white residue on clothes or in your machine, and its colour-guard formula keeps whites bright and colours vivid, wash after wash. Suitable for both top-load and front-load machines as well as hand wash.",
    descriptionHi:
      "DPT लिक्विड डिटर्जेंट तुरंत घुलकर कपड़ों के रेशों के अंदर तक पहुँचता है और जिद्दी दाग, पसीना, मैल और बदबू को निकाल देता है। पाउडर की तरह यह कपड़ों या मशीन में सफेद अवशेष नहीं छोड़ता, और इसका कलर-गार्ड फॉर्मूला हर धुलाई में सफेद कपड़ों को चमकदार और रंगों को गहरा बनाए रखता है। टॉप-लोड, फ्रंट-लोड मशीन और हाथ धुलाई — तीनों के लिए उपयुक्त।",
    image: "/products/liquid-detergent.png",
    fragrance: "Spring Fresh",
    fragranceHi: "स्प्रिंग फ्रेश",
    featured: false,
    benefits: [
      "Removes tough stains and body odour",
      "No powder residue on clothes or machine",
      "Colour-guard keeps clothes vibrant",
      "Dissolves instantly, even in cold water",
      "Gentle on fabrics and machine parts",
    ],
    benefitsHi: [
      "जिद्दी दाग और शरीर की गंध हटाता है",
      "कपड़ों या मशीन पर पाउडर जैसा अवशेष नहीं",
      "कलर-गार्ड कपड़ों के रंग निखरे रखता है",
      "ठंडे पानी में भी तुरंत घुल जाता है",
      "कपड़ों और मशीन के पुर्जों पर सौम्य",
    ],
    features: [
      "Deep-penetrating liquid formula",
      "Suitable for top-load and front-load",
      "Concentrated — small dose per load",
      "Bright-fresh fragrance",
    ],
    featuresHi: [
      "गहराई तक पहुँचने वाला लिक्विड फॉर्मूला",
      "टॉप-लोड और फ्रंट-लोड दोनों के लिए उपयुक्त",
      "कंसन्ट्रेटेड — हर लोड में थोड़ी-सी मात्रा काफी",
      "ताज़गी भरी खुशबू",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid", valueHi: "लिक्विड" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Spring Fresh", valueHi: "स्प्रिंग फ्रेश" },
      { label: "Compatibility", labelHi: "अनुकूलता", value: "Top-load, front-load & hand wash", valueHi: "टॉप-लोड, फ्रंट-लोड व हाथ धुलाई" },
      { label: "Dose", labelHi: "मात्रा", value: "1 capful per medium load", valueHi: "मीडियम लोड के लिए 1 ढक्कन" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "For machines, pour one capful into the detergent drawer.",
      "For hand wash, dilute one capful in a bucket of water and soak for 15 minutes.",
      "Increase the dose slightly for heavily soiled loads.",
    ],
    usageHi: [
      "मशीन के लिए, डिटर्जेंट ड्रॉअर में एक ढक्कन डालें।",
      "हाथ धुलाई के लिए, बाल्टी भर पानी में एक ढक्कन घोलें और कपड़े 15 मिनट भिगोएँ।",
      "ज़्यादा गंदे कपड़ों के लिए मात्रा थोड़ी बढ़ा दें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "2 Litre", "5 Litre"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Is it safe for front-load machines?", questionHi: "क्या यह फ्रंट-लोड मशीन के लिए सुरक्षित है?", answer: "Yes, it is low-foam and fully compatible with front-load and top-load machines.", answerHi: "हाँ, यह लो-फोम है और फ्रंट-लोड व टॉप-लोड दोनों मशीनों के साथ पूरी तरह काम करता है।" },
      { question: "Can it be used for delicate clothes?", questionHi: "क्या इसे नाज़ुक कपड़ों के लिए इस्तेमाल कर सकते हैं?", answer: "Yes, dilute well and hand wash gently for delicates and woollens.", answerHi: "हाँ, नाज़ुक और ऊनी कपड़ों के लिए अच्छी तरह घोलकर हल्के हाथ से धोएँ।" },
    ],
    keywords: ["liquid detergent", "laundry liquid", "washing machine detergent", "fabric wash"],
  },
  {
    slug: "hand-wash",
    name: "Hand Wash",
    category: "Personal Care",
    tagline: "Germ protection with a soft touch",
    taglineHi: "कीटाणुओं से सुरक्षा, कोमल एहसास के साथ",
    shortDescription:
      "A moisturising liquid hand wash that removes germs and dirt while keeping hands soft, smooth and beautifully fragranced.",
    shortDescriptionHi:
      "एक मॉइस्चराइज़िंग लिक्विड हैंड वॉश जो कीटाणु और मैल हटाता है और हाथों को नरम, मुलायम और महकता हुआ रखता है।",
    description:
      "DPT Hand Wash combines effective germ protection with skin-loving care. The rich, creamy lather cleans away dirt and germs, while added moisturisers and glycerine keep your hands soft, not dry. Perfect for homes, offices, hotels, restaurants and hospitals where frequent hand hygiene matters.",
    descriptionHi:
      "DPT हैंड वॉश कीटाणुओं से असरदार सुरक्षा और त्वचा की देखभाल — दोनों साथ देता है। इसका गाढ़ा, क्रीमी झाग मैल और कीटाणुओं को साफ करता है, जबकि मॉइस्चराइज़र और ग्लिसरीन हाथों को नरम रखते हैं, रूखा नहीं होने देते। घरों, दफ्तरों, होटलों, रेस्टोरेंट और अस्पतालों के लिए एकदम सही, जहाँ बार-बार हाथ धोना ज़रूरी है।",
    image: "/products/hand-wash.png",
    fragrance: "Available in Rose, Lemon, Aloe Vera and Sea Breeze",
    fragranceHi: "रोज़, लेमन, एलोवेरा और सी ब्रीज़ में उपलब्ध",
    featured: true,
    benefits: [
      "Effective germ protection",
      "Moisturisers keep hands soft",
      "Rich, creamy lather",
      "Gentle, non-drying formula",
      "Long-lasting fresh fragrance",
    ],
    benefitsHi: [
      "कीटाणुओं से असरदार सुरक्षा",
      "मॉइस्चराइज़र हाथों को नरम रखते हैं",
      "गाढ़ा, क्रीमी झाग",
      "सौम्य फॉर्मूला, त्वचा रूखी नहीं होती",
      "देर तक टिकने वाली ताज़ी खुशबू",
    ],
    features: [
      "Glycerine + moisturiser enriched",
      "pH-balanced for daily use",
      "Pump dispenser for controlled use",
      "Refill packs available",
    ],
    featuresHi: [
      "ग्लिसरीन + मॉइस्चराइज़र से भरपूर",
      "रोज़ाना इस्तेमाल के लिए pH-बैलेंस्ड",
      "नपी-तुली मात्रा के लिए पंप डिस्पेंसर",
      "रिफिल पैक उपलब्ध",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid", valueHi: "लिक्विड" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Rose / Lemon / Aloe Vera / Sea Breeze", valueHi: "रोज़ / लेमन / एलोवेरा / सी ब्रीज़" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Wet hands with water.",
      "Dispense one pump of hand wash onto palms.",
      "Rub for at least 20 seconds, covering all areas.",
      "Rinse thoroughly with clean water.",
    ],
    usageHi: [
      "हाथों को पानी से गीला करें।",
      "हथेली पर हैंड वॉश का एक पंप लें।",
      "कम से कम 20 सेकंड तक हर हिस्से पर मलें।",
      "साफ पानी से अच्छी तरह धो लें।",
    ],
    packingSizes: ["250 ml pump", "500 ml pump", "1 Litre refill", "5 Litre refill"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Is it suitable for sensitive skin?", questionHi: "क्या यह संवेदनशील त्वचा के लिए उपयुक्त है?", answer: "Yes, the Aloe Vera variant is specially formulated for gentle, everyday use.", answerHi: "हाँ, एलोवेरा वैरिएंट खासतौर पर सौम्य, रोज़ाना इस्तेमाल के लिए बनाया गया है।" },
      { question: "Do you offer refill packs?", questionHi: "क्या आप रिफिल पैक देते हैं?", answer: "Yes, economical 1L and 5L refills help reduce plastic and cost.", answerHi: "हाँ, किफायती 1L और 5L रिफिल प्लास्टिक और खर्च दोनों घटाते हैं।" },
    ],
    keywords: ["hand wash", "liquid hand wash", "germ protection hand wash", "moisturising hand wash"],
  },
  {
    slug: "phenyl",
    name: "Phenyl (White & Black)",
    category: "Floor Care",
    tagline: "Classic disinfectant, modern strength",
    taglineHi: "क्लासिक डिसइन्फेक्टेंट, आधुनिक ताकत",
    shortDescription:
      "A concentrated white/black phenyl disinfectant that cleans, deodorises and disinfects floors, drains and large surface areas.",
    shortDescriptionHi:
      "एक कंसन्ट्रेटेड सफेद/काला फिनाइल डिसइन्फेक्टेंट जो फर्श, नालियों और बड़े इलाकों को साफ, महकदार और कीटाणु-मुक्त बनाता है।",
    description:
      "DPT Phenyl is a powerful concentrated disinfectant for floors, corridors, drains and washrooms. Available in classic white (emulsion) and black variants, it destroys germs, controls odour and leaves a fresh, sanitised environment. Ideal for institutions, hospitals, schools, factories and large housing complexes where economical, high-strength disinfection is essential.",
    descriptionHi:
      "DPT फिनाइल फर्श, गलियारों, नालियों और वॉशरूम के लिए एक दमदार कंसन्ट्रेटेड डिसइन्फेक्टेंट है। क्लासिक सफेद (इमल्शन) और काले वैरिएंट में उपलब्ध, यह कीटाणुओं को खत्म करता है, बदबू पर काबू रखता है और माहौल को ताज़ा व सैनिटाइज़्ड बनाता है। संस्थानों, अस्पतालों, स्कूलों, फैक्ट्रियों और बड़ी हाउसिंग सोसाइटियों के लिए आदर्श, जहाँ किफायती, हाई-स्ट्रेंथ डिसइन्फेक्शन ज़रूरी है।",
    image: "/products/phenyl.png",
    fragrance: "Classic Phenyl / Floral",
    fragranceHi: "क्लासिक फिनाइल / फ्लोरल",
    featured: false,
    benefits: [
      "Strong disinfectant and deodoriser",
      "Highly concentrated and economical",
      "Ideal for large floor areas and drains",
      "Controls odour at the source",
      "Available in white and black variants",
    ],
    benefitsHi: [
      "दमदार डिसइन्फेक्टेंट और डिओडराइज़र",
      "हाई कंसन्ट्रेट और किफायती",
      "बड़े फर्श और नालियों के लिए आदर्श",
      "बदबू को जड़ से रोकता है",
      "सफेद और काले वैरिएंट में उपलब्ध",
    ],
    features: [
      "High-strength active phenolic content",
      "Milky-white stable emulsion (white variant)",
      "Long-lasting sanitised fragrance",
      "Made for institutional use",
    ],
    featuresHi: [
      "हाई-स्ट्रेंथ एक्टिव फेनोलिक कंटेंट",
      "दूधिया-सफेद स्थिर इमल्शन (सफेद वैरिएंट)",
      "देर तक टिकने वाली सैनिटाइज़्ड खुशबू",
      "संस्थागत इस्तेमाल के लिए बना",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Emulsion / liquid concentrate", valueHi: "इमल्शन / लिक्विड कंसन्ट्रेट" },
      { label: "Variants", labelHi: "वैरिएंट", value: "White & Black", valueHi: "सफेद व काला" },
      { label: "Dilution", labelHi: "डाइल्यूशन", value: "1 part phenyl to 20–40 parts water", valueHi: "1 भाग फिनाइल, 20–40 भाग पानी" },
      { label: "Use", labelHi: "उपयोग", value: "Floors, drains, washrooms", valueHi: "फर्श, नालियाँ, वॉशरूम" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Dilute as per the soiling level (1:20 to 1:40 with water).",
      "Mop floors or pour into drains for deodorising.",
      "Allow contact time for full disinfection.",
    ],
    usageHi: [
      "गंदगी के हिसाब से घोल बनाएँ (पानी के साथ 1:20 से 1:40)।",
      "फर्श पर पोछा लगाएँ या बदबू दूर करने के लिए नालियों में डालें।",
      "पूरे डिसइन्फेक्शन के लिए कुछ देर लगा रहने दें।",
    ],
    packingSizes: ["1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "What is the difference between white and black phenyl?", questionHi: "सफेद और काले फिनाइल में क्या अंतर है?", answer: "White phenyl is a refined milky emulsion for indoor floors; black phenyl is a stronger disinfectant often used for drains and outdoor areas.", answerHi: "सफेद फिनाइल घर के अंदर के फर्श के लिए रिफाइंड दूधिया इमल्शन है; काला फिनाइल ज़्यादा ताकतवर डिसइन्फेक्टेंट है जो अक्सर नालियों और बाहरी इलाकों में इस्तेमाल होता है।" },
      { question: "Is it good for institutions?", questionHi: "क्या यह संस्थानों के लिए अच्छा है?", answer: "Yes, our bulk packs are widely used by hospitals, schools and factories.", answerHi: "हाँ, हमारे बल्क पैक अस्पतालों, स्कूलों और फैक्ट्रियों में बड़े पैमाने पर इस्तेमाल होते हैं।" },
    ],
    keywords: ["phenyl", "white phenyl", "black phenyl", "floor disinfectant", "drain cleaner"],
  },
  {
    slug: "fabric-conditioner",
    name: "Fabric Conditioner",
    category: "Fabric Care",
    tagline: "Soft, fresh and long-lasting",
    taglineHi: "मुलायम, ताज़ा और देर तक महकता",
    shortDescription:
      "A premium fabric conditioner that makes clothes irresistibly soft, reduces wrinkles and locks in a fresh fragrance for days.",
    shortDescriptionHi:
      "एक प्रीमियम फैब्रिक कंडीशनर जो कपड़ों को बेहद मुलायम बनाता है, सिलवटें घटाता है और कई दिनों तक ताज़ी खुशबू बनाए रखता है।",
    description:
      "DPT Fabric Conditioner wraps each fibre in a protective layer of softness, making your clothes feel luxurious against the skin. It reduces wrinkles for easier ironing, protects fabric from wear, controls static and infuses garments with a long-lasting freshness that lingers wash after wash.",
    descriptionHi:
      "DPT फैब्रिक कंडीशनर हर रेशे को मुलायमियत की सुरक्षा परत में लपेट देता है, जिससे कपड़े त्वचा पर बेहद आरामदायक महसूस होते हैं। यह सिलवटें घटाकर इस्त्री आसान बनाता है, कपड़ों को घिसाव से बचाता है, स्टैटिक पर काबू रखता है और हर धुलाई के बाद कपड़ों में देर तक टिकने वाली ताज़गी भर देता है।",
    image: "/products/fabric-conditioner.png",
    fragrance: "Available in Blossom, Morning Fresh and Baby Soft",
    fragranceHi: "ब्लॉसम, मॉर्निंग फ्रेश और बेबी सॉफ्ट में उपलब्ध",
    featured: false,
    benefits: [
      "Makes clothes irresistibly soft",
      "Long-lasting fragrance for days",
      "Reduces wrinkles and eases ironing",
      "Controls static cling",
      "Protects fabric fibres and colour",
    ],
    benefitsHi: [
      "कपड़ों को बेहद मुलायम बनाता है",
      "कई दिनों तक टिकने वाली खुशबू",
      "सिलवटें घटाता है, इस्त्री आसान बनाता है",
      "कपड़ों का स्टैटिक चिपकना रोकता है",
      "कपड़ों के रेशों और रंग की रक्षा करता है",
    ],
    features: [
      "Advanced fibre-softening technology",
      "Concentrated — small cap per load",
      "Suitable for all machine types",
      "Skin-friendly, dermatologically mild",
    ],
    featuresHi: [
      "एडवांस्ड फाइबर-सॉफ्टनिंग तकनीक",
      "कंसन्ट्रेटेड — हर लोड में छोटा ढक्कन काफी",
      "हर तरह की मशीन के लिए उपयुक्त",
      "त्वचा के अनुकूल, डर्मेटोलॉजिकली माइल्ड",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid", valueHi: "लिक्विड" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Blossom / Morning Fresh / Baby Soft", valueHi: "ब्लॉसम / मॉर्निंग फ्रेश / बेबी सॉफ्ट" },
      { label: "Use stage", labelHi: "इस्तेमाल का चरण", value: "Final rinse cycle", valueHi: "आखिरी रिंस साइकिल" },
      { label: "Dose", labelHi: "मात्रा", value: "1 capful per load", valueHi: "हर लोड में 1 ढक्कन" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "After washing, add one capful during the final rinse.",
      "For hand wash, dilute in the last bucket of rinse water.",
      "Do not pour directly on dry clothes.",
    ],
    usageHi: [
      "धुलाई के बाद, आखिरी रिंस के समय एक ढक्कन डालें।",
      "हाथ धुलाई के लिए, आखिरी बाल्टी के पानी में घोलें।",
      "सूखे कपड़ों पर सीधे न डालें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "When should I add fabric conditioner?", questionHi: "फैब्रिक कंडीशनर कब डालना चाहिए?", answer: "Always add it during the final rinse, after the detergent has been washed out.", answerHi: "हमेशा आखिरी रिंस के समय डालें, जब डिटर्जेंट पूरी तरह धुल चुका हो।" },
      { question: "Is it safe for baby clothes?", questionHi: "क्या यह बच्चों के कपड़ों के लिए सुरक्षित है?", answer: "Yes, the Baby Soft variant is specially made for delicate skin.", answerHi: "हाँ, बेबी सॉफ्ट वैरिएंट खासतौर पर नाज़ुक त्वचा के लिए बनाया गया है।" },
    ],
    keywords: ["fabric conditioner", "fabric softener", "clothes softener", "laundry conditioner"],
  },
  {
    slug: "bathroom-cleaner",
    name: "Bathroom Cleaner",
    category: "Bathroom & Toilet",
    tagline: "Deep shine for every corner",
    taglineHi: "हर कोने में गहरी चमक",
    shortDescription:
      "A tough surface cleaner that removes soap scum, hard-water marks and stains from tiles, taps, sinks and bathroom fittings.",
    shortDescriptionHi:
      "एक दमदार सरफेस क्लीनर जो टाइल्स, नल, सिंक और बाथरूम फिटिंग्स से साबुन की परत, हार्ड वॉटर के निशान और दाग हटाता है।",
    description:
      "DPT Bathroom Cleaner tackles the toughest bathroom grime — soap scum, hard-water spots, mineral deposits and dirt — on tiles, wash basins, taps, showers and fittings. Its powerful yet surface-safe formula restores the original shine of your bathroom while leaving a hygienic, fresh finish.",
    descriptionHi:
      "DPT बाथरूम क्लीनर बाथरूम की सबसे जिद्दी गंदगी — साबुन की परत, हार्ड वॉटर के धब्बे, मिनरल जमाव और मैल — को टाइल्स, वॉश बेसिन, नल, शावर और फिटिंग्स से हटा देता है। इसका ताकतवर लेकिन सतह-सुरक्षित फॉर्मूला आपके बाथरूम की असली चमक लौटाता है और एक हाइजीनिक, ताज़ा फिनिश देता है।",
    image: "/products/bathroom-cleaner.png",
    fragrance: "Ocean Fresh",
    fragranceHi: "ओशन फ्रेश",
    featured: false,
    benefits: [
      "Removes soap scum and hard-water marks",
      "Restores shine to tiles and fittings",
      "Kills germs for a hygienic bathroom",
      "Safe on ceramic, chrome and steel",
      "Fresh, clean fragrance",
    ],
    benefitsHi: [
      "साबुन की परत और हार्ड वॉटर के निशान हटाता है",
      "टाइल्स और फिटिंग्स की चमक लौटाता है",
      "कीटाणुओं को मारकर बाथरूम हाइजीनिक रखता है",
      "सिरेमिक, क्रोम और स्टील पर सुरक्षित",
      "ताज़ी, स्वच्छ खुशबू",
    ],
    features: [
      "Powerful surface-active formula",
      "Trigger-spray for even coverage",
      "Non-abrasive, fitting-safe",
      "Works on tiles, glass and metal",
    ],
    featuresHi: [
      "दमदार सरफेस-एक्टिव फॉर्मूला",
      "एक समान छिड़काव के लिए ट्रिगर-स्प्रे",
      "नॉन-एब्रेसिव, फिटिंग्स के लिए सुरक्षित",
      "टाइल्स, काँच और मेटल पर असरदार",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid spray", valueHi: "लिक्विड स्प्रे" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Ocean Fresh", valueHi: "ओशन फ्रेश" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Surfaces", labelHi: "सतहें", value: "Tiles, basins, taps, showers", valueHi: "टाइल्स, बेसिन, नल, शावर" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Spray directly onto the wet surface.",
      "Leave for 2–3 minutes to dissolve grime.",
      "Scrub lightly and rinse with water.",
    ],
    usageHi: [
      "गीली सतह पर सीधे स्प्रे करें।",
      "मैल घुलने के लिए 2–3 मिनट छोड़ दें।",
      "हल्का रगड़ें और पानी से धो लें।",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Can it be used on shower glass?", questionHi: "क्या इसे शावर के शीशे पर इस्तेमाल कर सकते हैं?", answer: "Yes, it removes water spots from shower glass and leaves it clear.", answerHi: "हाँ, यह शावर ग्लास से पानी के धब्बे हटाकर उसे साफ बना देता है।" },
      { question: "Is it safe on chrome taps?", questionHi: "क्या यह क्रोम नल पर सुरक्षित है?", answer: "Yes, it is non-corrosive and safe for chrome and steel fittings.", answerHi: "हाँ, यह नॉन-कोरोसिव है और क्रोम व स्टील फिटिंग्स के लिए सुरक्षित है।" },
    ],
    keywords: ["bathroom cleaner", "tile cleaner", "soap scum remover", "washroom cleaner"],
  },
  {
    slug: "kitchen-cleaner",
    name: "Kitchen Cleaner",
    category: "Kitchen & Dishwash",
    tagline: "Degrease. Clean. Shine.",
    taglineHi: "चिकनाई हटाएँ। साफ करें। चमकाएँ।",
    shortDescription:
      "A degreasing kitchen cleaner that removes oil, grease and food stains from platforms, chimneys, tiles and gas stoves.",
    shortDescriptionHi:
      "एक डिग्रीज़िंग किचन क्लीनर जो प्लेटफॉर्म, चिमनी, टाइल्स और गैस स्टोव से तेल, चिकनाई और खाने के दाग हटाता है।",
    description:
      "DPT Kitchen Cleaner is a heavy-duty degreaser designed for the toughest kitchen messes. It dissolves baked-on oil, grease splatter and food residue from countertops, tiles, chimneys, gas stoves and sinks — quickly and without hard scrubbing — leaving your kitchen hygienic, shining and food-safe.",
    descriptionHi:
      "DPT किचन क्लीनर किचन की सबसे मुश्किल गंदगी के लिए बना हैवी-ड्यूटी डिग्रीज़र है। यह काउंटरटॉप, टाइल्स, चिमनी, गैस स्टोव और सिंक से जमी हुई चिकनाई, तेल के छींटे और खाने के अवशेष — तेज़ी से और बिना ज़ोरदार रगड़ के — घोल देता है और आपके किचन को हाइजीनिक, चमकदार और फूड-सेफ बनाता है।",
    image: "/products/kitchen-cleaner.png",
    fragrance: "Citrus Zest",
    fragranceHi: "सिट्रस ज़ेस्ट",
    featured: false,
    benefits: [
      "Cuts through baked-on oil and grease",
      "Removes food stains and splatter",
      "Food-contact-safe when rinsed",
      "Restores shine to platforms and tiles",
      "Fresh citrus fragrance",
    ],
    benefitsHi: [
      "जमी हुई चिकनाई और तेल को काटता है",
      "खाने के दाग और छींटे हटाता है",
      "पानी से धोने पर फूड-कॉन्टैक्ट के लिए सुरक्षित",
      "प्लेटफॉर्म और टाइल्स की चमक लौटाता है",
      "ताज़ी सिट्रस खुशबू",
    ],
    features: [
      "Powerful degreasing agents",
      "Trigger-spray application",
      "Safe on granite, steel and tiles",
      "Quick action, minimal scrubbing",
    ],
    featuresHi: [
      "दमदार डिग्रीज़िंग एजेंट",
      "ट्रिगर-स्प्रे से आसान इस्तेमाल",
      "ग्रेनाइट, स्टील और टाइल्स पर सुरक्षित",
      "तेज़ असर, कम रगड़ाई",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid spray", valueHi: "लिक्विड स्प्रे" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Citrus Zest", valueHi: "सिट्रस ज़ेस्ट" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Surfaces", labelHi: "सतहें", value: "Countertops, chimney, stove, tiles", valueHi: "काउंटरटॉप, चिमनी, स्टोव, टाइल्स" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Spray onto the greasy surface.",
      "Leave for 1–2 minutes for heavy grease.",
      "Wipe with a damp cloth or sponge.",
      "Rinse food-contact surfaces with water after cleaning.",
    ],
    usageHi: [
      "चिकनाई वाली सतह पर स्प्रे करें।",
      "ज़्यादा जमी चिकनाई के लिए 1–2 मिनट छोड़ दें।",
      "गीले कपड़े या स्पंज से पोंछें।",
      "सफाई के बाद खाने के संपर्क वाली सतहों को पानी से धो लें।",
    ],
    packingSizes: ["500 ml spray", "1 Litre refill", "5 Litre"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Can it clean a kitchen chimney?", questionHi: "क्या यह किचन की चिमनी साफ कर सकता है?", answer: "Yes, it is highly effective on chimney filters and oily surfaces.", answerHi: "हाँ, यह चिमनी फिल्टर और तेल जमी सतहों पर बेहद असरदार है।" },
      { question: "Is it safe near food?", questionHi: "क्या यह खाने के पास सुरक्षित है?", answer: "Rinse food-contact surfaces with clean water after cleaning for full safety.", answerHi: "पूरी सुरक्षा के लिए सफाई के बाद खाने के संपर्क वाली सतहों को साफ पानी से धो लें।" },
    ],
    keywords: ["kitchen cleaner", "degreaser", "oil stain remover", "chimney cleaner"],
  },
  {
    slug: "multi-purpose-cleaner",
    name: "Multi Purpose Cleaner",
    category: "Glass & Surface",
    tagline: "One cleaner for the whole home",
    taglineHi: "पूरे घर के लिए एक ही क्लीनर",
    shortDescription:
      "A versatile all-surface cleaner that cleans, disinfects and shines floors, walls, doors, furniture and more.",
    shortDescriptionHi:
      "एक बहुउपयोगी ऑल-सरफेस क्लीनर जो फर्श, दीवारों, दरवाज़ों, फर्नीचर और बहुत कुछ को साफ, कीटाणु-मुक्त और चमकदार बनाता है।",
    description:
      "DPT Multi Purpose Cleaner is your all-in-one hygiene solution. From floors and walls to doors, furniture, plastic, glass and painted surfaces, it cleans, disinfects and deodorises in a single step. Its balanced formula is tough on dirt yet gentle on surfaces — the smart, economical choice for busy homes and businesses.",
    descriptionHi:
      "DPT मल्टी परपज़ क्लीनर आपका ऑल-इन-वन हाइजीन समाधान है। फर्श और दीवारों से लेकर दरवाज़ों, फर्नीचर, प्लास्टिक, काँच और पेंट की हुई सतहों तक — यह एक ही चरण में सफाई, डिसइन्फेक्शन और ताज़गी तीनों देता है। इसका संतुलित फॉर्मूला मैल पर सख्त और सतहों पर सौम्य है — व्यस्त घरों और कारोबारों के लिए समझदार, किफायती विकल्प।",
    image: "/products/multi-purpose-cleaner.png",
    fragrance: "Fresh Lily",
    fragranceHi: "फ्रेश लिली",
    featured: true,
    benefits: [
      "Cleans almost every washable surface",
      "Disinfects and deodorises in one step",
      "Saves money — replaces multiple cleaners",
      "Gentle on surfaces, tough on dirt",
      "Pleasant, fresh fragrance",
    ],
    benefitsHi: [
      "लगभग हर धुलने योग्य सतह साफ करता है",
      "एक ही चरण में डिसइन्फेक्शन और ताज़गी",
      "पैसे बचाता है — कई क्लीनर्स की जगह एक",
      "सतहों पर सौम्य, मैल पर सख्त",
      "सुहानी, ताज़ी खुशबू",
    ],
    features: [
      "Versatile multi-surface formula",
      "Dilutable concentrate",
      "Antibacterial action",
      "Streak-free finish",
    ],
    featuresHi: [
      "बहुउपयोगी मल्टी-सरफेस फॉर्मूला",
      "घोलकर इस्तेमाल होने वाला कंसन्ट्रेट",
      "एंटीबैक्टीरियल असर",
      "बेदाग, स्ट्रीक-फ्री फिनिश",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid concentrate", valueHi: "लिक्विड कंसन्ट्रेट" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Fresh Lily", valueHi: "फ्रेश लिली" },
      { label: "Dilution", labelHi: "डाइल्यूशन", value: "As needed — light to heavy soiling", valueHi: "ज़रूरत के हिसाब से — हल्की से भारी गंदगी तक" },
      { label: "Surfaces", labelHi: "सतहें", value: "Floors, walls, wood, plastic, glass", valueHi: "फर्श, दीवारें, लकड़ी, प्लास्टिक, काँच" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "For light cleaning, dilute a capful in water and wipe.",
      "For tough dirt, use undiluted on a cloth.",
      "Suitable for mopping, wiping and spray cleaning.",
    ],
    usageHi: [
      "हल्की सफाई के लिए, पानी में एक ढक्कन घोलकर पोंछें।",
      "जिद्दी मैल के लिए, कपड़े पर बिना घोले लगाएँ।",
      "पोछा लगाने, पोंछने और स्प्रे — तीनों तरह की सफाई के लिए उपयुक्त।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Which surfaces can I use it on?", questionHi: "इसे किन सतहों पर इस्तेमाल कर सकते हैं?", answer: "Almost any washable surface — floors, walls, doors, furniture, plastic and glass.", answerHi: "लगभग किसी भी धुलने योग्य सतह पर — फर्श, दीवारें, दरवाज़े, फर्नीचर, प्लास्टिक और काँच।" },
      { question: "Is it antibacterial?", questionHi: "क्या यह एंटीबैक्टीरियल है?", answer: "Yes, it disinfects surfaces while cleaning.", answerHi: "हाँ, यह सफाई के साथ-साथ सतहों को कीटाणु-मुक्त भी करता है।" },
    ],
    keywords: ["multi purpose cleaner", "all purpose cleaner", "surface cleaner", "disinfectant cleaner"],
  },
  {
    slug: "room-freshener",
    name: "Room Freshener",
    category: "Air Care",
    tagline: "Instant freshness, lasting mood",
    taglineHi: "तुरंत ताज़गी, देर तक खुशनुमा माहौल",
    shortDescription:
      "A long-lasting air freshener that instantly neutralises odours and fills your space with a premium, welcoming fragrance.",
    shortDescriptionHi:
      "एक देर तक टिकने वाला एयर फ्रेशनर जो बदबू को तुरंत बेअसर करता है और आपकी जगह को प्रीमियम, स्वागत भरी खुशबू से भर देता है।",
    description:
      "DPT Room Freshener does more than mask smells — it neutralises odour molecules and fills the air with a rich, long-lasting fragrance. A few sprays transform living rooms, bedrooms, washrooms, offices and cars into fresh, welcoming spaces. Available in a range of premium fragrances to match every mood.",
    descriptionHi:
      "DPT रूम फ्रेशनर सिर्फ बदबू छिपाता नहीं — यह बदबू के कणों को बेअसर करता है और हवा में गहरी, देर तक टिकने वाली खुशबू घोल देता है। कुछ ही स्प्रे लिविंग रूम, बेडरूम, वॉशरूम, ऑफिस और कार को ताज़ा, स्वागत करती जगहों में बदल देते हैं। हर मूड के हिसाब से प्रीमियम खुशबुओं की रेंज में उपलब्ध।",
    image: "/products/room-freshener.png",
    fragrance: "Available in Lavender, Citrus Bloom, Rose and Ocean",
    fragranceHi: "लैवेंडर, सिट्रस ब्लूम, रोज़ और ओशन में उपलब्ध",
    featured: false,
    benefits: [
      "Neutralises odour, doesn't just mask it",
      "Long-lasting premium fragrance",
      "Perfect for rooms, cars and washrooms",
      "Fine mist spreads evenly",
      "Multiple fragrance options",
    ],
    benefitsHi: [
      "बदबू को बेअसर करता है, सिर्फ छिपाता नहीं",
      "देर तक टिकने वाली प्रीमियम खुशबू",
      "कमरों, कारों और वॉशरूम के लिए परफेक्ट",
      "बारीक फुहार समान रूप से फैलती है",
      "कई खुशबुओं के विकल्प",
    ],
    features: [
      "Concentrated fragrance oils",
      "Non-staining fine mist",
      "Odour-neutralising technology",
      "Compact, portable bottle",
    ],
    featuresHi: [
      "कंसन्ट्रेटेड फ्रेगरेंस ऑयल",
      "दाग न छोड़ने वाली बारीक फुहार",
      "बदबू बेअसर करने वाली तकनीक",
      "कॉम्पैक्ट, साथ ले जाने लायक बोतल",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Aerosol / pump spray", valueHi: "एरोसोल / पंप स्प्रे" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Lavender / Citrus Bloom / Rose / Ocean", valueHi: "लैवेंडर / सिट्रस ब्लूम / रोज़ / ओशन" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Use", labelHi: "उपयोग", value: "Home, office, washroom, car", valueHi: "घर, ऑफिस, वॉशरूम, कार" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Hold upright and spray 2–3 times into the air.",
      "Direct away from face, food and flames.",
      "Re-apply as needed for continuous freshness.",
    ],
    usageHi: [
      "बोतल सीधी पकड़ें और हवा में 2–3 बार स्प्रे करें।",
      "चेहरे, खाने और आग से दूर रखते हुए स्प्रे करें।",
      "लगातार ताज़गी के लिए ज़रूरत पड़ने पर दोबारा स्प्रे करें।",
    ],
    packingSizes: ["250 ml", "500 ml"],
    safety: [
      "Do not spray near flames or while smoking (aerosol variant).",
      ...commonSafety,
    ],
    safetyHi: [
      "आग की लपटों के पास या धूम्रपान करते समय स्प्रे न करें (एरोसोल वैरिएंट)।",
      ...commonSafetyHi,
    ],
    faqs: [
      { question: "How long does the fragrance last?", questionHi: "खुशबू कितनी देर टिकती है?", answer: "Depending on room size and ventilation, freshness typically lasts several hours.", answerHi: "कमरे के आकार और हवा की आवाजाही के हिसाब से ताज़गी आमतौर पर कई घंटे बनी रहती है।" },
      { question: "Can I use it in my car?", questionHi: "क्या इसे कार में इस्तेमाल कर सकते हैं?", answer: "Yes, a couple of sprays keep your car fresh without overpowering.", answerHi: "हाँ, दो-एक स्प्रे आपकी कार को बिना तेज़ महक के तरोताज़ा रखते हैं।" },
    ],
    keywords: ["room freshener", "air freshener", "odour neutraliser", "home fragrance"],
  },
  {
    slug: "sanitizer",
    name: "Hand Sanitizer",
    category: "Personal Care",
    tagline: "70% alcohol, 100% confidence",
    taglineHi: "70% अल्कोहल, 100% भरोसा",
    shortDescription:
      "An alcohol-based hand sanitizer that kills germs in seconds without water, keeping hands protected on the go.",
    shortDescriptionHi:
      "एक अल्कोहल-बेस्ड हैंड सैनिटाइज़र जो बिना पानी के सेकंडों में कीटाणु मारता है और चलते-फिरते हाथों को सुरक्षित रखता है।",
    description:
      "DPT Hand Sanitizer offers instant, water-free protection wherever you are. Its 70% alcohol formula kills germs and viruses in seconds, while added moisturisers prevent the dryness typical of sanitizers. Compact and quick-drying, it's ideal for homes, offices, hospitals, schools and travel.",
    descriptionHi:
      "DPT हैंड सैनिटाइज़र आप जहाँ भी हों, तुरंत, बिना पानी के सुरक्षा देता है। इसका 70% अल्कोहल फॉर्मूला सेकंडों में कीटाणुओं और वायरस को मारता है, जबकि मॉइस्चराइज़र सैनिटाइज़र से होने वाले रूखेपन को रोकते हैं। कॉम्पैक्ट और जल्दी सूखने वाला — घर, ऑफिस, अस्पताल, स्कूल और सफर के लिए आदर्श।",
    image: "/products/sanitizer.png",
    fragrance: "Neutral / Mild fragrance",
    fragranceHi: "न्यूट्रल / हल्की खुशबू",
    featured: false,
    benefits: [
      "Kills germs in seconds",
      "70% alcohol — effective protection",
      "No water needed",
      "Moisturisers prevent dryness",
      "Quick-drying, non-sticky",
    ],
    benefitsHi: [
      "सेकंडों में कीटाणु मारता है",
      "70% अल्कोहल — असरदार सुरक्षा",
      "पानी की ज़रूरत नहीं",
      "मॉइस्चराइज़र रूखापन नहीं आने देते",
      "जल्दी सूखता है, चिपचिपा नहीं",
    ],
    features: [
      "70% v/v alcohol content",
      "Enriched with glycerine",
      "Available in gel and liquid",
      "Portable pocket sizes",
    ],
    featuresHi: [
      "70% v/v अल्कोहल कंटेंट",
      "ग्लिसरीन से भरपूर",
      "जेल और लिक्विड दोनों में उपलब्ध",
      "जेब में समाने वाले पोर्टेबल साइज़",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Gel / liquid", valueHi: "जेल / लिक्विड" },
      { label: "Alcohol", labelHi: "अल्कोहल", value: "70% v/v" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use", valueHi: "रेडी टू यूज़" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Apply a coin-sized amount to your palm.",
      "Rub over both hands, covering all surfaces.",
      "Continue until dry — no rinsing required.",
    ],
    usageHi: [
      "हथेली पर सिक्के जितनी मात्रा लें।",
      "दोनों हाथों पर हर तरफ अच्छी तरह मलें।",
      "सूखने तक मलते रहें — धोने की ज़रूरत नहीं।",
    ],
    packingSizes: ["100 ml", "250 ml", "500 ml pump", "5 Litre refill"],
    safety: [
      "Flammable — keep away from fire and heat.",
      "For external use only.",
      ...commonSafety,
    ],
    safetyHi: [
      "ज्वलनशील — आग और गर्मी से दूर रखें।",
      "केवल बाहरी इस्तेमाल के लिए।",
      ...commonSafetyHi,
    ],
    faqs: [
      { question: "Does it dry out hands?", questionHi: "क्या इससे हाथ रूखे होते हैं?", answer: "No, added glycerine and moisturisers keep hands soft with regular use.", answerHi: "नहीं, ग्लिसरीन और मॉइस्चराइज़र नियमित इस्तेमाल पर भी हाथों को नरम रखते हैं।" },
      { question: "Is 70% alcohol effective?", questionHi: "क्या 70% अल्कोहल असरदार है?", answer: "Yes, 70% alcohol is the recommended concentration for effective germ protection.", answerHi: "हाँ, कीटाणुओं से असरदार सुरक्षा के लिए 70% अल्कोहल ही अनुशंसित मात्रा है।" },
    ],
    keywords: ["hand sanitizer", "alcohol sanitizer", "germ protection", "hand rub"],
  },
  {
    slug: "car-shampoo",
    name: "Car Shampoo",
    category: "Auto Care",
    tagline: "Showroom shine at home",
    taglineHi: "घर पर ही शोरूम जैसी चमक",
    shortDescription:
      "A high-foam, pH-neutral car shampoo that lifts dirt gently, protects paint and delivers a streak-free, glossy finish.",
    shortDescriptionHi:
      "एक हाई-फोम, pH-न्यूट्रल कार शैम्पू जो गंदगी को नरमी से हटाता है, पेंट की रक्षा करता है और बेदाग, ग्लॉसी फिनिश देता है।",
    description:
      "DPT Car Shampoo gives your vehicle a showroom-quality shine without harming the paint or wax coat. Its thick, high-foam formula gently lifts road grime, dust and bird droppings, while the pH-neutral base protects the clear coat. Rinses off cleanly for a spotless, streak-free, glossy finish every time.",
    descriptionHi:
      "DPT कार शैम्पू आपकी गाड़ी को पेंट या वैक्स कोट को नुकसान पहुँचाए बिना शोरूम जैसी चमक देता है। इसका गाढ़ा, हाई-फोम फॉर्मूला सड़क की गंदगी, धूल और पक्षियों की बीट को नरमी से हटाता है, जबकि pH-न्यूट्रल बेस क्लियर कोट की रक्षा करता है। आसानी से धुलकर हर बार बेदाग, ग्लॉसी फिनिश देता है।",
    image: "/products/car-shampoo.png",
    fragrance: "Fresh Auto",
    fragranceHi: "फ्रेश ऑटो",
    featured: false,
    benefits: [
      "Rich, thick foam lifts dirt gently",
      "pH-neutral — safe on paint and wax",
      "Streak-free, glossy finish",
      "Economical — concentrated formula",
      "Works on cars, bikes and more",
    ],
    benefitsHi: [
      "गाढ़ा झाग गंदगी को नरमी से हटाता है",
      "pH-न्यूट्रल — पेंट और वैक्स पर सुरक्षित",
      "बेदाग, ग्लॉसी फिनिश",
      "किफायती — कंसन्ट्रेटेड फॉर्मूला",
      "कार, बाइक और बहुत कुछ पर काम करता है",
    ],
    features: [
      "High-foam surfactant blend",
      "Wax-and-paint-safe pH balance",
      "Added gloss agents",
      "Concentrated — dilute per wash",
    ],
    featuresHi: [
      "हाई-फोम सर्फेक्टेंट ब्लेंड",
      "वैक्स और पेंट के लिए सुरक्षित pH बैलेंस",
      "एक्स्ट्रा चमक के लिए ग्लॉस एजेंट",
      "कंसन्ट्रेटेड — हर धुलाई के लिए घोलें",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid concentrate", valueHi: "लिक्विड कंसन्ट्रेट" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Fresh Auto", valueHi: "फ्रेश ऑटो" },
      { label: "Dilution", labelHi: "डाइल्यूशन", value: "1 capful in a bucket of water", valueHi: "बाल्टी भर पानी में 1 ढक्कन" },
      { label: "Use", labelHi: "उपयोग", value: "Cars, bikes, vehicles", valueHi: "कार, बाइक, वाहन" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Rinse the vehicle to remove loose dust.",
      "Add one capful to a bucket of water and mix to a foam.",
      "Wash with a sponge or mitt, top to bottom.",
      "Rinse and dry with a microfibre cloth.",
    ],
    usageHi: [
      "ढीली धूल हटाने के लिए गाड़ी को पानी से धोएँ।",
      "बाल्टी भर पानी में एक ढक्कन डालकर झाग बनाएँ।",
      "स्पंज या मिट से ऊपर से नीचे की ओर धोएँ।",
      "पानी से धोकर माइक्रोफाइबर कपड़े से सुखाएँ।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Will it remove wax coating?", questionHi: "क्या यह वैक्स कोटिंग हटा देगा?", answer: "No, it is pH-neutral and preserves existing wax and polish.", answerHi: "नहीं, यह pH-न्यूट्रल है और मौजूदा वैक्स व पॉलिश को बनाए रखता है।" },
      { question: "Can I use it in a foam gun?", questionHi: "क्या इसे फोम गन में इस्तेमाल कर सकते हैं?", answer: "Yes, it produces excellent foam in pressure washers and foam guns.", answerHi: "हाँ, यह प्रेशर वॉशर और फोम गन में बेहतरीन झाग बनाता है।" },
    ],
    keywords: ["car shampoo", "car wash liquid", "vehicle cleaner", "foam car wash"],
  },
  {
    slug: "liquid-soap",
    name: "Liquid Soap",
    category: "Personal Care",
    tagline: "Everyday cleansing, everyday care",
    taglineHi: "रोज़ की सफाई, रोज़ की देखभाल",
    shortDescription:
      "A gentle, economical liquid soap ideal for hand washing and body cleansing across homes and high-traffic institutions.",
    shortDescriptionHi:
      "एक सौम्य, किफायती लिक्विड सोप — घरों और ज़्यादा आवाजाही वाले संस्थानों में हाथ धोने और बॉडी क्लीनज़िंग के लिए आदर्श।",
    description:
      "DPT Liquid Soap is a versatile, mild cleanser perfect for high-usage settings such as schools, offices, hospitals and public washrooms, as well as everyday home use. It produces a rich lather that cleanses effectively, rinses easily and leaves skin fresh and cared for — available in bulk for cost-effective hygiene at scale.",
    descriptionHi:
      "DPT लिक्विड सोप एक बहुउपयोगी, माइल्ड क्लीनज़र है — स्कूलों, दफ्तरों, अस्पतालों और सार्वजनिक वॉशरूम जैसी ज़्यादा इस्तेमाल वाली जगहों के साथ-साथ रोज़ के घरेलू उपयोग के लिए भी एकदम सही। इसका गाढ़ा झाग असरदार सफाई करता है, आसानी से धुल जाता है और त्वचा को तरोताज़ा रखता है — बड़े पैमाने पर किफायती हाइजीन के लिए बल्क सप्लाई में उपलब्ध।",
    image: "/products/liquid-soap.png",
    fragrance: "Available in Classic, Rose and Lemon",
    fragranceHi: "क्लासिक, रोज़ और लेमन में उपलब्ध",
    featured: false,
    benefits: [
      "Rich, effective cleansing lather",
      "Gentle and skin-friendly",
      "Economical for high-traffic use",
      "Rinses off cleanly",
      "Available in multiple fragrances",
    ],
    benefitsHi: [
      "गाढ़ा, असरदार सफाई करने वाला झाग",
      "सौम्य और त्वचा के अनुकूल",
      "ज़्यादा आवाजाही वाली जगहों के लिए किफायती",
      "आसानी से पूरी तरह धुल जाता है",
      "कई खुशबुओं में उपलब्ध",
    ],
    features: [
      "Mild, pH-balanced base",
      "Bulk refill options",
      "Compatible with all dispensers",
      "Pleasant, fresh scent",
    ],
    featuresHi: [
      "माइल्ड, pH-बैलेंस्ड बेस",
      "बल्क रिफिल के विकल्प",
      "हर तरह के डिस्पेंसर के साथ काम करता है",
      "सुहानी, ताज़ी महक",
    ],
    specifications: [
      { label: "Form", labelHi: "रूप", value: "Liquid", valueHi: "लिक्विड" },
      { label: "Fragrance", labelHi: "खुशबू", value: "Classic / Rose / Lemon", valueHi: "क्लासिक / रोज़ / लेमन" },
      { label: "Application", labelHi: "इस्तेमाल", value: "Ready to use / dispenser", valueHi: "रेडी टू यूज़ / डिस्पेंसर" },
      { label: "Use", labelHi: "उपयोग", value: "Home, institutions, washrooms", valueHi: "घर, संस्थान, वॉशरूम" },
      { label: "Shelf life", labelHi: "शेल्फ लाइफ", value: "24 months", valueHi: "24 महीने" },
    ],
    usage: [
      "Fill dispensers directly from the refill pack.",
      "Dispense onto wet hands and lather.",
      "Rinse thoroughly with water.",
    ],
    usageHi: [
      "रिफिल पैक से सीधे डिस्पेंसर भरें।",
      "गीले हाथों पर लेकर झाग बनाएँ।",
      "पानी से अच्छी तरह धो लें।",
    ],
    packingSizes: ["500 ml", "1 Litre", "5 Litre", "20 Litre (bulk)"],
    safety: commonSafety,
    safetyHi: commonSafetyHi,
    faqs: [
      { question: "Can it be used in soap dispensers?", questionHi: "क्या इसे सोप डिस्पेंसर में इस्तेमाल कर सकते हैं?", answer: "Yes, it is designed to work with all standard wall and counter dispensers.", answerHi: "हाँ, यह सभी स्टैंडर्ड वॉल और काउंटर डिस्पेंसर के साथ काम करने के लिए बनाया गया है।" },
      { question: "Is bulk packing available?", questionHi: "क्या बल्क पैकिंग उपलब्ध है?", answer: "Yes, 5L and 20L packs are ideal for institutions and offices.", answerHi: "हाँ, 5L और 20L पैक संस्थानों और दफ्तरों के लिए आदर्श हैं।" },
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
