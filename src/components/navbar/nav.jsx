import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdLogin, MdOutlineMenu } from "react-icons/md";

const Nav = ({ setShowSide, showSide }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.remove("light");
    }
  }, [theme]);
  return (
    <div className='bg-slate-200 px-5 text-xl md:text-2xl py-2 md:py-5 transition-all select-none md:px-10 dark:bg-slate-900 w-full flex justify-between items-center'>
      <div data-aos='fade-left' className='flex gap-4'>
        <button
          className='cursor-pointer text-xl md:text-3xl hover:scale-125 duration-700'
          onClick={() => {
            setShowSide(!showSide);
          }}>
          <MdOutlineMenu className='text-slate-300-500' />
        </button>
        {/* <button
          className='cursor-pointer hover:-rotate-45 duration-700'
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}>
          {theme === "dark" ? (
            <FaSun className='text-yellow-500' />
          ) : (
            <FaMoon className='text-blue-950' />
          )}
        </button> */}
      </div>
      <div data-aos='zoom-in' className='hidden md:block w-[40%] '>
        <div className='flex h-full w-full group bg-red-600 items-center dark:bg-slate-700 border-2 rounded-full overflow-hidden border-red-200 dark:border-slate-600'>
          <FaSearch className='mx-3 text-white group-hover:scale-125 duration-700' />
          <input
            className='outline-none dark:bg-slate-700 w-full py-2 text-xl px-5'
            placeholder='جستوجو'
            type='text'
          />
        </div>
      </div>
      <div data-aos='zoom-out' className='md:hidden text-xl'>
        <h1>فروشگاه دیجیتال</h1>
      </div>

      <div data-aos='fade-right' className='text-xl md:text-3xl flex gap-5'>
        <button className='hover:rotate-45 text-green-900 duration-700'>
          <IoIosSettings />
        </button>
        <button className='hover:scale-110 text-green-900 duration-500'>
          <MdLogin />
        </button>
      </div>
    </div>
  );
};

export default Nav;
