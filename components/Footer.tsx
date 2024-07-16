import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      {/* background grid */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to embark on <span className="text-purple">your</span> digital
          journey?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I am eager to contribute and grow in the digital realm. Let us connect
          to explore how I can bring fresh perspectives and energy to your
          projects.
        </p>
        <a href="mailto:ayushipanday22@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ayushi Panday
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 inline-block"
              >
                .
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
