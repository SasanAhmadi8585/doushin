import { MessageCircle, Send } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { Gallery } from "../components/Gallery";
import { ProductGrid } from "../components/ProductGrid";
import { SectionTitle } from "../components/SectionTitle";
import { formatPrice, products } from "../data/products";

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const similar = products
    .filter(
      (item) => item.id !== product.id && item.category === product.category,
    )
    .concat(
      products.filter(
        (item) => item.id !== product.id && item.category !== product.category,
      ),
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-site px-gutter pt-8 md:pt-14">
      <nav
        className="mb-7 flex items-center gap-2 text-xs text-ink/50"
        aria-label="مسیر صفحه"
      >
        <Link to="/products" className="transition-colors text-ink text-lg">
          محصولات
        </Link>
        <span aria-hidden="true" className="text-ink text-lg">
          /
        </span>
        <span className="truncate text-lg text-ink">{product.name}</span>
      </nav>

      <section className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-14 lg:gap-24">
        <Gallery product={product} />
        <div className="md:pt-8">
          <p className="text-lg text-accent">{product.category}</p>
          <h1 className="mt-4 text-3xl font-bold text-ink leading-[1.5] tracking-[-0.02em] md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg font-medium">
            {formatPrice(product.price)}
          </p>
          <p className="mt-7 max-w-xl border-t border-accent/25 pt-7 text-base leading-8 text-ink/70">
            {product.description}
          </p>

          <dl className="mt-8 divide-y divide-accent/20 border-y border-accent/20 text-sm">
            <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
              <dt className="text-accent">جنس</dt>
              <dd>{product.specs.material}</dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
              <dt className="text-ink/50">اندازه</dt>
              <dd>{product.specs.size}</dd>
            </div>
            <div className="grid grid-cols-[6rem_1fr] gap-4 py-4">
              <dt className="text-ink/50">رنگ</dt>
              <dd>{product.specs.color}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-product-hover px-6 py-3.5 text-sm text-white transition-opacity"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              پرسش دربارهٔ این محصول
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-product-hover px-6 py-3.5 text-sm transition-colors bg-white text-product-hover"
            >
              <Send size={18} strokeWidth={1.5} />
              ارتباط از طریق پیام‌رسان
            </a>
          </div>
        </div>
      </section>

      <section className="mt-section border-t border-accent/25 pt-10 md:pt-14">
        <div className="mb-8 md:mb-10">
          <SectionTitle>محصولات مشابه</SectionTitle>
        </div>
        <ProductGrid products={similar} />
      </section>
    </div>
  );
}
