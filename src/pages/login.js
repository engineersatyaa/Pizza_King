import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { IoHome } from "react-icons/io5";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

          {/* form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      outline: none;
      font-size: 15px;
    } */}

          {/* Login Form block start */}

          <div className="border rounded-md border-white/10 w-[90%] p-3 sm:p-4  bg-white/10 shadow-[0px_0px_5px_8px_rgba(0,0,0,0.1)] text-black">
            <div className="bg-white/80 p-3 sm:p-4 rounded-md ">
              <form className="border flex flex-col gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Phone or Email"
                  className="border border-gray-400 rounded outline-none p-1 sm:p-2 text-[15px] min-h-[34px] "
                />

                <div className="flex items-center border border-gray-400 rounded overflow-hidden bg-white min-h-[34px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-full outline-none text-[15px] p-1 sm:p-2"
                  />

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 mx-1"
                  >
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>

                {false && (
                  <span className="text-center text-[15px] text-red-600">
                    Error Messages
                  </span>
                )}

                <button
                  type="button"
                  className="bg-black/95 text-white rounded sm:p-2 active:scale-95 transition-all duration-75 ease-linear flex items-center justify-center min-h-[34px] md:hover:bg-red-600 md:cursor-pointer"
                >
                  {false ? <ImSpinner6 className="animate-spin" /> : "Login"}
                </button>
              </form>

              <div className=" border flex flex-col gap-3 sm:gap-4 mt-3 sm:mt-4">
                <Link
                  href=""
                  className="text-center text-[15px] text-red-600 md:cursor-pointer"
                >
                  Forgotten Password ?
                </Link>

                <p className="text-center text-xs -mt-1">
                  By logging in or creating an account, you agree with our
                  <span className="text-red-600 mx-1">Terms & Conditions</span>
                  and
                  <span className="text-red-600 mx-1">Privacy Statement. </span>
                </p>

                <hr className="border-t border-t-black/20" />

                <Link
                  href="/register"
                  className="bg-red-600 text-white rounded sm:p-2 active:scale-95 transition-all duration-75 ease-linear flex items-center  justify-center min-h-[34px] md:hover:bg-black/95 md:cursor-pointer"
                >
                  Create New Account
                </Link>
              </div>
            </div>
          </div>

          {/* Login Form block end */}

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
