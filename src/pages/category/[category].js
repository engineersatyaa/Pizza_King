import PizzaCard from "@/components/PizzaCard";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";

function Category() {
  const router = useRouter();
  // console.log(router.query);
  return (
    <Wrapper>
      <h1 className="text-center text-lg sm:text-[22px] md:text-2xl mt-4 sm:my-6 border-b md:border-b-2 pb-2 md:pb-3 font-bold uppercase">
        Category : <span className="text-red-600">Non-Vegitable Pizza</span>
      </h1>

      <div className="flex flex-wrap min-[1265px]:gap-4 gap-3 justify-center my-5 m min-[426px]:my-7 ">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </Wrapper>
  );
}

export default Category;
