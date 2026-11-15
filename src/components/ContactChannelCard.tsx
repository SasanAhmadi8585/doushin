import type { LucideIcon } from "lucide-react";

type ContactChannelCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  ltr?: boolean;
};

export function ContactChannelCard({
  icon: Icon,
  title,
  value,
  href,
  ltr = false,
}: ContactChannelCardProps) {
  return (
    <a
      href={href}
      className="group flex min-h-36 flex-col justify-between rounded-card border border-accent/25 bg-product-hover p-5 transition-colors hover:border-accent sm:p-6"
    >
      <Icon size={22} strokeWidth={1.4} className="text-white font-bold" />
      <div className="mt-8">
        <p className="text-xl font-bold text-white">{title}</p>
        <p
          className="mt-3 text-lg text-white font-bold sm:text-sm"
          dir={ltr ? "ltr" : undefined}
        >
          {value}
        </p>
      </div>
    </a>
  );
}
