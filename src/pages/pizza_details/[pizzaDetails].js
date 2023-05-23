import { useState } from "react";
import { useRouter } from "next/router";
import { BiFoodTag } from "react-icons/bi";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import MultiSlider from "@/components/MultiSlider";

const imgArray = [
  "/girldp.webp",
  "/footerImg.jpg",
  "/girldp.webp",
  "/footerImg.jpg",
  "/girldp.webp",
];

const toppingsArray = [
  "paneer",
  "tomato",
  "mushrooms",
  "onion",
  "capsicum",
  "pepperoni",
];

function PizzaDetails() {
  const router = useRouter().query;
  //   console.log(router);

  const [imgUrl, setImgUrl] = useState("/girldp.webp");
  const [pizzaSize, setPizzaSize] = useState("small");
  const [toppings, setToppings] = useState([]);

  return (
    <Wrapper>
      <div className="sm:flex sm:gap-3 md:gap-4 sm:my-5 my-3">
        {/* images block start */}
        <div className="sm:w-1/2 flex flex-col min-[1025px]:flex-row-reverse min-[1025px]:gap-3   sm:sticky sm:top-[70px] md:top-[90px] h-full">
          <div className=" flex justify-center ">
            <Image
              src={imgUrl}
              alt=""
              width={800}
              height={800}
              priority
              className="w-full max-w-[350px] max-h-[350px] sm:max-w-full sm:max-h-[400px] md:max-h-[500px] object-cover"
            />
          </div>

          <div className=" w-full sm:w-auto flex justify-evenly items-center py-3  min-[1025px]:flex-col min-[1025px]:max-h-[500px]  min-[340px]:justify-center min-[340px]:gap-2 ">
            {imgArray.map((img, index) => (
              <Image
                src={img}
                alt=""
                width={60}
                height={60}
                key={index}
                onClick={() => setImgUrl(img)}
                className=" w-12 h-12 min-[930px]:w-[60px] min-[930px]:h-[60px] border border-gray-400 p-[3px] md:hover:border-black md:cursor-pointer object-cover"
              />
            ))}
          </div>
        </div>
        {/* images block end */}

        {/* pizza details block start */}
        <div className="sm:w-1/2">
          <h1 className="min-[965px]:text-3xl  md:text-2xl sm:font-bold font-medium text-lg">
            BBQ Chicken Pizza
          </h1>

          {/* veg non-veg icon and text start */}
          <p
            className={`flex items-center gap-1 text-sm md:text-base md:font-medium  ${
              true ? "text-green-600" : "text-red-600"
            }`}
          >
            <BiFoodTag className="text-xl md:text-2xl" />
            {true ? "Pure-vegetarian" : "Non-vegetarian"}
          </p>
          {/* veg non-veg icon and text end */}

          {/* price and discount start */}
          <div className="flex items-center gap-5 md:gap-6 my-1  text-lg  ">
            <p>
              <span className="min-[965px]:text-[26px]  md:text-2xl font-medium">
                &#8377;450
              </span>
              <s className="md:text-lg text-sm text-gray-500 ml-2">
                &#8377;500
              </s>
            </p>

            <span className="text-green-600 text-sm md:text-lg ">10% off</span>
          </div>
          {/* price and discount end */}

          <p className=" !leading-tight text-sm text-gray-500 md:text-base  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
            neque nobis quas dolor! Deserunt debitis quidem accusamus nemo
            reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Accusamus, voluptatum totam.
          </p>

          {/* pizza size block start */}
          <div className="my-3">
            <h3 className="text-base md:text-xl font-medium mb-1">
              Choose pizza size
            </h3>
            <ul className="flex gap-2  list-none">
              {["small", "medium", "large"].map((size) => (
                <li
                  key={size}
                  className=" bg-black/95 text-white flex-1 text-center  text-sm md:text-base font-medium capitalize md:cursor-pointer"
                >
                  <option
                    value={size}
                    onClick={(e) => setPizzaSize(e.target.value)}
                    className={`${size === pizzaSize && "bg-red-600"} p-2`}
                  >
                    {size}
                  </option>
                </li>
              ))}
            </ul>
          </div>
          {/* pizza size block end */}

          {/* add toppings block start */}
          <h3 className="text-base md:text-xl font-medium mb-[6px] mt-4">
            Add extra toppings @ &#8377;40 each
          </h3>

          <div className=" flex flex-wrap gap-2">
            {toppingsArray.map((pizzaTopping) => (
              <label
                key={pizzaTopping}
                className="flex items-center justify-center gap-2 border border-gray-200 text-sm md:text-base font-medium text-gray-500 px-2 py-[6px] capitalize  md:cursor-pointer "
              >
                <input
                  type="checkbox"
                  value={pizzaTopping}
                  className="w-[15px] h-[15px] "
                  onClick={(e) => setToppings([...toppings, e.target.value])}
                />
                {pizzaTopping}
              </label>
            ))}
          </div>
          {/* add toppings block end */}

          {/* buttons block start */}

          <div className="my-5 flex flex-col gap-[10px] md:gap-3 font-medium md:text-lg">
            <button className="p-2 border border-black/95 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear">
              Add to Cart
            </button>

            <button className="text-white p-2 border border-black/95 bg-black/95 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear">
              Add to Wishlist
            </button>
          </div>

          {/* buttons block end */}
        </div>

        {/* pizza details block end */}
      </div>

      <hr className="border mt-7 lg:mt-9" />

      {/* related pizza block start  */}
      <div className=" my-5  min-[426px]:my-7 ">
        <h1 className="min-[965px]:text-2xl  md:text-xl font-medium sm:font-semibold  text-lg mb-1 -mt-1 ">
          You may also like
        </h1>

        <MultiSlider />
      </div>
      {/* related pizza block end  */}
    </Wrapper>
  );
}

export default PizzaDetails;
