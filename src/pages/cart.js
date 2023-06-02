import { useState } from "react";
import { BiFoodTag } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { CgArrowRight } from "react-icons/cg";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

function Cart() {
  const [pizzaSize, setPizzaSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  // console.log(pizzaSize);
  // console.log(quantity);
  // console.log(typeof quantity);

  return (
    <Wrapper className="my-3">
      <h1 className="text-center text-lg font-bold sm:text-[22px] md:text-2xl border-b md:border-b-2 pb-2 md:pb-3 my-4 sm:my-6">
        SHOPPING CART
      </h1>

      {true ? (
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-6 md:flex-row">
          {/* cart items block start */}
          <div className="md:w-full">
            <h3 className="text-base mb-1 font-medium">CART ITEMS</h3>

            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 bg-gray-200 border rounded-sm p-2 md:p-3 mb-2 md:flex-row md:justify-between"
              >
                <div className="flex gap-2">
                  <Image
                    src="/pizza1.png"
                    alt=""
                    width={300}
                    height={300}
                    priority
                    className="w-28 h-28"
                  />

                  <div>
                    <h4 className="text-base font-medium leading-tight mb-[2px] sm:text-lg md:text-xl">
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

                    <h5 className="text-xs md:text-sm  text-gray-500  my-[5px] flex flex-wrap items-center ">
                      <span className=" text-sm md:font-medium md:text-gray-800 text-black mr-1">
                        Added Toppings :
                      </span>
                      Tomato, Onion, Capscicum
                    </h5>

                    <div>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 my-2">
                        <span className="text-sm md:font-medium md:text-gray-800 text-black">
                          Size :
                        </span>

                        <select
                          className="border outline-none md:cursor-pointer"
                          onChange={(e) => setPizzaSize(e.target.value)}
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm md:font-medium md:text-gray-800 text-black flex items-center gap-2">
                          Quantity :
                          <input
                            type="number"
                            min="1"
                            max="100"
                            defaultValue={1}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="border outline-none text-xs md:text-sm text-gray-500 text-center md:cursor-pointer"
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

                <div className="flex items-center justify-between px-2 md:px-0 md:flex-col">
                  <span className="font-medium text-base min-w-max md:text-lg">
                    &#8377; 25000
                  </span>
                  <button className="text-red-600 text-xl md:hover:bg-white p-1 rounded-sm">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* cart items block end */}

          {/* order summary block start */}
          <div className=" md:w-1/2  md:sticky top-20  h-full">
            {/* NOTE: Before using position:sticky; there are few points to remember.
             1. You must add height css property to the element to make that element sticky.
             2. position: sticky won't work if ancestor element has one of the following values for the overflow property: hidden, scroll, or auto.
             3. You must specify at least one of top, left, bottom or right css property. */}

            <h3 className="text-base mb-1 font-medium">ORDER SUMMARY</h3>

            <div className="bg-red-200 py-2 px-3  border border-red-400 rounded-sm">
              <h4 className="flex justify-between text-base font-medium lg:text-[17px]">
                <span>Subtotal</span> <span> &#8377; 850.00 </span>
              </h4>

              <h4 className="flex justify-between text-base font-medium lg:text-[17px]">
                <span>Discount</span> <span> &#8377; 50.00 </span>
              </h4>

              <h4 className="flex justify-between text-base font-medium lg:text-[17px]">
                <span>Delivery Charge</span> <span> &#8377; 0.00 </span>
              </h4>

              <h4 className="flex justify-between text-lg font-bold lg:text-xl text-red-700">
                <span>Total</span> <span> &#8377; 800.00 </span>
              </h4>

              <hr className="border-t border-gray-500 border-dashed my-3" />

              <p className="text-sm text-gray-800 md:text-[15px]">
                The subtotal is the total price of your order,including duties
                and taxes before any applicable discount. It does not include
                delivery charges and transaction fees.
              </p>
            </div>

            <button className="bg-black/95 text-white w-full my-3 p-2 border border-black/95 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear md:font-medium">
              Checkout
            </button>
          </div>
          {/* order summary block end */}
        </div>
      ) : (
        <>
          {/* empty cart page start */}
          <div className="flex flex-col items-center justify-center gap-5 h-[calc(100vh-120px)] md:h-[calc(100vh-165px)]">
            <Image
              src="/emptyCart.png"
              alt="Empty cart"
              width={350}
              height={350}
              className="mb-2 w-10/12 min-[425px]:w-auto -mt-14"
            />

            <h1 className="text-base font-semibold sm:text-lg md:text-xl">
              Your cart is empty !
            </h1>

            <p className="text-sm  md:text-base md:font-medium text-gray-500  text-center ">
              Looks like you haven't added anything in your cart. Go ahead and
              explore top pizza categories.
            </p>

            <Link
              href="/"
              className="bg-red-600 text-white text-sm md:text-base md:font-medium md:cursor-pointer w-52 md:w-60 md:p-[10px]  p-2 mt-2 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear md:hover:bg-black/95  flex items-center justify-center gap-2 "
            >
              Continue Shopping
              <CgArrowRight size={24} />
            </Link>
          </div>
          {/* empty cart page end */}
        </>
      )}
    </Wrapper>
  );
}

export default Cart;
