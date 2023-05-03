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

  const [imgUrl, setImgUrl] = useState("/footerImg.jpg");

  const [pizzaSize, setPizzaSize] = useState("small");
  const [toppings, setToppings] = useState([]);

  console.log(toppings);

  return (
    <Wrapper className="">
      <div className="sm:flex sm:gap-2 sm:my-5 my-3 ">
        <div className="sm:w-1/2 flex flex-col sm:flex-row-reverse sm:gap-3 justify-center items-center ">
          <div className=" w-full flex justify-center items-center border ">
            <Image
              src={imgUrl}
              alt=""
              width={500}
              height={500}
              priority
              className="w-full max-w-[350px] max-h-[350px] sm:max-w-full md:max-h-[500px] object-cover"
            />
          </div>

          <div className=" w-full sm:w-auto flex justify-evenly items-center py-3  sm:flex-col  min-[340px]:justify-center min-[340px]:gap-2   ">
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

        <div className="sm:w-1/2 ">
          <h1 className="min-[965px]:text-xl  md:text-lg font-medium text-lg">
            BBQ Chicken Pizza
          </h1>

          {/* veg non-veg icon and text start */}

          <p
            className={`flex items-center gap-1 text-sm ${
              true ? "text-green-600" : "text-red-600"
            }`}
          >
            <BiFoodTag className="text-xl" />
            {true ? "Pure-vegetarian" : "Non-vegetarian"}
          </p>

          {/* veg non-veg icon and text end */}

          {/* price and discount start */}

          <div className="flex items-center gap-5 my-1  text-lg  ">
            <p>
              <span className="font-medium"> &#8377;450</span>
              <s className="sm:text-sm text-sm text-gray-500 ml-2">
                &#8377;500
              </s>
            </p>

            <span className="text-green-600 text-sm ">10% off</span>
          </div>

          {/* price and discount end */}

          <p className=" !leading-tight text-sm text-gray-500 min-[965px]:text-base  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minus
            neque nobis quas dolor! Deserunt debitis quidem accusamus nemo
            reprehenderit.
          </p>

          {/* pizza size block start */}

          <div className="my-3">
            <h3 className="text-base font-medium mb-1">Choose pizza size</h3>
            <ul className="flex gap-2 list-none">
              {["small", "medium", "large"].map((size) => (
                <li
                  key={size}
                  className=" bg-black/95 text-white flex-1 text-center  text-sm font-medium capitalize md:cursor-pointer"
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

          <h3 className="text-base font-medium mb-[6px] mt-4">
            Add extra toppings @ &#8377;40 each
          </h3>

          <div className=" flex flex-wrap gap-2">
            {toppingsArray.map((pizzaTopping) => (
              <label
                key={pizzaTopping}
                className="flex items-center justify-center gap-2 border border-gray-200 capitalize text-sm font-medium text-gray-500 px-2 py-[6px]  md:cursor-pointer "
              >
                <input
                  type="checkbox"
                  value={pizzaTopping}
                  className="w-[15px] h-[15px]"
                  onClick={(e) => setToppings([...toppings, e.target.value])}
                />
                {pizzaTopping}
              </label>
            ))}
          </div>

          {/* add toppings block end */}

          {/* buttons block start */}

          <div className="my-5 flex flex-col gap-[10px] font-medium ">
            <button className="p-2 border border-black/95 rounded-full active:scale-[0.95] transition-all">
              Add to Cart
            </button>

            <button className="text-white p-2 border border-black/95 bg-black/95 rounded-full active:scale-[0.95] transition-all">
              Add to Wishlist
            </button>
          </div>

          {/* buttons block end */}
        </div>
      </div>

      <hr className="border min-[426px]:border-2 mt-8" />

      {/* related pizza block start  */}

      <div className=" my-5  min-[426px]:my-7 ">
        <h1 className="min-[965px]:text-xl  md:text-lg font-medium text-lg mb-1">
          You may also like
        </h1>

        <MultiSlider />
      </div>

      {/* related pizza block end  */}
    </Wrapper>
  );
}

export default PizzaDetails;
