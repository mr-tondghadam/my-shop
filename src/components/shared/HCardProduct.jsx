import { useRef, useState } from "react";
import { textTruncate } from "../../helpers/truncate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { formatNumber } from "../../helpers/formatNumber";

const HCardProduct = ({ category = "", heading = "", data = [] }) => {
  const [loading, setLoading] = useState(false);

  const scrollElement = useRef();

  const scrollRight = () => {
    scrollElement.current.scrollTo({
      left: scrollElement.current.scrollLeft + 220,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollElement.current.scrollTo({
      left: scrollElement.current.scrollLeft - 220,
      behavior: "smooth",
    });
  };

  return (
    <div className='container mx-auto px-4 gap-2 my-6 relative'>
      <h2 data-aos='fade-up' className='text-2xl font-bold py-2 text-center'>
        {heading}
      </h2>

      {loading ? (
        <div className='flex justify-center'>
          {/* <img
            src={loading1}
            alt='login icon'
            className='rounded-full w-12 md:w-24 mix-blend-multiply'
          /> */}
        </div>
      ) : (
        <div
          className='flex items-center overflow-x-scroll scrollbar-hide transition-all scrollbar-none px-2'
          ref={scrollElement}>
          <button
            className='hidden md:block hover:bg-red-500 absolute left-0 text-2xl z-10 border-gray-300 border-2 shadow-lg hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollLeft}>
            <FaAngleLeft />
          </button>
          <button
            className='hidden md:block hover:bg-red-500 absolute right-0 text-2xl z-10 border-gray-300 border-2 shadow-lg hover:text-white p-1 duration-500 bg-white rounded-full'
            onClick={scrollRight}>
            <FaAngleRight />
          </button>
          {data?.map((el, index) => (
            <Link
              data-aos='fade-down'
              data-aos-delay={(index + 1) * 100}
              to={`#`}
              key={el._id}
              className='w-full group overflow-hidden flex relative items-center min-w-[400px] m-3 md:min-w-[400px] max-w-[400px] md:max-w-[320px] p-2 bg-white shadow-md rounded'>
              <div className='absolute rounded-md duration-300 opacity-100 ms-6 right-0 top-6  bg-red-500 px-2'>
                <span className='relative opacity-100 mt-5 z-50 text-xs md:font-bold self-end text-white shadow-lg'>
                  {Math.floor(
                    100 - (Number(el?.sellingPrice) / Number(el?.price)) * 100
                  )}{" "}
                  درصد تخفیف
                </span>
                <span className='absolute top-1 bg-red-500 w-[15px] z-10 -start-1 rotate-45 h-[15px]'></span>
              </div>
              <div className='h-40 md:h-52 flex items-center justify-center min-w-[150px] md:min-w-[200px]'>
                <img
                  src={el.productImage}
                  alt={el?.productName}
                  className='object-scale-down h-full mix-blend-multiply rounded-md hover:scale-110 transition-all'
                />
              </div>
              <div className='p-4 grid'>
                <h2 className='font-medium md:font-lg'>
                  {textTruncate(el?.productName, 8)}
                </h2>
                <p className='text-stone-500'>{el?.category}</p>
                <div className='flex flex-col gap-2'>
                  <p className='md:text-sm line-through text-slate-400'>
                    {formatNumber(el?.price)}
                  </p>
                  <p className='text-2xl md:text-2xl text-red-700 font-bold'>
                    {formatNumber(el?.sellingPrice)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {}}
                className='bg-white shadow-xl m-5 absolute top-0 rounded-full end-0 p-2 text-2xl md:font-bold  text-black hover:bg-red-500 hover:text-white transition-all'>
                <CiHeart />
              </button>
              <button
                onClick={() => {}}
                className='bg-green-400 m-5 absolute bottom-0 end-0 rounded-full p-2 text-2xl md:font-bold  text-white hover:bg-green-700 hover:scale-95 transition-all'>
                <SlBasket />
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HCardProduct;
