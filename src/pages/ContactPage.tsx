import { Camera, Clock3, Mail, MessageCircle, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { ContactChannelCard } from "../components/ContactChannelCard";

const channels = [
  {
    icon: Camera,
    title: "اینستاگرام",
    value: "@doushin_collection",
    href: "#",
    ltr: true,
  },
  {
    icon: Send,
    title: "تلگرام",
    value: "@doushincollection",
    href: "#",
    ltr: true,
  },
  {
    icon: MessageCircle,
    title: "واتس‌اپ",
    value: "09226590082",
    href: "#",
    ltr: false,
  },
  {
    icon: Phone,
    title: "تلفن",
    value: "09226590082",
    href: "#",
    ltr: false,
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "hello@doushin.ir",
    href: "mailto:hello@doushin.ir",
    ltr: true,
  },
];

export function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <div className="mx-auto max-w-site px-gutter pt-12 md:pt-20">
      <div className="max-w-2xl">
        <p className="mb-4 text-lg text-accent">گفت‌وگو با دوشین</p>
        <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          تماس با ما
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/65">
          برای پرسش دربارهٔ محصولات، موجودی یا سفارش، از یکی از راه‌های زیر پیام
          بدهید.
        </p>
      </div>

      <section className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
        {channels.map((channel) => (
          <ContactChannelCard key={channel.title} {...channel} />
        ))}
      </section>

      <section className="mt-section grid gap-10 border-t border-accent/25 pt-10 md:grid-cols-[0.78fr_1.22fr] md:gap-16 md:pt-14 lg:gap-24">
        <div>
          <h2 className="text-2xl font-bold text-ink md:text-3xl">
            پیام کوتاه
          </h2>
          <p className="mt-4 max-w-sm text-lg leading-7 text-ink/65">
            نام و پیام خود را بنویسید. این فرم نمایشی است و اطلاعاتی ارسال
            نمی‌کند.
          </p>
          <div className="mt-8 flex items-center gap-3 border-t border-accent/20 pt-6 text-sm text-ink">
            <Clock3 size={18} strokeWidth={1.5} className="text-ink" />
            معمولاً در کمتر از یک روز پاسخ می‌دهیم.
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-card border border-accent/25 bg-white p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-lg">
              نام
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="نام شما"
              className="h-12 w-full rounded-[0.75rem] border border-accent/30 bg-product-hover/30 px-4 text-sm outline-none placeholder:text-ink focus:border-ink"
            />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="mb-2 block text-lg">
              پیام
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="پیام خود را اینجا بنویسید…"
              className="w-full resize-none rounded-[0.75rem] border border-accent/30 bg-product-hover/30 p-4 text-sm leading-7 outline-none transition-colors placeholder:text-ink focus:border-ink"
            />
          </div>
          <button
            type="submit"
            className="mt-6 rounded-full bg-product-hover px-7 py-3 text-sm text-white transition-opacity hover:opacity-80"
          >
            ارسال پیام
          </button>
        </form>
      </section>
    </div>
  );
}
