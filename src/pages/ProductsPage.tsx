import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  CategoryChips,
  type CategoryFilter,
} from "../components/CategoryChips";
import { ProductGrid } from "../components/ProductGrid";
import { products } from "../data/products";

type SortMode = "newest" | "low" | "high";

export function ProductsPage() {
  const [category, setCategory] = useState<CategoryFilter>("همه");
  const [sort, setSort] = useState<SortMode>("newest");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    const result =
      category === "همه"
        ? [...products]
        : products.filter((product) => product.category === category);

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    return result;
  }, [category, sort]);

  const handleCategoryChange = (nextCategory: CategoryFilter) => {
    setCategory(nextCategory);
    setVisibleCount(8);
  };

  return (
    <div className="mx-auto max-w-site px-gutter pt-12 md:pt-20">
      <div className="max-w-2xl">
        <p className="mb-4 text-lg text-accent">مجموعهٔ دوشین</p>
        <h1 className="text-4xl font-medium tracking-[-0.02em] md:text-5xl">
          محصولات
        </h1>
        <p className="mt-5 text-base leading-8 text-ink/65">
          زیبایی راانتخاب کن ، احساس را هدیه بده
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5 border-y border-accent/25 py-6 md:mt-14 md:flex-row md:items-center md:justify-between">
        <CategoryChips value={category} onChange={handleCategoryChange} />
        <div className="relative shrink-0">
          <label htmlFor="sort-products" className="sr-only">
            مرتب‌سازی محصولات
          </label>
          <select
            id="sort-products"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortMode)}
            className="h-11 w-full appearance-none rounded-full border border-product-hover bg-white pe-10 ps-5 text-sm outline-none transition-colors hover:border-product-hover focus:border-product-hover md:w-44"
          >
            <option value="newest">تازه‌ترین</option>
            <option value="low">کمترین قیمت</option>
            <option value="high">بیشترین قیمت</option>
          </select>
          <ChevronDown
            size={15}
            strokeWidth={1.5}
            className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="pt-10 md:pt-12">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts.slice(0, visibleCount)} />
        ) : (
          <p className="py-20 text-center text-ink/60">
            محصولی در این دسته پیدا نشد.
          </p>
        )}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center pt-14">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + 8)}
            className="rounded-full border border-product-hover px-8 py-3 text-sm transition-colors bg-product-hover text-white"
          >
            نمایش بیشتر
          </button>
        </div>
      )}
    </div>
  );
}
