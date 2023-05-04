import PizzaCard from "./PizzaCard";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 962 },
    items: 4,
  },

  tablet: {
    breakpoint: { max: 962, min: 768 },
    items: 3,
  },

  customBreakpointToHideArrow: {
    breakpoint: { max: 768, min: 480 },
    items: 3,
  },

  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
  },
};

function MultiSlider() {
  // const ArrowFix = (arrowProps) => {
  //   const { carouselState, children, ...restArrowProps } = arrowProps;
  //   return (
  //     <AiFillLeftCircle
  //       {...restArrowProps}
  //       className="absolute top-1/2 left-2 z-10 translate-y-[-50%] text-4xl text-black/40 hover:text-black/80 cursor-pointer "
  //     >
  //       {children}
  //     </AiFillLeftCircle>
  //   );
  // };

  return (
    <Carousel
      responsive={responsive}
      containerClass="-mx-1 "
      itemClass="flex "
      autoPlay={true}
      removeArrowOnDeviceType={["customBreakpointToHideArrow", "mobile"]}
      rewind={true}
      rewindWithAnimation={true}
      customLeftArrow={
        <AiFillLeftCircle className="absolute top-1/2 left-2 z-10 translate-y-[-50%] text-4xl text-black/40 hover:text-black/80 cursor-pointer " />
      }
      customRightArrow={
        <AiFillRightCircle className="absolute top-1/2 right-2 z-10 translate-y-[-50%] text-4xl text-black/40 hover:text-black/80 cursor-pointer " />
      }
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <PizzaCard
          key={item}
          className="!w-full m-1 !shadow-none border-gray-300"
        />
      ))}
    </Carousel>
  );
}

export default MultiSlider;
