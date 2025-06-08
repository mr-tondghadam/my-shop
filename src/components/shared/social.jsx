import { FaGithub, FaLinkedin, FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Social = ({ size = "text-2xl" }) => {
  return (
    <div data-aos='fade-up' className={`flex gap-5 ${size} p-8 text-gray-500`}>
      <a
        className='hover:text-blue-400 hover:scale-110 duration-200'
        href='https://www.instagram.com/mr_tondghadam?igsh=MXdwdWpxczRvdW91bQ=='>
        <FaSquareInstagram />
      </a>
      <a
        className='hover:text-blue-400 hover:scale-110 duration-200'
        href='https://t.me/mr_tondghadam'>
        <FaTelegram />
      </a>
      <a
        className='hover:text-blue-400 hover:scale-110 duration-200'
        href='tel:+989211216069'>
        <FaPhoneAlt />
      </a>
      <a
        className='hover:text-blue-400 hover:scale-110 duration-200'
        href='https://www.linkedin.com/in/mohammadhosein-tondghadam-95882a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
        <FaLinkedin />
      </a>
      <a
        className='hover:text-blue-400 hover:scale-110 duration-200'
        href='https://github.com/mr-tondghadam'>
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
