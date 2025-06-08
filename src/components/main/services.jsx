import { FaRegPaperPlane, FaLock, FaRedoAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaRegPaperPlane className='text-4xl md:text-5xl text-white' />,
    title: "ارسال رایگان",
    desc: "سفارش‌های بالای ۵۰۰ هزار تومان",
  },
  {
    icon: <FaLock className='text-4xl md:text-5xl text-white' />,
    title: "پرداخت امن",
    desc: "با خیال راحت خرید کن!",
  },
  {
    icon: <FaRedoAlt className='text-4xl md:text-5xl text-white' />,
    title: "فرستادن پیشتاز",
    desc: "طی 10 الی 12 روز",
  },
  {
    icon: <FaHeadset className='text-4xl md:text-5xl text-white' />,
    title: "پشتیبان پاسخگو",
    desc: "از ۸ صبح تا ۵ بعدازظهر",
  },
];

const Services = () => {
  return (
    <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20 py-10'>
      {services.map((service, idx) => (
        <div
          data-aos='fade-up'
          data-aos-delay={(idx + 1) * 100}
          key={idx}
          className='flex flex-col md:flex-row items-center group text-center md:text-right gap-4 bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white shadow-md hover:shadow-xl transition-all duration-300'>
          <div className='animate-pulse-slow group-hover:scale-110 duration-500'>
            {service.icon}
          </div>
          <div className='space-y-1'>
            <h3 className='text-xl md:text-2xl font-bold'>{service.title}</h3>
            <p className='text-sm md:text-base font-light'>{service.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
