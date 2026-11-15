import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  eyebrow?: string;
};

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-10 text-lg tracking-[0.18em] text-ink/70">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-medium leading-tight md:text-3xl">
        {children}
      </h2>
    </div>
  );
}
