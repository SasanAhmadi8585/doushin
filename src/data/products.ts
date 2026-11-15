export type ProductCategory = "باکس گل" | "شمع فانتزی" | "شمع جار" | "دکوراتیو";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
  specs: {
    material: string;
    size: string;
    color: string;
  };
};

export const products: Product[] = [
  {
    id: 1,
    slug: "round-tray-golden-veins",
    name: "باکس سبز",
    price: 880000,
    image: "/Images/Products/box-green.jpg",
    category: "باکس گل",
    description:
      "یک ست دست‌ساز آرام و مینیمال برای پذیرایی‌های کوچک و چیدمان‌های روشن.",
    specs: {
      material: "پارافین و ترکیبات معدنی",
      size: "قطر سینی ۳۲ سانتی‌متر",
      color: "شیری با رگه‌های طلایی",
    },
  },
  {
    id: 2,
    slug: "six-part-nut-bowl",
    name: "ظرف آجیل‌خوری شش‌خانه",
    price: 400000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع فانتزی",
    description:
      "ظرفی سبک و چشم‌نواز با شش بخش مجزا برای پذیرایی و استفادهٔ روزمره.",
    specs: {
      material: "موم و پارافین",
      size: "۲۵ × ۲۵ سانتی‌متر",
      color: "طوسی روشن",
    },
  },
  {
    id: 3,
    slug: "wood-look-serving-set",
    name: "ست سینی و ظرف‌های چوب‌نما",
    price: 750000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "باکس گل",
    description:
      "ترکیب بافت گرم چوب‌نما با فرم‌های نرم، مناسب میز پذیرایی و هدیه.",
    specs: {
      material: "پارافین فشرده",
      size: "سینی ۲۸ × ۳۸ سانتی‌متر",
      color: "قهوه‌ای روشن",
    },
  },
  {
    id: 4,
    slug: "leaf-bowls-round-tray",
    name: "ست دو ظرف برگی با سینی گرد",
    price: 700000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "باکس گل",
    description:
      "دو ظرف با فرم برگ روی سینی گرد؛ ساخته‌شده برای یک چیدمان ساده و متفاوت.",
    specs: {
      material: "موم ترکیبی",
      size: "قطر سینی ۳۰ سانتی‌متر",
      color: "سفید گرم",
    },
  },
  {
    id: 5,
    slug: "tall-ribbed-vase",
    name: "گلدان بلند شیاردار",
    price: 520000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع جار",
    description:
      "گلدانی کشیده با شیارهای ظریف که به‌تنهایی یا کنار شاخه‌های خشک زیباست.",
    specs: {
      material: "پارافین و پودر سنگ",
      size: "ارتفاع ۳۱ سانتی‌متر",
      color: "خاکستری مه‌آلود",
    },
  },
  {
    id: 6,
    slug: "pebble-decor-set",
    name: "ظرف سه تیکه طرح چوب",
    price: 310000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "دکوراتیو",
    description: "...",
    specs: {
      material: "سنگ مصنوعی - پارافین",
      size: "طول : 22 سانتی متر  /عرض :  10 سانتی متر / ارتفاع:2.5 سانتی متر ",
      color: "طرح چوب",
    },
  },
  {
    id: 7,
    slug: "oval-wave-platter",
    name: "دیس بیضی موج‌دار",
    price: 460000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع فانتزی",
    description:
      "دیس بیضی با لبه‌های موج‌دار و بافت مات برای سرو شیرینی یا چیدمان دکوری.",
    specs: {
      material: "پارافین فشرده",
      size: "۱۸ × ۳۴ سانتی‌متر",
      color: "سفید صدفی",
    },
  },
  {
    id: 8,
    slug: "short-orbit-vase",
    name: "گلدان کوتاه مدار",
    price: 390000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع جار",
    description:
      "فرمی گرد و متعادل با دهانهٔ کوچک، مناسب شاخه‌های مینیمال و خشک.",
    specs: {
      material: "موم و ترکیبات معدنی",
      size: "ارتفاع ۱۸ سانتی‌متر",
      color: "بژ روشن",
    },
  },
  {
    id: 9,
    slug: "minimal-candle-stand",
    name: "پایه شمع مینیمال",
    price: 280000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "دکوراتیو",
    description:
      "پایه‌ای ساده با تناسبات ظریف برای شمع‌های باریک و میزهای خلوت.",
    specs: {
      material: "پارافین سخت",
      size: "ارتفاع ۱۴ سانتی‌متر",
      color: "ذغالی",
    },
  },
  {
    id: 10,
    slug: "soft-edge-bowl-pair",
    name: "جفت کاسه لبه‌نرم",
    price: 430000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع فانتزی",
    description:
      "دو کاسهٔ کوچک با لبه‌های نرم و نامنظم، مناسب تنقلات یا اشیای ظریف.",
    specs: {
      material: "موم ترکیبی",
      size: "قطر ۱۲ و ۱۶ سانتی‌متر",
      color: "کرم روشن",
    },
  },
  {
    id: 11,
    slug: "arched-object",
    name: "حجم دکوری قوس",
    price: 320000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "دکوراتیو",
    description:
      "یک حجم معماری کوچک برای کتابخانه، کنسول یا کنار قاب‌های تصویری.",
    specs: {
      material: "پارافین و پودر سنگ",
      size: "۲۰ × ۱۵ سانتی‌متر",
      color: "سفید گچی",
    },
  },
  {
    id: 12,
    slug: "slim-neck-vase",
    name: "گلدان گردن‌باریک",
    price: 570000,
    image: "/Images/Products/IMG_20260916_173321_670.jpg",
    category: "شمع جار",
    description:
      "گلدانی آرام با بدنهٔ پر و گردن باریک برای نمایش یک یا دو شاخهٔ ساده.",
    specs: {
      material: "موم طبیعی و پارافین",
      size: "ارتفاع ۲۷ سانتی‌متر",
      color: "طوسی گرم",
    },
  },
];

export const formatPrice = (price: number) =>
  `${price.toLocaleString("fa-IR")} تومان`;
