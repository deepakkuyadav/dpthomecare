import { IMG } from "./images";

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { image: IMG.cleaningProducts, title: "Our product range", category: "Products" },
  { image: IMG.tiledFloor, title: "Sparkling floor care", category: "In Action" },
  { image: IMG.glassSpray, title: "Streak-free glass cleaning", category: "In Action" },
  { image: IMG.dishwash, title: "Grease-free dishwashing", category: "In Action" },
  { image: IMG.warehouse, title: "Warehouse & dispatch", category: "Facility" },
  { image: IMG.handWash, title: "Everyday hand hygiene", category: "In Action" },
  { image: IMG.bathroomTiles, title: "Deep bathroom cleaning", category: "In Action" },
  { image: IMG.warehouseAisle, title: "Organised inventory", category: "Facility" },
  { image: IMG.ppeDisinfect, title: "Professional sanitization", category: "Commercial" },
  { image: IMG.hotelBed, title: "Hospitality-grade finish", category: "Commercial" },
  { image: IMG.kitchenSurface, title: "Kitchen surface care", category: "In Action" },
  { image: IMG.carWashFoam, title: "High-foam car care", category: "In Action" },
  { image: IMG.cleaningProductsTable, title: "Complete home solutions", category: "Products" },
  { image: IMG.laundry, title: "Fresh fabric care", category: "In Action" },
  { image: IMG.warehousePallet, title: "Bulk supply ready", category: "Facility" },
  { image: IMG.hospital, title: "Institutional hygiene", category: "Commercial" },
];

export const galleryCategories = ["All", "Products", "In Action", "Facility", "Commercial"];
