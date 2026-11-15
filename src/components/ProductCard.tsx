import { Link } from "react-router";
import type { Product } from "../data/products";
import { formatPrice } from "../data/products";
import { ProductPlaceholder } from "./ProductPlaceholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.slug}`} className="group block">
      <ProductPlaceholder
        variant={product.id - 1}
        label={`تصویر ${product.name}`}
        image={product.image}
        className="transition-colors group-hover:bg-product-hover"
      />

      <div className="pt-4">
        <h3 className="inline border-b border-transparent pb-1 text-sm leading-7 transition-colors group-hover:border-accent sm:text-base">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-ink/65">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
