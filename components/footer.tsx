import SocialIcon from "./SocialIcon";
import { FaPhoneAlt, FaMailBulk, FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="text-sm">
          <h2>Contact me</h2>

          <div className="flex mx-auto my-2">
            <div className="mr-2">
              <FaPhoneAlt size="19" className="nav-linker" />
            </div>

            <div>
              <a href="tel:+84522150701">+84 522 150 701</a>
            </div>
          </div>

          <div className="flex mx-auto my-2 justify-between">
            <div className="mr-2">
              <FaMailBulk size="19" className="nav-linker" />
            </div>

            <div>
              <a href="mailto:thanhhieu0706@outlook.com">
                {"thanhhieu0706@outlook.com".toLowerCase()}
              </a>
            </div>
          </div>

          <div className="flex mx-auto my-2">
            <div className="text-sm mr-2">
              <FaRegCopyright size="19" className="nav-linker" />
            </div>

            <div>
              <a href="#" className="hover:text-pink-600">
                {new Date().getFullYear()} Hieu Dang
              </a>
            </div>
          </div>
        </div>

        <div>
          <SocialIcon url="https://www.linkedin.com/in/hieu-dang-b9800a184/" />
          <SocialIcon url="https://github.com/ThanhHieuDang0706" />
          <SocialIcon url="mailto:thanhhieu0707@outlook.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
