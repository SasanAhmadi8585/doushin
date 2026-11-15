type ProductPlaceholderProps = {
  variant: number;
  label?: string;
  className?: string;
  image?: string;
};

export function ProductPlaceholder({
  variant,
  label = "تصویر محصول",
  className = "",
  image,
}: ProductPlaceholderProps) {
  return (
    <div
      className={`group/photo relative aspect-[3/4] overflow-hidden rounded-card bg-product ${className}`}
      role="img"
      aria-label={label}
    >
      {image ? (
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-[1.025]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="/Images/Products/IMG_20260916_173321_670.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
