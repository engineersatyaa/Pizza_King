import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";
import NavMenu from "./NavMenu";
import PhoneMenu from "./PhoneMenu";

function Header() {
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState("translate-y-0");
  const [lastValueOfScrollY, setLastValueOfScrollY] = useState(0);

  // Navbar control start

  const controlNavbar = () => {
    if (
      window.scrollY > 80 &&
      window.scrollY > lastValueOfScrollY &&
      !showPhoneMenu
    ) {
      setShowNavbar("translate-y-[-72px]");
    } else {
      setShowNavbar("translate-y-0");
    }

    setLastValueOfScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastValueOfScrollY]);

  // Navbar control end

  return (
    <header
      className={`w-full h-[50px] md:h-[70px] bg-red-600 flex items-center justify-between sticky top-0 z-10 transition-transform duration-300 ${showNavbar} `}
    >
      <Wrapper className="flex items-center gap-6 justify-between h-[50px] md:h-[70px]  relative">
        {/* Logo block start */}

        <h1 className="text-[22px] md:text-[35px] min-[321px]:text-[28px] text-white font-bold min-w-max">
          <Link
            href="/"
            className="flex"
            onClick={() => setShowPhoneMenu(false)}
          >
            Pizza King
          </Link>
        </h1>

        {/* Logo block end */}

        <NavMenu />

        <PhoneMenu
          showPhoneMenu={showPhoneMenu}
          setShowPhoneMenu={setShowPhoneMenu}
          showSubMenu={showSubMenu}
          setShowSubMenu={setShowSubMenu}
        />

        <div className="flex items-center justify-center gap-5 ">
          {/* Cart block start */}

          <div className="relative">
            <Link
              href="/cart/userId"
              className="flex"
              onClick={() => setShowPhoneMenu(false)}
            >
              <AiOutlineShoppingCart className="text-white w-[18px] h-[18px] md:w-7 md:h-7" />

              <span className="bg-white min-w-[18px]  md:min-w-[20px]  h-[18px] md:h-5 rounded-full absolute top-[-10px] right-[-9px] text-[9px] md:text-[11px] flex items-center justify-center">
                12
              </span>
            </Link>
          </div>

          {/* Cart block end */}

          {/* Profile pic block start */}

          <div className="w-8 h-8 ml-1 md:w-11 md:h-11 md:mr-[2px] rounded-full overflow-hidden">
            <Link
              href="/user_profile/userId"
              className="flex"
              onClick={() => setShowPhoneMenu(false)}
            >
              <Image
                src="/girldp.webp"
                alt=""
                width={150}
                height={150}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Profile pic block end */}

          {/* Hamburger block for phone start */}

          <div
            className="w-8 h-[26px] flex flex-col justify-between md:hidden"
            onClick={() => {
              setShowSubMenu(false);
              setShowPhoneMenu(!showPhoneMenu);
            }}
          >
            <span
              className={`bg-white w-full h-1 transition-all origin-right ${
                showPhoneMenu && "-rotate-45"
              }`}
            ></span>

            <span
              className={`bg-white w-full h-1 transition-all ${
                showPhoneMenu && "opacity-0"
              }`}
            ></span>

            <span
              className={`bg-white w-full h-1 transition-all origin-right ${
                showPhoneMenu && "rotate-45"
              }`}
            ></span>
          </div>

          {/* Hamburger block for phone end */}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
