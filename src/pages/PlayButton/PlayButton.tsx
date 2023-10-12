

import dots from "../../assets/icons/dots.svg";
import play from "../../assets/icons/play.svg";
import next from "../../assets/icons/next.svg";
const PlButton = () => {
    return (
      <section>
        <div className="flex gap-x-[16px] items-center cursor-pointer">
          <span className="rounded-[24px] w-[80px] h-[80px] flex items-center justify-center bg-[#419d5726] dark:bg-[#b5c8d7]">
            <img src={dots} alt="dots" />
          </span>
          <span className="rounded-[24px] w-[128px] h-[96px] flex items-center justify-center bg-[#689b999e] dark:bg-[#8e4cffbd]">
            <img src={play} alt="play" />
          </span>
          <span className="rounded-[24px] w-[80px] h-[80px] flex items-center justify-center bg-[##419d5726] dark:bg-[#b5c8d7]">
            <img src={next} alt="next" />
          </span>
        </div>
      </section>
    );
};

export default PlButton;