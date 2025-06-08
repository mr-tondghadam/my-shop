import { useState } from "react";

const AccordionMenu = ({ categories = [] }) => {
  const [openIndex, setOpenIndex] = useState(null); // index باز شده

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      {categories.map((c, index) => (
        <div
          key={index}
          className='w-[90%] bg-white rounded shadow-md overflow-hidden transition'>
          <div
            className='px-4 py-2 cursor-pointer bg-white hover:bg-gray-200'
            onClick={() => toggleCategory(index)}>
            {c.title}
          </div>

          <div
            className={`flex flex-col gap-1 px-4 transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 py-2" : "max-h-0 py-0"
            } overflow-hidden`}>
            {c.subcategories.map((sc, subIndex) => (
              <button
                key={subIndex}
                className='text-right text-sm bg-slate-100 hover:bg-slate-200 py-1 px-2 rounded'>
                {sc}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionMenu;
