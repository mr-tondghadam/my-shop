import React from "react";

const BannerH = ({ data }) => {
  return (
    <div className='min-h-[400px] flex mx-3 justify-center items-center'>
      <div className='container'>
        <div
          style={{ backgroundColor: data?.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-1 text-white rounded-3xl'>
          {/* first col  */}
          <div className='p-6 sm:p-8'>
            <p data-aos='slide-right' className='text-sm'>
              {data?.discount}
            </p>
            <h1
              data-aos='zoom-out'
              className='uppercase text-3xl lg:text-5xl font-bold'>
              {data.title}
            </h1>
            <p data-aos='fade-up' className='text-sm mt-4'>
              {data?.date}
            </p>
          </div>
          {/* second col  */}
          <div data-aos='zoom-in' className='h-full flex items-center '>
            <img
              src={data?.image}
              alt=''
              className='scale-150 md:scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover hover:scale-110 duration-300'
            />
          </div>
          {/* third col  */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p data-aos='zoom-out' className='font-bold text-xl'>
              {data?.title2}
            </p>
            <p data-aos='fade-up' className='text-3xl sm:text-4xl font-bold'>
              {data?.title3}
            </p>
            <p
              data-aos='fade-up'
              className=' text-sm mt-5 tracking-wide leading-5'>
              {data?.title4}
            </p>
            <div data-aos='fade-up' data-aos-offset='0'>
              <button
                style={{ color: data?.bgColor }}
                className='bg-white px-4 py-2 rounded-full hover:bg-black duration-300'>
                خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerH;
