import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={
            light
              ? "inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              : "chip"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-balance ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-ink-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
