import Wrapper from "./Wrapper";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const imgArray = ["p1.jpg", "p2.jpg", "p3.jpg"];

function HeroSlider() {
  return (
    <Wrapper className="my-3 min-[426px]:my-5 ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={2500}
        useKeyboardArrows={true}
        renderArrowPrev={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute top-[50%] left-0 sm:left-2 translate-y-[-50%] z-10 text-white/90 sm:text-white/60 sm:hover:text-white/90 sm:text-xl  sm:bg-black/20 sm:hover:bg-black/70 sm:cursor-pointer p-[5px] rounded-full "
          >
            <AiOutlineLeft />
          </div>
        )}
        renderArrowNext={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute top-[50%] right-0 sm:right-2 translate-y-[-50%] z-10 text-white/90 sm:text-white/60 sm:hover:text-white/90 sm:text-xl  sm:bg-black/20 sm:hover:bg-black/70 sm:cursor-pointer p-[5px] rounded-full "
          >
            <AiOutlineRight />
          </div>
        )}
      >
        {imgArray.map((img, i) => (
          <div key={i} className="md:max-h-[calc(100vh-300px)]">
            <img src={`/${img}`} alt="" />
            <p>
              <Link
                href="/"
                className="bg-red-600 text-white italic absolute top-4 left-0 px-3 py-[6px] font-medium text-sm rounded-e-md border border-dotted border-l-0 sm:top-8 sm:text-base sm:px-4 sm:py-2 md:top-12 md:text-2xl md:font-bold  md:hover:bg-red-700 md:py-3 md:px-6 "
              >
                Order Now !
              </Link>
            </p>
          </div>
        ))}
      </Carousel>
    </Wrapper>
  );
}

export default HeroSlider;
