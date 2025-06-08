import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import AccordionMenu from "../shared/accordionMenu";
import { useState } from "react";
import { formatNumber } from "../../helpers/formatNumber";

const categories = [
  {
    title: "موبایل",

    subcategories: ["گوشی موبایل", "تبلت", "لوازم جانبی موبایل", "گجت‌ هوشمند"],
  },
  {
    title: "لپ‌تاپ ",

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

    subcategories: [
      "جاروبرقی هوشمند",
      "کولر گازی دیجیتال",
      "مایکروویو دیجیتال",
      "ماشین لباسشویی هوشمند",
    ],
  },
  {
    title: "گیمینگ ",

    subcategories: ["کنسول بازی", "لوازم جانبی گیمینگ", "بازی‌ها"],
  },
  {
    title: "گجت‌ها ",

    subcategories: ["ساعت و دستبند هوشمند", "دوربین مداربسته", "خانه هوشمند"],
  },
  {
    title: "ذخیره‌سازی ",

    subcategories: [
      "پاوربانک",
      "شارژر",
      "کابل و مبدل",
      "کارت حافظه / فلش / SSD / هارد اکسترنال",
    ],
  },
];

const SideMenu = ({ show = false, setShowSide = () => {} }) => {
  const [price, setPrice] = useState(21000);
  return (
    <div
      className={`fixed top-0 overflow-y-auto right-0 h-full w-[70%] md:w-[30%] bg-slate-100 shadow transition-transform duration-300 ease-in-out z-50
    ${show ? "translate-x-0" : "translate-x-full"}`}>
      <button
        className='text-2xl m-4 hover:bg-red-500 p-1 rounded-full duration-150 hover:text-white'
        onClick={() => {
          setShowSide(!show);
        }}>
        <MdClose />
      </button>

      <div className='w-full mb-5 md:hidden px-4'>
        <div className='flex group bg-red-600 items-center dark:bg-slate-700 border-2 rounded-full overflow-hidden border-red-200 dark:border-slate-600'>
          <FaSearch className='mx-3 text-white group-hover:scale-125 duration-700' />
          <input
            className='outline-none dark:bg-slate-700 w-full py-1 text-xl px-5'
            placeholder='جستوجو'
            type='text'
          />
        </div>
      </div>
      <div className='w-full px-10 py-5 flex flex-col'>
        <h2 className='text-xl'>فیلتر ها :</h2>
        <div className='w-full border-b py-2'>
          <p>قیمت : </p>
          <input
            className='w-full'
            type='range'
            name={price}
            min={1000}
            step={1000}
            value={price}
            max={1000000}
            onChange={(e) => {
              // console.log(e.target.value);
              setPrice(e.target.value);
            }}
          />
          <p>{`${formatNumber(price)}   تومان`}</p>
        </div>
      </div>
      <AccordionMenu categories={categories} />
    </div>
  );
};

export default SideMenu;
