import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import PhoneMenu from "./PhoneMenu";

function Header() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState("translate-y-0");
  const [lastValueOfScrollY, setLastValueOfScrollY] = useState(0);

  const controlNavbar = () => {
    if (
      window.scrollY > 90 &&
      window.scrollY > lastValueOfScrollY &&
      !showPhoneMenu
    ) {
      setShowNavbar("translate-y-[-70px]");
    } else {
      setShowNavbar("translate-y-0");
    }

    setLastValueOfScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastValueOfScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[70px] bg-red-600 flex items-center justify-between sticky top-0 left-0 z-10 transition-transform duration-300 ${showNavbar} `}
    >
      <Wrapper className="flex items-center gap-6 justify-between h-[50px] md:h-[70px]  relative">
        <h1 className="text-[22px] md:text-[35px] min-[321px]:text-[28px] text-white font-bold min-w-max ">
          <Link href="/">Pizza King</Link>
        </h1>

        <NavMenu />

        {showPhoneMenu && <PhoneMenu setShowPhoneMenu={setShowPhoneMenu} />}

        <div className="flex items-center justify-center gap-5 ">
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart className="opacity-80 w-[18px] md:w-7 h-[18px] md:h-7" />
            <span className="bg-white min-w-[18px]  md:min-w-[20px]  h-[18px] md:h-5 rounded-full absolute top-[-10px] right-[-9px] text-[9px] md:text-[11px] flex items-center justify-center">
              12
            </span>
          </div>

          <div className="w-8 md:w-12 h-8 md:h-12 border border-red-950 rounded-full ">
            <img
              src="/girldp.webp"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="w-8 h-8 md:hidden flex items-center justify-center">
            {showPhoneMenu ? (
              <VscChromeClose
                className="w-8 h-8"
                onClick={() => setShowPhoneMenu(!showPhoneMenu)}
              />
            ) : (
              <RxHamburgerMenu
                className="w-8 h-8"
                onClick={() => setShowPhoneMenu(!showPhoneMenu)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
