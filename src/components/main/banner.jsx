import { useEffect, useState } from "react";

const MainBanner = ({ data }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomInt = Math.floor(Math.random() * data.length);
      setIndex(randomInt);
    }, 6000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div
      className='min-h-[500px] max-h-[500px] flex flex-col md:flex-row inset-rounded items-center justify-center md:gap-28 gap-3 w-[90%] mx-auto p-6 md:px-12 my-5 transition-all duration-700'
      style={{ backgroundColor: data[index]?.backgroundColor || "#1f2937" }}>
      {/* تصویر محصول */}
      <div data-aos='zoom-in'>
        <img
          src={data[index]?.image}
          alt={data[index]?.name}
          className='max-h-[300px] md:mx-5 z-30 hover:scale-110 md:max-h-[500px] object-contain drop-shadow-2xl transition-all duration-500'
        />
      </div>
      {/* متن و اطلاعات */}
      <div className='text-center md:mx-5 md:text-right space-y-4 md:space-y-6 max-w-[500px]'>
        <p
          className='text-base md:text-3xl font-light'
          style={{ color: data[index]?.textColor || "#f3f4f6" }}>
          {data[index]?.description}
        </p>
        <h1
          data-aos='fade-right'
          className='text-4xl md:text-6xl font-bold drop-shadow-sm'
          style={{ color: data[index]?.textColor || "#f9fafb" }}>
          {data[index]?.name}
        </h1>
        <p className='text-sm uppercase tracking-wide text-slate-900 font-semibold'>
          <a href='#'> {data[index]?.category}</a>
        </p>
        <div data-aos='fade-up'>
          <button className='bg-red-500 md:w-[200px] md:text-2xl hover:scale-110 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300'>
            خرید محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
