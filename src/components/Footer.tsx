import { Camera, Send } from "lucide-react";
import { Link } from "react-router";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="mt-section border-t border-accent/25">
      <div className="mx-auto grid max-w-site gap-10 px-gutter py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-sm text-sm font-semibold leading-7 text-ink">
            محصولات دکوری دست‌ساز برای لحظه‌های ساده و خانه‌های آرام.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xl font-semibold ">دسترسی سریع</p>
          <div className="flex flex-col items-start gap-3 text-sm text-ink/70">
            <Link
              className="transition-colors hover:text-ink text-lg"
              to="/products"
            >
              محصولات
            </Link>
            <Link
              className="transition-colors hover:text-ink text-lg"
              to="/contact"
            >
              تماس با ما
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xl font-semibold">ما را دنبال کنید</p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="اینستاگرام دوشین"
              className="grid size-10 place-items-center rounded-full border border-accent/30 transition-colors hover:border-accent hover:bg-white"
            >
              <Camera size={17} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="تلگرام دوشین"
              className="grid size-10 place-items-center rounded-full border border-accent/30 transition-colors hover:border-accent hover:bg-white"
            >
              <Send size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-accent/20">
        <p className="mx-auto max-w-site px-gutter py-5 text-xs text-ink/55">
          تمامی حقوق برای دوشین محفوظ است.
        </p>
      </div>
    </footer>
  );
}
