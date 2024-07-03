import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "https://www.svgrepo.com/show/13671/youtube.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
  return (
    <div>
      <footer className="  pb-10" id="contact">
        {/* background grid */}
        
        
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Rony Miah
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
