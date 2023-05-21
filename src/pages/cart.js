import { useState } from "react";
import { BiFoodTag } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");

  console.log(size);
  // console.log(quantity);
  // console.log(typeof quantity);

  return (
    <Wrapper className="my-3">
      <h1 className="text-center text-lg font-bold">Sameer's Cart</h1>

      <div className="flex flex-col gap-3">
        {/* cart items block start */}
        <div>
          <h3 className="text-base mb-1">Cart Items</h3>

          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-gray-100 border rounded-sm p-2 mb-2"
            >
              <div className="flex gap-2">
                <Image
                  src="/pizza1.png"
                  alt=""
                  width={300}
                  height={300}
                  className="w-28 h-28"
                />

                <div>
                  <h4 className="text-base font-medium leading-tight mb-[2px]">
                    Panner Pizza
                  </h4>
                  <h5
                    className={`flex items-center gap-1 text-sm md:text-base md:font-medium  ${
                      true ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    <BiFoodTag className="text-xl md:text-2xl ml-[-2px]" />
                    {true ? "Pure-vegetarian" : "Non-vegetarian"}
                  </h5>

                  <h5 className="text-xs text-gray-500  my-[5px] flex flex-wrap items-center ">
                    <span className=" text-sm text-black mr-1">
                      Added Toppings :
                    </span>
                    Tomato, Onion, Capscicum
                  </h5>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 my-2">
                      <span className="text-sm text-black">Size :</span>

                      <select
                        className="border outline-none"
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-black flex items-center gap-2">
                        Quantity :
                        <input
                          type="number"
                          min="1"
                          max="100"
                          defaultValue={1}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="border outline-none text-xs text-gray-500 text-center"
                        />
                      </label>

                      {+quantity > 100 && (
                        <h5 className="text-xs text-red-600 mt-[2px]">
                          Pizza quantity can't be more than 100.
                        </h5>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-2">
                <span className="font-medium text-base">&#8377; 850 </span>
                <button className="text-red-700 text-xl">
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* cart items block end */}

        {/* summary block start */}
        <div>
          <h3 className="text-base mb-1">Summary</h3>

          <div className="bg-red-200 p-2 border border-red-400 rounded-sm">
            <h4 className="flex justify-between text-base font-medium mb-1">
              <span>Subtotal</span> <span> &#8377; 850 </span>
            </h4>
            <p className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda suscipit eligendi amet, consectetur laboriosam.
            </p>
          </div>

          <button className="bg-black/95 text-white w-full my-3 p-2 border border-black/95 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear">
            Checkout
          </button>
        </div>
        {/* summary block end */}
      </div>
    </Wrapper>
  );
}

export default Cart;
