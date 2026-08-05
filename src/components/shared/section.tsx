import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn(
          "mb-5 text-xs font-bold uppercase tracking-[0.25em]",
          dark ? "text-[var(--brand-orange-light)]" : "text-[var(--brand-orange)]",
        )}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(
        "text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
        dark ? "text-white" : "text-primary",
      )}>
        {title}
      </h2>
      {description ? (
        <p className={cn(
          "mt-6 text-lg leading-relaxed max-w-2xl",
          align === "center" && "mx-auto",
          dark ? "text-white/70" : "text-muted-foreground",
        )}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  title,
  description,
  eyebrow,
  image,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  image?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/[0.03] via-background to-[var(--brand-orange)]/[0.04] pt-[calc(72px+4rem)] pb-16 sm:pt-[calc(72px+5rem)] sm:pb-24">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-orange)]/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
