import catImg1 from "../../assets/img/category/category1.webp";
import catImg2 from "../../assets/img/category/category2.webp";
import catImg3 from "../../assets/img/category/category3.webp";
import catImg4 from "../../assets/img/category/category4.webp";
import catImg5 from "../../assets/img/category/category5.webp";
import catImg6 from "../../assets/img/category/category6.webp";
import catImg7 from "../../assets/img/category/category7.webp";
const categories = [
  {
    title: "موبایل",
    img: catImg1,
    subcategories: ["گوشی موبایل", "تبلت", "لوازم جانبی موبایل", "گجت‌ هوشمند"],
  },
  {
    title: "لپ‌تاپ ",
    img: catImg2,
    subcategories: [
      "لپ‌تاپ",
      "کامپیوتر رومیزی",
      "مانیتور",
      "کیبورد و ماوس",
      "پرینتر و اسکنر",
      "لوازم جانبی کامپیوتر",
    ],
  },
  {
    title: "صوتی تصویری",
    img: catImg3,
    subcategories: [
      "هدفون و هندزفری",
      "اسپیکر",
      "تلویزیون",
      "ساندبار و سینمای خانگی",
      "گیرنده دیجیتال",
    ],
  },
  {
    title: "لوازم خانگی",
    img: catImg4,
    subcategories: [
      "جاروبرقی هوشمند",
      "کولر گازی دیجیتال",
      "مایکروویو دیجیتال",
      "ماشین لباسشویی هوشمند",
    ],
  },
  {
    title: "گیمینگ ",
    img: catImg5,
    subcategories: ["کنسول بازی", "لوازم جانبی گیمینگ", "بازی‌ها"],
  },
  {
    title: "گجت‌ها ",
    img: catImg6,
    subcategories: ["ساعت و دستبند هوشمند", "دوربین مداربسته", "خانه هوشمند"],
  },
  {
    title: "ذخیره‌سازی ",
    img: catImg7,
    subcategories: [
      "پاوربانک",
      "شارژر",
      "کابل و مبدل",
      "کارت حافظه / فلش / SSD / هارد اکسترنال",
    ],
  },
  {
    title: "ذخیره‌سازی",
    img: catImg7,
    subcategories: [
      "پاوربانک",
      "شارژر",
      "کابل و مبدل",
      "کارت حافظه / فلش / SSD / هارد اکسترنال",
    ],
  },
  {
    title: "گوشی موبایل",
    img: catImg1,
    subcategories: [
      "اندروید",
      "آیفون",
      "لوازم جانبی موبایل",
      "گلس و قاب محافظ",
    ],
  },
  {
    title: "لپ‌تاپ و کامپیوتر",
    img: catImg2,
    subcategories: [
      "لپ‌تاپ",
      "کامپیوتر رومیزی",
      "مانیتور",
      "لوازم جانبی کامپیوتر",
    ],
  },
  {
    title: "صوتی و تصویری",
    img: catImg3,
    subcategories: ["هدفون و هدست", "اسپیکر", "تلویزیون", "ساندبار"],
  },
  {
    title: "خانه هوشمند",
    img: catImg4,
    subcategories: [
      "دوربین امنیتی",
      "لامپ هوشمند",
      "پریز هوشمند",
      "دستیار صوتی",
    ],
  },
  {
    title: "گیمینگ",
    img: catImg5,
    subcategories: [
      "کنسول بازی",
      "دسته بازی",
      "بازی و نرم‌افزار",
      "صندلی گیمینگ",
    ],
  },
  {
    title: "پوشیدنی‌های هوشمند",
    img: catImg6,
    subcategories: ["ساعت هوشمند", "مچ‌بند سلامت", "بند و لوازم جانبی"],
  },
];

const MainCategories = () => {
  return (
    <div className='w-full select-none hidden md:block overflow-x-auto my-4 '>
      <div className='flex items-center gap-5 justify-center min-w-max px-4'>
        {categories.map((c, index) => (
          <button
            data-aos='fade-up'
            data-aos-delay={(index + 1) * 100}
            key={index}
            className='flex group flex-col items-center w-[60px] h-[60px] md:w-[100px] md:h-[100px] p-2 md:p-3 rounded-full justify-center bg-slate-100 hover:bg-slate-300 duration-500 shrink-0'>
            <img
              className='mix-blend-multiply h-[30px] md:h-[40px] group-hover:scale-95 duration-500'
              src={c.img}
              alt={c.title}
            />
            <p className='text-xs mt-1 hidden md:block'>{c.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainCategories;
