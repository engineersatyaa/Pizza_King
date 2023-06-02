import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

function Login() {
  return (
    <div
      style={{ backgroundImage: "url('/slide1.jpg')" }}
      className="w-screen h-screen bg-cover bg-no-repeat bg-center relative"
    >
      <div className="absolute top-0 w-full h-full bg-black/[0.12] backdrop-blur-[5px] ">
        <Wrapper className="text-white h-full flex flex-col justify-between items-center">
          {/* Header block start */}

          <header className="w-full flex justify-between items-center mt-1">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold md:cursor-pointer"
            >
              Pizza King
            </Link>

            <Link
              href="/"
              title="Home Page"
              className="sm:border sm:border-white sm:p-1 sm:rounded sm:mt-1 md:hover:bg-black/30 md:cursor-pointer "
            >
              <IoHome className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
            </Link>
          </header>

          {/* Header block end */}

          {/* Form block start */}

          <div className="border w-1/2">
            <form></form>
          </div>

          {/* Form block end */}

          {/* Footer block start */}

          <footer className="text-xs mb-2">
            Copyright &#169; {new Date().getFullYear()} Pizza King&#8482;. All
            rights reserved.
          </footer>

          {/* Footer block end */}
        </Wrapper>
      </div>
    </div>
  );
}

export default Login;
