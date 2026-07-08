import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Web app manifest — lets phones "Add to Home Screen" with the DPT logo
// and brand colors, and improves the mobile browsing experience.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.shortDesc,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B4EA2",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
