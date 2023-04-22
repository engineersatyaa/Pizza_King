import Image from "next/image";
import Link from "next/link";


// sm:hover:scale-[1.01] sm:transition-all

function PizzaCard() {
  return (
    <Link href={`/`} className="group px-2 shadow-lg flex flex-col items-center justify-center md:w-[24%] border border-gray-200 rounded md:hover:border-gray-400">
      <div className="">
        <Image src="/pizza1.png" width={200} height={200} className="group-hover:rotate-180 transition-all" />
      </div>

      <div className="text-center sm:p-2">
        <h1 className="md:text-lg font-medium">Paneer Pizza</h1>

        <p className=" !leading-tight text-gray-500 md:text-[15px] ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloribus totam ducimus id accusantium reprehenderit!
        </p>

        <div className="flex justify-between items-center mt-1">
          <p>
            <span className="font-medium"> &#8377;400</span> <s className="text-sm text-gray-500 ml-1"> &#8377;500</s>
          </p>
          <span className="text-green-600 ">10% off</span>
        </div>
      </div>
    </Link>
  );
}

export default PizzaCard;
