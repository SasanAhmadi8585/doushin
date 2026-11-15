import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ProductGrid } from "../components/ProductGrid";
import { ProductPlaceholder } from "../components/ProductPlaceholder";
import { SectionTitle } from "../components/SectionTitle";
import { products } from "../data/products";

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-site items-center gap-10 px-gutter py-12 md:grid-cols-[0.86fr_1.14fr] md:gap-16 md:py-20 lg:gap-24 lg:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-5 text-lg text-ink/70">
            ساخته‌شده با دست، برای خانه
          </p>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.45] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            هر هدیه ، میتونه آغاز یک خاطره باشه
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-ink/70 md:text-lg md:leading-9">
            مجموعه‌ای کوچک از اشیای دکوری دست‌ساز؛ هرکار با فرم و بافتی یگانه،
            برای گوشه‌ای که دوستش دارید.
          </p>
          <Link
            to="/products"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-product-hover px-6 py-3.5 text-sm text-white transition-opacity hover:opacity-80"
          >
            دیدن محصولات
            <ArrowRight
              size={17}
              strokeWidth={1.5}
              className="rtl:-scale-x-100"
            />
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <ProductPlaceholder
            variant={0}
            label="تصویر محصول منتخب دوشین"
            className="mx-auto max-w-[38rem]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-site px-gutter pt-12 md:pt-20">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <SectionTitle eyebrow="انتخاب‌های تازه">تازه‌ها</SectionTitle>
          <Link
            to="/products"
            className="hidden border-b pb-1 text-sm transition-opacity hover:opacity-55 sm:block text-product-hover"
          >
            مشاهدهٔ همه
          </Link>
        </div>
        <ProductGrid products={products.slice(0, 8)} />
      </section>

      <section className="mx-auto mt-section max-w-site px-gutter">
        <div className="grid gap-8 rounded-card border border-accent/25 bg-white px-6 py-10 sm:px-10 md:grid-cols-[0.8fr_1.2fr] md:px-14 md:py-14 lg:px-20">
          <SectionTitle eyebrow="داستان ما">درباره دوشین</SectionTitle>

          <div className="max-w-2xl text-base leading-8 text-ink/70">
            <p>
              ما شیما و شمیم هستیم؛
              <br /> دو خواهر که عشق مشترکمون به هنر و زیبایی، ما رو کنار هم
              قرار داد. داستان ما از علاقه به ساختن چیزهای زیبا شروع شد؛ از
              شمع‌هایی که با عشق شکل می‌گیرن تا باکس‌هایی که قراره لبخند رو به
              چهره آدم‌ها هدیه بدن.
              <br /> ما در کارگاه کوچکمون، با ترکیب هنر، خلاقیت و ظرافت، شمع‌های
              دست‌ساز و باکس‌های شمع رو خلق می‌کنیم. برای ما هر محصول فقط یک
              وسیله نیست؛ بخشی از عشق، سلیقه و زمانی‌ست که با دقت براش صرف
              کردیم. اینجا قراره زیبایی رو به شکل متفاوتی تجربه کنی.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-section max-w-site px-gutter">
        <div className="flex flex-col items-start justify-between gap-7 border-y border-accent/35 py-10 md:flex-row md:items-center md:py-12">
          <div>
            <p className="text-2xl font-medium md:text-3xl">
              محصولی را پسندیده اید ؟{" "}
            </p>
            <p className="mt-3 text-sm leading-7 text-ink/65">
              برای پرسیدن دربارهٔ موجودی، رنگ و جزئیات با ما در تماس باشید.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full border border-product-hover/50 px-6 py-3 text-sm transition-colors bg-product-hover text-white"
          >
            راه‌های ارتباطی
          </Link>
        </div>
      </section>
    </>
  );
}
