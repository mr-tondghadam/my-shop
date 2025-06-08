import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { textTruncate } from "../../helpers/truncate";

const Publication = ({ data }) => {
  return (
    <div className='mx-auto container mb-5'>
      <h2 data-aos='fade-up' className='text-2xl mb-5 text-center'>
        مقاله ها :
      </h2>
      <Swiper
        data-aos='zoom-in'
        modules={[Autoplay]} // ماژول Autoplay را اضافه کنید
        spaceBetween={60} // فاصله بین اسلایدها
        // slidesPerView={3}
        loop={true} // اسلایدها به صورت پیوسته حرکت می‌کنند
        autoplay={{
          delay: 1500, // تأخیر 1 ثانیه بین هر اسلاید
          disableOnInteraction: false, // اسکرول ادامه پیدا می‌کند حتی وقتی کاربر تعامل دارد
          pauseOnMouseEnter: true,
        }}
        speed={1000} // مدت زمان حرکت یک اسلاید
        direction='horizontal' // جهت اسکرول افقی
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}>
        {data.map((c) => (
          <SwiperSlide key={c?._id}>
            <div className='max-w-[400px] bg-white shadow-2xl py-5 rounded-md mx-auto flex flex-col justify-center items-center hover:scale-95 overflow-hidden duration-700'>
              <img
                className='w-[350px] h-[200px] object-cover rounded-md'
                src={c?.image}
                alt={c?.title}
              />
              <h2 className='text-2xl h-[80px] w-[340px] text-neutral-900'>
                {c?.title}
              </h2>
              <h2 className='text-xl w-[340px] text-neutral-600'>
                {textTruncate(c?.content, 70)}
              </h2>
              <button className='bg-green-500 hover:bg-green-600 duration-300 text-2xl text-white py-2 w-[80%] m-5 rounded-md'>
                مشاهده بیشتر
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Publication;
