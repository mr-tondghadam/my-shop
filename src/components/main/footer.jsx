import React from "react";
import Social from "../shared/social";

const Footer = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center py-10 bg-slate-300'>
      <p data-aos='fade-in' className='text-xl mb-5'>
        این وب سایت توسط <span>mtcoder</span> طراحی شده
      </p>
      <p data-aos='fade-right'>لینک وب سایت :</p>
      <a
        data-aos='fade-left'
        className='text-blue-600 text-2xl underline'
        href='https://mtcoder.com'>
        mtcoder.com
      </a>
      <p className='mt-5'>دیگر راه های تماس :</p>
      <Social />
    </div>
  );
};

export default Footer;
