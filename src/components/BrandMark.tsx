import { Link } from "react-router";

export function BrandMark() {
  return (
    <Link
      to="/"
      aria-label="دوشین، صفحهٔ خانه"
      className="font-wordmark inline-block text-[1.85rem] leading-none tracking-[-0.04em] text-ink transition-opacity hover:opacity-65"
      dir="ltr"
    >
      <img
        src="/public/Images/Products/logo-removebg-preview.png"
        alt=""
        className="size-45"
      />
    </Link>
  );
}
