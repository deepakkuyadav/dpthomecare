import { IMG } from "./images";

export interface GalleryItem {
  image: string;
  title: string;
  titleHi?: string;
  category: string;
  categoryHi?: string;
}

export const galleryItems: GalleryItem[] = [
  { image: IMG.cleaningProducts, title: "Our product range", titleHi: "हमारी प्रोडक्ट रेंज", category: "Products", categoryHi: "प्रोडक्ट्स" },
  { image: IMG.tiledFloor, title: "Sparkling floor care", titleHi: "चमचमाती फर्श की देखभाल", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.glassSpray, title: "Streak-free glass cleaning", titleHi: "बेदाग़ ग्लास क्लीनिंग", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.dishwash, title: "Grease-free dishwashing", titleHi: "चिकनाई-मुक्त बर्तन धुलाई", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.warehouse, title: "Warehouse & dispatch", titleHi: "वेयरहाउस और डिस्पैच", category: "Facility", categoryHi: "फैसिलिटी" },
  { image: IMG.handWash, title: "Everyday hand hygiene", titleHi: "रोज़ाना हाथों की स्वच्छता", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.bathroomTiles, title: "Deep bathroom cleaning", titleHi: "बाथरूम की गहरी सफ़ाई", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.warehouseAisle, title: "Organised inventory", titleHi: "व्यवस्थित इन्वेंटरी", category: "Facility", categoryHi: "फैसिलिटी" },
  { image: IMG.ppeDisinfect, title: "Professional sanitization", titleHi: "प्रोफेशनल सैनिटाइज़ेशन", category: "Commercial", categoryHi: "कमर्शियल" },
  { image: IMG.hotelBed, title: "Hospitality-grade finish", titleHi: "हॉस्पिटैलिटी-ग्रेड फिनिश", category: "Commercial", categoryHi: "कमर्शियल" },
  { image: IMG.kitchenSurface, title: "Kitchen surface care", titleHi: "किचन की सतहों की देखभाल", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.carWashFoam, title: "High-foam car care", titleHi: "हाई-फोम कार केयर", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.cleaningProductsTable, title: "Complete home solutions", titleHi: "घर के लिए संपूर्ण समाधान", category: "Products", categoryHi: "प्रोडक्ट्स" },
  { image: IMG.laundry, title: "Fresh fabric care", titleHi: "ताज़गी भरी फैब्रिक केयर", category: "In Action", categoryHi: "एक्शन में" },
  { image: IMG.warehousePallet, title: "Bulk supply ready", titleHi: "बल्क सप्लाई के लिए तैयार", category: "Facility", categoryHi: "फैसिलिटी" },
  { image: IMG.hospital, title: "Institutional hygiene", titleHi: "संस्थागत हाइजीन", category: "Commercial", categoryHi: "कमर्शियल" },
];

export const galleryCategories = ["All", "Products", "In Action", "Facility", "Commercial"];
