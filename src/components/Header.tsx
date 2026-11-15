import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { BrandMark } from "./BrandMark";

const navItems = [
  { to: "/", label: "خانه", end: true },
  { to: "/products", label: "محصولات", end: false },
  { to: "/contact", label: "تماس با ما", end: true },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-sm transition-opacity after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:bg-accent after:transition-transform ${
    isActive
      ? "after:scale-x-100"
      : "after:scale-x-0 hover:opacity-60 hover:after:scale-x-100"
  }`;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="border-b border-accent/25 bg-canvas">
      <div className="mx-auto flex h-30 max-w-site items-center px-gutter md:h-24">
        <BrandMark />

        <nav
          className="me-14 hidden items-center gap-10 md:flex"
          aria-label="ناوبری اصلی"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="ms-auto grid size-11 place-items-center rounded-full border border-accent/35 transition-colors hover:border-accent hover:bg-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "بستن فهرست" : "باز کردن فهرست"}
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-accent/20 transition-[grid-template-rows] duration-300 md:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-transparent"
        }`}
      >
        <nav className="min-h-0" aria-label="ناوبری موبایل">
          <div className="mx-auto flex max-w-site flex-col px-gutter py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `border-b border-accent/15 py-4 text-base last:border-b-0 ${
                    isActive ? "text-accent" : "text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
