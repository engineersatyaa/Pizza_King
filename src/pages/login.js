import { CgArrowLeft } from "react-icons/cg";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Login() {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-3 md:gap-5 h-[calc(100vh-50px)] md:h-[calc(100vh-70px)]">
      <div className=" text-5xl sm:text-7xl md:text-9xl text-red-600 font-semibold font-sans  md:drop-shadow-[5px_5px_2px_rgba(0,0,0,0.3)]">
        Login Page
      </div>

      <h1 className="text-base font-semibold sm:text-lg md:text-xl">
        404 Error | Page Not Found
      </h1>

      <p className="text-sm  md:text-base md:font-medium text-gray-500 text-center">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>

      <Link
        href="/register"
        className="bg-red-600 text-white text-sm md:text-base md:font-medium md:cursor-pointer w-52 md:w-60 md:p-[10px]  p-2 mt-2 rounded-full active:scale-[0.95] transition-all duration-75 ease-linear md:hover:bg-black/95  flex items-center justify-center gap-2"
      >
        <CgArrowLeft size={24} />
        Go To Register
      </Link>
    </Wrapper>
  );
}
