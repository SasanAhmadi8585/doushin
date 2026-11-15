import type { ProductCategory } from "../data/products";

export type CategoryFilter = "همه" | ProductCategory;

export const categories: CategoryFilter[] = [
  "همه",
  "باکس گل",
  "شمع جار",
  "شمع فانتزی",
  "دکوراتیو",
];

type CategoryChipsProps = {
  value: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
};

export function CategoryChips({ value, onChange }: CategoryChipsProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2"
      aria-label="دسته‌بندی محصولات"
    >
      {categories.map((category) => {
        const selected = category === value;
        return (
          <button
            type="button"
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={selected}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors ${
              selected
                ? "border-product-hover/70 bg-product-hover text-white"
                : "border-accent/35  text-olive-600 hover:border-product-hover bg-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
