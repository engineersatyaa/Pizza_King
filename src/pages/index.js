import Head from "next/head";
import HeroSlider from "@/components/HeroSlider";
import Wrapper from "@/components/Wrapper";
import PizzaCard from "@/components/PizzaCard";

function Home() {
  return (
    <>
      <Head>
        <title>Pizza King</title>
        <meta name="author" content="SATYA PAL SINGH" />
        <meta name="description" content="Pizza King is a food delivery app." />
        <meta name="keywords" content="Tomato Pizza, Paneer Pizza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pizza1.png" />
      </Head>
      <HeroSlider />
      <Wrapper className="text-center">
        <h1 className="text-[20px] font-bold min-[321px]:text-2xl md:text-[32px] md:mb-2">
          Welcome to Pizza King
        </h1>
        <p className="text-sm text-gray-600 md:text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          provident ipsum eos! Corrupti quaerat laboriosam perspiciatis facilis
          et soluta, vitae reprehenderit eos debitis possimus officiis corporis
          aperiam sequi delectus optio ex deserunt voluptate odio repellat
          recusandae cumque in veritatis maiores nostrum! Odit rem tenetur
          voluptas ipsum. Nulla voluptate minima velit.
        </p>
        <hr className="sm:mt-4 border mt-4 min-[426px]:border-2" />
      </Wrapper>
      <Wrapper className=" flex flex-wrap min-[1265px]:gap-4 gap-3 justify-center my-5  min-[426px]:my-7 ">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </Wrapper>
    </>
  );
}

export default Home;
