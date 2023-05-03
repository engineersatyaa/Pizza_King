import Wrapper from "./Wrapper";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";

const imgArray = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

function HeroSlider() {
  return (
    <Wrapper className="my-3 min-[426px]:my-5">
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
            className="absolute top-1/2 left-2 translate-y-[-50%] z-10"
          >
            <AiFillLeftCircle className="hidden md:inline-block text-4xl bg-white/40 rounded-full hover:bg-white/70 cursor-pointer" />
          </div>
        )}
        renderArrowNext={(clickHandler) => (
          <div
            onClick={clickHandler}
            className="absolute top-1/2 right-2 translate-y-[-50%] z-10 "
          >
            <AiFillRightCircle className="hidden md:inline-block text-4xl bg-white/40 rounded-full hover:bg-white/70 cursor-pointer" />
          </div>
        )}
      >
        {imgArray.map((img, i) => (
          <div key={i} className="md:max-h-[calc(100vh-300px)]">
            <Image src={`/${img}`} alt="" width={900} height={700} priority />

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
