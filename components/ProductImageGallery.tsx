"use client";

import { useState } from "react";
import Image from "next/image";

// Main product image with clickable pack-size thumbnails below.
// Products with a single image render exactly as before (no thumbnail row).
export function ProductImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Image
        key={images[active]}
        src={images[active]}
        alt={alt}
        width={900}
        height={800}
        className="aspect-[5/4] w-full object-cover"
        priority={active === 0}
      />
      {images.length > 1 && (
        <div className="flex justify-center gap-3 bg-white p-3 pt-0">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`${alt} image ${i + 1}`}
              className={`relative h-16 w-20 overflow-hidden rounded-xl ring-2 transition-all ${
                i === active ? "ring-brand-blue" : "ring-slate-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${alt} thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
