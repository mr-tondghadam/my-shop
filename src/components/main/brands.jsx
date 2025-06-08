import React from "react";
const digitalBrands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Sony",
  "Huawei",
  "Asus",
  "HP",
  "Dell",
  "Lenovo",
  "Microsoft",
  "LG",
  "Honor",
  "Nokia",
  "Razer",
  "MSI",
  "OnePlus",
];

const Brands = () => {
  return (
    <div
      data-aos='zoom-out'
      className='flex justify-center mb-10 items-center gap-5 text-2xl py-5 font-bold uppercase overflow-x-auto scrollbar-hide text-slate-100 bg-slate-500'>
      {digitalBrands.map((b) => (
        <p>{b}</p>
      ))}
    </div>
  );
};

export default Brands;
