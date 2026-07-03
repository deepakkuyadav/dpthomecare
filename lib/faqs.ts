import type { QA } from "./types";

export interface FaqGroup {
  category: string;
  categoryHi?: string;
  items: QA[];
}

export const faqGroups: FaqGroup[] = [
  {
    category: "Products & Quality",
    categoryHi: "प्रोडक्ट्स और क्वालिटी",
    items: [
      { question: "What products does DPT Home Care manufacture?", questionHi: "DPT होम केयर कौन-कौन से प्रोडक्ट बनाती है?", answer: "We manufacture a complete range of household and institutional cleaning products including floor cleaner, toilet cleaner, glass cleaner, dish wash liquid, liquid detergent, hand wash, phenyl, fabric conditioner, bathroom cleaner, kitchen cleaner, multi-purpose cleaner, room freshener, sanitizer, car shampoo and liquid soap.", answerHi: "हम घरेलू और संस्थागत क्लीनिंग प्रोडक्ट्स की पूरी रेंज बनाते हैं, जिसमें फ्लोर क्लीनर, टॉयलेट क्लीनर, ग्लास क्लीनर, डिश वॉश लिक्विड, लिक्विड डिटर्जेंट, हैंड वॉश, फिनाइल, फैब्रिक कंडीशनर, बाथरूम क्लीनर, किचन क्लीनर, मल्टी-पर्पज़ क्लीनर, रूम फ्रेशनर, सैनिटाइज़र, कार शैम्पू और लिक्विड सोप शामिल हैं।" },
      { question: "Are DPT products safe to use at home?", questionHi: "क्या DPT प्रोडक्ट घर में इस्तेमाल के लिए सुरक्षित हैं?", answer: "Yes. Our products are formulated to be effective yet safe for everyday household use when used as directed. Always follow the usage and safety instructions on the label.", answerHi: "हाँ। हमारे प्रोडक्ट इस तरह बनाए गए हैं कि निर्देशों के अनुसार इस्तेमाल करने पर वे असरदार होने के साथ-साथ रोज़मर्रा के घरेलू उपयोग के लिए सुरक्षित भी हैं। लेबल पर दिए गए उपयोग और सुरक्षा निर्देशों का हमेशा पालन करें।" },
      { question: "Are the fragrances long-lasting?", questionHi: "क्या खुशबू लंबे समय तक टिकती है?", answer: "Yes, we use quality fragrance oils that leave a fresh, long-lasting scent. Floor cleaners and fresheners are especially known for their lasting fragrance.", answerHi: "हाँ, हम क्वालिटी फ्रेगरेंस ऑयल इस्तेमाल करते हैं जो ताज़ी और देर तक टिकने वाली खुशबू छोड़ते हैं। फ्लोर क्लीनर और फ्रेशनर अपनी लंबे समय तक टिकने वाली खुशबू के लिए खास तौर पर जाने जाते हैं।" },
      { question: "What is the shelf life of your products?", questionHi: "आपके प्रोडक्ट्स की शेल्फ लाइफ कितनी है?", answer: "Most DPT products have a shelf life of 24 months from the date of manufacture when stored in a cool, dry place away from direct sunlight.", answerHi: "ठंडी, सूखी जगह पर और सीधी धूप से दूर रखने पर ज़्यादातर DPT प्रोडक्ट्स की शेल्फ लाइफ निर्माण की तारीख से 24 महीने होती है।" },
      { question: "Are your products concentrated?", questionHi: "क्या आपके प्रोडक्ट कंसन्ट्रेटेड हैं?", answer: "Many of our cleaners are concentrated formulas, which means you use less per wash — making them more economical over time.", answerHi: "हमारे कई क्लीनर कंसन्ट्रेटेड फ़ॉर्मूले वाले हैं, यानी हर बार धुलाई में कम मात्रा लगती है — जिससे वे लंबे समय में ज़्यादा किफ़ायती साबित होते हैं।" },
    ],
  },
  {
    category: "Orders & Packing",
    categoryHi: "ऑर्डर और पैकिंग",
    items: [
      { question: "What pack sizes are available?", questionHi: "कौन-कौन से पैक साइज़ उपलब्ध हैं?", answer: "We offer retail sizes (250 ml, 500 ml, 1 Litre) as well as bulk institutional sizes (5 Litre and 20 Litre) for most products.", answerHi: "ज़्यादातर प्रोडक्ट्स के लिए हम रिटेल साइज़ (250 ml, 500 ml, 1 लीटर) के साथ-साथ बल्क इंस्टीट्यूशनल साइज़ (5 लीटर और 20 लीटर) भी ऑफर करते हैं।" },
      { question: "Do you supply in bulk for businesses?", questionHi: "क्या आप बिज़नेस के लिए बल्क सप्लाई करते हैं?", answer: "Yes, we specialise in bulk supply for hotels, hospitals, restaurants, schools, offices, retailers, wholesalers and cleaning agencies.", answerHi: "हाँ, हम होटल, अस्पताल, रेस्टोरेंट, स्कूल, ऑफिस, रिटेलर, होलसेलर और क्लीनिंग एजेंसियों के लिए बल्क सप्लाई में माहिर हैं।" },
      { question: "What is the minimum order quantity?", questionHi: "मिनिमम ऑर्डर क्वांटिटी कितनी है?", answer: "Minimum order quantities depend on the product and pack size. Please contact us or send a WhatsApp enquiry and our team will share the details.", answerHi: "मिनिमम ऑर्डर क्वांटिटी प्रोडक्ट और पैक साइज़ पर निर्भर करती है। कृपया हमसे संपर्क करें या WhatsApp पर पूछताछ भेजें, हमारी टीम आपको पूरी जानकारी देगी।" },
      { question: "Can I get customised or private-label packing?", questionHi: "क्या मुझे कस्टमाइज़्ड या प्राइवेट-लेबल पैकिंग मिल सकती है?", answer: "For large-volume distributors and institutions, we can discuss customised packing options. Reach out via our contact form or WhatsApp.", answerHi: "बड़े वॉल्यूम वाले डिस्ट्रीब्यूटर्स और संस्थानों के लिए हम कस्टमाइज़्ड पैकिंग के विकल्पों पर बात कर सकते हैं। हमारे कॉन्टैक्ट फ़ॉर्म या WhatsApp के ज़रिए संपर्क करें।" },
      { question: "How do I place an order?", questionHi: "मैं ऑर्डर कैसे दूँ?", answer: "You can enquire through our website enquiry forms, call us on 9451900062, or message us on WhatsApp for the fastest response.", answerHi: "आप हमारी वेबसाइट के इन्क्वायरी फ़ॉर्म से पूछताछ कर सकते हैं, हमें 9451900062 पर कॉल कर सकते हैं, या सबसे तेज़ जवाब के लिए WhatsApp पर मैसेज कर सकते हैं।" },
    ],
  },
  {
    category: "Distributors & Dealers",
    categoryHi: "डिस्ट्रीब्यूटर और डीलर",
    items: [
      { question: "How can I become a DPT distributor?", questionHi: "मैं DPT डिस्ट्रीब्यूटर कैसे बन सकता हूँ?", answer: "Visit our Become a Distributor page and fill out the dealer enquiry form. Our team will review your application and get in touch to discuss the opportunity.", answerHi: "हमारे 'डिस्ट्रीब्यूटर बनें' पेज पर जाएँ और डीलर इन्क्वायरी फ़ॉर्म भरें। हमारी टीम आपका आवेदन देखेगी और इस अवसर पर बात करने के लिए आपसे संपर्क करेगी।" },
      { question: "What support do you offer distributors?", questionHi: "आप डिस्ट्रीब्यूटर्स को क्या सपोर्ट देते हैं?", answer: "We support our partners with competitive pricing, reliable stock, marketing material, product training and responsive service to help grow their business.", answerHi: "हम अपने पार्टनर्स को प्रतिस्पर्धी कीमतें, भरोसेमंद स्टॉक, मार्केटिंग मटीरियल, प्रोडक्ट ट्रेनिंग और तुरंत जवाब देने वाली सर्विस के साथ सपोर्ट करते हैं, ताकि उनका बिज़नेस बढ़ सके।" },
      { question: "Which areas are open for distribution?", questionHi: "डिस्ट्रीब्यूशन के लिए कौन से क्षेत्र खुले हैं?", answer: "We are actively expanding across Uttar Pradesh and neighbouring regions. Submit your details and we'll tell you about availability in your area.", answerHi: "हम उत्तर प्रदेश और आसपास के क्षेत्रों में तेज़ी से विस्तार कर रहे हैं। अपनी जानकारी भेजें और हम आपको आपके क्षेत्र में उपलब्धता के बारे में बताएँगे।" },
      { question: "Is there an investment required to become a dealer?", questionHi: "क्या डीलर बनने के लिए निवेश की ज़रूरत होती है?", answer: "A working investment for initial stock is typically required. The exact amount depends on your territory and business scale — our team will guide you.", answerHi: "शुरुआती स्टॉक के लिए आम तौर पर एक वर्किंग इन्वेस्टमेंट की ज़रूरत होती है। सटीक राशि आपके क्षेत्र और बिज़नेस के आकार पर निर्भर करती है — हमारी टीम आपका मार्गदर्शन करेगी।" },
      { question: "Do you offer margins that support profitable resale?", questionHi: "क्या आपके मार्जिन मुनाफ़े वाली रीसेल के लिए पर्याप्त हैं?", answer: "Yes, our pricing is structured to give dealers and distributors healthy, sustainable margins with strong repeat demand.", answerHi: "हाँ, हमारी प्राइसिंग इस तरह तय की गई है कि डीलर्स और डिस्ट्रीब्यूटर्स को अच्छा, टिकाऊ मार्जिन मिले और रिपीट डिमांड भी मज़बूत बनी रहे।" },
    ],
  },
  {
    category: "Usage & Safety",
    categoryHi: "इस्तेमाल और सुरक्षा",
    items: [
      { question: "Do floor cleaners need to be rinsed?", questionHi: "क्या फ्लोर क्लीनर को पानी से धोना ज़रूरी है?", answer: "No, our floor cleaner is designed to be no-rinse. Simply mop and let the floor dry naturally without a sticky residue.", answerHi: "नहीं, हमारा फ्लोर क्लीनर नो-रिंस डिज़ाइन का है। बस पोछा लगाएँ और फर्श को अपने आप सूखने दें — कोई चिपचिपापन नहीं रहेगा।" },
      { question: "Are the products safe for children and pets?", questionHi: "क्या ये प्रोडक्ट बच्चों और पालतू जानवरों के लिए सुरक्षित हैं?", answer: "Once surfaces are cleaned and dry they are safe. Always keep concentrates and bottles out of the reach of children and pets.", answerHi: "सतहें साफ़ होकर सूख जाने के बाद पूरी तरह सुरक्षित रहती हैं। कंसन्ट्रेट और बोतलें हमेशा बच्चों और पालतू जानवरों की पहुँच से दूर रखें।" },
      { question: "Can I mix different cleaners together?", questionHi: "क्या मैं अलग-अलग क्लीनर आपस में मिला सकता हूँ?", answer: "No. Never mix cleaning chemicals together, as this can create harmful reactions. Use each product on its own as directed.", answerHi: "नहीं। क्लीनिंग केमिकल्स को कभी आपस में न मिलाएँ, क्योंकि इससे हानिकारक प्रतिक्रियाएँ हो सकती हैं। हर प्रोडक्ट को निर्देशों के अनुसार अलग-अलग इस्तेमाल करें।" },
      { question: "Is the dish wash liquid safe for hands?", questionHi: "क्या डिश वॉश लिक्विड हाथों के लिए सुरक्षित है?", answer: "Yes, it has a gentle, skin-friendly base. For very frequent washing, we recommend using gloves as a general precaution.", answerHi: "हाँ, इसका बेस सौम्य और त्वचा के अनुकूल है। बहुत बार बर्तन धोने की स्थिति में सामान्य सावधानी के तौर पर दस्ताने पहनने की सलाह देते हैं।" },
      { question: "Is the sanitizer safe for daily use?", questionHi: "क्या सैनिटाइज़र रोज़ाना इस्तेमाल के लिए सुरक्षित है?", answer: "Yes, our 70% alcohol sanitizer is enriched with moisturisers to prevent dryness and is suitable for regular use. It is for external use only.", answerHi: "हाँ, हमारा 70% अल्कोहल वाला सैनिटाइज़र मॉइस्चराइज़र से भरपूर है, जो त्वचा को रूखा होने से बचाता है और नियमित इस्तेमाल के लिए उपयुक्त है। यह केवल बाहरी उपयोग के लिए है।" },
      { question: "What should I do if a product contacts my eyes?", questionHi: "अगर प्रोडक्ट आँखों में चला जाए तो क्या करूँ?", answer: "Rinse immediately with plenty of clean water for several minutes. If irritation persists, seek medical advice.", answerHi: "तुरंत कई मिनट तक खूब साफ़ पानी से आँखें धोएँ। अगर जलन बनी रहे, तो डॉक्टर की सलाह लें।" },
    ],
  },
  {
    category: "Company & Delivery",
    categoryHi: "कंपनी और डिलीवरी",
    items: [
      { question: "Where is DPT Home Care located?", questionHi: "DPT होम केयर कहाँ स्थित है?", answer: "We are based at Ambedkar Tiraha, Jaunpur, Uttar Pradesh 222002, India.", answerHi: "हम अंबेडकर तिराहा, जौनपुर, उत्तर प्रदेश 222002, भारत में स्थित हैं।" },
      { question: "Do you deliver outside Jaunpur?", questionHi: "क्या आप जौनपुर के बाहर भी डिलीवरी करते हैं?", answer: "Yes, we serve customers and partners across Uttar Pradesh and nearby regions. Delivery terms depend on order size and location.", answerHi: "हाँ, हम पूरे उत्तर प्रदेश और आसपास के क्षेत्रों में ग्राहकों और पार्टनर्स को सेवा देते हैं। डिलीवरी की शर्तें ऑर्डर के आकार और लोकेशन पर निर्भर करती हैं।" },
      { question: "How can I contact your team?", questionHi: "मैं आपकी टीम से कैसे संपर्क करूँ?", answer: "Call us on 9451900062, use the contact form on our website, or send us a message on WhatsApp for a quick reply.", answerHi: "हमें 9451900062 पर कॉल करें, हमारी वेबसाइट पर कॉन्टैक्ट फ़ॉर्म का इस्तेमाल करें, या जल्दी जवाब के लिए WhatsApp पर मैसेज भेजें।" },
      { question: "What are your working hours?", questionHi: "आपके काम के घंटे क्या हैं?", answer: "We are open Monday to Saturday, 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 2:00 PM.", answerHi: "हम सोमवार से शनिवार सुबह 9:00 बजे से शाम 7:00 बजे तक और रविवार को सुबह 10:00 बजे से दोपहर 2:00 बजे तक खुले रहते हैं।" },
      { question: "Are your manufacturing practices quality-controlled?", questionHi: "क्या आपकी मैन्युफैक्चरिंग में क्वालिटी कंट्रोल होता है?", answer: "Yes, every batch goes through strict quality checks — from raw material inspection to final packaging — to ensure consistent performance.", answerHi: "हाँ, हर बैच सख्त क्वालिटी जाँच से गुज़रता है — कच्चे माल की जाँच से लेकर फाइनल पैकेजिंग तक — ताकि हर बार एक जैसा प्रदर्शन मिले।" },
      { question: "Do you provide product samples?", questionHi: "क्या आप प्रोडक्ट सैंपल देते हैं?", answer: "For serious dealer and institutional enquiries, samples can be arranged. Please mention this in your enquiry.", answerHi: "गंभीर डीलर और संस्थागत पूछताछ के लिए सैंपल की व्यवस्था की जा सकती है। कृपया अपनी पूछताछ में इसका ज़िक्र करें।" },
    ],
  },
];

export const allFaqs: QA[] = faqGroups.flatMap((g) => g.items);
