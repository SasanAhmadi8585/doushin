import { useState } from "react";
import type { Product } from "../data/products";
import { ProductPlaceholder } from "./ProductPlaceholder";

export function Gallery({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const views = [product.id - 1, product.id + 2, product.id + 5];

  return (
    <div>
      <ProductPlaceholder
        variant={views[selected]}
        label={`نمای اصلی ${product.name}`}
        className="w-full"
        image={product.image}
      />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {views.map((view, index) => (
          <button
            type="button"
            key={view}
            onClick={() => setSelected(index)}
            className={`rounded-[0.8rem] border p-1 transition-colors ${
              selected === index
                ? "border-accent"
                : "border-transparent hover:border-accent/45"
            }`}
            aria-label={`نمای ${String(index + 1).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)])}`}
            aria-pressed={selected === index}
          >
            <ProductPlaceholder
              variant={view}
              label={`تصویر کوچک ${product.name}`}
              className="rounded-[0.55rem]"
              image={product.image}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
