// Royalty-free imagery from Pexels (free to use, no attribution required).
// Direct hotlink URLs are verified to resolve. Swap freely with your own brand photography.

export function px(id: number, w = 1260): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const IMG = {
  // Hero & brand
  heroMopping: px(4440541, 1600),
  cleaningProducts: px(5218019, 1400),
  cleaningProductsTable: px(5217900, 1400),
  sparkleKitchen: px(3634739, 1400),
  modernHome: px(6238679, 1400),
  cozyHome: px(5570222, 1400),
  homeInterior: px(5179534, 1400),
  homePlants: px(5825380, 1400),

  // People / lifestyle
  family: px(3875141, 1400),
  familyTogether: px(7642039, 1400),

  // Cleaning actions
  glassSpray: px(9462101, 1200),
  kitchenSurface: px(4239037, 1200),
  kitchenSink: px(9462224, 1200),
  kitchenEquipment: px(10568353, 1200),
  bathroomTiles: px(4239033, 1200),
  toiletBowl: px(4098579, 1200),
  moppingBeige: px(7641484, 1200),
  moppingGray: px(6196566, 1200),
  tiledFloor: px(6197106, 1200),

  // Dishwash
  dishwash: px(5237888, 1200),
  dishwash2: px(5237878, 1200),
  dishwash3: px(7641231, 1200),

  // Hand & personal care
  handWash: px(3992952, 1200),
  handWash2: px(4154169, 1200),
  handWash3: px(3995736, 1200),

  // Sanitization / commercial
  disinfectRoom: px(5499416, 1200),
  ppeDisinfect: px(4176229, 1200),

  // Laundry / fabric
  laundry: px(8774444, 1200),
  laundryLoad: px(7282376, 1200),

  // Auto
  carWashFoam: px(5693651, 1200),
  carWash: px(6873179, 1200),

  // Industries
  hotelBed: px(14580368, 1200),
  housekeeper: px(9462346, 1200),
  pillowBed: px(6466490, 1200),
  hospital: px(33812023, 1200),
  hospitalWaiting: px(8459996, 1200),

  // Manufacturing / warehouse
  warehouse: px(4487361, 1400),
  warehouseAisle: px(4487383, 1400),
  warehousePallet: px(4483943, 1400),
} as const;

export type ImageKey = keyof typeof IMG;
