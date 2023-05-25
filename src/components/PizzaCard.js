import Image from "next/image";
import Link from "next/link";

function PizzaCard({ className }) {
  return (
    <Link
      href={`/pizza_details/xyz`}
      className={`group bg-white p-2 min-[426px]:shadow-lg flex flex-col items-center justify-center min-[963px]:w-[24%] sm:w-[30%] w-[47%] border border-gray-200 rounded md:hover:border-gray-400 ${
        className || ""
      } `}
    >
      <div>
        <Image
          src="/pizza1.png"
          width={250}
          height={250}
          alt="pizza"
          priority
          className="md:group-hover:rotate-180 md:transition-all"
        />
      </div>

      <div className="text-center w-full sm:py-2 sm:px-1">
        <h1 className="min-[965px]:text-xl  md:text-lg font-medium text-sm">
          BBQ Chicken Pizza
        </h1>

        <p className=" !leading-tight text-gray-500 min-[965px]:text-base md:text-sm md:mt-1 text-xs min-[426px]:flex hidden ">
          Lorem ipsum dolor sit amet consectetur doloribus totam ducimus id
          accusantium reprehenderit!
        </p>

        <div className="flex justify-between items-center mt-1 min-[965px]:text-lg md:text-base text-sm  ">
          <p>
            <span className="font-medium"> &#8377;400</span>
            <s className="sm:text-sm text-xs text-gray-500 ml-1"> &#8377;500</s>
          </p>
          <span className="text-green-600 ">10% off</span>
        </div>
      </div>
    </Link>
  );
}

export default PizzaCard;
